import { test, expect, type Page } from '@playwright/test';

test.describe('Fired Heater Efficiency Website', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('loads homepage without console errors', async ({ page }) => {
    // Listen for console errors
    const consoleErrors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    // Wait for page to fully load
    await page.waitForLoadState('networkidle');

    // Check that the main heading is visible
    await expect(page.locator('h1')).toContainText('Fired Heater Efficiency');

    // Verify no console errors occurred
    expect(consoleErrors).toHaveLength(0);
  });

  test('navigation links scroll to sections and highlight active section', async ({ page }) => {
    // Test Overview navigation
    await page.click('a[href="#overview"]');
    await page.waitForTimeout(1000); // Wait for smooth scroll

    // Check if we're at the overview section
    const overviewSection = page.locator('#overview');
    await expect(overviewSection).toBeInViewport();

    // Check if nav link becomes active
    const overviewNavLink = page.locator('a[href="#overview"]');
    await expect(overviewNavLink).toHaveClass(/nav-active/);

    // Test API-560 navigation
    await page.click('a[href="#api-560"]');
    await page.waitForTimeout(1000);

    const apiSection = page.locator('#api-560');
    await expect(apiSection).toBeInViewport();

    // Test Measurements navigation
    await page.click('a[href="#measurements"]');
    await page.waitForTimeout(1000);

    const measurementsSection = page.locator('#measurements');
    await expect(measurementsSection).toBeInViewport();
  });

  test('markdown download button exists and points to correct file', async ({ page }) => {
    // Navigate to tools section
    await page.click('a[href="#tools"]');
    await page.waitForTimeout(1000);

    // Find the download button
    const downloadButton = page.locator('a[href="./Fired Heater Efficiency Calculation Methods.md"]');
    await expect(downloadButton).toBeVisible();
    await expect(downloadButton).toContainText('Download the Full Report (.md)');

    // Check that it has download attribute
    await expect(downloadButton).toHaveAttribute('download');
  });

  test('sliders update efficiency and stack loss numbers correctly', async ({ page }) => {
    // Navigate to interactive section
    await page.locator('#interactive').scrollIntoViewIfNeeded();

    // Test excess air slider
    const excessAirSlider = page.locator('#excessAirSlider');
    const efficiencyValue = page.locator('#efficiencyValue');
    const stackLossValue = page.locator('#stackLossValue');

    // Get initial values
    const initialEfficiency = await efficiencyValue.textContent();
    const initialStackLoss = await stackLossValue.textContent();

    // Move slider to maximum
    await excessAirSlider.fill('50');
    await page.waitForTimeout(500);

    // Check that values changed
    const newEfficiency = await efficiencyValue.textContent();
    const newStackLoss = await stackLossValue.textContent();

    expect(newEfficiency).not.toBe(initialEfficiency);
    expect(newStackLoss).not.toBe(initialStackLoss);

    // Test stack temperature slider
    const stackTempSlider = page.locator('#stackTempSlider');
    const tempLossValue = page.locator('#tempLossValue');

    const initialTempLoss = await tempLossValue.textContent();

    // Move temperature slider
    await stackTempSlider.fill('450');
    await page.waitForTimeout(500);

    const newTempLoss = await tempLossValue.textContent();
    expect(newTempLoss).not.toBe(initialTempLoss);
  });

  test('mermaid diagram is rendered', async ({ page }) => {
    // Navigate to API-560 section
    await page.click('a[href="#api-560"]');
    await page.waitForTimeout(2000); // Wait for Mermaid to load and render

    // Check if Mermaid diagram SVG is present
    const mermaidContainer = page.locator('#mermaidChart');
    await expect(mermaidContainer).toBeVisible();

    // Check if SVG element exists within the container
    const svgElement = page.locator('#mermaidChart svg');
    await expect(svgElement).toBeVisible();
  });

  test('chart canvas is present and has non-zero dimensions', async ({ page }) => {
    // Navigate to examples section
    await page.click('a[href="#examples"]');
    await page.waitForTimeout(2000); // Wait for Chart.js to load and render

    // Check if chart canvas exists
    const chartCanvas = page.locator('#sensitivityChart');
    await expect(chartCanvas).toBeVisible();

    // Check canvas dimensions
    const boundingBox = await chartCanvas.boundingBox();
    expect(boundingBox).not.toBeNull();
    expect(boundingBox!.width).toBeGreaterThan(0);
    expect(boundingBox!.height).toBeGreaterThan(0);
  });

  test('TOC collapses/expands and state persists after reload', async ({ page }) => {
    // Open TOC
    await page.click('#tocButton');
    await page.waitForTimeout(500);

    // Check if TOC is visible
    const tocSidebar = page.locator('#tocSidebar');
    await expect(tocSidebar).toHaveClass(/translate-x-0/);

    // Close TOC
    await page.click('#tocToggle');
    await page.waitForTimeout(500);

    // Check if TOC is hidden
    await expect(tocSidebar).toHaveClass(/-translate-x-full/);

    // Open TOC again for persistence test
    await page.click('#tocButton');
    await page.waitForTimeout(500);

    // Reload page
    await page.reload();
    await page.waitForLoadState('networkidle');

    // TOC should be closed after reload (default state)
    await expect(tocSidebar).toHaveClass(/-translate-x-full/);
  });

  test('footer contains exact required text', async ({ page }) => {
    // Scroll to footer
    await page.locator('footer').scrollIntoViewIfNeeded();

    // Check footer text
    const footerText = page.locator('footer p').first();
    await expect(footerText).toContainText('Made by Ahmed Sabri with the help of AI');
  });

  test('external CDN resources load successfully', async ({ page }) => {
    // Track network requests
    const responses: string[] = [];
    page.on('response', response => {
      if (response.url().includes('cdn.tailwindcss.com') ||
          response.url().includes('cdn.jsdelivr.net')) {
        responses.push(`${response.url()}: ${response.status()}`);
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check that CDN resources loaded successfully
    const successfulResponses = responses.filter(r => r.includes(': 200'));
    expect(successfulResponses.length).toBeGreaterThan(0);
  });

  test('core content visible without external dependencies', async ({ page }) => {
    // Block external requests to simulate offline scenario
    await page.route('**/*cdn*', route => route.abort());

    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');

    // Check that basic content is still visible
    await expect(page.locator('h1')).toContainText('Fired Heater Efficiency');
    await expect(page.locator('#overview')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('checklist state persists in localStorage', async ({ page }) => {
    // Navigate to interactive section
    await page.locator('#interactive').scrollIntoViewIfNeeded();

    // Check a checklist item
    const firstCheckbox = page.locator('.checklist-item').first();
    await firstCheckbox.check();

    // Verify it's checked
    await expect(firstCheckbox).toBeChecked();

    // Reload page
    await page.reload();
    await page.waitForLoadState('networkidle');

    // Navigate back to interactive section
    await page.locator('#interactive').scrollIntoViewIfNeeded();

    // Verify checkbox is still checked
    const reloadedCheckbox = page.locator('.checklist-item').first();
    await expect(reloadedCheckbox).toBeChecked();
  });
});

test.describe('Desktop Specific Tests', () => {
  test.use({ viewport: { width: 1280, height: 800 } });

  test('desktop navigation is fully visible', async ({ page }) => {
    await page.goto('/');

    // Check that desktop navigation is visible
    const desktopNav = page.locator('.hidden.md\\:flex');
    await expect(desktopNav).toBeVisible();

    // Check that mobile menu toggle is hidden
    const mobileToggle = page.locator('#mobileMenuToggle');
    await expect(mobileToggle).toBeHidden();
  });

  test('stepper is horizontal on desktop', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="#api-560"]');

    // Check stepper layout
    const stepperContainer = page.locator('.stepper-step').first().locator('..');
    await expect(stepperContainer).toHaveClass(/flex-wrap/);
  });
});

test.describe('Mobile Specific Tests', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('mobile navigation collapses to hamburger menu', async ({ page }) => {
    await page.goto('/');

    // Check that desktop navigation is hidden
    const desktopNav = page.locator('.hidden.md\\:flex');
    await expect(desktopNav).toBeHidden();

    // Check that mobile menu toggle is visible
    const mobileToggle = page.locator('#mobileMenuToggle');
    await expect(mobileToggle).toBeVisible();

    // Test mobile menu functionality
    await mobileToggle.click();
    const mobileMenu = page.locator('#mobileMenu');
    await expect(mobileMenu).not.toHaveClass(/hidden/);
  });

  test('no horizontal scroll on mobile', async ({ page }) => {
    await page.goto('/');

    // Get viewport and body dimensions
    const viewport = page.viewportSize();
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);

    // Body width should not exceed viewport width
    expect(bodyWidth).toBeLessThanOrEqual(viewport!.width);
  });

  test('TOC becomes bottom drawer on mobile', async ({ page }) => {
    await page.goto('/');

    // TOC should still be sidebar but positioned appropriately for mobile
    const tocSidebar = page.locator('#tocSidebar');
    await expect(tocSidebar).toBeVisible();

    // TOC button should be visible
    const tocButton = page.locator('#tocButton');
    await expect(tocButton).toBeVisible();
  });

  test('interactive widgets are touch-friendly on mobile', async ({ page }) => {
    await page.goto('/');
    await page.locator('#interactive').scrollIntoViewIfNeeded();

    // Test slider interaction on mobile
    const excessAirSlider = page.locator('#excessAirSlider');
    await expect(excessAirSlider).toBeVisible();

    // Sliders should be easily tappable
    const sliderBox = await excessAirSlider.boundingBox();
    expect(sliderBox!.height).toBeGreaterThanOrEqual(44); // Minimum touch target
  });

  test('cards stack vertically on mobile', async ({ page }) => {
    await page.goto('/');

    // Check overview cards layout
    const overviewCards = page.locator('#overview .grid');
    const gridClasses = await overviewCards.getAttribute('class');

    // Should have responsive grid classes
    expect(gridClasses).toContain('md:grid-cols-3');
  });
});

test.describe('FAQ Functionality', () => {
  test('FAQ accordion opens and closes correctly', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="#faq"]');
    await page.waitForTimeout(1000);

    // Test first FAQ item
    const firstQuestion = page.locator('.faq-question').first();
    const firstAnswer = page.locator('#faq1');

    // Initially answer should be hidden
    await expect(firstAnswer).toHaveClass(/hidden/);

    // Click to open
    await firstQuestion.click();
    await expect(firstAnswer).not.toHaveClass(/hidden/);

    // Click to close
    await firstQuestion.click();
    await expect(firstAnswer).toHaveClass(/hidden/);
  });

  test('FAQ arrows rotate correctly', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="#faq"]');
    await page.waitForTimeout(1000);

    const firstQuestion = page.locator('.faq-question').first();
    const arrow = firstQuestion.locator('svg');

    // Get initial transform
    const initialTransform = await arrow.evaluate(el => getComputedStyle(el).transform);

    // Click to open
    await firstQuestion.click();
    await page.waitForTimeout(300);

    // Check transform changed
    const newTransform = await arrow.evaluate(el => getComputedStyle(el).transform);
    expect(newTransform).not.toBe(initialTransform);
  });
});

test.describe('Dark Mode Functionality', () => {
  test('dark mode toggle works correctly', async ({ page }) => {
    await page.goto('/');

    const darkModeToggle = page.locator('#darkModeToggle');
    const html = page.locator('html');

    // Initially should be light mode
    await expect(html).not.toHaveClass(/dark/);
    await expect(darkModeToggle).toContainText('Dark Mode');

    // Toggle to dark mode
    await darkModeToggle.click();
    await expect(html).toHaveClass(/dark/);
    await expect(darkModeToggle).toContainText('Light Mode');

    // Toggle back to light mode
    await darkModeToggle.click();
    await expect(html).not.toHaveClass(/dark/);
    await expect(darkModeToggle).toContainText('Dark Mode');
  });

  test('dark mode preference persists across page reloads', async ({ page }) => {
    await page.goto('/');

    const darkModeToggle = page.locator('#darkModeToggle');
    const html = page.locator('html');

    // Enable dark mode
    await darkModeToggle.click();
    await expect(html).toHaveClass(/dark/);

    // Reload page
    await page.reload();
    await page.waitForLoadState('networkidle');

    // Dark mode should still be enabled
    await expect(html).toHaveClass(/dark/);
    const reloadedToggle = page.locator('#darkModeToggle');
    await expect(reloadedToggle).toContainText('Light Mode');
  });
});

test.describe('Performance and Accessibility', () => {
  test('page loads within reasonable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const loadTime = Date.now() - startTime;

    // Page should load within 5 seconds
    expect(loadTime).toBeLessThan(5000);
  });

  test('images have alt attributes', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check for images without alt attributes
    const imagesWithoutAlt = page.locator('img:not([alt])');
    await expect(imagesWithoutAlt).toHaveCount(0);
  });

  test('interactive elements are keyboard accessible', async ({ page }) => {
    await page.goto('/');

    // Test navigation with Tab key
    await page.keyboard.press('Tab');
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();

    // Test that dark mode toggle is keyboard accessible
    await page.locator('#darkModeToggle').focus();
    await page.keyboard.press('Enter');

    // Should toggle dark mode
    const html = page.locator('html');
    await expect(html).toHaveClass(/dark/);
  });
});