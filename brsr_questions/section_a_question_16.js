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

const businessData = dataSet[0].response.business;

const question_16 = () => {
  return new Paragraph({
    text: "16. Details of business activities (accounting for 90% of the turnover): ",
    spacing: {
      after: 200,
    }
  })
};
const businessHeaderRow = new TableRow({
  children: [
    new TableCell({
      width: {
        size: 3505,
        type: WidthType.DXA,
      },
      children: [new Paragraph("S. No")],
    }),
    new TableCell({
      width: {
        size: 5505,
        type: WidthType.DXA,
      },
      children: [new Paragraph("Description of Main Activity")],
    }),
    new TableCell({
      width: {
        size: 5505,
        type: WidthType.DXA,
      },
      children: [new Paragraph("Description of Business Activity")],
    }),
    new TableCell({
      width: {
        size: 5505,
        type: WidthType.DXA,
      },
      children: [new Paragraph("% of Turnover of the entity")],
    }),
  ],
});
const businessRows = businessData.map(
  (business, index) =>
    new TableRow({
      children: [
        new TableCell({
          width: {
            size: 3505,
            type: WidthType.DXA,
          },
          children: [new Paragraph(`${index + 1}`)],
        }),
        new TableCell({
          width: {
            size: 5505,
            type: WidthType.DXA,
          },
          children: [new Paragraph(business.main_activity)],
        }),
        new TableCell({
          width: {
            size: 5505,
            type: WidthType.DXA,
          },
          children: [new Paragraph(business.business_activity)],
        }),
        new TableCell({
          width: {
            size: 5505,
            type: WidthType.DXA,
          },
          children: [new Paragraph(business.business_turnover_percentage)],
        }),
      ],
    })
);

const table_question_16 = () => {
  return new Table({
    columnWidths: [3505, 5505, 5505, 5505],
    rows: [businessHeaderRow, ...businessRows],
  });
};

module.exports = { table_question_16, question_16 };
