# Fired Heater Efficiency — API-560 Heat Loss Method, Measurement & Best Practices

A comprehensive single-page website that simplifies, sequences, and visualizes the complete content of fired heater efficiency calculation methods according to API-560 standards.

## 🌐 Live Website

**GitHub Pages URL:** [https://amsamms.github.io/fired_heater](https://amsamms.github.io/fired_heater)

## 📖 What This Site Covers

This website transforms complex technical documentation into an accessible, interactive learning experience covering:

- **API-560 Heat Loss Method**: Step-by-step implementation of the industry standard
- **Measurement Best Practices**: Instrumentation, calibration, and sampling techniques
- **Complex Configurations**: Multi-cell heaters and common stack scenarios
- **Interactive Tools**: Real-time calculators for excess air and stack temperature impact
- **Software Comparison**: Comprehensive analysis of available calculation tools
- **Case Studies**: Worked examples and sensitivity analysis

## 🚀 Features

### Interactive Elements
- **Excess Air vs. Efficiency Calculator**: Live slider showing impact on performance
- **Stack Temperature Impact Tool**: Real-time loss calculations
- **Efficiency Test Checklist**: Persistent localStorage-based tracking
- **Dark/Light Mode Toggle**: User preference with persistence

### Technical Content
- **5-Step API-560 Process**: Interactive stepper with tooltips
- **Mermaid Workflow Diagram**: Visual representation of Annex G methodology
- **Chart.js Sensitivity Analysis**: Temperature vs. efficiency visualization
- **Comprehensive Data Tables**: Required inputs and combustion worksheets
- **Software Comparison Matrix**: Detailed tool evaluation

### Mobile-First Design
- **Responsive Layout**: 360px+ support with no horizontal scroll
- **Touch-Friendly Controls**: Optimized sliders and interactive elements
- **Collapsible Navigation**: Hamburger menu for mobile devices
- **Bottom Drawer TOC**: Mobile-optimized table of contents

## 📁 Project Structure

```
fired_heater/
├── index.html                           # Main single-page application
├── Fired Heater Efficiency Calculation Methods.md  # Original technical report
├── README.md                            # This file
├── .github/workflows/pages.yml          # GitHub Pages deployment
├── playwright.config.ts                 # Playwright test configuration
├── tests/
│   └── e2e.spec.ts                     # Comprehensive E2E tests
└── package.json                        # Node.js dependencies (optional)
```

## 🧪 Testing

This project includes comprehensive end-to-end testing with Playwright covering:

### Core Functionality Tests
- ✅ Page loads without console errors
- ✅ Navigation links scroll to sections with active highlighting
- ✅ Markdown download button functionality
- ✅ Interactive slider updates and calculations
- ✅ Mermaid diagram rendering
- ✅ Chart.js visualization with non-zero dimensions

### Responsive Design Tests
- ✅ Desktop navigation visibility (1280x800)
- ✅ Mobile hamburger menu functionality (390x844)
- ✅ No horizontal scroll on mobile devices
- ✅ Touch-friendly interactive elements

### Accessibility & UX Tests
- ✅ Table of contents expand/collapse with state persistence
- ✅ FAQ accordion functionality with arrow animations
- ✅ Dark mode toggle with localStorage persistence
- ✅ Checklist state preservation across page reloads
- ✅ Keyboard accessibility for interactive elements

### Performance Tests
- ✅ External CDN resource loading (200 status codes)
- ✅ Core content visibility without external dependencies
- ✅ Page load time under 5 seconds
- ✅ Footer contains exact required attribution text

### Running Tests Locally

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run all tests
npx playwright test

# Run tests with UI mode
npx playwright test --ui

# Run specific test suite
npx playwright test --grep "Desktop Specific Tests"

# Run mobile tests only
npx playwright test --project=mobile

# Generate test report
npx playwright show-report
```

## 🔧 Local Development

### Prerequisites
- Node.js 18+ (for testing only)
- Modern web browser
- Basic HTTP server

### Quick Start

1. **Clone the repository:**
   ```bash
   git clone https://github.com/amsamms/fired_heater.git
   cd fired_heater
   ```

2. **Serve locally:**
   ```bash
   # Using Python
   python -m http.server 3000

   # Using Node.js
   npx serve . -l 3000

   # Using PHP
   php -S localhost:3000
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000`

### Development Notes

- **No Build Process**: The site is a single HTML file with inline CSS/JS
- **CDN Dependencies**: TailwindCSS, Chart.js, and Mermaid loaded via CDN
- **Progressive Enhancement**: Core content visible even if CDN resources fail
- **Local Storage**: Dark mode and checklist preferences persist across sessions

## 📊 Technical Specifications

### Performance Targets (Lighthouse)
- **Performance**: ≥ 90
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 95
- **SEO**: ≥ 90

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Mobile Support
- Minimum width: 360px
- Touch targets: ≥ 44px
- Responsive breakpoints: sm(640px), md(768px), lg(1024px), xl(1280px)

## 🔄 How to Update Content

### Updating the Technical Report
1. Replace `Fired Heater Efficiency Calculation Methods.md` with new version
2. Update download link if filename changes
3. Modify content sections in `index.html` as needed

### Adding New Interactive Features
1. Add HTML structure within appropriate section
2. Implement JavaScript functionality in the `<script defer>` section
3. Add corresponding Playwright tests in `tests/e2e.spec.ts`
4. Test across desktop and mobile viewports

### Modifying Calculations
1. Update slider calculation functions in JavaScript
2. Ensure proper input validation and error handling
3. Add tests for new calculation logic
4. Update tooltips and help text as needed

## 🚀 Deployment

### Automatic Deployment (GitHub Actions)
The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via the `.github/workflows/pages.yml` workflow.

### Manual Deployment
1. **Enable GitHub Pages:**
   - Repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)

2. **Trigger Deployment:**
   ```bash
   git add .
   git commit -m "Update site content"
   git push origin main
   ```

3. **Verify Deployment:**
   Check Actions tab for deployment status and visit the Pages URL.

## 📸 Screenshots

### Hero Section
![Hero Section](https://via.placeholder.com/800x400/2563eb/ffffff?text=Hero+Section+Screenshot)

*The hero section featuring the main title, tagline, and dark mode toggle*

### Interactive Tools
![Interactive Tools](https://via.placeholder.com/800x400/10b981/ffffff?text=Interactive+Tools+Screenshot)

*Real-time calculators for excess air vs. efficiency and stack temperature impact*

### API-560 Workflow
![API-560 Workflow](https://via.placeholder.com/800x400/f59e0b/ffffff?text=Mermaid+Workflow+Diagram)

*Interactive 5-step process with Mermaid diagram visualization*

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Made by Ahmed Sabri with the help of AI**

- GitHub: [@amsamms](https://github.com/amsamms)
- Email: ahmedsabri85@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/amsamms/fired_heater/issues).

### Development Guidelines
1. Maintain single-file architecture (no build process)
2. Ensure mobile-first responsive design
3. Add comprehensive Playwright tests for new features
4. Follow existing code style and conventions
5. Update documentation for significant changes

## 📚 References

The technical content is based on:
- API 560: Fired Heaters for General Refinery Service
- Industry best practices for combustion analysis
- Modern refinery efficiency optimization techniques
- Advanced process control methodologies

---

**Note**: This website is for educational purposes and provides guidance on fired heater efficiency calculations. Always consult current API standards and qualified engineers for official calculations and design work.