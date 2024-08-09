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

  const operationsData = dataSet[0].response.operations;

const question_18 = () => {
 return new Paragraph({
    text: "18. Number of locations where plants and/or operations/offices of the entity are situated: ",
    spacing: {
        before: 200,
        after : 200,
    }
  })
};

const operationsHeaderRow = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("Location")],
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("Number of Plants")],
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("Number of Offices")],
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("Total")],
      }),
    ],
  });
  
  const operationsColumn = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("National")],
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph(operationsData.national_plants)],
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph(operationsData.national_offices)],
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph(operationsData.total_national_plants)],
      }),
    ],
  });
  
  const operationsColumn2 = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("International")],
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph(operationsData.total_international_plants)],
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph(operationsData.international_offices)],
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph(operationsData.total_international_plants)],
      }),
    ],
  });
  
  const table_question_18 = () => {
  return new Table({
    rows: [operationsHeaderRow, operationsColumn, operationsColumn2],
  })
};

module.exports = {question_18, table_question_18};