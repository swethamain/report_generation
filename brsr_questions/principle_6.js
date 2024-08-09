const {
    TextRun,
    File,
    HeadingLevel,
    Packer,
    Paragraph,
    StyleLevel,
    TableOfContents,
    Document,
    Table,
    TableCell,
    TableRow,
    WidthType,
  } = require("docx");
  const docx = require("docx");
  const fs = require("fs");
  const axios = require("axios");
  const dataSet = require("../models/hrGeneralData");

const principle_6 = () => {
    return new Paragraph({
      children: [
        new TextRun({
          text: "PRINCIPLE 6: Businesses should respect and make efforts to protect  and restore the environment ",
          bold: true,
          break: 2,
        }),
        new TextRun({
          text: "Essential Indicators ",
          bold: true,
          break: 2,
        }),
      ],
    });
  };

  const questionEnergyConsumption = () => {
    return new Paragraph({
        text: "1. Employees and workers who have been provided training on human rights issues and  policy(ies) of the entity, in the following format:    ",
        spacing: { before:200, after: 200 },
    });
};

const tableEnergyConsumption = () => {
    return new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        rows: [
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Parameter")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY _____ (Current Financial Year)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY ______ (Previous Financial Year)")],
                    }),
                ],
            }),
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("From renewable sources")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total electricity consumption (A)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total fuel consumption (B)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Energy consumption through other sources (C)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total energy consumed from renewable sources (A+B+C)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("From non-renewable sources")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total electricity consumption (D)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total fuel consumption (E)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Energy consumption through other sources (F)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total energy consumed from non-renewable sources (D+E+F)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total energy consumed (A+B+C+D+E+F)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Energy intensity per rupee of turnover (Total energy consumed / Revenue from operations)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Energy intensity per rupee of turnover adjusted for Purchasing Power Parity (PPP) (Total energy consumed / Revenue from operations adjusted for PPP)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Energy intensity in terms of physical output")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Energy intensity (optional) – the relevant metric may be selected by the entity")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
        ],
    });
};

const noteEnergyConsumption = () => {
    return new Paragraph({
        text: "Note: Indicate if any independent assessment/ evaluation/assurance has been carried out by an  external agency? (Y/N) If yes, name of the external agency  ",
        spacing: { before:200, after: 200 },
    });
};

const questionPATScheme = () => {
    return new Paragraph({
        text: "2. Does the entity have any sites / facilities identified as designated consumers (DCs) under the Performance, Achieve and Trade (PAT) Scheme of the Government of India? (Y/N) If yes, disclose whether targets set under the PAT scheme have been achieved. In case targets have not been achieved, provide the remedial action taken, if any.",
        spacing: { after: 200 },
    });
};

const questionWaterDisclosures = () => {
    return new Paragraph({
        text: "3. Provide details of the following disclosures related to water, in the following format:",
        spacing: { after: 200 },
    });
};

const tableWaterDisclosures = () => {
    return new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        rows: [
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Parameter")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY _____ (Current Financial Year)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY ______ (Previous Financial Year)")],
                    }),
                ],
            }),
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Water withdrawal by source (in kilolitres)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("(i) Surface water")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("(ii) Groundwater")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("(iii) Third party water")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("(iv) Seawater / desalinated water")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("(v) Others")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total volume of water withdrawal (in kilolitres) (i + ii + iii + iv + v)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total volume of water consumption (in kilolitres)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Water intensity per rupee of turnover (Total water consumption / Revenue from operations)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Water intensity per rupee of turnover adjusted for Purchasing Power Parity (PPP) (Total water consumption / Revenue from operations adjusted for PPP)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Water intensity in terms of physical output")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Water intensity (optional) – the relevant metric may be selected by the entity")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
        ],
    });
};

const noteWaterDisclosures = () => {
    return new Paragraph({
        text: "Note: Indicate if any independent assessment/ evaluation/assurance has been carried out by an external  agency? (Y/N) If yes, name of the external agency. ",
        spacing: { before:200, after: 200 },
    });
};

const questionWaterDischargeDetails = () => {
    return new Paragraph({
        text: "4. Provide the following details related to water discharged:",
        spacing: { after: 200 },
    });
};

const tableWaterDischargeDetails = () => {
    return new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        rows: [
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Parameter")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY _____ (Current Financial Year)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY ______ (Previous Financial Year)")],
                    }),
                ],
            }),
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Water discharge by destination and level of treatment (in kilolitres)")],
                        columnSpan: 3,
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("(i) To Surface water")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("- No treatment")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("- With treatment – please specify level of treatment")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("(ii) To Groundwater")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("- No treatment")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("- With treatment – please specify level of treatment")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("(iii) To Seawater")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("- No treatment")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("- With treatment – please specify level of treatment")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("(iv) Sent to third-parties")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("- No treatment")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("- With treatment – please specify level of treatment")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("(v) Others")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("- No treatment")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("- With treatment – please specify level of treatment")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total water discharged (in kilolitres)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
        ],
    });
};

const questionZeroLiquidDischarge = () => {
    return new Paragraph({
        text: "5. Has the entity implemented a mechanism for Zero Liquid Discharge? If yes, provide details of its coverage and implementation.",
        spacing: { after: 200 },
    });
};


const questionAirEmissions  = () => {
    return new Paragraph({
        text: "6. Please provide details of air emissions (other than GHG emissions) by the entity, in the  following format:",
        spacing: { after: 200 },
    });
};

const tableAirEmissions = () => {
    return new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        rows: [
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Parameter")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Please specify unit")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY _____ (Current Financial Year)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY ______ (Previous Financial Year)")],
                    }),
                ],
            }),
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("NOx")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("SOx")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Particulate matter (PM)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Persistent organic pollutants (POP)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Volatile organic compounds (VOC)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Hazardous air pollutants (HAP)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Others – please specify")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
        ],
    });
};


const noteAirEmissions = () => {
    return new Paragraph({
        text: "Note: Indicate if any independent assessment/ evaluation/assurance has been carried out by an external  agency? (Y/N) If yes, name of the external agency. ",
        spacing: { before:200, after: 200 },
    });
};

const questionGHGEmissions = () => {
    return new Paragraph({
        text: "7. Provide details of greenhouse gas emissions (Scope 1 and Scope 2 emissions) & its  intensity, in the following format: ",
        spacing: { before:200, after: 200 },
    });
};

const tableGHGEmissions = () => {
    return new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        rows: [
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Parameter")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Unit")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY _____ (Current Financial Year)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY ______ (Previous Financial Year)")],
                    }),
                ],
            }),
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total Scope 1 emissions (Break-up of the GHG into CO2, CH4, N2O, HFCs, PFCs, SF6, NF3, if available)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Metric tonnes of CO2 equivalent")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total Scope 2 emissions (Break-up of the GHG into CO2, CH4, N2O, HFCs, PFCs, SF6, NF3, if available)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Metric tonnes of CO2 equivalent")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total Scope 1 and Scope 2 emission intensity per rupee of turnover (Total Scope 1 and Scope 2 GHG emissions / Revenue from operations)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total Scope 1 and Scope 2 emission intensity per rupee of turnover adjusted for Purchasing Power Parity (PPP) (Total Scope 1 and Scope 2 GHG emissions / Revenue from operations adjusted for PPP)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total Scope 1 and Scope 2 emission intensity in terms of physical output")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total Scope 1 and Scope 2 emission intensity (optional) – the relevant metric may be selected by the entity")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
        ],
    });
};

const noteGHGEmissions = () => {
    return new Paragraph({
        text: "Note: Indicate if any independent assessment/ evaluation/assurance has been carried out by an external  agency? (Y/N) If yes, name of the external agency. ",
        spacing: { before:200, after: 200 },
    });
};

const questionGHGProject = () => {
    return new Paragraph({
        text: "8. Does the entity have any project related to reducing Green House Gas emission? If Yes, then provide details.",
        spacing: { after: 200 },
    });
};

const questionWasteManagement = () => {
    return new Paragraph({
        text: "9. Provide details related to waste management by the entity, in the following format:",
        spacing: { after: 200 },
    });
};

const tableWasteManagement = () => {
    return new Table({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        rows: [
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Parameter")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY _____ (Current Financial Year)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY ______ (Previous Financial Year)")],
                    }),
                ],
            }),
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total Waste generated (in metric tonnes)")],
                        columnSpan: 3,
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Plastic waste (A)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("E-waste (B)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Bio-medical waste (C)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Construction and demolition waste (D)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Battery waste (E)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Radioactive waste (F)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Other Hazardous waste. Please specify, if any. (G)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Other Non-hazardous waste generated (H). Please specify, if any. (Break-up by composition i.e. by materials relevant to the sector)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total (A+B + C + D + E + F + G + H)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Waste intensity per rupee of turnover (Total waste generated / Revenue from operations)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Waste intensity per rupee of turnover adjusted for Purchasing Power Parity (PPP) (Total waste generated / Revenue from operations adjusted for PPP)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Waste intensity in terms of physical output")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Waste intensity (optional) – the relevant metric may be selected by the entity")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("For each category of waste generated, total waste recovered through recycling, re-using or other recovery operations (in metric tonnes)")],
                        columnSpan: 3,
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Category of waste")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("(i) Recycled")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("(ii) Re-used")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("(iii) Other recovery operations")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("For each category of waste generated, total waste disposed by nature of disposal method (in metric tonnes)")],
                        columnSpan: 3,
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Category of waste")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("(i) Incineration")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("(ii) Landfilling")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("(iii) Other disposal operations")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                ],
            }),
        ],
    });
};

const noteWasteManagement = () => {
    return new Paragraph({
        text: "Note: Indicate if any independent assessment/ evaluation/assurance has been carried out by an external  agency? (Y/N) If yes, name of the external agency. ",
        spacing: { before:200, after: 200 },
    });
};

const detailsWasteManagement = () => {
    return new Paragraph({
        text: "10. Briefly describe the waste management practices adopted in your establishments. Describe the strategy adopted by your company to reduce usage of hazardous and toxic chemicals in your products and processes and the practices adopted to manage such wastes.",
        spacing: { after: 200 },
    });
};

const questionEcologicallySensitiveAreas = () => {
    return new Paragraph({
        text: "11. If the entity has operations/offices in/around ecologically sensitive areas (such as national parks, wildlife sanctuaries, biosphere reserves, wetlands, biodiversity hotspots, forests, coastal regulation zones etc.) where environmental approvals / clearances are required, please specify details in the following format:",
        spacing: { after: 200 },
    });
};


const tableEcologicallySensitiveAreas = () => {
    return new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("S. No.")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Location of operations/offices")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Type of operations")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Whether the conditions of environmental approval / clearance are being complied with? (Y/N) If no, the reasons thereof and corrective action taken, if any.")],
                    }),
                ],
            }),
            
        ],
    });
};

const questionEnvironmentalImpactAssessments = () => {
    return new Paragraph({
        text: "12. Details of environmental impact assessments of projects undertaken by the entity based  on applicable laws, in the current financial year: ",
        spacing: { after: 200 },
    });
};

const tableEnvironmentalImpactAssessments = () => {
    return new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Name and brief details of project")],
                    }),
                    new TableCell({
                        children: [new Paragraph("EIA Notification No.")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Date")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Whether conducted by independent external agency (Yes / No)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Results communicated in public domain (Yes / No)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Relevant Web link")],
                    }),
                ],
            }),
            
        ],
    });
};

const questionEnvironmentalNonCompliance = () => {
    return new Paragraph({
        text: "13. Is the entity compliant with the applicable environmental law/ regulations/ guidelines in India; such as the Water (Prevention and Control of Pollution) Act, Air (Prevention and Control of Pollution) Act, Environment protection act and rules thereunder (Y/N). If not, provide details of all such non-compliances, in the following format: ",
        spacing: { after: 200 },
    });
};

const tableEnvironmentalNonCompliance = () => {
    return new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("S. No.")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Specify the law / regulation / guidelines which was not complied with")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Provide details of the non-compliance")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Any fines / penalties / action taken by regulatory agencies such as pollution control boards or by courts")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Corrective action taken, if any")],
                    }),
                ],
            }),
            
        ],
    });
};

const p6_leadership_indicators = () => {
    return new Paragraph({
      children: [
        new TextRun({
            text: "Leadership Indicators ",
            bold: true,
          break: 2,
        }),
      ],
    });
  };    

  const questionWaterStress = () => {
    return new Paragraph({
        text: "1. Water withdrawal, consumption and discharge in areas of water stress (in kilolitres): For each facility / plant located in areas of water stress, provide the following information:  (i) Name of the area (ii) Nature of operations(iii) Water withdrawal, consumption and discharge in the following format: ",
        spacing: { after: 200 },
    });
};

const tableWaterStress = () => {
        return new Table({
            width: {
                size: 100,
                type: WidthType.PERCENTAGE,
            },
            rows: [
                
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("Parameter")],
                        }),
                        new TableCell({
                            children: [new Paragraph("FY _____ (Current Financial Year)")],
                        }),
                        new TableCell({
                            children: [new Paragraph("FY ______ (Previous Financial Year)")],
                        }),
                    ],
                }),
                
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("Water withdrawal by source (in kilolitres)")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("(i) Surface water")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("(ii) Groundwater")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("(iii) Third party water")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("(iv) Seawater / desalinated water")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("(v) Others")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("Total volume of water withdrawal (in kilolitres)")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("Total volume of water consumption (in kilolitres)")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("Water intensity per rupee of turnover (Water consumed / turnover)")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("Water intensity (optional) – the relevant metric may be selected by the entity")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("Water discharge by destination and level of treatment (in kilolitres)")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("(i) Into Surface water")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("- No treatment")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("- With treatment – please specify level of treatment")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("(ii) Into Groundwater")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("- No treatment")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("- With treatment – please specify level of treatment")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("(iii) Into Seawater")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("- No treatment")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("- With treatment – please specify level of treatment")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("(iv) Sent to third-parties")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("- No treatment")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("- With treatment – please specify level of treatment")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("(v) Others")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("- No treatment")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("- With treatment – please specify level of treatment")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("Total water discharged (in kilolitres)")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
            ],
        });
    };

const noteWaterStress = () => {
    return new Paragraph({
        text: "Note: Indicate if any independent assessment/ evaluation/assurance has been carried out by an external  agency? (Y/N) If yes, name of the external agency. ",
        spacing: { before:200, after: 200 },
    });
};

const questionScope3Emissions  = () => {
    return new Paragraph({
        text: "2. Please provide details of total Scope 3 emissions & its intensity, in the following format:  ",
        spacing: { before:200, after: 200 },
    });
};

const tableScope3Emissions = () => {
    return new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Parameter")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Unit")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY _____ (Current Financial Year)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY ______ (Previous Financial Year)")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total Scope 3 emissions (Break-up of the GHG into CO2, CH4, N2O, HFCs, PFCs, SF6, NF3, if available)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Metric tonnes of CO2 equivalent")],
                    }),
                    new TableCell({ children: [new Paragraph("")],}),
                    new TableCell({ children: [new Paragraph("")],}),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total Scope 3 emissions per rupee of turnover")],
                    }),
                    new TableCell({ children: [new Paragraph("")],}),
                    new TableCell({ children: [new Paragraph("")],}),
                    new TableCell({ children: [new Paragraph("")],}),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total Scope 3 emission intensity (optional) – the relevant metric may be selected by the entity")],
                    }),
                    new TableCell({ children: [new Paragraph("")],}),
                    new TableCell({ children: [new Paragraph("")],}),
                    new TableCell({ children: [new Paragraph("")],}),
                ],
            }),
        ],
    });
};

const noteScope3Emissions = () => {
    return new Paragraph({
        text: "Note: Indicate if any independent assessment/ evaluation/assurance has been carried out by an external  agency? (Y/N) If yes, name of the external agency. ",
        spacing: { before:200, after: 200 },
    });
};

const questionImpactOnBiodiversity = () => {
    return new Paragraph({
        text: "3. With respect to the ecologically sensitive areas reported at Question 11 of Essential Indicators above, provide details of significant direct & indirect impact of the entity on biodiversity in such areas along-with prevention and remediation activities.",
        spacing: { before: 200, after: 200 },
    });
};

const questionResourceEfficiencyInitiatives = () => {
    return new Paragraph({
        text: "4. If the entity has undertaken any specific initiatives or used innovative technology or solutions to improve resource efficiency, or reduce impact due to emissions / effluent discharge / waste generated, please provide details of the same as well as outcome of such initiatives, as per the following format:",
        spacing: { before: 200, after: 200 },
    });
};

const tableResourceEfficiencyInitiatives = () => {
    return new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Sr. No ")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Initiative undertaken")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Details of the initiative (Web-link, if  any, may be provided along-with  summary)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Outcome of  the initiative ")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({ children: [new Paragraph("")],}),
                    new TableCell({ children: [new Paragraph("")],}),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({ children: [new Paragraph("")],}),
                    new TableCell({ children: [new Paragraph("")],}),
                    new TableCell({ children: [new Paragraph("")],}),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("")],
                    }),
                    new TableCell({ children: [new Paragraph("")],}),
                    new TableCell({ children: [new Paragraph("")],}),
                    new TableCell({ children: [new Paragraph("")],}),
                ],
            }),
        ],
    });
};

const questionBusinessContinuityPlan = () => {
    return new Paragraph({
        text: "5. Does the entity have a business continuity and disaster management plan? Give details in 100 words/ web link.",
        spacing: { before: 200, after: 200 },
    });
};

const questionAdverseEnvironmentalImpact = () => {
    return new Paragraph({
        text: "6. Disclose any significant adverse impact to the environment, arising from the value chain of the entity. What mitigation or adaptation measures have been taken by the entity in this regard.",
        spacing: { before: 200, after: 200 },
    });
};

const questionValueChainAssessment = () => {
    return new Paragraph({
        text: "7. Percentage of value chain partners (by value of business done with such partners) that were assessed for environmental impacts.",
        spacing: { before: 200, after: 200 },
    });
};

module.exports = {
    principle_6,
    questionEnergyConsumption,
    tableEnergyConsumption,
    noteEnergyConsumption,
    questionPATScheme,
    questionWaterDisclosures,
    tableWaterDisclosures,
    noteWaterDisclosures,
    questionWaterDischargeDetails,
    tableWaterDischargeDetails,
    questionZeroLiquidDischarge,
    questionAirEmissions,
    tableAirEmissions,
    noteAirEmissions,
    questionGHGEmissions,
    tableGHGEmissions,
    noteGHGEmissions,
    questionGHGProject,
    questionWasteManagement,
    tableWasteManagement,
    noteWasteManagement,
    detailsWasteManagement,
    questionEcologicallySensitiveAreas,
    tableEcologicallySensitiveAreas,
    questionEnvironmentalImpactAssessments,
    tableEnvironmentalImpactAssessments,
    questionEnvironmentalNonCompliance,
    tableEnvironmentalNonCompliance,
    p6_leadership_indicators,
    questionWaterStress,
    tableWaterStress,
    noteWaterStress,
    questionScope3Emissions,
    tableScope3Emissions,
    noteScope3Emissions,
    questionImpactOnBiodiversity,
    questionResourceEfficiencyInitiatives,
    tableResourceEfficiencyInitiatives,
    questionBusinessContinuityPlan,
    questionAdverseEnvironmentalImpact,
    questionValueChainAssessment,
}