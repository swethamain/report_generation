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
  const missingDataSet = require("../models/missingData");

  // const turnoverDetails = dataSet.find(
  //   (task) => task.task_name === "Markets Served"
  // ).response;

  const question_22 = () => {
    return new Paragraph({
       text: " 22. Turnover rate for permanent employees and workers ",
       spacing: {
           before: 200,
           after: 200,
       }
     })
   };


   const table_question_22 = () => {
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
            rowSpan: 2,
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" FY_____  (Turnover rate in current FY )")],
            columnSpan: 3,
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [
              new Paragraph(" FY_____  (Turnover rate in previous FY )"),
            ],
            columnSpan: 3,
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [
              new Paragraph(
                " FY_____  (Turnover rate in year prior to previous FY )"
              ),
            ],
            columnSpan: 3,
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
            children: [new Paragraph(" Male ")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" Female ")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" Total ")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" Male ")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" Female ")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" Total ")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" Male ")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" Female ")],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(" Total ")],
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
            children: [new Paragraph(" Permanent Employees  ")],
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
            children: [new Paragraph(" Permanent Workers ")],
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
  })
};

module.exports = { question_22, table_question_22};
  