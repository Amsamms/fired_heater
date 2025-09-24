(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        "en": {
            "heroTitle": "Fired Heater Efficiency",
            "heroSubtitle": "API-560 Heat Loss Method, Measurement & Best Practices",
            "heroTagline": "Master the science of thermal efficiency optimization in industrial fired heaters",
            "darkModeToggle": "🌙 Dark Mode",
            "languageToggle": "🌐 العربية",
            "navOverview": "Overview",
            "navApi560": "API-560 Method",
            "navMeasurements": "Measurements",
            "navConfigurations": "Complex Configurations",
            "navExamples": "Examples",
            "navTools": "Tools & Downloads",
            "navFaq": "FAQ",
            "tocTitle": "Table of Contents",
            "tocToggle": "Close table of contents",
            "tocOpen": "Open table of contents",
            "overviewTitle": "What, Why, and How of Fired Heater Efficiency",
            "overviewCard1Title": "What is Efficiency?",
            "overviewCard1Text": "Fired heater efficiency measures how effectively fuel energy is converted to useful process heat. Three key metrics: fuel efficiency (commercial), thermal efficiency (holistic), and combustion efficiency (burner performance).",
            "overviewCard2Title": "Why It Matters",
            "overviewCard2Text": "Fired heaters are the largest energy consumers in refineries. A 1% efficiency improvement on a large heater can save millions annually while reducing emissions and enhancing safety.",
            "overviewCard3Title": "How to Optimize",
            "overviewCard3Text": "Through precise measurement using API-560 standards, minimizing stack losses, reducing excess air, and implementing advanced control systems for real-time optimization.",
            "apiTitle": "API-560 in 5 Steps",
            "apiStep1": "Collect operational data: temperatures, oxygen levels, fuel composition, and humidity under steady-state conditions",
            "apiStep2": "Complete combustion worksheet using fuel composition to calculate stoichiometric parameters and heat release",
            "apiStep3": "Calculate excess air from oxygen measurements and determine all sensible heat credits from preheated inputs",
            "apiStep4": "Quantify heat losses: stack loss (largest), radiation loss, and incomplete combustion losses",
            "apiStep5": "Apply final efficiency formulas: thermal efficiency and fuel efficiency calculations based on energy balance",
            "keyLossesTitle": "Key Energy Losses",
            "keyLossesCard1Title": "Stack Loss (60-85%)",
            "keyLossesCard1Text": "Heat carried away by hot flue gases. Controlled by reducing stack temperature and minimizing excess air.",
            "keyLossesCard2Title": "Setting Loss (1.5-2.5%)",
            "keyLossesCard2Text": "Heat lost through external surfaces via radiation and convection. Indicates refractory condition.",
            "keyLossesCard3Title": "Incomplete Combustion (~0%)",
            "keyLossesCard3Text": "Energy lost due to unburned fuel (CO, hydrocarbons). Should be negligible in well-operated heaters.",
            "workflowTitle": "Annex G Workflow",
            "interactiveTitle": "Interactive Efficiency Tools",
            "excessAirCardTitle": "Excess Air vs. Efficiency",
            "excessAirLabel": "Excess Air",
            "estimatedEfficiency": "Estimated Efficiency:",
            "stackLossLabel": "Stack Loss",
            "stackTempCardTitle": "Stack Temperature Impact",
            "stackTempLabel": "Stack Temperature",
            "temperatureLoss": "Temperature Loss:",
            "optimalRange": "Optimal range: 200-320°C",
            "checklistTitle": "Efficiency Test Checklist",
            "checklistItem1": "Achieve steady-state operation (2+ hours)",
            "checklistItem2": "Verify instrument calibration",
            "checklistItem3": "Obtain representative fuel analysis",
            "checklistItem4": "Verify flue gas probe location",
            "checklistItem5": "Check for air leaks/seal openings",
            "checklistItem6": "Record ambient conditions",
            "checklistItem7": "Use temperature measurement grid",
            "checklistItem8": "Document all measurements",
            "measurementsTitle": "Instrumentation and Measurement",
            "inputsTitle": "Required Input Parameters",
            "parameterColumn": "Parameter",
            "symbolColumn": "Symbol",
            "unitsColumn": "Units",
            "methodColumn": "Measurement Method",
            "ambientAir": "Ambient Air Temperature",
            "ambientMethod": "Calibrated thermometer, shielded from radiation",
            "relativeHumidity": "Relative Humidity",
            "humidityMethod": "Sling psychrometer or electronic sensor",
            "flueExitTemp": "Flue Gas Exit Temperature",
            "flueExitMethod": "Multi-point traverse or thermocouple grid",
            "flueGasOxygen": "Flue Gas Oxygen",
            "flueGasMethod": "Zirconia oxide or electrochemical analyzer",
            "fuelComposition": "Fuel Composition",
            "fuelMethod": "Gas chromatograph analysis",
            "lowerHeatingValue": "Lower Heating Value",
            "lhvMethod": "Calculated from composition or calorimetry",
            "bestPracticesTitle": "✅ Best Practices",
            "bestPractice1": "• Place probes downstream of final heat transfer surface",
            "bestPractice2": "• Sample in central third of duct cross-section",
            "bestPractice3": "• Use EPA Method 1 for large duct traverses",
            "bestPractice4": "• Co-locate O₂ and temperature sensors",
            "bestPractice5": "• Calibrate instruments before each test",
            "bestPractice6": "• Seal all test ports during measurement",
            "commonErrorsTitle": "❌ Common Errors",
            "commonError1": "• Sampling upstream of air leaks (tramp air)",
            "commonError2": "• Single-point measurement in stratified flow",
            "commonError3": "• Uncalibrated or drifting instruments",
            "commonError4": "• Non-representative fuel samples",
            "commonError5": "• Ignoring humidity in air calculations",
            "commonError6": "• Operating during transient conditions",
            "configTitle": "Complex Heater Configurations",
            "multiCellTitle": "Multi-Cell with Common Convection",
            "multiCellText": "Multiple radiant cells sharing a common convection section. Overall efficiency calculated from single stack measurement, but cell-specific monitoring required for control.",
            "keyChallengeLabel": "Key Challenge:",
            "keyChallengeText": "Individual cell performance masked in overall measurement",
            "independentTitle": "Independent Heaters, Common Stack",
            "independentText": "Independent heaters with separate process services sharing a common stack. Each heater requires individual flue gas measurement for meaningful performance monitoring.",
            "keyRequirementLabel": "Key Requirement:",
            "keyRequirementText": "Individual O₂ and temperature measurement before gas streams combine",
            "measurementStrategyTitle": "⚠️ Measurement Strategy",
            "measurementStrategyText": "For complex configurations, the \"black box\" API-560 approach is insufficient for diagnostics and control. Use process simulators (Aspen HYSYS) or CFD (OpenFOAM) for detailed analysis of internal behavior and optimization opportunities.",
            "examplesTitle": "Example Calculations & Sensitivity Analysis",
            "combustionTitle": "API-560 Combustion Worksheet (Sample)",
            "componentColumn": "Component",
            "volColumn": "Vol %",
            "molColumn": "Mol. Wt.",
            "massFractionColumn": "Mass Fraction",
            "lhvColumn": "LHV (kJ/kg)",
            "lhvContributionColumn": "LHV Contrib.",
            "stoichColumn": "Stoich. Air",
            "chartTitle": "Sensitivity Analysis: Stack Temperature vs. Efficiency",
            "chartDescription": "This chart shows how efficiency decreases with increasing stack temperature. A 50°C increase from 300°C to 350°C typically reduces efficiency by 2-3 percentage points.",
            "toolsTitle": "Tools & Downloads",
            "downloadReport": "📄 Download the Full Report (.md)",
            "excelTitle": "Excel Template",
            "excelDescription": "API-560 Annex G calculation spreadsheet with built-in formulas and validation.",
            "excelButton": "Download",
            "pythonTitle": "Python Library",
            "pythonDescription": "Open-source library for automated efficiency calculations and sensitivity analysis.",
            "pythonButton": "GitHub",
            "mobileTitle": "Mobile Calculator",
            "mobileDescription": "Quick efficiency estimates and excess air calculations for field use.",
            "mobileButton": "App Store",
            "softwareTitle": "Software Comparison Matrix",
            "softwareColumnTool": "Tool",
            "softwareColumnCost": "Cost",
            "softwareColumnExpertise": "Expertise",
            "softwareColumnAccuracy": "Accuracy",
            "softwareColumnBestFor": "Best For",
            "softwareExcel": "Excel Spreadsheet",
            "costLow": "Low",
            "expertiseMedium": "Medium",
            "accuracyHigh": "High",
            "softwareExcelBest": "API-560 calculations, custom reporting",
            "softwareHeaterSim": "HeaterSIM",
            "costHigh": "High",
            "expertiseHigh": "High",
            "accuracyVeryHigh": "Very High",
            "softwareHeaterSimBest": "Detailed design, thermal modeling",
            "softwareAspen": "Aspen HYSYS",
            "costVeryHigh": "Very High",
            "softwareAspenBest": "Plant-wide simulation, integration",
            "softwarePython": "Python/MATLAB",
            "softwarePythonBest": "Automation, sensitivity analysis",
            "softwareOnline": "Online Calculators",
            "costFree": "Free",
            "expertiseLow": "Low",
            "accuracyLow": "Low",
            "softwareOnlineBest": "Quick estimates, education",
            "faqTitle": "Frequently Asked Questions",
            "faqQ1": "Why use LHV instead of HHV for fired heater efficiency?",
            "faqA1": "API-560 mandates LHV because fired heater stack temperatures (300-450°C) are well above water's dew point. The water vapor from combustion never condenses, so its latent heat is never recovered. LHV provides a realistic measure of usable energy, while HHV assumes latent heat recovery that doesn't occur in practice.",
            "faqQ2": "What's the biggest source of efficiency loss in fired heaters?",
            "faqA2": "Stack loss is by far the largest efficiency loss, typically 60-85% of total losses. It's controlled by two main factors: stack temperature (lower is better) and excess air (minimize while maintaining complete combustion). A 50°C reduction in stack temperature can improve efficiency by 2-3 percentage points.",
            "faqQ3": "How accurate do flue gas measurements need to be?",
            "faqA3": "Very accurate. A 5°C error in stack temperature measurement can cause a 0.5% error in calculated efficiency. Oxygen measurements should be accurate to ±0.1% for meaningful results. This is why proper calibration, representative sampling locations, and accounting for stratification in large ducts are critical.",
            "faqQ4": "Can I use API-560 for multi-cell heaters?",
            "faqA4": "Yes, for overall efficiency. Treat the entire system as one unit with aggregated fuel inputs and a single measurement at the common stack. However, this provides no insight into individual cell performance. For control and diagnostics, each cell needs its own measurements before gas streams combine.",
            "faqQ5": "What's the difference between thermal and fuel efficiency?",
            "faqA5": "Fuel efficiency measures useful heat absorbed vs. fuel heat input only. Thermal efficiency includes all heat inputs (fuel + preheated air + heated fuel). For economic analysis, fuel efficiency is more relevant as it directly relates to fuel costs. Thermal efficiency better represents overall system performance when air preheaters are installed.",
            "footerCredit": "Made by Ahmed Sabri with the help of AI",
            "footerDescription": "This site provides educational content on fired heater efficiency calculations using API-560 standards.",
            "lightModeToggle": "☀️ Light Mode",
            "darkModeToggleLabel": "Toggle dark mode",
            "languageToggleLabel": "Switch language",
            "pageTitle": "Fired Heater Efficiency — API-560 Heat Loss Method, Measurement & Best Practices",
            "chartDataset": "Predicted Efficiency",
            "chartXAxis": "Stack Temperature (°C)",
            "chartYAxis": "Efficiency (%)",
            "chartTooltip": "Efficiency",
            "toastLanguage": "Content updated in English",
            "toastDarkModeOn": "Dark mode enabled",
            "toastDarkModeOff": "Light mode enabled",
            "checklistComplete": "Checklist completed — great job!",
            "templateAlert": "Excel template download will be available soon.",
            "libraryAlert": "Python library repository is coming soon.",
            "mobileAlert": "Mobile calculator app is under development.",
            "stepModalTitle": "API-560 Step",
            "stepModalDescription": "Step description will appear here"
        },
        "ar": {
            "heroTitle": "كفاءة الأفران المشتعلة",
            "heroSubtitle": "طريقة API-560 لخسائر الحرارة، القياس وأفضل الممارسات",
            "heroTagline": "أتقن علم تحسين الكفاءة الحرارية في الأفران الصناعية المشتعلة",
            "darkModeToggle": "🌙 الوضع الليلي",
            "languageToggle": "🌐 English",
            "navOverview": "نظرة عامة",
            "navApi560": "طريقة API-560",
            "navMeasurements": "القياسات",
            "navConfigurations": "التكوينات المعقدة",
            "navExamples": "أمثلة",
            "navTools": "أدوات وملفات",
            "navFaq": "الأسئلة الشائعة",
            "tocTitle": "جدول المحتويات",
            "tocToggle": "إغلاق جدول المحتويات",
            "tocOpen": "فتح جدول المحتويات",
            "overviewTitle": "ما هي كفاءة الفرن ولماذا تهم وكيف نحسنها",
            "overviewCard1Title": "ما هي الكفاءة؟",
            "overviewCard1Text": "تقيس كفاءة الفرن المشتعل مدى تحويل طاقة الوقود إلى حرارة عملية مفيدة. المقاييس الثلاثة الأساسية: الكفاءة الوقودية (تجارية)، الكفاءة الحرارية (شاملة)، وكفاءة الاحتراق (أداء الحارق).",
            "overviewCard2Title": "لماذا هي مهمة",
            "overviewCard2Text": "تُعد الأفران المشتعلة أكبر مستهلك للطاقة في المصافي. تحسين الكفاءة بنسبة 1% في فرن كبير يوفر ملايين سنويًا ويقلل الانبعاثات ويعزز السلامة.",
            "overviewCard3Title": "كيف نحسن الأداء",
            "overviewCard3Text": "من خلال القياس الدقيق وفق معايير API-560، وتقليل خسائر المدخنة، وخفض الهواء الزائد، وتطبيق أنظمة تحكم متقدمة للتحسين الفوري.",
            "apiTitle": "API-560 في 5 خطوات",
            "apiStep1": "جمع البيانات التشغيلية: درجات الحرارة، مستويات الأكسجين، تركيب الوقود، والرطوبة تحت ظروف مستقرة.",
            "apiStep2": "إكمال ورقة الاحتراق باستخدام تركيب الوقود لحساب المعاملات الستوكيومترية ومعدل تحرير الحرارة.",
            "apiStep3": "حساب الهواء الزائد من قياسات الأكسجين وتحديد جميع الاعتمادات الحرارية من المدخلات المسخنة.",
            "apiStep4": "تقدير الخسائر الحرارية: خسارة المدخنة (الأكبر)، خسائر الإشعاع، وخسائر الاحتراق غير الكامل.",
            "apiStep5": "تطبيق معادلات الكفاءة النهائية: الكفاءة الحرارية وكفاءة الوقود بناءً على ميزانية الطاقة.",
            "keyLossesTitle": "الخسائر الحرارية الرئيسية",
            "keyLossesCard1Title": "خسارة المدخنة (60-85%)",
            "keyLossesCard1Text": "حرارة تحملها غازات المداخن الساخنة. تُضبط بخفض درجة حرارة المدخنة وتقليل الهواء الزائد.",
            "keyLossesCard2Title": "خسارة الهيكل (1.5-2.5%)",
            "keyLossesCard2Text": "حرارة مفقودة عبر الأسطح الخارجية بالإشعاع والحمل. تشير إلى حالة المواد الحرارية.",
            "keyLossesCard3Title": "الاحتراق غير الكامل (~0%)",
            "keyLossesCard3Text": "طاقة مهدرة بسبب الوقود غير المحترق (أول أكسيد الكربون، الهيدروكربونات). يجب أن تكون مهملة في الأفران السليمة.",
            "workflowTitle": "مخطط سير العمل للملحق G",
            "interactiveTitle": "أدوات تفاعلية للكفاءة",
            "excessAirCardTitle": "الهواء الزائد مقابل الكفاءة",
            "excessAirLabel": "الهواء الزائد",
            "estimatedEfficiency": "الكفاءة المقدرة:",
            "stackLossLabel": "خسارة المدخنة",
            "stackTempCardTitle": "تأثير درجة حرارة المدخنة",
            "stackTempLabel": "درجة حرارة المدخنة",
            "temperatureLoss": "الخسارة الحرارية:",
            "optimalRange": "النطاق المثالي: 200-320°م",
            "checklistTitle": "قائمة فحص اختبار الكفاءة",
            "checklistItem1": "تحقيق تشغيل مستقر (أكثر من ساعتين)",
            "checklistItem2": "التحقق من معايرة الأجهزة",
            "checklistItem3": "الحصول على تحليل وقود ممثل",
            "checklistItem4": "تأكيد موقع مسبار غازات المداخن",
            "checklistItem5": "فحص تسربات الهواء أو الفتحات",
            "checklistItem6": "تسجيل الظروف المحيطة",
            "checklistItem7": "استخدام شبكة قياس درجات الحرارة",
            "checklistItem8": "توثيق جميع القراءات",
            "measurementsTitle": "الأجهزة والقياس",
            "inputsTitle": "معلمات الإدخال المطلوبة",
            "parameterColumn": "المتغير",
            "symbolColumn": "الرمز",
            "unitsColumn": "الوحدات",
            "methodColumn": "طريقة القياس",
            "ambientAir": "درجة حرارة الهواء المحيط",
            "ambientMethod": "ميزان حراري معاير ومحمي من الإشعاع",
            "relativeHumidity": "الرطوبة النسبية",
            "humidityMethod": "سيكرومتر دوار أو حساس إلكتروني",
            "flueExitTemp": "درجة حرارة غازات المداخن عند الخروج",
            "flueExitMethod": "مسح متعدد النقاط أو شبكة ترموقياسات",
            "flueGasOxygen": "أكسجين غازات المداخن",
            "flueGasMethod": "محلل أكسيد الزركونيوم أو محلل كهروكيميائي",
            "fuelComposition": "تركيب الوقود",
            "fuelMethod": "تحليل كروماتوغرافي للغاز",
            "lowerHeatingValue": "القيمة الحرارية الدنيا",
            "lhvMethod": "محسوبة من التركيب أو بواسطة المسعر",
            "bestPracticesTitle": "✅ أفضل الممارسات",
            "bestPractice1": "• وضع المجسات بعد آخر سطح لنقل الحرارة",
            "bestPractice2": "• أخذ عينات من الثلث الأوسط لمقطع القناة",
            "bestPractice3": "• استخدام طريقة وكالة حماية البيئة رقم 1 للمقاطع الكبيرة",
            "bestPractice4": "• توحيد مواقع مجسات الأكسجين ودرجة الحرارة",
            "bestPractice5": "• معايرة الأجهزة قبل كل اختبار",
            "bestPractice6": "• إحكام جميع فتحات الاختبار أثناء القياس",
            "commonErrorsTitle": "❌ أخطاء شائعة",
            "commonError1": "• أخذ عينات قبل نقاط تسرب الهواء (هواء دخيل)",
            "commonError2": "• قياس نقطة واحدة في تدفق متدرج",
            "commonError3": "• أجهزة غير معايرة أو تنحرف مع الزمن",
            "commonError4": "• عينات وقود غير ممثلة",
            "commonError5": "• تجاهل الرطوبة في حسابات الهواء",
            "commonError6": "• التشغيل أثناء الظروف الانتقالية",
            "configTitle": "تكوينات الأفران المعقدة",
            "multiCellTitle": "خلايا متعددة مع قسم حمل مشترك",
            "multiCellText": "خلايا إشعاعية متعددة تشترك في قسم حمل واحد. تُحسب الكفاءة الإجمالية من قياس واحد للمدخنة، لكن يلزم مراقبة كل خلية للتحكم.",
            "keyChallengeLabel": "التحدي الرئيسي:",
            "keyChallengeText": "أداء كل خلية يختفي داخل القياس الإجمالي",
            "independentTitle": "أفران مستقلة بمدخنة مشتركة",
            "independentText": "أفران مستقلة بخدمات عمليات منفصلة تشترك في مدخنة واحدة. يحتاج كل فرن إلى قياس مستقل لغازات المداخن لمتابعة الأداء بدقة.",
            "keyRequirementLabel": "المتطلب الأساسي:",
            "keyRequirementText": "قياس منفصل للأكسجين والحرارة قبل اختلاط الغازات",
            "measurementStrategyTitle": "⚠️ إستراتيجية القياس",
            "measurementStrategyText": "للتكوينات المعقدة، لا تكفي طريقة API-560 \"الصندوق الأسود\" للتشخيص والتحكم. استخدم نماذج العمليات (Aspen HYSYS) أو CFD (OpenFOAM) لتحليل السلوك الداخلي وفرص التحسين.",
            "examplesTitle": "حسابات وأمثلة للحساسية",
            "combustionTitle": "نموذج ورقة احتراق API-560",
            "componentColumn": "المكوّن",
            "volColumn": "الحجم ٪",
            "molColumn": "الكتلة الجزيئية",
            "massFractionColumn": "الكسر الكتلي",
            "lhvColumn": "القيمة الحرارية الدنيا (كج/كجم)",
            "lhvContributionColumn": "مساهمة القيمة الحرارية",
            "stoichColumn": "هواء ستوكيومتري",
            "chartTitle": "تحليل الحساسية: درجة حرارة المدخنة مقابل الكفاءة",
            "chartDescription": "يوضح هذا الرسم كيف تنخفض الكفاءة مع ارتفاع درجة حرارة المدخنة. زيادة 50°م من 300°م إلى 350°م تخفض الكفاءة عادةً بمقدار 2-3 نقاط مئوية.",
            "toolsTitle": "الأدوات والتنزيلات",
            "downloadReport": "📄 حمّل التقرير الكامل (.md)",
            "excelTitle": "قالب إكسل",
            "excelDescription": "ورقة حساب API-560 الملحق G مع صيغ مضمنة وتحقق.",
            "excelButton": "تنزيل",
            "pythonTitle": "مكتبة بايثون",
            "pythonDescription": "مكتبة مفتوحة المصدر لحسابات الكفاءة الآلية وتحليل الحساسية.",
            "pythonButton": "GitHub",
            "mobileTitle": "حاسبة محمولة",
            "mobileDescription": "تقديرات سريعة للكفاءة وحساب الهواء الزائد للاستخدام الميداني.",
            "mobileButton": "متجر التطبيقات",
            "softwareTitle": "مصفوفة مقارنة البرمجيات",
            "softwareColumnTool": "الأداة",
            "softwareColumnCost": "التكلفة",
            "softwareColumnExpertise": "الخبرة",
            "softwareColumnAccuracy": "الدقة",
            "softwareColumnBestFor": "أفضل استخدام",
            "softwareExcel": "ملف إكسل",
            "costLow": "منخفض",
            "expertiseMedium": "متوسط",
            "accuracyHigh": "عالية",
            "softwareExcelBest": "حسابات API-560 وتقارير مخصصة",
            "softwareHeaterSim": "HeaterSIM",
            "costHigh": "عالٍ",
            "expertiseHigh": "عالٍ",
            "accuracyVeryHigh": "عالية جدًا",
            "softwareHeaterSimBest": "التصميم التفصيلي والنمذجة الحرارية",
            "softwareAspen": "Aspen HYSYS",
            "costVeryHigh": "مرتفع جدًا",
            "softwareAspenBest": "محاكاة المصنع بالكامل والتكامل",
            "softwarePython": "Python/MATLAB",
            "softwarePythonBest": "الأتمتة وتحليل الحساسية",
            "softwareOnline": "حاسبات إلكترونية",
            "costFree": "مجاني",
            "expertiseLow": "منخفض",
            "accuracyLow": "منخفضة",
            "softwareOnlineBest": "تقديرات سريعة وتدريب",
            "faqTitle": "الأسئلة المتكررة",
            "faqQ1": "لماذا نستخدم القيمة الحرارية الدنيا بدل العليا لكفاءة الفرن؟",
            "faqA1": "تفرض API-560 استخدام القيمة الحرارية الدنيا لأن درجات حرارة مداخن الأفران (300-450°م) أعلى بكثير من نقطة تكاثف الماء. بخار الماء الناتج عن الاحتراق لا يتكاثف، لذا لا تُستعاد حرارته الكامنة. تعطي القيمة الحرارية الدنيا قياسًا واقعيًا للطاقة المفيدة، بينما تفترض القيمة العليا استعادة حرارة لا تحدث.",
            "faqQ2": "ما أكبر مصدر لفقدان الكفاءة في الأفران؟",
            "faqA2": "خسارة المدخنة هي الأكبر، وتمثل عادةً 60-85% من إجمالي الخسائر. تتحكم فيها عاملان رئيسيان: درجة حرارة المدخنة (الأقل أفضل) والهواء الزائد (تخفيضه مع ضمان اكتمال الاحتراق). خفض درجة الحرارة 50°م يمكن أن يحسن الكفاءة بمقدار 2-3 نقاط.",
            "faqQ3": "ما الدقة المطلوبة لقياسات غازات المداخن؟",
            "faqA3": "مرتفعة جدًا. خطأ بمقدار 5°م في قياس درجة حرارة المدخنة يسبب خطأً قدره 0.5% في الكفاءة المحسوبة. يجب أن تكون قياسات الأكسجين بدقة ±0.1% للحصول على نتائج موثوقة، لذا تعد المعايرة الصحيحة واختيار مواقع التعيين الممثلة ومعالجة التدرج داخل القنوات أمورًا أساسية.",
            "faqQ4": "هل يمكن استخدام API-560 للأفران متعددة الخلايا؟",
            "faqA4": "نعم، للكفاءة الكلية. عامل النظام بالكامل كوحدة واحدة بمدخلات وقود مجمعة وقياس واحد عند المدخنة المشتركة. لكن ذلك لا يوفر رؤية لأداء كل خلية، لذا يلزم قياسات منفصلة قبل اختلاط الغازات للتحكم والتشخيص.",
            "faqQ5": "ما الفرق بين الكفاءة الحرارية وكفاءة الوقود؟",
            "faqA5": "تقيس كفاءة الوقود الحرارة المفيدة الممتصة مقابل طاقة الوقود فقط. تشمل الكفاءة الحرارية جميع مدخلات الحرارة (الوقود + الهواء المسخن + الوقود المسخن). تعد كفاءة الوقود أهم اقتصاديًا لأنها ترتبط مباشرة بتكاليف الوقود، بينما تعكس الكفاءة الحرارية الأداء الكلي عند وجود مسخنات هواء.",
            "footerCredit": "من إعداد أحمد صبري بمساعدة الذكاء الاصطناعي",
            "footerDescription": "يوفر هذا الموقع محتوىً تعليميًا حول حسابات كفاءة الأفران المشتعلة وفق معيار API-560.",
            "lightModeToggle": "☀️ الوضع النهاري",
            "darkModeToggleLabel": "تغيير وضع الإضاءة",
            "languageToggleLabel": "تبديل اللغة",
            "pageTitle": "كفاءة الأفران المشتعلة — طريقة API-560 لخسائر الحرارة والقياس وأفضل الممارسات",
            "chartDataset": "الكفاءة المتوقعة",
            "chartXAxis": "درجة حرارة المدخنة (°م)",
            "chartYAxis": "الكفاءة (%)",
            "chartTooltip": "الكفاءة",
            "toastLanguage": "تم تحديث المحتوى بالعربية",
            "toastDarkModeOn": "تم تفعيل الوضع الليلي",
            "toastDarkModeOff": "تم تفعيل الوضع النهاري",
            "checklistComplete": "تم إكمال عناصر القائمة — عمل رائع!",
            "templateAlert": "قالب إكسل سيكون متاحًا قريبًا.",
            "libraryAlert": "مكتبة بايثون قيد الإعداد وستتوفر قريبًا.",
            "mobileAlert": "تطبيق الهاتف قيد التطوير وسيكون متاحًا قريبًا.",
            "stepModalTitle": "خطوة API-560",
            "stepModalDescription": "وصف الخطوة سيظهر هنا"
        }
    };
    const mermaidDefinitions = {
        "en": "flowchart LR\n    A[Collect Data] --> B[Combustion Worksheet]\n    B --> C{Excess Air & Credits}\n    C --> D[Loss Evaluation]\n    D --> E[Thermal Efficiency]\n    E --> F[Optimization Actions]",
        "ar": "flowchart RL\n    A[جمع البيانات] --> B[ورقة الاحتراق]\n    B --> C{الهواء الزائد والاعتمادات}\n    C --> D[تقييم الخسائر]\n    D --> E[الكفاءة الحرارية]\n    E --> F[خطط التحسين]"
    };
    const resourcePromises = window.__resourcePromises || {};
    const whenResourceReady = (name, callback) => {
      const resource = resourcePromises[name];
      const invoke = () => {
        if (typeof requestAnimationFrame === 'function') {
          requestAnimationFrame(() => {
            callback();
          });
        } else {
          setTimeout(() => {
            callback();
          }, 0);
        }
      };
      if (resource && typeof resource.then === 'function') {
        resource
          .then(invoke)
          .catch(invoke);
      } else {
        invoke();
      }
    };
    const html = document.documentElement;
    const body = document.body;
    const darkModeToggle = document.getElementById('darkModeToggle');
    const languageToggle = document.getElementById('languageToggle');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileNavBarLinks = document.querySelectorAll('.mobile-nav-bar .nav-link');
    const desktopNavContainer = document.querySelector('.hidden.md\\:flex');
    const desktopNavLinks = desktopNavContainer ? desktopNavContainer.querySelectorAll('.nav-link') : [];
    const navLinks = document.querySelectorAll('.nav-link');
    const tocSidebar = document.getElementById('tocSidebar');
    const tocToggle = document.getElementById('tocToggle');
    const tocButton = document.getElementById('tocButton');
    const tocNav = document.getElementById('tocNav');
    const viewportQuery = window.matchMedia('(max-width: 767px)');
    const sections = document.querySelectorAll('main section[id]');
    const firstSectionId = sections[0] ? sections[0].id : '';
    const excessAirSlider = document.getElementById('excessAirSlider');
    const stackTempSlider = document.getElementById('stackTempSlider');
    const excessAirValue = document.getElementById('excessAirValue');
    const efficiencyValue = document.getElementById('efficiencyValue');
    const stackLossValue = document.getElementById('stackLossValue');
    const stackLossBar = document.getElementById('stackLossBar');
    const stackTempValue = document.getElementById('stackTempValue');
    const stackTempBar = document.getElementById('tempLossBar');
    const tempLossValue = document.getElementById('tempLossValue');
    const checklistItems = document.querySelectorAll('.checklist-item');
    const faqQuestions = document.querySelectorAll('.faq-question');
    const alertButtons = document.querySelectorAll('[data-alert-key]');
    const stackTempUnitNode = stackTempValue ? stackTempValue.nextSibling : null;
    const stepModal = document.getElementById('stepModal');
    const stepModalClose = document.getElementById('closeModal');
    const stepModalNumber = document.getElementById('modalStepNumber');
    const stepModalTitle = document.getElementById('modalStepTitle');
    const stepModalDescription = document.getElementById('modalStepDescription');
    const stepperSteps = document.querySelectorAll('.stepper-step');

    let currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
    if (!translations[currentLanguage]) {
      currentLanguage = 'en';
    }
    let storedTheme = localStorage.getItem('theme');
    let isDarkMode = storedTheme ? storedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    let sensitivityChart = null;
    let manualHighlightTarget = '';
    let manualHighlightTimestamp = 0;
    let mermaidRetryAttempts = 0;
    const manualHighlightDelay = 1200;

    const synchronizeNavHref = () => {
      const mobileView = viewportQuery.matches;
      desktopNavLinks.forEach((link) => {
        const sectionId = link.dataset.sectionId;
        if (!sectionId) return;
        if (!link.dataset.originalHref) {
          const existing = link.getAttribute('href');
          link.dataset.originalHref = existing && existing.startsWith('#') ? existing : `#${sectionId}`;
        }
        if (mobileView) {
          link.setAttribute('href', `#desktop-${sectionId}`);
        } else {
          link.setAttribute('href', link.dataset.originalHref);
        }
      });
      mobileNavBarLinks.forEach((link) => {
        const sectionId = link.dataset.sectionId;
        if (!sectionId) return;
        const targetHref = mobileView ? `#${sectionId}` : `#nav-${sectionId}`;
        link.setAttribute('href', targetHref);
      });
    };

    synchronizeNavHref();
    if (typeof viewportQuery.addEventListener === 'function') {
      viewportQuery.addEventListener('change', synchronizeNavHref);
    } else if (typeof viewportQuery.addListener === 'function') {
      viewportQuery.addListener(synchronizeNavHref);
    }

    function formatNumber(value, options = {}) {
      try {
        const locale = currentLanguage === 'ar' ? 'ar-EG' : 'en-US';
        return new Intl.NumberFormat(locale, options).format(value);
      } catch (error) {
        console.warn('Number formatting failed', error);
        return value.toString();
      }
    }

    function showToast(message) {
      if (!message) return;
      let container = document.getElementById('toastContainer');
      if (!container) {
        container = document.createElement('div');
        container.id = 'toastContainer';
        container.style.position = 'fixed';
        container.style.top = '1.5rem';
        container.style.left = '50%';
        container.style.transform = 'translateX(-50%)';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.gap = '0.5rem';
        container.style.zIndex = '2000';
        body.appendChild(container);
      }
      const toast = document.createElement('div');
      toast.textContent = message;
      toast.style.padding = '0.65rem 1.2rem';
      toast.style.borderRadius = '9999px';
      toast.style.background = 'rgba(17, 24, 39, 0.92)';
      toast.style.color = '#fff';
      toast.style.boxShadow = '0 10px 30px rgba(15, 23, 42, 0.25)';
      toast.style.fontSize = '0.95rem';
      toast.style.fontWeight = '600';
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(6px)';
      toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        container.appendChild(toast);
      requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
      });
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(6px)';
        setTimeout(() => {
          toast.remove();
          if (!container.childElementCount) {
            container.remove();
          }
        }, 350);
      }, 2400);
    }

    function setLanguageAttributes(lang) {
      const isArabic = lang === 'ar';
      html.setAttribute('lang', lang);
      html.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
      body.classList.toggle('rtl', isArabic);
    }

    function applyTranslations(lang) {
      const catalog = translations[lang];
      if (!catalog) return;
      document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.dataset.i18n;
        const translation = catalog[key];
        if (!translation) return;
        const textNodes = Array.from(element.childNodes)
          .filter((node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0);
        if (textNodes.length > 0) {
          textNodes[0].textContent = translation;
          for (let index = 1; index < textNodes.length; index += 1) {
            textNodes[index].textContent = '';
          }
        } else if (!element.childElementCount) {
          element.textContent = translation;
        }
      });
      document.querySelectorAll('[data-i18n-attr]').forEach((element) => {
        const attrName = element.dataset.i18nAttr;
        const attrKey = element.dataset.i18nAttrKey || element.dataset.i18n;
        const translation = catalog[attrKey];
        if (translation) {
          element.setAttribute(attrName, translation);
        }
      });
      if (catalog.pageTitle) {
        document.title = catalog.pageTitle;
      }
    }

    function updateToggleText() {
      const catalog = translations[currentLanguage];
      if (darkModeToggle && catalog) {
        const labelKey = isDarkMode ? 'lightModeToggle' : 'darkModeToggle';
        if (catalog[labelKey]) {
          darkModeToggle.textContent = catalog[labelKey];
        }
        if (catalog.darkModeToggleLabel) {
          darkModeToggle.setAttribute('aria-label', catalog.darkModeToggleLabel);
        }
      }
      if (languageToggle && catalog && catalog.languageToggleLabel) {
        languageToggle.setAttribute('aria-label', catalog.languageToggleLabel);
      }
    }

    function updateUnits() {
      if (stackTempUnitNode) {
        stackTempUnitNode.textContent = currentLanguage === 'ar' ? '°م' : '°C';
      }
    }

    function setThemeState(dark) {
      isDarkMode = dark;
      html.classList.toggle('dark', dark);
      localStorage.setItem('theme', dark ? 'dark' : 'light');
      updateToggleText();
      whenResourceReady('mermaid', renderMermaid);
      whenResourceReady('chart', buildChart);
    }

    function calculateEfficiency(value) {
      const efficiency = Math.max(70, 95 - (value * 0.5));
      const stackLoss = Math.max(5, 100 - efficiency);
      return { efficiency, stackLoss };
    }

    function handleExcessAirChange(value) {
      const numeric = Number(value);
      if (!Number.isFinite(numeric)) return;
      const { efficiency, stackLoss } = calculateEfficiency(numeric);
      if (excessAirValue) {
        excessAirValue.textContent = formatNumber(numeric, { maximumFractionDigits: 0 });
      }
      if (efficiencyValue) {
        efficiencyValue.textContent = `${formatNumber(efficiency, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`;
      }
      if (stackLossValue) {
        stackLossValue.textContent = `${formatNumber(stackLoss, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`;
      }
      if (stackLossBar) {
        stackLossBar.style.width = `${stackLoss}%`;
      }
      localStorage.setItem('excessAirValue', String(numeric));
    }

    function handleStackTempChange(value) {
      const numeric = Number(value);
      if (!Number.isFinite(numeric)) return;
      const loss = Math.max(0, (numeric - 200) * 0.082);
      if (stackTempValue) {
        stackTempValue.textContent = formatNumber(numeric, { maximumFractionDigits: 0 });
      }
      if (tempLossValue) {
        tempLossValue.textContent = `${formatNumber(loss, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`;
      }
      if (stackTempBar) {
        stackTempBar.style.width = `${Math.min(loss, 100)}%`;
      }
      localStorage.setItem('stackTempValue', String(numeric));
    }

    function generateTOC() {
      if (!tocNav) return;
      tocNav.innerHTML = '';
      const fragment = document.createDocumentFragment();
      sections.forEach((section) => {
        const heading = section.querySelector('h2');
        if (!heading) return;
        const link = document.createElement('a');
        link.href = `#toc-${section.id}`;
        link.className = 'block px-3 py-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700';
        link.textContent = heading.textContent.trim();
        link.dataset.sectionId = section.id;
        fragment.appendChild(link);
      });
      tocNav.appendChild(fragment);
    }

    function highlightNavigation(targetId) {
      if (!targetId) return;
      const updateActive = (elements) => {
        elements.forEach((link) => {
          const datasetTarget = link.dataset.sectionId;
          const href = link.getAttribute('href');
          const normalizedHref = href && href.startsWith('#') ? href.slice(1) : '';
          const isActive = datasetTarget ? datasetTarget === targetId : normalizedHref === targetId;
          if (isActive) {
            link.classList.add('text-blue-600', 'dark:text-blue-400', 'font-semibold');
            if (link.classList.contains('nav-link') || link.classList.contains('mobile-nav-link')) {
              link.classList.add('nav-active');
            }
          } else {
            link.classList.remove('text-blue-600', 'dark:text-blue-400', 'font-semibold');
            if (link.classList.contains('nav-link') || link.classList.contains('mobile-nav-link')) {
              link.classList.remove('nav-active');
            }
          }
        });
      };
      updateActive(navLinks);
      updateActive(mobileNavLinks);
      if (tocNav) {
        updateActive(tocNav.querySelectorAll('a'));
      }
    }

    function observeSections() {
      let lastObservedSection = '';
      const observer = new IntersectionObserver((entries) => {
        const now = performance.now();
        if (manualHighlightTarget) {
          if ((now - manualHighlightTimestamp) < manualHighlightDelay) {
            highlightNavigation(manualHighlightTarget);
            return;
          }
          manualHighlightTarget = '';
        }

        if (firstSectionId) {
          const firstSection = document.getElementById(firstSectionId);
          if (firstSection) {
            const rect = firstSection.getBoundingClientRect();
            if (window.scrollY < 120 || (rect.top >= 0 && rect.top < 160)) {
              lastObservedSection = firstSectionId;
              highlightNavigation(firstSectionId);
              return;
            }
          }
        }

        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) {
          return;
        }

        visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const activeEntry = visibleEntries[0];
        if (activeEntry?.target?.id && activeEntry.target.id !== lastObservedSection) {
          lastObservedSection = activeEntry.target.id;
          highlightNavigation(activeEntry.target.id);
        }
      }, { threshold: [0.1, 0.35, 0.6], rootMargin: '-25% 0px -55% 0px' });
      sections.forEach((section) => observer.observe(section));
    }

    function closeMobileMenu() {
      if (!mobileMenu) return;
      mobileMenu.classList.add('hidden');
      body.classList.remove('mobile-menu-open');
      if (mobileMenuToggle) {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
      }
    }

    function toggleMobileMenu() {
      if (!mobileMenu) return;
      const willOpen = mobileMenu.classList.contains('hidden');
      if (willOpen) {
        mobileMenu.classList.remove('hidden');
        body.classList.add('mobile-menu-open');
      } else {
        mobileMenu.classList.add('hidden');
        body.classList.remove('mobile-menu-open');
      }
      if (mobileMenuToggle) {
        mobileMenuToggle.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
      }
    }

    function openTocSidebar() {
      if (!tocSidebar) return;
      tocSidebar.classList.add('is-visible', 'translate-x-0');
      tocSidebar.classList.remove('-translate-x-full');
      body.classList.add('toc-open');
      tocButton?.setAttribute('aria-expanded', 'true');
    }

    function closeTocSidebar() {
      if (!tocSidebar) return;
      tocSidebar.classList.remove('is-visible', 'translate-x-0');
      tocSidebar.classList.add('-translate-x-full');
      body.classList.remove('toc-open');
      tocButton?.setAttribute('aria-expanded', 'false');
    }

    function renderMermaid() {
      const container = document.getElementById('mermaidChart');
      if (!container) return;
      if (!window.mermaid) {
        if (mermaidRetryAttempts < 5) {
          mermaidRetryAttempts += 1;
          setTimeout(() => renderMermaid(), 120);
        }
        return;
      }
      const definition = mermaidDefinitions[currentLanguage];
      if (!definition) return;
      const theme = isDarkMode ? 'dark' : 'default';
      const handleError = (error) => {
        console.error('Mermaid rendering failed', error);
        if (mermaidRetryAttempts < 5) {
          mermaidRetryAttempts += 1;
          setTimeout(() => renderMermaid(), 150);
        }
      };
      const applyRenderResult = (result) => {
        if (!result) return;
        const svgMarkup = typeof result === 'string' ? result : result.svg;
        if (typeof svgMarkup === 'string') {
          container.innerHTML = svgMarkup;
        }
        const bindFunctions = result && result.bindFunctions;
        if (typeof bindFunctions === 'function') {
          bindFunctions(container);
        }
        mermaidRetryAttempts = 0;
      };
      try {
        window.mermaid.initialize({ startOnLoad: false, theme, securityLevel: 'loose' });
        const renderId = `mermaid-chart-${currentLanguage}-${theme}`;
        const renderOutcome = window.mermaid.render(renderId, definition);
        if (renderOutcome && typeof renderOutcome.then === 'function') {
          renderOutcome.then(applyRenderResult).catch(handleError);
        } else {
          applyRenderResult(renderOutcome);
        }
      } catch (error) {
        handleError(error);
      }
    }

    function buildChart() {
      const canvas = document.getElementById('sensitivityChart');
      if (!canvas || !window.Chart) return;
      const unit = currentLanguage === 'ar' ? '°م' : '°C';
      const labels = [200, 250, 300, 350, 400, 450]
        .map((value) => `${formatNumber(value, { maximumFractionDigits: 0 })}${unit}`);
      const datasetLabel = translations[currentLanguage].chartDataset;
      const dataPoints = [92, 90, 87.5, 85, 82.5, 79];
      const context = canvas.getContext('2d');
      const tooltipLabel = translations[currentLanguage].chartTooltip;
      if (!sensitivityChart) {
        sensitivityChart = new Chart(context, {
          type: 'line',
          data: {
            labels,
            datasets: [{
              label: datasetLabel,
              data: dataPoints,
              borderColor: '#2563eb',
              backgroundColor: 'rgba(37, 99, 235, 0.15)',
              tension: 0.35,
              pointRadius: 4,
              fill: true,
            }],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { intersect: false, mode: "nearest" },
            plugins: {
              legend: {
                labels: {
                  font: { family: 'Inter, system-ui, sans-serif' },
                  color: isDarkMode ? '#e5e7eb' : '#1f2937',
                },
              },
              tooltip: {
                rtl: currentLanguage === 'ar',
                callbacks: {
                  label: (context) => (
                    `${tooltipLabel}: ${formatNumber(context.parsed.y, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`
                  ),
                },
              },
            },
            scales: {
              x: {
                title: { display: true, text: translations[currentLanguage].chartXAxis },
                ticks: { reverse: currentLanguage === 'ar', color: isDarkMode ? '#cbd5f5' : '#1f2937', font: { family: 'Inter, system-ui, sans-serif' } },
                grid: { color: isDarkMode ? 'rgba(148, 163, 184, 0.2)' : 'rgba(203, 213, 225, 0.4)' },
              },
              y: {
                suggestedMin: 75,
                suggestedMax: 95,
                ticks: { callback: (value) => `${formatNumber(value, { maximumFractionDigits: 0 })}%`, color: isDarkMode ? '#cbd5f5' : '#1f2937', font: { family: 'Inter, system-ui, sans-serif' } },
                title: { display: true, text: translations[currentLanguage].chartYAxis },
                grid: { color: isDarkMode ? 'rgba(148, 163, 184, 0.2)' : 'rgba(203, 213, 225, 0.4)' },
              },
            },
          },
        });
      } else {
        sensitivityChart.data.labels = labels;
        sensitivityChart.data.datasets[0].label = datasetLabel;
        sensitivityChart.data.datasets[0].data = dataPoints;
        sensitivityChart.options.plugins.tooltip.rtl = currentLanguage === 'ar';
        sensitivityChart.options.plugins.tooltip.callbacks.label = (context) => (
          `${tooltipLabel}: ${formatNumber(context.parsed.y, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`
        );
        sensitivityChart.options.scales.x.title.text = translations[currentLanguage].chartXAxis;
        sensitivityChart.options.scales.x.ticks.reverse = currentLanguage === 'ar';
        sensitivityChart.options.scales.x.ticks.color = isDarkMode ? '#cbd5f5' : '#1f2937';
        sensitivityChart.options.scales.y.title.text = translations[currentLanguage].chartYAxis;
        sensitivityChart.options.scales.y.ticks.color = isDarkMode ? '#cbd5f5' : '#1f2937';
        sensitivityChart.options.plugins.legend.labels.color = isDarkMode ? '#e5e7eb' : '#1f2937';
        sensitivityChart.update();
      }
    }

    function restoreState() {
      const savedExcessAir = localStorage.getItem('excessAirValue');
      if (savedExcessAir && excessAirSlider) {
        excessAirSlider.value = savedExcessAir;
      }
      const savedStackTemp = localStorage.getItem('stackTempValue');
      if (savedStackTemp && stackTempSlider) {
        stackTempSlider.value = savedStackTemp;
      }
      if (excessAirSlider) {
        handleExcessAirChange(excessAirSlider.value);
      }
      if (stackTempSlider) {
        handleStackTempChange(stackTempSlider.value);
      }
      checklistItems.forEach((item) => {
        const storageKey = `checklist-${item.dataset.item}`;
        const storedValue = localStorage.getItem(storageKey);
        if (storedValue === 'true') {
          item.checked = true;
        }
      });
    }

    function showStepModal(stepNumber) {
      if (!stepModal || !stepNumber) return;

      // Check if device is mobile/tablet (touch device or screen width)
      const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
      if (!isMobile) return; // Only show modal on mobile devices

      const stepKey = `apiStep${stepNumber}`;
      const translation = translations[currentLanguage];
      const stepDescription = translation[stepKey] || `Step ${stepNumber} description`;

      // Update modal content
      if (stepModalNumber) {
        stepModalNumber.textContent = stepNumber;
      }
      if (stepModalTitle) {
        const titleText = `${translation.stepModalTitle || 'API-560 Step'} ${stepNumber}`;
        stepModalTitle.textContent = titleText;
      }
      if (stepModalDescription) {
        stepModalDescription.textContent = stepDescription;
      }

      // Show modal at current scroll position
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      stepModal.style.display = 'flex';
      stepModal.style.top = `${scrollY}px`;
      document.body.style.overflow = 'hidden'; // Prevent background scrolling

      // Focus trap for accessibility
      setTimeout(() => {
        const firstFocusable = stepModal.querySelector('button, [tabindex]:not([tabindex="-1"])');
        if (firstFocusable) {
          firstFocusable.focus();
        }
      }, 100);
    }

    function hideStepModal() {
      if (!stepModal) return;

      stepModal.style.display = 'none';
      stepModal.style.top = '0px'; // Reset position
      document.body.style.overflow = ''; // Restore scrolling
    }

    function bindEvents() {
      darkModeToggle?.addEventListener('click', () => {
        setThemeState(!isDarkMode);
        const message = translations[currentLanguage][isDarkMode ? 'toastDarkModeOn' : 'toastDarkModeOff'];
        showToast(message);
      });

      languageToggle?.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
        localStorage.setItem('preferredLanguage', currentLanguage);
        setLanguageAttributes(currentLanguage);
        applyTranslations(currentLanguage);
        updateToggleText();
        updateUnits();
        generateTOC();
        whenResourceReady('mermaid', renderMermaid);
        whenResourceReady('chart', buildChart);
        const message = translations[currentLanguage].toastLanguage;
        showToast(message);
      });

      mobileMenuToggle?.addEventListener('click', toggleMobileMenu);

      const activateLink = (link, event) => {
        if (!link) return;
        const datasetTarget = link.dataset.sectionId;
        const href = link.getAttribute('href');
        const targetId = datasetTarget || (href && href.startsWith('#') ? href.slice(1) : '');
        if (!targetId) return;
        const normalizedHref = `#${targetId}`;
        if (datasetTarget || href !== normalizedHref) {
          event?.preventDefault();
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          try {
            window.history.replaceState(null, '', normalizedHref);
          } catch (error) {
            console.warn('History update failed', error);
          }
        }
        highlightNavigation(targetId);
        manualHighlightTarget = targetId;
        manualHighlightTimestamp = performance.now();
      };

      navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
          activateLink(link, event);
        });
      });

      mobileNavLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
          activateLink(link, event);
          closeMobileMenu();
        });
      });

      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          closeMobileMenu();
          closeTocSidebar();
        }
      });

      tocButton?.addEventListener('click', () => {
        if (tocSidebar?.classList.contains('is-visible')) {
          closeTocSidebar();
        } else {
          openTocSidebar();
        }
      });

      tocToggle?.addEventListener('click', closeTocSidebar);

      tocNav?.addEventListener('click', (event) => {
        const link = event.target.closest('a');
        if (!link) return;
        activateLink(link, event);
        closeTocSidebar();
      });

      excessAirSlider?.addEventListener('input', (event) => {
        handleExcessAirChange(event.target.value);
      });

      stackTempSlider?.addEventListener('input', (event) => {
        handleStackTempChange(event.target.value);
      });

      alertButtons.forEach((button) => {
        button.addEventListener('click', () => {
          const { alertKey } = button.dataset;
          if (!alertKey) return;
          const catalog = translations[currentLanguage] || translations.en;
          const fallback = translations.en;
          const message = (catalog && catalog[alertKey]) || (fallback && fallback[alertKey]);
          if (message) {
            showToast(message);
          }
        });
      });

      checklistItems.forEach((item) => {
        item.addEventListener('change', () => {
          const storageKey = `checklist-${item.dataset.item}`;
          localStorage.setItem(storageKey, item.checked ? 'true' : 'false');
          const allChecked = Array.from(checklistItems).every((checkbox) => checkbox.checked);
          if (allChecked) {
            showToast(translations[currentLanguage].checklistComplete);
          }
        });
      });

      faqQuestions.forEach((button) => {
        button.addEventListener('click', () => {
          const targetId = button.dataset.target;
          const answer = document.getElementById(targetId);
          if (!answer) return;
          const shouldOpen = answer.classList.contains('hidden');
          document.querySelectorAll('.faq-answer').forEach((panel) => {
            panel.classList.add('hidden');
            const iconWrapper = panel.previousElementSibling?.querySelector('.faq-arrow');
            const iconSvg = iconWrapper?.querySelector('svg');
            if (iconWrapper) {
              iconWrapper.classList.remove('rotate-180');
            }
            if (iconSvg) {
              iconSvg.style.transform = '';
              iconSvg.style.transformOrigin = '';
              iconSvg.style.transformBox = '';
            }
          });
          if (shouldOpen) {
            answer.classList.remove('hidden');
            const arrowWrapper = button.querySelector('.faq-arrow');
            const arrowSvg = arrowWrapper?.querySelector('svg');
            if (arrowWrapper) {
              arrowWrapper.classList.add('rotate-180');
            }
            if (arrowSvg) {
              arrowSvg.style.transform = 'rotate(180deg)';
              arrowSvg.style.transformOrigin = 'center';
              arrowSvg.style.transformBox = 'fill-box';
            }
          }
        });
      });

      // Modal event handlers
      stepModalClose?.addEventListener('click', hideStepModal);

      // Close modal when clicking outside
      stepModal?.addEventListener('click', (event) => {
        if (event.target === stepModal) {
          hideStepModal();
        }
      });

      // Close modal with Escape key
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && stepModal && stepModal.style.display === 'flex') {
          hideStepModal();
        }
      });

      // Step click handlers for mobile
      stepperSteps.forEach((step) => {
        step.addEventListener('click', () => {
          const stepNumber = step.getAttribute('data-step');
          if (stepNumber) {
            showStepModal(stepNumber);
          }
        });

        // Add touch feedback for mobile
        step.addEventListener('touchstart', () => {
          step.style.transform = 'scale(0.95)';
        }, { passive: true });

        step.addEventListener('touchend', () => {
          step.style.transform = '';
        }, { passive: true });
      });
    }

    setLanguageAttributes(currentLanguage);
    applyTranslations(currentLanguage);
    updateUnits();
    setThemeState(isDarkMode);
    restoreState();
    generateTOC();
    observeSections();
    whenResourceReady('mermaid', renderMermaid);
    whenResourceReady('chart', buildChart);
    const initialHash = window.location.hash ? window.location.hash.slice(1) : '';
    const defaultSectionId = initialHash || (sections[0] ? sections[0].id : '');
    if (defaultSectionId) {
      highlightNavigation(defaultSectionId);
    }
    bindEvents();
    updateToggleText();
  });
})();
