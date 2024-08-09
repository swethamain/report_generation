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

const principle_7 = () => {
    return new Paragraph({
      children: [
        new TextRun({
          text: "PRINCIPLE 7 Businesses, when engaging in influencing public and  regulatory policy, should do so in a manner that is responsible and  transparent  ",
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

  const questionTradeAssociations = () => {
        return new Paragraph({
          children: [
            new TextRun({
                text: "1. a. Number of affiliations with trade and industry chambers/ associations.",             
              break: 2,
            }),
            new TextRun({
                text: "b. List the top 10 trade and industry chambers/ associations (determined based on the total members of such body) the entity is a member of/ affiliated to.",          
              break: 2,
            }),
          ],
        });
      };

      const tableTradeAssociations = () => {
        return new Table({
            width: {
                size: 100,
                type: WidthType.PERCENTAGE,
            },
            rows: [
                // Header row
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("S. No.")],
                        }),
                        new TableCell({
                            children: [new Paragraph("Name of the trade and industry chambers/ associations")],
                        }),
                        new TableCell({
                            children: [new Paragraph("Reach of trade and industry chambers/ associations (State/National)")],
                        }),
                    ],
                }),
                // Data rows
                 new TableRow({
                    children: [
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

    const questionAntiCompetitiveConduct = () => {
        return new Paragraph({
            text: "2. Provide details of corrective action taken or underway on any issues related to anti competitive conduct by the entity, based on adverse orders from regulatory authorities.   ",
            spacing: { before:200, after: 200 },
        });
    };

    const tableAntiCompetitiveConduct = () => {
        return new Table({
            width: {
                size: 100,
                type: WidthType.PERCENTAGE,
            },
            rows: [
                // Header row
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("Name of authority")],
                        }),
                        new TableCell({
                            children: [new Paragraph("Brief of the case")],
                        }),
                        new TableCell({
                            children: [new Paragraph("Corrective action taken")],
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
                        new TableCell({
                            children: [new Paragraph("")],
                        }),
                    ],
                }),
            ],
        });
    };

    const p7_leadership_indicators = () => {
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

      const questionPublicPolicyPositions = () => {
        return new Paragraph({
            text: "1. Details of public policy positions advocated by the entity: ",
            spacing: { before:200, after: 200 },
        });
    };

      const tablePublicPolicyPositions = () => {
        return new Table({
            width: {
                size: 100,
                type: WidthType.PERCENTAGE,
            },
            rows: [
                // Header row
                new TableRow({
                    children: [
                        new TableCell({
                            children: [new Paragraph("S. No.")],
                        }),
                        new TableCell({
                            children: [new Paragraph("Public policy advocated")],
                        }),
                        new TableCell({
                            children: [new Paragraph("Method resorted for such advocacy")],
                        }),
                        new TableCell({
                            children: [new Paragraph("Whether information available in public domain? (Yes/No)")],
                        }),
                        new TableCell({
                            children: [new Paragraph("Frequency of Review by Board (Annually/ Half yearly/ Quarterly / Others – please specify)")],
                        }),
                        new TableCell({
                            children: [new Paragraph("Web Link, if available")],
                        }),
                    ],
                }),
                // Data rows
                new TableRow({
                    children: [
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

  module.exports = { 
    principle_7,
    questionTradeAssociations,
    tableTradeAssociations,
    questionAntiCompetitiveConduct,
    tableAntiCompetitiveConduct,
    p7_leadership_indicators,
    questionPublicPolicyPositions,
    tablePublicPolicyPositions,
  }
