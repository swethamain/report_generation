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
  const productData = dataSet[0].response.products;


const question_17 = () => {  
return new Paragraph({
    text: "17. Products/Services sold by the entity (accounting for 90% of the entity’s Turnover): ",
    spacing: {
        before: 200,
        after: 200,
    },
  })
};

const productHeaderRow = new TableRow({
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
        children: [new Paragraph("Product/Service")],
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("NIC Code ")],
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("% of total Turnover  contributed")],
      }),
    ],
  });
  
  const productRows = productData.map(
    (products, index) =>
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
            children: [new Paragraph(products.product_name)],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(products.nic_code)],
          }),
          new TableCell({
            width: {
              size: 5505,
              type: WidthType.DXA,
            },
            children: [new Paragraph(products.product_turnover_percentage)],
          }),
        ],
      })
  );
  
  const table_question_17 = () => {
  return new Table({
    columnWidths: [3505, 5505, 5505, 5505],
    rows: [productHeaderRow, ...productRows],
  })
};

module.exports = { question_17, table_question_17 };