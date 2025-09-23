

# **A Comprehensive Technical Report on the Calculation and Optimization of Fired Heater Efficiency: From API-560 Standards to Modern Digital Solutions**

## **Section 1: Foundational Principles of Fired Heater Efficiency**

The rigorous analysis of fired heater performance is a cornerstone of process plant energy management. A fired heater, an insulated enclosure designed to transfer heat from fuel combustion to a process fluid contained within coils, represents one of the largest energy consumers in a refinery or petrochemical facility.1 Consequently, accurately quantifying and optimizing its efficiency is of paramount economic and environmental importance. A comprehensive understanding begins with a precise definition of efficiency metrics, a firm grasp of the governing thermodynamic energy balance, and a detailed knowledge of the mechanisms through which valuable energy is lost.

### **1.1. Defining Thermal Performance: A Critical Triumvirate**

The term "efficiency" is often used colloquially, but in the context of fired heater engineering, it encompasses several distinct, formally defined metrics. The selection of the appropriate metric is critical for correctly evaluating performance and justifying capital improvements.

#### **1.1.1. Fuel Efficiency**

Fuel efficiency is the most common and commercially relevant measure of a fired heater's performance. It is formally defined as the total heat absorbed by the process fluid(s) divided by the total heat input derived *only* from the combustion of the fuel, based on the fuel's Lower Heating Value (LHV).1 This metric directly relates the useful work performed by the heater (its duty) to the amount of purchased fuel consumed. It is the primary indicator used to track operational costs and is the basis for most economic evaluations of performance improvements.

#### **1.1.2. Thermal Efficiency**

Thermal efficiency provides a more holistic view of the system's energy utilization. It is defined as the total heat absorbed by the process fluid(s) divided by the *total heat input* to the system.1 This total input includes not only the heat from fuel combustion (LHV) but also the sensible heat credits from preheated combustion air, the fuel itself (if heated above a standard datum temperature), and any atomizing medium, such as steam, used for liquid fuels.2 This distinction is not merely academic; it is fundamental to understanding the impact of energy recovery systems. For example, a project to install an air preheater (APH) recovers waste heat from the flue gas to heat the incoming combustion air.5 This significantly reduces the amount of fuel required to achieve a given duty, thereby increasing the

*fuel efficiency*. However, the *thermal efficiency* calculation now includes a large sensible heat credit for the hot air on the input side of the equation. While the thermal efficiency also increases, the magnitude of the improvement appears smaller. For justifying the capital expenditure of an APH, the resulting improvement in fuel efficiency (or the direct reduction in fuel consumption) is the more compelling commercial metric, as it translates directly to operational cost savings.

#### **1.1.3. Combustion Efficiency**

Combustion efficiency is a measure of the effectiveness of the burners and the combustion process itself. It quantifies how completely the fuel's chemical energy is converted into thermal energy, calculated as the actual heat released divided by the theoretical maximum heat release based on the fuel's composition.7 In a well-operated heater, combustion is nearly complete, and this value approaches 100%. A low combustion efficiency, often indicated by the presence of carbon monoxide (CO) or unburned hydrocarbons in the flue gas, points to operational issues such as poor fuel-air mixing, burner malfunction, or insufficient excess air.8

### **1.2. The Energy Balance: The First Law of Thermodynamics in Practice**

The calculation of heater efficiency is a direct application of the First Law of Thermodynamics, which dictates the conservation of energy. The total energy entering the heater must equal the total energy leaving it. This can be expressed as an energy balance equation:

Qin​=Qabsorbed​+Qloss​  
Where:

* Qin​ is the total rate of heat input.  
* Qabsorbed​ is the rate of useful heat absorbed by the process fluid (the heater duty).  
* Qloss​ is the rate of heat loss to the surroundings.

The primary inputs (Qin​) consist of the heat released by fuel combustion (on an LHV basis), and any sensible heat contributions from the fuel, combustion air, and atomizing medium above a reference datum temperature.4 The useful heat output (

Qabsorbed​) is determined from the process side by measuring the mass flow rate (m), specific heat (Cp​), and temperature change (Tout​−Tin​) of the fluid being heated.8 The efficiency calculation, particularly the heat loss method specified by API 560, focuses on quantifying the various components of

Qloss​.4

### **1.3. Key Heat Loss Mechanisms: Where Efficiency is Lost**

Understanding and minimizing heat losses is the fundamental objective of efficiency optimization. The primary avenues of energy loss in a fired heater are well-defined.

#### **1.3.1. Stack Losses**

The single largest source of inefficiency in any fired heater is the energy carried out of the stack by the hot flue gases.2 This loss is a direct function of the mass flow rate and the exit temperature of the flue gas. It comprises two main components:

* **Dry Flue Gas Loss:** This is the sensible heat contained in the gaseous products of complete combustion (primarily carbon dioxide, nitrogen, and sulfur dioxide) and the excess air (unreacted oxygen and associated nitrogen) that was supplied to ensure complete combustion.4  
* **Moisture Loss:** This loss includes both the sensible and latent heat of water vapor in the flue gas. This water vapor originates from two sources: moisture present in the combustion air (humidity) and fuel, and, more significantly, the water created as a product of the combustion of hydrogen atoms in the fuel.4

Minimizing stack losses is achieved by reducing the two controlling variables: lowering the final flue gas exit temperature through effective heat recovery in the convection section and/or air preheater, and minimizing the flue gas mass flow by operating at the lowest possible excess air level that still ensures complete and safe combustion.6

#### **1.3.2. Radiation and Convection Losses (Setting Loss)**

This category represents the heat lost from the heater's external surfaces—the casing, ductwork, header boxes, and observation doors—to the surrounding environment via radiation and convection.1 For the purposes of design calculations, API 560 provides standardized minimum values for this loss, specified as a percentage of the total heat release. For a natural draft heater, a minimum radiation loss of 1.5% is assumed. For heaters equipped with air preheat systems, which inherently have a larger external surface area due to extensive ducting, this value is increased to 2.5%.5

It is crucial to recognize that these percentages are a design convenience, not an operational constant. The actual heat loss is a dynamic variable governed by the principles of heat transfer through the refractory and steel casing, and is influenced by factors such as ambient temperature, wind speed, rain, and the physical integrity of the refractory lining.11 A significant increase in casing temperature, detectable via infrared thermography, indicates a degradation of the internal refractory lining. This transforms the measurement of setting loss from a simple calculation input into a powerful predictive maintenance tool, capable of identifying potential refractory failures before they escalate.12

#### **1.3.3. Losses from Incomplete Combustion**

In an ideal scenario, all combustible components of the fuel are fully oxidized to CO₂ and H₂O. When combustion is incomplete due to insufficient air, poor mixing, or burner issues, combustible products such as carbon monoxide (CO) and unburnt hydrocarbons (UHC) will be present in the flue gas.4 This represents a direct loss of the fuel's potential energy. In a properly maintained and operated heater, these losses are typically negligible.4 However, their presence is a critical indicator of a potentially unsafe, fuel-rich operating condition. Modern combustion analyzers are often equipped with sensors for "combustibles" (measured as CO equivalent) to alert operators to this condition.13

### **1.4. The Significance of Lower Heating Value (LHV)**

The American Petroleum Institute's standard API 560, *Fired Heaters for General Refinery Service*, unequivocally states that all efficiency calculations shall be based on the Lower Heating Value (LHV) of the fuel.5 This is a critical point of standardization that prevents ambiguity in performance comparisons.

The distinction between LHV and Higher Heating Value (HHV) lies in the treatment of the latent heat of vaporization of the water formed during combustion. HHV assumes that this water vapor condenses back into a liquid, releasing its latent heat. LHV, conversely, assumes the water remains in a vapor state.8 Since the stack temperature of a fired heater is almost invariably well above the dew point of water, the water in the flue gas remains a vapor and its latent heat is not recovered.14 Therefore, LHV provides a more realistic and practical measure of the usable heat available from the fuel within the context of a fired heater. While some other combustion equipment, such as low-temperature boilers, may be evaluated on an HHV basis, LHV is the non-negotiable standard for fired heaters.14 Consistency in applying this standard is essential for any valid comparison of heater performance or for contractual acceptance testing.

## **Section 2: The API-560 Heat Loss Method: A Step-by-Step Guide**

The definitive procedure for calculating the thermal performance of a fired heater is detailed in Annex G of the API 560 standard. This section provides a comprehensive, step-by-step deconstruction of this methodology, transforming the standard's text into a practical guide for implementation.

### **2.1. Introduction to Annex G: Purpose and Applicability**

Annex G of API 560, titled "Measurement of Efficiency of Fired-process Heaters," is an informative annex that provides a standardized, industry-accepted procedure for performance testing.15 Its purpose is to establish a consistent basis for comparing the actual performance of a heater against its design specifications. The procedure is applicable to heaters firing gaseous or liquid fuels; it is explicitly not recommended for those firing solid fuels.2

The methodology employed is an "indirect" or "heat loss" method. Rather than directly measuring the heat absorbed by the process fluid (which can be difficult and prone to error), this method involves a detailed calculation of all the individual heat losses from the system. The total losses are then subtracted from the total heat input to determine the useful heat absorbed, and thus the efficiency.4 This approach provides not only a final efficiency number but also a breakdown of where energy is being wasted, making it a powerful diagnostic tool.

### **2.2. Step 1: Data Acquisition and Input Parameters**

The accuracy of the entire calculation is contingent upon the quality of the input data. A successful test requires that the heater be operated at a stable, uniform firing rate for a sufficient duration to ensure steady-state conditions have been achieved.2 API 560 suggests that data be taken at the start of the test and every two hours thereafter, with the test continuing until three consecutive sets of data fall within a narrow, predefined tolerance. The following parameters must be meticulously measured and recorded.

**Table 2.1: Required Input Parameters for API-560 Efficiency Calculation**

| Parameter | Symbol | Typical Units | Method of Measurement/Source |
| :---- | :---- | :---- | :---- |
| Ambient Air Temperature | Ta​ | °C / °F | Calibrated thermometer or thermocouple shielded from direct solar radiation. |
| Relative Humidity | RH | % | Calibrated sling psychrometer or electronic humidity sensor. |
| Fuel Temperature | Tf​ | °C / °F | Calibrated thermocouple in the fuel line, close to the burners. |
| Combustion Air Temperature | Tair​ | °C / °F | Calibrated thermocouple in the burner plenum or forced draft fan discharge duct. |
| Flue Gas Exit Temperature | Te​ | °C / °F | Calibrated thermocouple grid or a multi-point traverse in the stack, downstream of the last heat transfer surface. |
| Flue Gas Oxygen | O2​ | vol % | Calibrated in-situ zirconia oxide or extractive electrochemical flue gas analyzer. The basis (wet or dry) must be specified. |
| Fuel Gas Composition | \- | vol % or mass % | Laboratory Gas Chromatograph (GC) analysis of a representative sample, or a continuous online GC. |
| Fuel Lower Heating Value | hL​ | kJ/kg or Btu/lb | Calculated from fuel composition or determined by calorimetry. Must be consistent with the composition data. |
| Assumed Radiation Loss | hr​ | % of hL​ | Per API 560: 1.5% for natural draft, 2.5% for balanced draft/APH systems, unless a more detailed calculation is performed. |
| Atomizing Medium Temp. | Tm​ | °C / °F | (If applicable for liquid fuels) Calibrated thermocouple in the medium supply line. |
| Atomizing Medium Pressure | Pm​ | kPa / psi | (If applicable) Calibrated pressure gauge to determine enthalpy from steam tables. |

### **2.3. Step 2: The Combustion Worksheet**

The combustion worksheet is the computational core of the Annex G procedure. It utilizes the detailed fuel composition to calculate the fundamental stoichiometric parameters of combustion—such as theoretical air required and the quantities of combustion products formed—all normalized to a basis of one unit of mass (e.g., 1 kg) of fuel.2 This systematic, component-by-component approach ensures that the unique properties of the specific fuel blend are accurately accounted for.

**Table 2.2: API-560 Combustion Calculation Worksheet Template**

| Col 1 | Col 2 | Col 3 | Col 4 | Col 5 | Col 6 | Col 7 | Col 8 | Col 9 | Col 10 | Col 11 |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **Fuel Component** | **Vol. Fraction (%)** | **Mol. Wt.** | **Mass (per mole fuel)** | **Mass Fraction (kg/kg fuel)** | **LHV (kJ/kg comp.)** | **LHV Contr. (kJ/kg fuel)** | **Stoich. Air (kg/kg comp.)** | **Air Contr. (kg/kg fuel)** | **CO₂ Formed (kg/kg comp.)** | **CO₂ Contr. (kg/kg fuel)** |
| CH₄ |  | 16.04 |  |  | 50,016 |  | 17.17 |  | 2.75 |  |
| C₂H₆ |  | 30.07 |  |  | 47,490 |  | 15.98 |  | 2.92 |  |
| H₂ |  | 2.016 |  |  | 120,000 |  | 34.07 |  | 0.00 |  |
| N₂ |  | 28.01 |  |  | 0 |  | 0.00 |  | 0.00 |  |
| CO₂ |  | 44.01 |  |  | 0 |  | 0.00 |  | 1.00 |  |
| *...etc.* |  |  |  |  |  |  |  |  |  |  |
| **Total** | **100.00** |  |  | **1.000** |  | **Σ(Col 7\) \= hL​** |  | **Σ(Col 9\)** |  | **Σ(Col 11\)** |

*Note: The worksheet is extended to include columns for H₂O formed and N₂ from fuel/air.*

### **2.4. Step 3: Calculating Heat Credits and Losses**

With the stoichiometric properties established, the next step is to calculate the actual heat losses and any sensible heat credits based on the measured operating conditions.

#### **2.4.1. Excess Air**

The measured oxygen concentration in the flue gas is the key to determining the amount of air supplied beyond the stoichiometric requirement. This "excess air" is a primary driver of stack loss, as it represents additional mass that is heated and discharged to the atmosphere. The calculation for excess air percentage depends on the fuel type and the basis of the O₂ measurement (wet or dry).10 A common simplified formula for typical hydrocarbon fuels based on a dry O₂ reading is:

Excess Air %=21−O2,dry​O2,dry​​×100  
More rigorous formulas provided in Annex G account for the specific fuel chemistry.

#### **2.4.2. Sensible Heat Credits**

These terms account for any energy entering the system above the standard datum temperature (e.g., 15°C or 60°F).

* **Air Sensible Heat (Δha​):** This represents the heat carried in by the combustion air. For systems with air preheaters, this is a very significant energy credit. It is calculated as: Δha​=ma​×Cp,air​×(Tair​−Tdatum​).  
* **Fuel Sensible Heat (Δhf​):** This is the heat in the fuel itself if supplied at a temperature above the datum: Δhf​=mf​×Cp,fuel​×(Tf​−Tdatum​).  
* **Atomizing Medium Sensible Heat (Δhm​):** For liquid fuels atomized with steam, this credit is the enthalpy difference of the steam: Δhm​=mm​×(hm,in​−hm,datum​).

#### **2.4.3. Radiation Heat Loss (hr​)**

As discussed, this is typically taken as a fixed percentage of the fuel's LHV, as specified by API 560 4:

hr​=100API % Loss​×hL​

#### **2.4.4. Stack Heat Loss (hs​)**

This is the largest loss term and requires the most detailed calculation. It is the sum of the sensible heats of all individual components of the flue gas, evaluated at the measured flue gas exit temperature (Te​). The mass of each component is determined from the combustion worksheet and the excess air calculation.

hs​=i∑​  
Where:

* i represents each flue gas component (CO₂, H₂O, N₂, O₂, SO₂).  
* mi​ is the mass of component i per kg of fuel.  
* Hi,T​ is the specific enthalpy of component i at temperature T.

The enthalpy values are obtained from standard thermodynamic property tables or calculated using specific heat capacity (Cp​) polynomial equations, which are functions of temperature.4

The calculation of stack loss and, by extension, the overall efficiency, is highly sensitive to the measured stack temperature. A small error in the Te​ measurement can lead to a significant error in the final efficiency value. This sensitivity underscores the importance of accurate and representative temperature measurement. A seemingly minor drop in calculated efficiency over time, when correlated with a measured increase in stack temperature for the same firing conditions, is a powerful diagnostic indicator. It strongly suggests a reduction in heat transfer effectiveness within the heater, most commonly due to fouling of the convection section tubes.1 This transforms the efficiency calculation from a mere performance metric into a proactive tool for maintenance planning, allowing engineers to schedule soot blowing or cleaning before the performance degradation leads to significant economic losses or operational constraints.

### **2.5. Step 4: Final Efficiency Calculation**

Once all heat credits and losses have been quantified on a per-mass-of-fuel basis, the final step is to substitute these values into the efficiency formulas provided in Annex G.2

* **Net Thermal Efficiency (e):** This is the most comprehensive measure of the system's thermal performance.

$$e \= \\left \\times 100$$

* **Fuel Efficiency (ef​):** This metric isolates the contribution of the fuel, making it ideal for economic analysis.

$$e\_f \= \\left \\times 100$$

* **Gross Thermal Efficiency (eg​):** This is calculated for contexts where an HHV basis is required. First, the Higher Heating Value (hH​) is determined by adding the latent heat of the water formed during combustion to the LHV.

hH​=hL​+(mH2​O,formed​×λH2​O​)  
Where λH2​O​ is the latent heat of vaporization of water. The gross efficiency is then calculated similarly to the net thermal efficiency, but using hH​ as the basis and ensuring the stack loss is also calculated on a gross basis.

The entire calculation is predicated on a specific fuel gas composition. In many refinery settings, the composition of the fuel gas can fluctuate significantly throughout the day as different upstream units change operation.13 A performance test based on a single laboratory sample taken at one point in time may not be representative of the heater's average performance. For instance, a sudden increase in the hydrogen content of the fuel gas, a common occurrence, will change the LHV and the stoichiometric air requirement.6 If the control system is maintaining a constant stack O₂ percentage, the actual mass of excess air will change, directly affecting the stack loss. This sensitivity highlights a key limitation of the periodic testing method and builds a strong case for the continuous, real-time analysis systems employed in modern facilities.

### **2.6. Worked Example**

To illustrate the complete procedure, consider a natural draft fired heater with the following operational data and fuel composition:

* **Operational Data:**  
  * Ambient Temperature (Ta​): 25°C  
  * Relative Humidity (RH): 60%  
  * Fuel Temperature (Tf​): 40°C  
  * Flue Gas Exit Temperature (Te​): 350°C  
  * Flue Gas Oxygen (O2,dry​): 3.0 vol %  
  * Radiation Loss: 1.5% of LHV  
* **Fuel Gas Composition (vol %):**  
  * Methane (CH₄): 92.5%  
  * Ethane (C₂H₆): 5.0%  
  * Nitrogen (N₂): 1.5%  
  * Carbon Dioxide (CO₂): 1.0%

The calculation would proceed as follows:

1. **Combustion Worksheet:** The fuel composition is entered into the worksheet (similar to Table 2.2). The calculations yield the key stoichiometric parameters per kg of fuel: hL​, theoretical air required, and mass of CO₂ and H₂O formed.  
2. **Excess Air:** Using the 3.0% dry O₂ reading, the excess air is calculated. This determines the total mass of air supplied and the mass of excess O₂ and N₂ in the flue gas.  
3. **Heat Credits:** Sensible heat credits for the fuel and the humidity in the combustion air are calculated relative to a 15°C datum. Since it is a natural draft heater, Δha​ is based on the ambient air temperature.  
4. **Heat Losses:**  
   * hr​ is calculated as 1.5% of the total hL​ from the worksheet.  
   * hs​ is calculated by finding the enthalpy of each flue gas component (CO₂, H₂O, N₂, excess O₂) at 350°C and summing their contributions.  
5. **Final Efficiency:** The calculated values for hL​, Δhf​, hr​, and hs​ are substituted into the formulas for Net Thermal Efficiency (e) and Fuel Efficiency (ef​).

This systematic process, while computationally intensive, provides a rigorous and defensible measure of the fired heater's performance, fully compliant with industry standards.

## **Section 3: Instrumentation and Measurement for Accurate Analysis**

The principle of "garbage in, garbage out" applies with absolute force to fired heater efficiency calculations. The most sophisticated calculation is rendered meaningless if the input data is inaccurate or unrepresentative. This section details the practical considerations and best practices for instrumentation and measurement, ensuring the data fed into the API 560 methodology is of the highest possible quality.

### **3.1. Best Practices for Flue Gas Sampling: Location, Location, Location**

The placement of the flue gas sampling probe is the single most critical factor in obtaining valid data. An improperly located probe can lead to errors that completely invalidate the test results.

#### **3.1.1. The Golden Rule of Sampling Location**

The fundamental requirement for a valid sample is that it must be drawn from a point in the system that is **downstream of the final heat transfer surface** (e.g., the last row of the convection section or the air preheater outlet) but **upstream of any potential source of air dilution**.22 Air can leak into the flue gas path through poorly sealed stack dampers, warped explosion doors, or, in the case of some natural draft appliances, draft diverters. Any such in-leakage, known as "tramp air," will mix with the flue gas and artificially increase the measured oxygen concentration, leading to a significant overestimation of the heater's true efficiency.

This effect occurs because fired heaters operate under negative pressure, or draft.1 Any opening in the flue gas system downstream of the firebox will draw in ambient air. If this happens at or before the measurement point, the analyzer will report a higher O₂ level than what actually exited the heat transfer sections. When this erroneously high O₂ value is used in the efficiency calculation, it implies that a larger mass of excess air passed through the heater and was heated to the stack temperature. This incorrectly inflates the calculated mass of flue gas, leading to an overestimation of the stack loss and, consequently, an artificially low calculated efficiency. Conversely, if the tramp air is not accounted for properly in the mass balance, it can lead to an underestimation of stack loss, artificially inflating the efficiency. The critical importance of sealing all test ports and inspection doors during a performance test cannot be overstated.22

#### **3.1.2. Placement within the Duct or Stack**

To obtain a sample that is representative of the bulk gas flow, the probe tip should be positioned within the central third of the duct's cross-section.22 Measurements taken too close to the duct wall can be skewed by the boundary layer effect, where gas velocity and temperature are lower and composition may differ from the bulk stream.

Furthermore, the sampling location should be situated in a long, straight run of ductwork. Regulatory guidelines, such as those from the U.S. Environmental Protection Agency (EPA), often specify minimum distances from flow disturbances. A common rule of thumb is to locate the sampling plane at least 2.5 stack diameters downstream and 0.5 stack diameters upstream from any bend, damper, or change in cross-section.25 This allows for turbulent eddies to dissipate and for the gas stream to become more homogenous, reducing the effects of stratification.

### **3.2. The Co-location of O₂ and Temperature Sensors**

A frequent point of inquiry is whether the oxygen and temperature measurements must be taken at the exact same location. The practical answer is that with modern instrumentation, they almost always are. The vast majority of portable and permanently installed extractive flue gas analyzers utilize an integrated probe assembly.23 This assembly typically consists of a stainless steel tube to draw the gas sample, with a thermocouple (commonly a K-type) welded or integrated directly at the probe's tip.28 Therefore, the temperature of the gas is measured at the precise point from which the sample is extracted for O₂ analysis. This design inherently ensures that the two critical measurements for the stack loss calculation—composition and temperature—are perfectly correlated at the point of measurement.

### **3.3. Ensuring Representative Sampling in Large Ducts**

While co-location at a single point is standard, the more profound challenge is ensuring that this single point is representative of the average conditions across the entire cross-section of a large flue gas duct. In large, multi-burner, or multi-cell heaters, it is common for the flue gas to be poorly mixed, resulting in significant spatial variations—or stratification—in both temperature and O₂ concentration.9 A single-point measurement in such a scenario can be highly misleading and introduce substantial error into the efficiency calculation. Several strategies exist to mitigate this problem:

* **Grid Traversing:** The most rigorous approach, mandated for regulatory compliance testing, is to perform a multi-point traverse of the duct's cross-section, as detailed in EPA Method 1\.25 Measurements are taken at a series of prescribed points across two perpendicular diameters, and the results are mathematically averaged to yield a highly representative value for the entire plane.  
* **Multi-Probe Arrays:** For continuous monitoring, a practical alternative to manual traversing is the installation of a permanent array of several probes of varying lengths. The outputs from these probes can be averaged by the control system to provide a real-time, spatially-averaged measurement that is far more representative than a single point.9  
* **Variable Insertion Probes:** During the commissioning of a new analyzer, a probe with a variable insertion length can be used to map the O₂ and temperature profiles across the duct. This data can then be used to identify the single insertion depth that most closely corresponds to the duct's true average, allowing for an optimized permanent installation.9  
* **Across-Duct (Line-of-Sight) Analyzers:** Technologies such as Tunable Diode Laser (TDL) or Infrared (IR) analyzers project a beam of light across the entire diameter of the duct and measure the absorption of specific wavelengths.9 This technique provides a true path-integrated average concentration, inherently overcoming the problem of stratification. While historically used more for components like CO or HCl, TDL technology for O₂ is becoming more common.

It is also important to recognize the potential conflict between the ideal location for process control and the ideal location for an overall efficiency measurement. For rapid, effective combustion control, the O₂ analyzer should be placed as close to the firebox as possible—typically at the bridgewall, where the radiant section transitions to the convection section—to minimize the time lag between a control action (e.g., a damper adjustment) and the measured response.29 However, this location does not account for heat recovery in the convection section or air preheater, nor does it detect any air in-leakage that may occur in those sections. Therefore, the definitive measurement for an overall efficiency test must be taken at the stack inlet. A best-practice instrumentation strategy often involves two sets of analyzers: a "control" analyzer at the bridgewall for dynamic process adjustments and a "monitoring" analyzer at the stack for official efficiency calculations and emissions reporting. A persistent discrepancy between the O₂ readings from these two locations serves as a powerful diagnostic indicator of air leakage into the convection section or associated ductwork.

### **3.4. Calibration, Maintenance, and Validation**

Flue gas analyzers are precision instruments that require regular care to maintain their accuracy. A comprehensive maintenance and calibration program is not optional; it is a prerequisite for obtaining trustworthy data.

* **Routine Maintenance:** Best practices for instrument care include daily visual inspections, weekly cleaning of the sample probe, and regular draining of the condensate water trap to prevent moisture from reaching and damaging the sensors.22 The particulate filter must also be checked frequently and replaced when dirty to prevent blockage and ensure a proper sample flow rate.24  
* **Calibration and Verification:** At a minimum, analyzers should undergo a full calibration by a qualified technician at least once per year, using certified calibration gas standards.24 Before each use or on a daily basis for continuous analyzers, a "zero check" must be performed by purging the sensor with fresh, clean ambient air, far from any combustion sources.22 A "span check" using a known concentration of calibration gas should also be performed regularly to verify the instrument's response. For critical continuous emission monitoring systems (CEMS), these calibration checks are often automated and performed multiple times per day.13  
* **Regulatory and Quality Standards:** While API 560 provides the framework for the efficiency test, the instrumentation itself may need to adhere to more stringent standards. For example, CEMS used for environmental compliance in the United States must meet the rigorous Performance Specifications (PS) outlined in EPA's 40 CFR Part 60, Appendix B, and follow the ongoing Quality Assurance (QA) procedures in Appendix F.32 These standards dictate everything from initial certification and linearity checks to daily calibration drift tests and periodic relative accuracy test audits (RATAs). Adherence to these protocols ensures the legal defensibility and technical validity of the data.

## **Section 4: Analyzing Complex Heater Configurations**

While the API 560 methodology is designed around a single-cell heater, modern refineries and chemical plants often employ more complex designs to handle large process duties or multiple services. Adapting the standard efficiency calculation to these configurations requires a clear understanding of the system boundaries and a strategic approach to measurement.

### **4.1. Scenario 1: Multiple Radiant Sections with a Common Convection Section**

This design, often referred to as a "twin-cell" or "multi-cell" heater, is common for large crude, vacuum, or coker heaters.36 It features two or more independent radiant cells, each with its own set of burners and process coils, which exhaust their hot flue gas into a single, shared convection section, breeching, and stack.

#### **4.1.1. Overall Efficiency Calculation**

From a thermodynamic standpoint, the entire structure can be treated as a single system. The overall efficiency calculation follows the standard API 560 procedure with aggregated inputs and a single set of measurements at the final exit point.14

* **System Boundary:** The boundary for the energy balance encompasses all radiant cells and the common convection section.  
* **Total Heat Input:** The total fuel heat release (Qfuel,total​) is the sum of the fuel flows to all individual radiant cells: Qfuel,total​=Qfuel,cellA​+Qfuel,cellB​+….  
* **Total Heat Absorbed:** The total duty (Qabsorbed,total​) is the sum of the heat absorbed by all process coils passing through the entire heater, including those in the common convection section.  
* **Measurement Point:** The critical flue gas measurements for stack loss (Te​ and O₂) are taken at a single, representative location downstream of the common convection section, typically in the duct leading to the stack or in the stack itself.

The API 560 Annex G method is then applied using these aggregated totals. The single measurement at the common outlet provides an accurate value for the overall system efficiency.

#### **4.1.2. Performance Diagnostics and Control Challenges**

While calculating the *overall* efficiency is straightforward, this single number provides no insight into the performance of the individual radiant cells. A low overall efficiency could be caused by a problem in one cell that is masked by normal operation in the other. This presents a significant diagnostic and control challenge.

For example, consider a twin-cell heater where Cell A is operating correctly at 15% excess air, but Cell B has a malfunctioning burner and is running at 50% excess air. The flue gas streams from both cells will mix at the inlet to the common convection section. The resulting mixture will have a high average O₂ concentration. An operator looking only at the final stack O₂ reading might incorrectly conclude that the entire heater is running with too much air and attempt to correct it by reducing the air flow to both cells. This action would push the correctly operating Cell A towards a potentially dangerous, fuel-rich condition while failing to address the root cause of the problem in Cell B.

Effective operation of such heaters is impossible without cell-specific instrumentation. At a minimum, each radiant cell requires:

* Independent fuel flow measurement and control.  
* Independent draft measurement (e.g., at the arch) and damper control.  
* A thermocouple to measure the bridgewall temperature (the flue gas temperature at the exit of the radiant cell).

By comparing the fuel firing rates, draft, and bridgewall temperatures between the cells, operators can identify imbalances in combustion, heat release, or heat absorption, allowing for targeted troubleshooting and control actions.

### **4.2. Scenario 2: Multiple Radiant/Convection Sections with a Common Stack**

This configuration involves two or more completely independent heaters, each with its own radiant and convection section serving different process streams, but with their individual flue gas ducts merging into a single common stack. This might be done to reduce capital cost by avoiding the construction of multiple tall stacks.

#### **4.2.1. Overall Efficiency Calculation and Its Limitations**

As in the previous scenario, a measurement taken in the common stack will reflect the *blended average performance* of all contributing heaters. The calculation would use the sum of all fuel inputs and the single measured Te​ and O₂ at the common stack.

However, this overall efficiency value is of very limited operational use. It combines the performance of multiple, independent process units into a single, non-specific number. If Heater A is experiencing severe convection section fouling (leading to a high flue gas temperature) while Heater B is operating at peak efficiency, the measurement at the common stack will show a mediocre temperature that masks the urgent problem in Heater A and provides no credit for the excellent performance of Heater B.

#### **4.2.2. Required Measurement Strategy**

For any meaningful performance monitoring or process control, it is mandatory that **each individual heater be equipped with its own dedicated flue gas analysis point** (for both temperature and O₂) located in its ductwork *before* the point where the flue gas streams combine. The efficiency of each heater must be calculated independently using its specific fuel flow and its dedicated flue gas measurements. The measurement at the common stack should be used only for overall environmental compliance reporting, not for process optimization.

The design of the ductwork where the flue gas streams merge is also a critical factor. A poorly designed junction can create significant turbulence and pressure drop, leading to backpressure that affects the draft in the upstream heaters.39 This can make it difficult to control the draft of each heater independently, as an adjustment to the main stack damper could have unpredictable and coupled effects on the individual units.

### **4.3. Modeling and Simulation Approaches for Complex Geometries**

The API 560 "black box" approach is insufficient for analyzing the internal behavior of these complex configurations. For design, troubleshooting, and advanced optimization, more sophisticated tools are required.

* **Process Simulators:** Commercial process simulation software such as Aspen HYSYS or AVEVA Dynamic Simulation contain unit operation blocks for fired heaters.41 A multi-cell heater can be modeled by connecting multiple heater blocks to a common mixer block representing the flue gas junction.41 This allows engineers to simulate the effects of varying loads or firing conditions in one cell on the performance of the common convection section and the overall system.  
* **Computational Fluid Dynamics (CFD):** For the most detailed analysis, CFD is the ultimate tool. Software packages like OpenFOAM solve the fundamental Navier-Stokes equations for fluid flow, coupled with models for combustion chemistry and radiative and convective heat transfer.43 A CFD model can produce detailed, three-dimensional maps of temperature, velocity, species concentration (O₂, CO₂), and heat flux throughout the entire volume of the heater.39 This level of detail can reveal complex phenomena such as flue gas maldistribution, flame impingement on tubes, and localized hot spots that are impossible to detect with physical measurements or simpler models. CFD is an expert-level tool typically reserved for new heater design validation or for troubleshooting severe and persistent performance problems.

## **Section 5: Modern Refinery Practices and Advanced Efficiency Optimization**

While the API 560 Annex G procedure provides a robust and standardized method for *measuring* efficiency at a single point in time, the focus in modern, competitive refineries has shifted from periodic testing to continuous, real-time *optimization*. This paradigm shift is driven by the significant economic and environmental benefits of constantly operating the heater at its peak performance, and it is enabled by a suite of advanced instrumentation and control technologies.

### **5.1. Beyond Periodic Testing: The Shift to Real-Time Performance Monitoring**

An API 560 performance test is an essential tool for commissioning, post-turnaround baselining, and contractual acceptance. However, it provides only a static snapshot of the heater's condition under a specific, controlled set of circumstances.14 It cannot capture the dynamic reality of plant operations, where process feed rates, fuel gas composition, and ambient conditions are in constant flux.

The modern approach treats efficiency not as a parameter to be measured intermittently, but as a key performance indicator (KPI) to be actively managed and maximized on a second-by-second basis. This requires a closed-loop system of continuous data collection, real-time analysis, and automated control adjustments to keep the heater operating at its optimal point through all process variations.13

### **5.2. Key Enabling Technologies**

The transition to real-time optimization is made possible by the integration of several key technologies that provide the necessary data and control authority.

#### **5.2.1. Continuous Flue Gas Analysis**

The cornerstone of modern combustion control is the continuous, reliable measurement of oxygen and combustibles in the flue gas.

* **In-situ Zirconia Oxide O₂ Analyzers:** These robust sensors (e.g., Emerson Rosemount 6888\) are installed directly in the flue gas stream and provide a fast, accurate, and continuous reading of the excess oxygen percentage.21  
* **Combustibles (COe) Sensors:** Often paired with the O₂ sensor, a combustibles sensor (e.g., in the Emerson Rosemount OCX8800) detects the presence of unburned components like CO and H₂.13 This measurement is critically important because it allows the control system to identify the true point of maximum efficiency. The optimal operating point for any fired heater is the lowest possible excess O₂ level that can be maintained without the "breakthrough" of combustibles into the flue gas.9 Operating with a combustibles sensor provides a direct safety and efficiency backstop, allowing the O₂ setpoint to be pushed much closer to the stoichiometric ideal than would be safe otherwise.

#### **5.2.2. Mass-Based Fuel Gas Control**

Refinery fuel gas is often a blend of various off-gases from different process units, causing its composition and heating value (Btu content) to vary significantly and rapidly.13 Traditional control systems that regulate fuel based on volumetric flow or pressure cannot maintain a stable heat release under these conditions. If the heating value of the gas increases, a constant volumetric flow will result in over-firing, while a decrease will result in under-firing.

To overcome this, modern systems utilize Coriolis mass flow meters (e.g., Emerson Micro Motion) to measure and control the fuel flow on a mass basis.13 Since the heat release is directly proportional to the mass flow (for a given composition), this provides a far more stable and predictable energy input to the heater. This stable heat release is a prerequisite for implementing tight, responsive control of the air-to-fuel ratio.

#### **5.2.3. Advanced Process Control (APC) and Digital Twins**

Advanced Process Control, or model-based predictive control, represents the "brain" of the modern optimization system. APC platforms (e.g., Emerson's DeltaV) use a dynamic mathematical model of the heater to predict its future behavior.21

* **Multivariable Control:** An APC controller can simultaneously manage multiple inputs (e.g., fuel flow, individual burner air dampers, main stack damper) to control multiple outputs (e.g., process outlet temperature, stack O₂, bridgewall temperature, firebox draft) while respecting all operational and safety constraints (e.g., maximum tube metal temperatures, minimum draft).  
* **Proactive Adjustments:** By predicting the response of the system, APC can make smooth, proactive adjustments to counteract disturbances before they significantly impact the process, maintaining a much tighter and more stable operation than is possible with traditional PID controllers or manual operator intervention.  
* **Digital Twins:** These are high-fidelity simulation models (such as those created in HeaterSIM) that run in parallel with the real-world asset.7 By feeding the digital twin the same inputs as the real heater, its output can be continuously compared to the actual measured performance. A growing deviation between the model and reality can indicate equipment degradation, such as fouling or catalyst coking, long before it becomes apparent through conventional monitoring.

The implementation of these advanced systems fundamentally changes the role of the process operator. Instead of being "in the loop," making constant, reactive manual adjustments to dampers and setpoints, the operator's role is elevated to that of a system supervisor.9 The APC system handles the routine, second-by-second optimization. The operator's focus shifts to higher-level strategic tasks: ensuring the validity of the analyzer data feeding the controller, monitoring the overall performance of the APC model, and managing the system's constraints and objectives. This transition requires new skills but ultimately leads to a safer, more stable, and more profitable operation.

### **5.3. Case Study: Implementing a Modern Combustion Control Strategy**

To illustrate the impact of these technologies, consider a typical modernization project for a large crude heater:

* **Baseline Scenario:** The heater is controlled by operators who manually adjust the stack damper to maintain a stack O₂ target of 3.5%. This target is set conservatively high to provide a large safety margin against the risk of entering a fuel-rich, unsafe condition during the frequent swings in fuel gas quality. The heater consumes a significant amount of fuel, and its efficiency is suboptimal due to the high volume of excess air being heated and sent up the stack.  
* **Modernization Project:**  
  1. A Coriolis mass flow meter is installed on the main fuel gas line to enable stable, mass-based firing control.  
  2. A fast, reliable, in-situ analyzer measuring both O₂ and combustibles (COe) is installed at the bridgewall for rapid feedback.  
  3. An APC application is implemented. The controller's primary objective is to manipulate the combustion air dampers to minimize the stack O₂ setpoint, subject to the critical constraint that the measured combustibles reading must remain below a low limit (e.g., 50 ppm).  
* **Optimized Result:** The APC system is now able to continuously "probe" for the point of maximum efficiency. It will slowly and safely reduce the air flow, pushing the O₂ level down. As it approaches the true stoichiometric point, the combustibles sensor will begin to detect trace amounts of CO. The controller will immediately use this feedback to hold the O₂ level at this optimal point, just above the "CO breakthrough" curve.9 The new, dynamically adjusted O₂ target might average 2.0% instead of the static 3.5%. This 1.5% reduction in excess oxygen directly translates to a lower mass of flue gas and a significant reduction in stack heat loss. For a large refinery heater, this optimization can easily result in fuel savings of several million dollars per year, providing a rapid payback for the investment in advanced instrumentation and control.6

The vast amount of data generated by these continuous monitoring systems presents its own challenge. Without effective software for analysis and visualization, operators can be overwhelmed by a constant stream of information and alarms, a condition known as "alarm fatigue".47 Therefore, a successful implementation requires not just the installation of sensors, but also the deployment of a software layer (such as Emerson's AMS or custom-developed platforms) that can process, contextualize, and visualize the data, using techniques like machine learning to identify statistically significant deviations from normal operation and present operators with actionable intelligence rather than raw data.46

## **Section 6: Software and Tools for Fired Heater Analysis**

The calculation and simulation of fired heater performance can be approached with a wide array of software tools, each with its own strengths, weaknesses, and appropriate use case. The selection of the right tool depends on the user's objective, level of expertise, and the required degree of accuracy.

### **6.1. Tier 1: Custom Spreadsheet Implementation (e.g., Microsoft Excel)**

For engineers tasked with performing a rigorous, standards-compliant efficiency test, developing a custom spreadsheet is often the most practical and effective approach.

* **Application:** The primary use is the detailed, step-by-step implementation of the API 560 Annex G heat loss method.14  
* **Pros:** Spreadsheets offer maximum flexibility to create customized calculation templates and reports tailored to specific company standards.49 All formulas and intermediate calculations are transparent and can be easily audited and validated, which is critical for contractual or compliance-related work. The initial cost is effectively zero for most organizations.  
* **Cons:** Building a comprehensive and validated spreadsheet from scratch requires a significant investment of time and a high level of expertise in both the API 560 standard and the software itself. Without proper cell protection and data validation, they can be prone to user input errors. They are not suitable for dynamic simulations or complex geometric heat transfer analysis.  
* **Recommendation:** This is the recommended starting point and the workhorse tool for any engineer who needs to perform and document official performance calculations.

### **6.2. Tier 2: Programming and Custom Modeling (e.g., Python, MATLAB)**

For more advanced applications, custom programming offers unparalleled power and automation capabilities.

* **Application:** Automating the API 560 calculation for multiple test runs, performing detailed sensitivity analyses (e.g., "how does efficiency change with stack temperature?"), developing proprietary heat transfer models, or integrating efficiency calculations into larger plant-wide data historian and performance monitoring systems.  
* **Pros:** The versatility is nearly limitless. Open-source scientific libraries in Python (e.g., NumPy, SciPy) provide robust numerical methods, and specialized libraries like heatrapy can be used to model fundamental 1D and 2D heat transfer processes.52 MATLAB has a long history in academic and research settings for developing complex models of combustion and heat transfer in furnaces.4  
* **Cons:** This approach requires a strong programming skillset and a substantial development and validation effort. It is not an out-of-the-box solution.  
* **Recommendation:** Best suited for corporate engineering groups, R\&D departments, or specialists developing enterprise-level, automated performance monitoring applications.

### **6.3. Tier 3: Specialized and General-Purpose Simulators**

This tier includes professional-grade commercial and open-source software designed for process simulation.

* **Commercial Software:**  
  * **HeaterSIM:** This is a highly specialized commercial software package designed specifically for the detailed thermal and hydraulic rating and simulation of fired heaters. It goes far beyond a simple efficiency calculation, modeling radiant and convective heat transfer, pressure drop, and tube metal temperatures. It is an excellent tool for design verification, troubleshooting, and conducting detailed "what-if" scenarios.7  
  * **Aspen HYSYS / AVEVA Dynamic Simulation:** These are comprehensive, general-purpose chemical process simulators. They include fired heater unit operation models that can be integrated into a full plant simulation.41 Their strength lies in analyzing the interaction between the heater and the rest of the process unit. However, the internal heater models may be more simplified or "black-box" in nature compared to a dedicated tool like HeaterSIM.  
* **Open-Source Software:**  
  * **DWSIM:** DWSIM is a powerful and remarkably capable open-source process simulator that is CAPE-OPEN compliant.56 However, for this specific application, it has a critical limitation:  
    **DWSIM does not currently have a built-in fired heater model** that includes combustion and flue gas-side calculations.59 While a simplified heater can be modeled as a heat exchanger, and complex models could theoretically be created using the Python scripting interface, it does not provide an out-of-the-box solution for efficiency analysis.  
  * **OpenFOAM:** This is a professional-grade, open-source toolbox for Computational Fluid Dynamics (CFD).43 It is not used for calculating overall efficiency but for creating detailed 3D models of the combustion process, flue gas flow patterns, and heat flux distribution inside the firebox. It is a highly specialized tool for research, advanced design, and deep troubleshooting of complex combustion problems.  
* **Recommendation:** Commercial simulators are the industry standard for detailed design, complex troubleshooting, and system-level analysis. The open-source community currently has a notable gap in providing a dedicated, user-friendly tool for fired heater simulation.

### **6.4. Tier 4: Online Calculators and Utilities**

A number of websites, often hosted by equipment vendors or engineering firms, provide free online calculators for estimating fired heater or furnace efficiency.18

* **Pros:** They are fast, free, and require no special software or expertise. They can be useful for quick, preliminary estimations or educational purposes.  
* **Cons:** These tools are invariably highly simplified. They use generalized assumptions for fuel properties and combustion chemistry and do not follow the rigorous, multi-step API 560 methodology. The underlying equations are often simple linear regressions that are only valid for a very narrow range of input variables (e.g., for stack O₂ less than 5%).18 Their results lack the accuracy and defensibility required for any official or critical engineering work.  
* **Recommendation:** These calculators should be treated as tools for "back-of-the-envelope" approximations only. They are not a substitute for a proper calculation using a validated spreadsheet or professional simulation software.

The current software landscape reveals a significant "capability gap." There is a clear divide between simple, accessible, but often inaccurate tools (online calculators) and powerful, rigorous, but expensive or expert-oriented tools (commercial simulators, custom programming). There is a clear need in the engineering community for an intermediate tool: a validated, open-source, and user-friendly application or Python library dedicated specifically to performing the API 560 Annex G calculation. Such a tool would democratize access to rigorous efficiency analysis, providing the accuracy of a custom spreadsheet without requiring the high development effort from each individual user.

**Table 6.1: Software and Tools Comparison Matrix for Fired Heater Efficiency Analysis**

| Tool/Software Category | Primary Application/Use Case | Cost | Required Expertise | Accuracy/Rigor | Flexibility | Key Limitations |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| **Microsoft Excel** | Rigorous API-560 Annex G calculations; performance testing; custom reporting. | Low | Medium-High (API 560 & Excel) | High (if built correctly) | Very High | Time-consuming to build/validate; prone to user error if unprotected. |
| **Python / MATLAB** | Automated calculations; sensitivity analysis; integration with data historians. | Low (Open-Source) | High (Programming) | High (if built correctly) | Very High | Requires significant coding and validation effort; not an out-of-the-box solution. |
| **HeaterSIM** | Detailed thermal/hydraulic design; "what-if" analysis; advanced troubleshooting. | High (Commercial) | High (Specialist) | Very High | Medium (focused on heaters) | Specialized tool; may be overkill for simple efficiency checks. |
| **Aspen HYSYS / AVEVA** | Plant-wide process simulation; analyzing heater interaction with the overall system. | Very High (Commercial) | High (Process Simulation) | High (System-level) | High | Internal heater model can be a simplified "black box"; complex setup for a single task. |
| **DWSIM** | General open-source process simulation. | Free (Open-Source) | Medium-High | N/A | Low | **Does not have a built-in fired heater model with combustion calculations.** |
| **Online Calculators** | Quick, "back-of-the-envelope" estimations; educational purposes. | Free | Low | Low | Very Low | Highly simplified; uses generic assumptions; not suitable for official or critical work. |

## **Section 7: Conclusions**

The calculation and optimization of fired heater efficiency is a multi-faceted discipline that is fundamental to the safe, reliable, and profitable operation of process plants. This analysis has traversed the subject from foundational thermodynamic principles to the application of advanced digital technologies, yielding several key conclusions.

1. **API 560 Annex G remains the bedrock standard.** The heat loss method detailed in the standard provides a rigorous, defensible, and diagnostically powerful framework for evaluating heater performance. Its correct application, however, is not trivial. It demands meticulous data acquisition with properly calibrated and strategically located instrumentation, a complete and accurate analysis of the fuel being burned, and a systematic approach to the detailed combustion and heat loss calculations.  
2. **Accurate measurement is non-negotiable.** The quality of the efficiency calculation is entirely dependent on the quality of the input data. The placement of flue gas sensors to obtain a representative sample, free from the effects of stratification or air dilution, is of paramount importance. For complex, multi-cell heaters, an overall efficiency number calculated from a single common stack measurement is insufficient for control and diagnostics; cell-specific measurements are mandatory for effective operation.  
3. **Modern optimization has moved beyond static testing.** While the API 560 test is essential for baselining and acceptance, leading operating companies have embraced a paradigm of continuous, real-time efficiency optimization. This is enabled by a suite of technologies—including continuous O₂/combustibles analyzers, mass-based fuel control, and Advanced Process Control (APC) systems—that work in concert to dynamically drive the heater to its most efficient operating point in response to changing conditions. This approach transforms efficiency from a periodically measured metric into a continuously managed Key Performance Indicator.  
4. **The right tool must be selected for the task.** A hierarchy of software tools is available to the engineer, each with a specific purpose. Custom-built spreadsheets remain the most practical tool for rigorous, auditable API 560 calculations. Commercial simulators like HeaterSIM and Aspen HYSYS provide powerful capabilities for design and complex system analysis. Conversely, free online calculators should be used only for preliminary estimates, and the open-source community currently lacks a dedicated, out-of-the-box tool for this critical engineering task.

Ultimately, the pursuit of fired heater efficiency is an exercise in applied thermodynamics, precision measurement, and intelligent control. By combining a deep understanding of the fundamental principles with the disciplined application of standardized methods and the strategic implementation of modern technologies, operators can unlock significant savings in fuel costs, reduce environmental emissions, and enhance the overall safety and reliability of their operations.

#### **Works cited**

1. The 10-minute guide to learning the basics of fired heaters., accessed September 23, 2025, [http://www.tulsaheatersmidstream.com/media/files/Beginners%20Guide%20to%20Fired%20Heaters%20(rev00).pdf](http://www.tulsaheatersmidstream.com/media/files/Beginners%20Guide%20to%20Fired%20Heaters%20\(rev00\).pdf)  
2. Fired Heater Efficiency Guide | PDF | Chemistry | Science \- Slideshare, accessed September 23, 2025, [https://www.slideshare.net/slideshow/fired-heater-efficiency-guide/52152146](https://www.slideshare.net/slideshow/fired-heater-efficiency-guide/52152146)  
3. Fired Heater Efficiency Guides | PDF | Hvac | Combustion \- Scribd, accessed September 23, 2025, [https://www.scribd.com/document/326919480/Fired-Heater-Efficiency-Guides](https://www.scribd.com/document/326919480/Fired-Heater-Efficiency-Guides)  
4. Matlab program computes thermal efficiency of fired heater \- ResearchGate, accessed September 23, 2025, [https://www.researchgate.net/publication/236730935\_Matlab\_program\_computes\_thermal\_efficiency\_of\_fired\_heater](https://www.researchgate.net/publication/236730935_Matlab_program_computes_thermal_efficiency_of_fired_heater)  
5. Fired Heaters for General Refinery Service API 560 Standard – 1986-2016 \- Squarespace, accessed September 23, 2025, [https://static1.squarespace.com/static/5659c9cde4b05079e4b0c3d9/t/5bbc865a0852296a3725ed62/1539081888920/API560-Comparison-All-in-One-05.12.17-Rev+C.pdf](https://static1.squarespace.com/static/5659c9cde4b05079e4b0c3d9/t/5bbc865a0852296a3725ed62/1539081888920/API560-Comparison-All-in-One-05.12.17-Rev+C.pdf)  
6. Q\&A | Enhance Heater Efficiency Today — Furnace Improvements Services Inc., accessed September 23, 2025, [https://www.heatflux.com/question-answers](https://www.heatflux.com/question-answers)  
7. Enhancing Fuel Efficiency in Fired Heaters \- HeaterSIM, accessed September 23, 2025, [https://heatersim.com/knowledge/ReadArticle?Enhancing-Fuel-Efficiency-in-Fired-Heaters-Article-2652023\_18431\_17044](https://heatersim.com/knowledge/ReadArticle?Enhancing-Fuel-Efficiency-in-Fired-Heaters-Article-2652023_18431_17044)  
8. Fired Heater Efficiency Calculations | PDF | Combustion | Fuels \- Scribd, accessed September 23, 2025, [https://www.scribd.com/document/784199454/Fired-Heater-Efficiency-Calculations](https://www.scribd.com/document/784199454/Fired-Heater-Efficiency-Calculations)  
9. Application Data: Flue Gas Analysis as a Diagnostic Tool ... \- Emerson, accessed September 23, 2025, [https://www.emerson.com/documents/automation/application-data-sheet-flue-gas-analysis-as-a-diagnostic-tool-for-fired-process-heater-furnaces-en-72016.pdf](https://www.emerson.com/documents/automation/application-data-sheet-flue-gas-analysis-as-a-diagnostic-tool-for-fired-process-heater-furnaces-en-72016.pdf)  
10. 2\. ENERGY PERFORMANCE ASSESSMENT OF FURNACES, accessed September 23, 2025, [https://beeindia.gov.in/sites/default/files/4Ch2.pdf](https://beeindia.gov.in/sites/default/files/4Ch2.pdf)  
11. Refractory Thickness Calculation \- HeaterSIM, accessed September 23, 2025, [https://www.heatersim.com/knowledge/ReadArticle?Refractory-Thickness-Calculation-Article-952024\_202446\_61506](https://www.heatersim.com/knowledge/ReadArticle?Refractory-Thickness-Calculation-Article-952024_202446_61506)  
12. Fired Heater Health Monitoring and Reliability Management | Quest Integrity, accessed September 23, 2025, [https://www.questintegrity.com/wp-content/uploads/2023/04/eBook-Fired-Heater-Health-Monitoring-and-Reliability-Management.pdf](https://www.questintegrity.com/wp-content/uploads/2023/04/eBook-Fired-Heater-Health-Monitoring-and-Reliability-Management.pdf)  
13. Improve Fired Heater Efficiency and HSE \- Emerson, accessed September 23, 2025, [https://www.emerson.com/documents/automation/brochure-improve-fired-heater-efficiency-hse-en-us-9305164.pdf](https://www.emerson.com/documents/automation/brochure-improve-fired-heater-efficiency-hse-en-us-9305164.pdf)  
14. Correctly Modeling and Calculating Combustion Efficiencies In Fired Equipment, accessed September 23, 2025, [https://collections.lib.utah.edu/dl\_files/44/ae/44aee7ebe4ec70fba32287dd6627e9aa66e43be9.pdf](https://collections.lib.utah.edu/dl_files/44/ae/44aee7ebe4ec70fba32287dd6627e9aa66e43be9.pdf)  
15. API 560 : 2016 FIRED HEATERS FOR GENERAL REFINERY SERVICE \- Intertek Inform, accessed September 23, 2025, [https://www.intertekinform.com/en-us/standards/api-560-2016-97000\_saig\_api\_api\_203217/](https://www.intertekinform.com/en-us/standards/api-560-2016-97000_saig_api_api_203217/)  
16. Fired Heater Efficiency API 560 Method | PDF | Humidity ... \- Scribd, accessed September 23, 2025, [https://www.scribd.com/document/783321296/Fired-Heater-Efficiency-API-560-Method](https://www.scribd.com/document/783321296/Fired-Heater-Efficiency-API-560-Method)  
17. Fired Heater \- Measurement of Efficiency (API 560), accessed September 23, 2025, [https://www.codecalculation.com/htm/calculate/mechanical/heater/efficiency-measurements/](https://www.codecalculation.com/htm/calculate/mechanical/heater/efficiency-measurements/)  
18. Tools \- XRG Technologies, accessed September 23, 2025, [https://xrgtechnologies.com/tools/](https://xrgtechnologies.com/tools/)  
19. (PDF) Calculation of Radiant Section Temperatures in Fired Process ..., accessed September 23, 2025, [https://www.researchgate.net/publication/272981998\_Calculation\_of\_Radiant\_Section\_Temperatures\_in\_Fired\_Process\_Heaters](https://www.researchgate.net/publication/272981998_Calculation_of_Radiant_Section_Temperatures_in_Fired_Process_Heaters)  
20. Fired process heaters 16 \- Engineering.com, accessed September 23, 2025, [https://files.engineering.com/download.aspx?folder=9cfeaa83-8c26-4afb-9dfc-1681f1f4deca\&file=InTech-Fired\_process\_heaters.pdf](https://files.engineering.com/download.aspx?folder=9cfeaa83-8c26-4afb-9dfc-1681f1f4deca&file=InTech-Fired_process_heaters.pdf)  
21. Fired Heater Performance | Chemical | Emerson US, accessed September 23, 2025, [https://www.emerson.com/en-us/industries/automation/chemical/fired-heaters](https://www.emerson.com/en-us/industries/automation/chemical/fired-heaters)  
22. Top Tips for Combustion Analysis in Residential Heating ..., accessed September 23, 2025, [https://www.fieldpiece.com/news-articles/top-tips-for-combustion-analysis-in-residential-heating/](https://www.fieldpiece.com/news-articles/top-tips-for-combustion-analysis-in-residential-heating/)  
23. Flue Gas Analysis | CleanBoiler.org, accessed September 23, 2025, [http://cleanboiler.org/flue-gas-analysis/](http://cleanboiler.org/flue-gas-analysis/)  
24. What to Do and What Not to Do with Your Flue Gas Analyser (Combustion Analyzer), accessed September 23, 2025, [https://www.crowcon.com/article/what-to-do-and-what-not-to-do-with-your-flue-gas-analyser-combustion-analyzer/](https://www.crowcon.com/article/what-to-do-and-what-not-to-do-with-your-flue-gas-analyser-combustion-analyzer/)  
25. Guidelines for Stack Sampling Facilities, accessed September 23, 2025, [https://www.tceq.texas.gov/downloads/compliance/investigations/assistance/stack-sampling-facilities.pdf/@@download/file/stack-sampling-facilities.pdf](https://www.tceq.texas.gov/downloads/compliance/investigations/assistance/stack-sampling-facilities.pdf/@@download/file/stack-sampling-facilities.pdf)  
26. Chapter 62-297 Stationary Sources—Emissions Monitoring, accessed September 23, 2025, [https://19january2021snapshot.epa.gov/sites/static/files/2017-12/documents/chapter-62-297-2017.pdf](https://19january2021snapshot.epa.gov/sites/static/files/2017-12/documents/chapter-62-297-2017.pdf)  
27. Alnor Combustion Gas Analyzer with O2, Flue and Air Temperature CGA-812, accessed September 23, 2025, [https://tsi.com/Discontinued-Products/Alnor-Combustion-Gas-Analyzer-with-O2,-Flue-and-Air-Temperature-CGA-812](https://tsi.com/Discontinued-Products/Alnor-Combustion-Gas-Analyzer-with-O2,-Flue-and-Air-Temperature-CGA-812)  
28. Flue Gas Analyser \- RS Online, accessed September 23, 2025, [https://docs.rs-online.com/0d64/0900766b809682db.pdf](https://docs.rs-online.com/0d64/0900766b809682db.pdf)  
29. T H E R M O X \- AMETEK PROCESS INSTRUMENTS, accessed September 23, 2025, [https://www.ametekpi.com/-/media/ametekpi/files/resource%20center/white%20paper%20library/application%20of%20combustion%20analyzers%20in%20safety%20instrumented%20systems.pdf?la=en/1000](https://www.ametekpi.com/-/media/ametekpi/files/resource%20center/white%20paper%20library/application%20of%20combustion%20analyzers%20in%20safety%20instrumented%20systems.pdf?la=en/1000)  
30. How Can Regular Maintenance of Flue Gas Analyzers Maximize the Performance of ESEGAS Instruments?, accessed September 23, 2025, [https://esegas.com/how-can-regular-maintenance-of-flue-gas-analyzers-maximize-the-performance-of-esegas-instruments/](https://esegas.com/how-can-regular-maintenance-of-flue-gas-analyzers-maximize-the-performance-of-esegas-instruments/)  
31. Guidelines for Continuous Emission Monitoring Systems \- Central Pollution Control Board, accessed September 23, 2025, [https://cpcb.nic.in/upload/thrust-area/Guidelines\_on\_CEMS\_02.08.2017.pdf](https://cpcb.nic.in/upload/thrust-area/Guidelines_on_CEMS_02.08.2017.pdf)  
32. Guidelines for Continuous Emission Monitoring Systems \- Central Pollution Control Board, accessed September 23, 2025, [https://cpcb.nic.in/upload/thrust-area/revised-ocems-guidelines-29.08.2018.pdf](https://cpcb.nic.in/upload/thrust-area/revised-ocems-guidelines-29.08.2018.pdf)  
33. Flue Gas Analysis in Industry \- ResearchGate, accessed September 23, 2025, [https://www.researchgate.net/profile/Prem\_Baboo/post/Testing\_Setup\_for\_Gas\_Composition\_and\_Dust\_Concentration\_measurement/attachment/59d64cf879197b80779a6a0e/AS%3A486321006354433%401492959371834/download/Flue\_Gas\_in\_Industry\_0981\_2773.pdf](https://www.researchgate.net/profile/Prem_Baboo/post/Testing_Setup_for_Gas_Composition_and_Dust_Concentration_measurement/attachment/59d64cf879197b80779a6a0e/AS%3A486321006354433%401492959371834/download/Flue_Gas_in_Industry_0981_2773.pdf)  
34. Stack Emission Monitoring | SGS USA, accessed September 23, 2025, [https://www.sgs.com/en-us/services/stack-emission-monitoring](https://www.sgs.com/en-us/services/stack-emission-monitoring)  
35. EMC: Continuous Emission Monitoring Systems | US EPA, accessed September 23, 2025, [https://www.epa.gov/emc/emc-continuous-emission-monitoring-systems](https://www.epa.gov/emc/emc-continuous-emission-monitoring-systems)  
36. API 560 Fired Heater Design Templates \- HeaterSIM, accessed September 23, 2025, [https://www.heatersim.com/shared/fired-heater/templates](https://www.heatersim.com/shared/fired-heater/templates)  
37. Free Fired Heater Design Tutorial \- Multiple Cell Furnaces \- Esteem Projects, accessed September 23, 2025, [https://www.esteemprojects.com/library/Fired-Heater-Design/page3\_4.htm](https://www.esteemprojects.com/library/Fired-Heater-Design/page3_4.htm)  
38. www.ipieca.org, accessed September 23, 2025, [https://www.ipieca.org/resources/energy-efficiency-compendium/fuel-fired-furnaces-and-boilers-2022\#:\~:text=The%20current%20convection%20section%20was,new%20convection%20section%20was%20designed.](https://www.ipieca.org/resources/energy-efficiency-compendium/fuel-fired-furnaces-and-boilers-2022#:~:text=The%20current%20convection%20section%20was,new%20convection%20section%20was%20designed.)  
39. Complex Channels Make for Better Heat Exchange \- ASME, accessed September 23, 2025, [https://www.asme.org/topics-resources/content/complex-channels-make-for-better-heat-exchange](https://www.asme.org/topics-resources/content/complex-channels-make-for-better-heat-exchange)  
40. Transactions A.S.M.E., accessed September 23, 2025, [https://cybra.lodz.pl/Content/6174/Trans\_vol.67\_no.8\_1945.pdf](https://cybra.lodz.pl/Content/6174/Trans_vol.67_no.8_1945.pdf)  
41. 4.3 Fired Heater (Furnace) \- Engineering.com, accessed September 23, 2025, [https://files.engineering.com/download.aspx?folder=d1a11f5f-c3ff-40ca-904b-24431b75a1cd\&file=FIRED\_HEATER\_.pdf](https://files.engineering.com/download.aspx?folder=d1a11f5f-c3ff-40ca-904b-24431b75a1cd&file=FIRED_HEATER_.pdf)  
42. Furnace Spreadsheet Preprocessor \- AVEVA™ Documentation, accessed September 23, 2025, [https://docs.aveva.com/bundle/dynamic-simulation/page/564272.html](https://docs.aveva.com/bundle/dynamic-simulation/page/564272.html)  
43. OpenFOAM, accessed September 23, 2025, [https://www.openfoam.com/](https://www.openfoam.com/)  
44. heat transfer in furnace : r/ChemicalEngineering \- Reddit, accessed September 23, 2025, [https://www.reddit.com/r/ChemicalEngineering/comments/1axhayn/heat\_transfer\_in\_furnace/](https://www.reddit.com/r/ChemicalEngineering/comments/1axhayn/heat_transfer_in_furnace/)  
45. What Is Real-Time Monitoring in Industrial Heating? \- DHE Heaters, accessed September 23, 2025, [https://dheheaters.com/what-is-real-time-monitoring-in-industrial-heating/](https://dheheaters.com/what-is-real-time-monitoring-in-industrial-heating/)  
46. Furnace Monitoring System | Real-Time Tracking Solution \- Autobits Labs, accessed September 23, 2025, [https://autobitslabs.com/furnace-monitoring/](https://autobitslabs.com/furnace-monitoring/)  
47. List of All ISA Standards by Topic, accessed September 23, 2025, [https://www.isa.org/standards-and-publications/isa-standards/find-isa-standards-by-topic](https://www.isa.org/standards-and-publications/isa-standards/find-isa-standards-by-topic)  
48. Furnace Monitoring \- Idletechs, accessed September 23, 2025, [https://idletechs.com/furnace-monitoring/](https://idletechs.com/furnace-monitoring/)  
49. awakechaudhry/slop-fired-boiler-efficiency-and-fuel-calculation \- GitHub, accessed September 23, 2025, [https://github.com/awakechaudhry/slop-fired-boiler-efficiency-and-fuel-calculation](https://github.com/awakechaudhry/slop-fired-boiler-efficiency-and-fuel-calculation)  
50. Furnace Energy Efficiency \- Socalgas, accessed September 23, 2025, [https://www.socalgas.com/regulatory/documents/a-08-07-022/amendedWorkpapers/SW-IndA/Models%20and%20Model%20Documentation/Furnace%20&%20Ovens%20WP%20(Original).doc](https://www.socalgas.com/regulatory/documents/a-08-07-022/amendedWorkpapers/SW-IndA/Models%20and%20Model%20Documentation/Furnace%20&%20Ovens%20WP%20\(Original\).doc)  
51. Calculation of Efficiency of Furnace | PDF | Energy Technology | Thermodynamics \- Scribd, accessed September 23, 2025, [https://www.scribd.com/document/876751870/Calculation-of-Efficiency-of-Furnace](https://www.scribd.com/document/876751870/Calculation-of-Efficiency-of-Furnace)  
52. heatrapy documentation \- GitHub Pages, accessed September 23, 2025, [https://djsilva99.github.io/heatrapy/](https://djsilva99.github.io/heatrapy/)  
53. djsilva99/heatrapy: Python library for simulating heat transfer processes \- GitHub, accessed September 23, 2025, [https://github.com/djsilva99/heatrapy](https://github.com/djsilva99/heatrapy)  
54. How to Design a Fired Heater \- HeaterSIM, accessed September 23, 2025, [https://www.heatersim.com/knowledge/ReadArticle?Article-2050\_95345](https://www.heatersim.com/knowledge/ReadArticle?Article-2050_95345)  
55. Aspen HYSYS Lecture 23 Fired Heater \- YouTube, accessed September 23, 2025, [https://www.youtube.com/watch?v=7BmHKIHPKHA](https://www.youtube.com/watch?v=7BmHKIHPKHA)  
56. DWSIM – Open-Source Chemical Process Simulator, accessed September 23, 2025, [https://dwsim.org/](https://dwsim.org/)  
57. DWSIM \- Open Source Process Simulator download | SourceForge.net, accessed September 23, 2025, [https://sourceforge.net/projects/dwsim/](https://sourceforge.net/projects/dwsim/)  
58. DWSIM \- Apps on Google Play, accessed September 23, 2025, [https://play.google.com/store/apps/details?id=com.danielmedeiros.dwsim\_simulator](https://play.google.com/store/apps/details?id=com.danielmedeiros.dwsim_simulator)  
59. DWSIM \- Open Source Process Simulator / Discussion / Help ..., accessed September 23, 2025, [https://sourceforge.net/p/dwsim/discussion/844529/thread/9a2591d466/](https://sourceforge.net/p/dwsim/discussion/844529/thread/9a2591d466/)  
60. Energy Savings Calculator \- NATE certification, accessed September 23, 2025, [https://natex.org/homeowner/energy-savings-calculator](https://natex.org/homeowner/energy-savings-calculator)  
61. Furnace Efficiency Calculator \- A.J. Perri, accessed September 23, 2025, [https://www.ajperri.com/heating/furnace-efficiency-calculator](https://www.ajperri.com/heating/furnace-efficiency-calculator)  
62. Furnace Efficiency Calculator \- Weather Master Heating & Air Conditioning, accessed September 23, 2025, [https://www.weathermasterhvac.com/furnace-efficiency-calculator/](https://www.weathermasterhvac.com/furnace-efficiency-calculator/)