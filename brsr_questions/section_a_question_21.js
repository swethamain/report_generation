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

  const participation = dataSet.find(
    (task) => task.task_name === "Participation"
  ).response;

  const totalBod = participation.filter(
    (res) => res.question_id === "655ca3050c5353d8af0ebbe7"
  );

  const totalBodFemale = participation.filter(
    (res) => res.question_id === "655ca3050c5353d8af0ebbe8"
  );

  const percentageFemaleBod = `${(
    (parseFloat(totalBodFemale[0].value) /
      parseFloat(totalBod[0].value)) * 100
  ).toFixed(2)}%`;

  const totalKmp = participation.filter(
    (res) => res.question_id === "655ca4df0c5353d8af0ebbf6"
  );

  const totalKmpFemale = participation.filter(
    (res) => res.question_id === "655ca4df0c5353d8af0ebbf7"
  );

  const percentageFemaleKmp = `${(
    (parseFloat(totalKmpFemale[0].value) /
      parseFloat(totalKmp[0].value)) * 100
  ).toFixed(2)}%`;

const question_21 = () => {
 return new Paragraph({
    text: " 21. Participation/Inclusion/Representation of women ",
    spacing: {
        before: 200,
        after: 200,
    }
  })
};

const headerBOD = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("   ")],
        rowSpan: 2,
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("Total(A) ")],
        rowSpan: 2,
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("No. of percentage of females")],
        columnSpan: 2,
      }),
    ],
  });
  
  const rowsHeader2 = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("No. (B)")],
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("% (B / A)")],
      }),
    ],
  });
  
  const rowsBOD = new TableRow({
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
        children: [new Paragraph(totalBod[0].value)],
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph(totalBodFemale[0].value)],
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph(percentageFemaleBod)],
      }),
    ],
  });
  
  const rowsKMP = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph(" Key Management Personnel  ")],
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph(totalKmp[0].value)],
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph(totalKmpFemale[0].value)],
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph(percentageFemaleKmp)],
      }),
    ],
  });
  
  const table_question_21 = () => {
  return new Table({
    rows: [headerBOD, rowsHeader2, rowsBOD, rowsKMP],
  })
};
  

module.exports = { question_21, table_question_21 };