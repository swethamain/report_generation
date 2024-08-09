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
const legalDataSet = require("../models/legalData");


const antiBriberyCases = legalDataSet?.find(
  (task) => task.task_name === "Anti-Bribery Cases"
).response;

const antiBriberyCasesDirector = antiBriberyCases.filter(
  (res) => res.question_id === "6582d3e62dbd03ad2d9f17e3"
);

const antiBriberyCasesKMP = antiBriberyCases.filter(
  (res) => res.question_id === "6582d3e62dbd03ad2d9f17e4"
);

const antiBriberyCasesEmployee = antiBriberyCases.filter(
  (res) => res.question_id === "6582d3e62dbd03ad2d9f17e5"
);

const antiBriberyCasesWorker = antiBriberyCases.filter(
  (res) => res.question_id === "6582d3e62dbd03ad2d9f17e6"
);

const principle_1 = () => {
  return new Paragraph({
    children: [
      new TextRun({
        text: "PRINCIPLE 1 Businesses should conduct and govern themselves with  integrity, and in a manner that is Ethical, Transparent and  Accountable.  ",
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

const p1_question_1 = () => {
  return new Paragraph({
    text: "1. Percentage coverage by training and awareness programmes on any of the Principles during the financial year:",
  });
};

const p1_table_question1 = () => {
  return new Table({
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph("Segment")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [
              new Paragraph(
                " Total number of  training and  awareness programmes held "
              ),
            ],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [
              new Paragraph(
                " Topics /  principles covered under  the training and  its impact"
              ),
            ],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [
              new Paragraph(
                " %age of persons in  respective category  covered by the  awareness programmes "
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
        ],
      }),
    ],
  });
};

const p1_question_2 = () => {
  return new Paragraph({
    text: "2. Details of fines / penalties /punishment/ award/ compounding fees/ settlement amount  paid in proceedings (by the entity or by directors / KMPs) with regulators/ law  enforcement agencies/ judicial institutions, in the financial year, in the following format  (Note: the entity shall make disclosures on the basis of materiality as specified in Regulation 30  of SEBI (Listing Obligations and Disclosure Obligations) Regulations, 2015 and as disclosed on  the entity’s website):",
    spacing: {
      before: 200,
      after: 200,
    },
  });
};

const p1_table_question2 = () => {
  return new Table({
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph("Monetary")],
            columnSpan: 10,
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
            children: [new Paragraph(" ")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" NGRBC Principle ")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [
              new Paragraph(
                "Name of the regulatory / enforcement agencies / judicial institutions"
              ),
            ],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" Amount (in INR)")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" Brief of the Case")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [
              new Paragraph(" Has an appeal been preferred? (Yes / No)"),
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
            children: [new Paragraph(" Penalty/ Fine")],
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
            children: [new Paragraph("Settlement")],
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
            children: [new Paragraph("Compounding Fee")],
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
            children: [new Paragraph("Non - Monetary")],
            columnSpan: 10,
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
            children: [new Paragraph(" ")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" NGRBC Principle ")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [
              new Paragraph(
                "Name of the regulatory / enforcement agencies / judicial institutions"
              ),
            ],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" Brief of the Case")],
            columnSpan: 2,
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [
              new Paragraph(" Has an appeal been preferred? (Yes / No)"),
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
            children: [new Paragraph(" Imprisonment")],
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
            children: [new Paragraph(" Punishment ")],
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

const p1_question_3 = () => {
  return new Paragraph({
    text: "3. Of the instances disclosed in Question 2 above, details of the Appeal/ Revision  preferred in cases where monetary or non-monetary action has been appealed.",
    spacing: {
      before: 200,
      after: 200,
    },
  });
};

const p1_table_question3 = () => {
  return new Table({
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph("  Case Details ")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [
              new Paragraph(
                " Name of the regulatory/ enforcement  agencies/ judicial institutions "
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

const p1_question_4 = () => {
  return new Paragraph({
    text: "4. Does the entity have an anti-corruption or anti-bribery policy? If yes, provide details in  brief and if available, provide a web-link to the policy.  ",
    spacing: {
      before: 200,
      after: 200,
    },
  });
};

const p1_question_5 = () => {
  return new Paragraph({
    text: "5. Number of Directors/KMPs/employees/workers against whom disciplinary action was  taken by any law enforcement agency for the charges of bribery/ corruption: ",
    spacing: {
      before: 200,
      after: 200,
    },
  });
};

const p1_table_question5 = () => {
  return new Table({
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" ")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" FY _____ (Current Financial  Year) ")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph("FY _____ (Previous Financial Year)")],
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
            children: [new Paragraph(antiBriberyCasesDirector[0].value)],
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
            children: [new Paragraph(antiBriberyCasesKMP[0].value)],
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
            children: [new Paragraph(antiBriberyCasesEmployee[0].value)],
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
            children: [new Paragraph(antiBriberyCasesWorker[0].value)],
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

const p1_question_6 = () => {
  return new Paragraph({
    text: "6. Details of complaints with regard to conflict of interest:",
    spacing: {
      before: 200,
      after: 200,
    },
  });
};

const p1_table_question6 = () => {
  return new Table({
    rows: [
      new TableRow({
        children: [
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
            children: [new Paragraph(" FY_____  ( Current FY )")],
            columnSpan: 2,
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" FY_____  ( Previous FY )")],
            columnSpan: 2,
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
            children: [new Paragraph(" Number  ")],
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
            children: [new Paragraph(" Number ")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" Remarks ")],
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
            children: [
              new Paragraph(
                " Number of  complaints received  in relation to issues  of Conflict of Interest  of the Directors "
              ),
            ],
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
            children: [
              new Paragraph(
                " Number of  complaints received  in relation to issues  of Conflict of Interest  of the KMPs"
              ),
            ],
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

const p1_question_7 = () => {
  return new Paragraph({
    text: "7. Provide details of any corrective action taken or underway on issues related to fines /  penalties / action taken by regulators/ law enforcement agencies/ judicial institutions, on cases of corruption and conflicts of interest. ",
    spacing: {
      before: 200,
      after: 200,
    },
  });
};

const p1_question_8 = () => {
  return new Paragraph({
    text: "8. Number of days of accounts payables ((Accounts payable *365) / Cost of  goods/services procured) in the following format: . ",
    spacing: {
      before: 200,
      after: 200,
    },
  });
};

const p1_table_question8 = () => {
  return new Table({
    rows: [
      new TableRow({
        children: [
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
            children: [new Paragraph(" FY_____  ( Current FY )")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" FY_____  ( Previous FY )")],
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
            children: [new Paragraph(" Number of days of  accounts payables")],
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


const p1_question_9 = () => {
    return new Paragraph({
      text: "9. Open-ness of business Provide details of concentration of purchases and sales with trading houses, dealers,  and related parties along-with loans and advances & investments, with related parties,  in the following format: ",
      spacing: {
        before: 200,
        after: 200,
      },
    });
  };
  
  const p1_table_question9 = () => {
    return new Table({
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph(" Parameter ")],
              
            }),
            new TableCell({
                width: {
                  size: 5505,
                  type: WidthType.DXA,
                },
                children: [new Paragraph(" Metrics  ")],
                
              }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph(" FY_____  ( Current FY )")],
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph(" FY_____  ( Previous FY )")],
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
              children: [new Paragraph(" Concentration  of Purchases")],
              rowSpan: 3,
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph(" a. Purchases from trading  houses as % of total  purchases  ")],
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
                children: [new Paragraph("b. Number of trading  houses where  purchases are made  from ")],
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
                children: [new Paragraph("c. Purchases from top 10  trading houses as % of  total purchases from  trading houses")],
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
                children: [new Paragraph(" Concentration  of Sales")],
                rowSpan: 3,
              }),
              new TableCell({
                width: {
                  size: 5505,
                  type: WidthType.DXA,
                },
                children: [new Paragraph("a. Sales to dealers /  distributors as % of  total sales ")],
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
                  children: [new Paragraph("b. Number of dealers /  distributors to whom  sales are made")],
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
                  children: [new Paragraph("c. Sales to top 10 dealers  / distributors as % of  total sales to dealers /  distributors")],
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
                    children: [new Paragraph(" Share of RPTs  in")],
                    rowSpan: 4,
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph("a. Purchases (Purchases  with related parties /  Total Purchases)")],
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
                      children: [new Paragraph("b. Sales (Sales to related  parties / Total Sales)")],
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
                      children: [new Paragraph("c. Loans & advances (Loans & advances  given to related parties  / Total loans &  advances) s")],
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
                        children: [new Paragraph("d. Investments ( Investments in related  parties / Total  Investments made)")],
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

  const p1_leadership_indicators = () => {
    return new Paragraph({
      children: [
        new TextRun({
            text: "Essential Indicators ",
            bold: true,
          break: 2,
        }),
        new TextRun({
            text : "1. Awareness programmes conducted for value chain partners on any of the Principles during the financial year:",
          break: 2,
        }),
      ],
    });
  };

  const p1_leadership_question1 = () => {
    return new Table({
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph("Total number of awareness programmes held ")],
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph(" Topics / principles covered under the training ")],
            }),
            new TableCell({
              width: {
                size: 5505,
                type: WidthType.DXA,
              },
              children: [new Paragraph("%age of value chain partners covered (by value of business done with such partners) under the awareness programmes")],
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
              children: [new Paragraph("10")],//ld data value chain 
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

  const p1_leadership_question2 = () => {
    return new Paragraph({
      text: "2. Does the entity have processes in place to avoid/ manage conflict of interests involving  members of the Board? (Yes/No) If Yes, provide details of the same.",
    });
  };

module.exports = {
  principle_1,
  p1_question_1,
  p1_table_question1,
  p1_question_2,
  p1_table_question2,
  p1_question_3,
  p1_table_question3,
  p1_question_4,
  p1_question_5,
  p1_table_question5,
  p1_question_6,
  p1_table_question6,
  p1_question_7,
  p1_question_8,
  p1_table_question8,
  p1_question_9,
  p1_table_question9,
  p1_leadership_indicators,
  p1_leadership_question1,
  p1_leadership_question2,
};
