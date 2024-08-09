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

const principle_5 = () => {
    return new Paragraph({
      children: [
        new TextRun({
          text: "PRINCIPLE 5 Businesses should respect and promote human rights",
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

  const questionHumanRightsTraining = () => {
    return new Paragraph({
        text: "1. Employees and workers who have been provided training on human rights issues and  policy(ies) of the entity, in the following format:    ",
        spacing: { before:200, after: 200 },
    });
};

const tableHumanRightsTraining = () => {
    return new Table({
        columnWidths: [2000, 1500, 1500, 2000, 1500, 1500, 1500, 1500, 1500],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Category")],
                        rowSpan:2,
                    }),
                    new TableCell({
                        children: [new Paragraph("FY _____ Current Financial Year")],
                        columnSpan: 3,
                    }),
                    new TableCell({
                        children: [new Paragraph("FY _____ Previous Financial Year")],
                        columnSpan: 3,
                    }),
                ],
            }),
            new TableRow({
                children: [
        
                    new TableCell({children:  [new Paragraph("Total (A)")],}),
                    new TableCell({ children: [new Paragraph("Total no. of employees/workers covered (B)")] }),
                    new TableCell({ children: [new Paragraph("% (B / A)")] }),
                    new TableCell({ children: [new Paragraph("Total (C)")] }),
                    new TableCell({ children: [new Paragraph("Total no. of employees/workers covered (D)")] }),
                    new TableCell({ children: [new Paragraph("% (D / C)")] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [ new Paragraph (" Employees ")],
                        columnSpan: 7,
                    }),
                ]
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Male")],
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
                        children: [new Paragraph("Female")],
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
                        children: [new Paragraph("Total")],
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
                        children: [ new Paragraph (" Workers ")],
                        columnSpan: 7,
                    }),
                ]
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Male ")],
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
                        children: [new Paragraph("  Female ")],
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
                        children: [new Paragraph("Total Permanent Workers ")],
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

const questionMinimumWages  = () => {
    return new Paragraph({
        text: "1. Employees and workers who have been provided training on human rights issues and  policy(ies) of the entity, in the following format:    ",
        spacing: { before:200, after: 200 },
    });
};

const tableMinimumWages = () => {
    return new Table({
        rows: [
            new TableRow({
                children: [
                new TableCell({ children: [new Paragraph("Category")],
                    rowSpan: 3,
                 }),
                new TableCell({ children: [new Paragraph("FY _____ (Current Financial Year)")],
                    columnSpan: 5,
                 }),
                new TableCell({ children: [new Paragraph("FY _____ (Previous Financial Year)")],
                    columnSpan: 5,
                 }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Total (A)")],
                        rowSpan:2,
                     }),
                    new TableCell({ children: [new Paragraph("Equal to Minimum Wage (B)")],
                        columnSpan: 2,
                     }),
                    new TableCell({ children: [new Paragraph("More than Minimum Wage (C)")],
                        columnSpan: 2,
                     }),
                    new TableCell({ children: [new Paragraph("Total (D)")],
                        rowSpan:2,
                     }),
                    new TableCell({ children: [new Paragraph("Equal to Minimum Wage (E)")],
                        columnSpan: 2,
                     }),
                    new TableCell({ children: [new Paragraph("More than Minimum Wage (F)")],
                        columnSpan: 2,
                     }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("% (B / A)")] }),
                    new TableCell({ children: [new Paragraph("% (C / A)")] }),
                    new TableCell({ children: [new Paragraph("% (E / D)")] }),
                    new TableCell({ children: [new Paragraph("% (F / D)")] }),
                    new TableCell({ children: [new Paragraph("% (B / A)")] }),
                    new TableCell({ children: [new Paragraph("% (C / A)")] }),
                    new TableCell({ children: [new Paragraph("% (E / D)")] }),
                    new TableCell({ children: [new Paragraph("% (F / D)")] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [ new Paragraph ({ text: "Employees", alignment: "center" })],
                        columnSpan: 11,
                    }),
                ]
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Permanent")],
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
                    new TableCell({
                        children: [new Paragraph("")], 
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
                        children: [new Paragraph("Male")],
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
                    new TableCell({
                        children: [new Paragraph("")], 
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
                        children: [new Paragraph("Female")],
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
                    new TableCell({
                        children: [new Paragraph("")], 
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
                        children: [new Paragraph("Other than Permanent")],
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
                    new TableCell({
                        children: [new Paragraph("")], 
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
                        children: [new Paragraph("Male")],
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
                    new TableCell({
                        children: [new Paragraph("")], 
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
                        children: [new Paragraph("Female")],
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
                    new TableCell({
                        children: [new Paragraph("")], 
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
                        children: [ new Paragraph ({text : " Workers " , alignment: "center"})],
                        columnSpan: 11,
                    }),
                ]
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Permanent")],
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
                    new TableCell({
                        children: [new Paragraph("")], 
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
                        children: [new Paragraph("Male")],
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
                    new TableCell({
                        children: [new Paragraph("")], 
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
                        children: [new Paragraph("Female")],
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
                    new TableCell({
                        children: [new Paragraph("")], 
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
                        children: [new Paragraph("Other than Permanent")],
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
                    new TableCell({
                        children: [new Paragraph("")], 
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
                        children: [new Paragraph("Male")],
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
                    new TableCell({
                        children: [new Paragraph("")], 
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
                        children: [new Paragraph("Female")],
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
                    new TableCell({
                        children: [new Paragraph("")], 
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
        ]
    });
};

const questionRemunerationWages = () => {
    return new Paragraph({
        text: "3. Details of remuneration/salary/wages a. Median remuneration / wages: ",
        spacing: { after: 200 },
    });
};

const tableRemunerationWages = () => {
    return new Table({
      rows: [
        new TableRow({
            children:[
                new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph("  ")],
                    rowSpan: 2,
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(" Male ")],
                    columnSpan: 2,
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(" Female ")],
                    columnSpan: 2,
                  }),
            ]
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph(" Number ")],
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [
                new Paragraph(
                  " Median remuneration/ salary/  wages of respective category "
                ),
              ],
            }),
            new TableCell({
                width: {
                  size: 5505,
                  type: WidthType.DXA,
                },
                children: [new Paragraph(" Number ")],
              }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [
                new Paragraph(
                  " Median remuneration/ salary/ wages of respective category"
                ),
              ],
            }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph(" Board of Directors ")],
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph("  ")],
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph("  ")],
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph("  ")],
            }),
            new TableCell({
                width: {
                  size: 5505,
                  type: WidthType.DXA,
                },
                children: [new Paragraph("  ")],
              }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph(" Key Managerial Personnel ")],
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph("  ")],
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph("  ")],
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph("  ")],
            }),
            new TableCell({
                width: {
                  size: 5505,
                  type: WidthType.DXA,
                },
                children: [new Paragraph("  ")],
              }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph(" Employees other than BoD and KMPs")],
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph("  ")],
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph("  ")],
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph("  ")],
            }),
            new TableCell({
                width: {
                  size: 5505,
                  type: WidthType.DXA,
                },
                children: [new Paragraph("  ")],
              }),
          ],
        }),
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph(" Workers")],
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph("  ")],
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph("  ")],
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph("  ")],
            }),
            new TableCell({
                width: {
                  size: 5505,
                  type: WidthType.DXA,
                },
                children: [new Paragraph("  ")],
              }),
          ],
        }),
      ],
    });
  };

  const questionGrossWagesFemales = () => {
    return new Paragraph({
        text: "b. Gross wages paid to females as % of total wages paid by the entity, in the following  format: ",
        spacing: { after: 200 },
    });
};

  const tableGrossWagesFemales = () => {
    return new Table({
        columnWidths: [5000, 2500, 2500],
        rows: [
            
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph(" ")] }),
                    new TableCell({ children: [new Paragraph("FY _____ (Current Financial Year)")] }),
                    new TableCell({ children: [new Paragraph("FY _____ (Previous Financial Year)")] }),
                ],
            }),

            
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Gross wages paid to females as % of total wages")] }),
                    new TableCell({ children: [new Paragraph("")] }), 
                    new TableCell({ children: [new Paragraph("")] }), 
                ],
            }),
        ],
    });
};

const questionHumanRightsFocalPoint = () => {
    return new Paragraph({
        text: "4. Do you have a focal point (Individual/ Committee) responsible for addressing human  rights impacts or issues caused or contributed to by the business? (Yes/No) ",
        spacing: { after: 200 },
    });
};

const questionInternalMechanisms = () => {
    return new Paragraph({
        text: "5. Describe the internal mechanisms in place to redress grievances related to human rights  issues.  ",
        spacing: { after: 200 },
    });
};

const questionEmployeeComplaints = () => {
    return new Paragraph({
        text: "6. Number of Complaints on the following made by employees and workers:  ",
        spacing: { after: 200 },
    });
};

const tableEmployeeComplaints = () => {
    return new Table ({
     rows :[
         new TableRow({
             children : [
                 new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  ")],
                     rowSpan: 2,
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph(" FY_____  (Current FY )")],
                     columnSpan: 3,
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [
                       new Paragraph(" FY_____  (Previous FY )"),
                     ],
                     columnSpan: 3,
                   }),
             ]
         }),
         new TableRow({
             children:[
                 new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph(" Number of  complaints  filed during the  year ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph(" Number of  complaints  pending resolution  at close of  the year ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  Remarks ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph(" Number of  complaints  filed during the  year ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph(" Number of  complaints  pending resolution  at close of  the year ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph(" Remarks ")],
                   }),
             ]
         }),
       new TableRow({
         children:[
             new TableCell({
                 width: {
                   size: 5505,
                   type: WidthType.DXA,
                 },
                 children: [new Paragraph(" Sexual Harassment")],
               }),
               new TableCell({
                 width: {
                   size: 5505,
                   type: WidthType.DXA,
                 },
                 children: [new Paragraph("0")],
               }),
               new TableCell({
                 width: {
                   size: 5505,
                   type: WidthType.DXA,
                 },
                 children: [new Paragraph("0")],
               }),
               new TableCell({
                 width: {
                   size: 5505,
                   type: WidthType.DXA,
                 },
                 children: [new Paragraph("  ")],
               }),
               new TableCell({
                 width: {
                   size: 5505,
                   type: WidthType.DXA,
                 },
                 children: [new Paragraph("  ")],
               }),
               new TableCell({
                 width: {
                   size: 5505,
                   type: WidthType.DXA,
                 },
                 children: [new Paragraph("  ")],
               }),
               new TableCell({
                 width: {
                   size: 5505,
                   type: WidthType.DXA,
                 },
                 children: [new Paragraph("  ")],
               }),
         ]
     }),
         new TableRow({
             children:[
                 new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph(" Discrimination at  workplace ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("0")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("0")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  ")],
                   }),
             ]
         }),
         new TableRow({
             children:[
                 new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph(" Child Labour ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("0")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("0")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("   ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  ")],
                   }),
             ]
         }),
         new TableRow({
             children:[
                 new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph(" Forced Labour/Involuntary Labour ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("0")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("0")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("   ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  ")],
                   }),
             ]
         }), 
         new TableRow({
             children:[
                 new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph(" Wages ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("0")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("0")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("   ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  ")],
                   }),
             ]
         }), 
         new TableRow({
             children:[
                 new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph(" Other human  rights related  issues ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("0")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("0")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("   ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  ")],
                   }),
                   new TableCell({
                     width: {
                       size: 5505,
                       type: WidthType.DXA,
                     },
                     children: [new Paragraph("  ")],
                   }),
             ]
         }), 
     ],
 })
 };

 const questionPoshFemales = () => {
    return new Paragraph({
        text: "7. Complaints filed under the Sexual Harassment of Women at Workplace (Prevention,  Prohibition and Redressal) Act, 2013, in the following format:   ",
        spacing: { after: 200 },
    });
};

 const tablePoshFemales = () => {
    return new Table({
        columnWidths: [5000, 2500, 2500],
        rows: [
            
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph(" ")] }),
                    new TableCell({ children: [new Paragraph("FY _____ (Current Financial Year)")] }),
                    new TableCell({ children: [new Paragraph("FY _____ (Previous Financial Year)")] }),
                ],
            }),

            
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Total Complaints reported under Sexual Harassment on of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH) ")] }),
                    new TableCell({ children: [new Paragraph("")] }), 
                    new TableCell({ children: [new Paragraph("")] }), 
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Complaints on POSH as a % of female employees / workers ")] }),
                    new TableCell({ children: [new Paragraph("")] }), 
                    new TableCell({ children: [new Paragraph("")] }), 
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Complaints on POSH upheld")] }),
                    new TableCell({ children: [new Paragraph("")] }), 
                    new TableCell({ children: [new Paragraph("")] }), 
                ],
            }),
        ],
    });
};

const questionAdverseConsequences = () => {
    return new Paragraph({
        text: "8. Mechanisms to prevent adverse consequences to the complainant in discrimination and harassment cases.",
        spacing: { after: 200 },
    });
};

const questionHumanRightsRequirements = () => {
    return new Paragraph({
        text: "9. Do human rights requirements form part of your business agreements and contracts? (Yes/No)",
        spacing: { after: 200 },
    });
};

const questionAssessmentPlants = () => {
    return new Paragraph({
        text: "10. Assessments for the year: ",
        spacing: { after: 200 },
    });
};

const tableAssessmentPlants = () => {
    return new Table({
        columnWidths: [4000, 8000],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph(" ")],
                    }),
                    new TableCell({
                        children: [new Paragraph("% of your plants and offices that were assessed (by entity or statutory authorities or third parties) ")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Child labour")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Forced/involuntary labour")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Sexual harassment ")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Discrimination at workplace")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Wages ")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Others – please specify ")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
        ],
    });
};

const p5_leadership_indicators = () => {
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

  const questionBusinessProcessModified = () => {
    return new Paragraph({
        text: "1. Details of a business process being modified / introduced as a result of addressing human rights grievances/complaints.",
        spacing: { after: 200 },
    });
};

const questionHumanRightsDueDiligence = () => {
    return new Paragraph({
        text: "2. Details of the scope and coverage of any Human rights due-diligence conducted.",
        spacing: { after: 200 },
    });
};

const questionDisabilityAccessibility = () => {
    return new Paragraph({
        text: "3. Is the premise/office of the entity accessible to differently abled visitors, as per the requirements of the Rights of Persons with Disabilities Act, 2016?",
        spacing: { after: 200 },
    });
};

const questionAssessmentPlantsValueChain = () => {
    return new Paragraph({
        text: "4. Details on assessment of value chain partners:",
        spacing: { after: 200 },
    });
};

const tableAssessmentPlantsValuChain = () => {
    return new Table({
        columnWidths: [4000, 8000],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph(" ")],
                    }),
                    new TableCell({
                        children: [new Paragraph("% of value chain partners (by value of business done  with such partners) that were assessed ")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Child labour")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Forced/involuntary labour")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Sexual harassment ")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Discrimination at workplace")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Wages ")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Others – please specify ")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
        ],
    });
};

const questionAssessmentMeasures = () => {
    return new Paragraph({
        text: "5. Provide details of any corrective actions taken or underway to address significant risks /  concerns arising from the assessments at Question 4 above. ",
        spacing: { after: 200 },
    });
};




module.exports = {
    principle_5,
    questionHumanRightsTraining,
    tableHumanRightsTraining,
    questionMinimumWages,
    tableMinimumWages,
    questionRemunerationWages,
    tableRemunerationWages,
    questionGrossWagesFemales,
    tableGrossWagesFemales,
    questionHumanRightsFocalPoint,
    questionInternalMechanisms,
    questionEmployeeComplaints,
    tableEmployeeComplaints,
    questionPoshFemales,
    tablePoshFemales,
    questionAdverseConsequences,
    questionHumanRightsRequirements,
    questionAssessmentPlants,
    tableAssessmentPlants,
    p5_leadership_indicators,
    questionBusinessProcessModified,
    questionHumanRightsDueDiligence,
    questionDisabilityAccessibility,
    questionAssessmentPlantsValueChain,
    tableAssessmentPlantsValuChain,
    questionAssessmentMeasures,

}