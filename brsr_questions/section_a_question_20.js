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

const employeeDetails = dataSet.find(
    (task) => task.task_name === "Employee Details"
  ).response;
  // console.log(employeeDetails);
  const malePermanant = employeeDetails.filter(
    (res) => res.question_id === "655b37f8615a58e640ec3f93"
  );
  // console.log(malePermanant);
  const femalePermanant = employeeDetails.filter(
    (res) => res.question_id === "655b37f9615a58e640ec3f94"
  );
  const maleOtherPermanant = employeeDetails.filter(
    (res) => res.question_id === "655b37f9615a58e640ec3f95"
  );
  const femaleOtherPermanant = employeeDetails.filter(
    (res) => res.question_id === "655b37f9615a58e640ec3f96"
  );
  const malePermanantWorker = employeeDetails.filter(
    (res) => res.question_id === "655c81c30c5353d8af0ebb86"
  );
  const femalePermanantWorker = employeeDetails.filter(
    (res) => res.question_id === "655c81c30c5353d8af0ebb87"
  );
  const maleOtherPermanantWorker = employeeDetails.filter(
    (res) => res.question_id === "655c81c30c5353d8af0ebb88"
  );
  const femaleOtherPermanantWorker = employeeDetails.filter(
    (res) => res.question_id === "655c81c30c5353d8af0ebb89"
  );
  const employeeCountMetaMale = {
    employee: { title: "Permanant ", question_id: "655c81c30c5353d8af0ebb89" },
  };
  const totalPermanentEmployees = `${
    parseInt(malePermanant[0].value) + parseInt(femalePermanant[0].value)
  }`;
  const totalNonPermanentEmployees = `${
    parseInt(maleOtherPermanant[0].value) +
    parseInt(femaleOtherPermanant[0].value)
  }`;
  const totalEmployees = `${
    parseFloat(totalPermanentEmployees) + parseFloat(totalNonPermanentEmployees)
  }`;
  const totalPermanentWorkers = `${
    parseInt(malePermanantWorker[0].value) +
    parseInt(femalePermanantWorker[0].value)
  }`;
  const totalNonPermanentWorkers = `${
    parseInt(maleOtherPermanantWorker[0].value) +
    parseInt(femaleOtherPermanantWorker[0].value)
  }`;

  const question_20 = () => {
    return new Paragraph({
        children: [
            new TextRun({
                text: "20. Details as at the end of Financial Year:",
                break: 1,
            }),
            new TextRun({
                text: "a. Employees and workers (including differently abled):",
                break: 1,
            }),
        ],
        spacing: {
            after: 200,
        },
    });
};

const employeeHeaderRows = new TableRow({
    children: [
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("S. No")],
        rowSpan: 2,
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("Particulars ")],
        rowSpan: 2,
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("Total (A)")],
        rowSpan: 2,
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("Male")],
        columnSpan: 2,
      }),
      new TableCell({
        width: {
          size: 5505,
          type: WidthType.DXA,
        },
        children: [new Paragraph("Female")],
        columnSpan: 2,
      }),
    ],
  });
  
  const employeeRows1 = new TableRow({
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
  
  const employeeTable = new TableRow({
    children: [
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph({ text: "Employees", alignment: "center" })],
        columnSpan: 7,
        verticalAlign: "center",
      }),
    ],
  });
  
  const employeeRowPermanant = new TableRow({
    children: [
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("1")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("Permanent (D)")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(totalPermanentEmployees)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(malePermanant[0].value)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              (parseFloat(malePermanant[0].value) /
                parseFloat(totalPermanentEmployees)) *
              100
            ).toFixed(2)}%`
          ),
        ],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(femalePermanant[0].value)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              (parseFloat(femalePermanant[0].value) /
                parseFloat(totalPermanentEmployees)) *
              100
            ).toFixed(2)}%`
          ),
        ],
      }),
    ],
  });
  
  const employeeRowOther = new TableRow({
    children: [
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("2")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("Other than  Permanent (E) ")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(totalNonPermanentEmployees)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(maleOtherPermanant[0].value)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              (parseFloat(maleOtherPermanant[0].value) /
                parseFloat(totalNonPermanentEmployees)) *
              100
            ).toFixed(2)}%`
          ),
        ],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(femaleOtherPermanant[0].value)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              (parseFloat(femaleOtherPermanant[0].value) /
                parseFloat(totalNonPermanentEmployees)) *
              100
            ).toFixed(2)}%`
          ),
        ],
      }),
    ],
  });
  
  const employeeRowTotal = new TableRow({
    children: [
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("3")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("Total employees (D + E)")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${
              parseInt(totalPermanentEmployees) +
              parseInt(totalNonPermanentEmployees)
            }`
          ),
        ],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${
              parseInt(malePermanant[0].value) +
              parseInt(maleOtherPermanant[0].value)
            }`
          ),
        ],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              parseFloat(malePermanant[0].value) +
              (parseFloat(maleOtherPermanant[0].value) /
                parseFloat(totalEmployees)) *
                100
            ).toFixed(2)}%`
          ),
        ],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(femaleOtherPermanant[0].value)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              parseFloat(femalePermanant[0].value) +
              (parseFloat(femaleOtherPermanant[0].value) /
                parseFloat(totalEmployees)) *
                100
            ).toFixed(2)}%`
          ),
        ],
      }),
    ],
  });
  
  const workerTable = new TableRow({
    children: [
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph({ text: "Workers", alignment: "center" })],
        columnSpan: 7,
        verticalAlign: "center",
      }),
    ],
  });
  
  const workerRowPermanant = new TableRow({
    children: [
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("4")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("Permanent (D)")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(totalPermanentWorkers)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(malePermanantWorker[0].value)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              (parseFloat(malePermanantWorker[0].value) /
                parseFloat(totalPermanentWorkers)) *
              100
            ).toFixed(2)}%`
          ),
        ],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(femalePermanantWorker[0].value)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              (parseFloat(femalePermanantWorker[0].value) /
                parseFloat(totalPermanentWorkers)) *
              100
            ).toFixed(2)}%`
          ),
        ],
      }),
    ],
  });
  
  const workerRowOther = new TableRow({
    children: [
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("5")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("Other than  Permanent (E) ")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(totalNonPermanentWorkers)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(maleOtherPermanantWorker[0].value)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              (parseFloat(maleOtherPermanantWorker[0].value) /
                parseFloat(totalNonPermanentWorkers)) *
              100
            ).toFixed(2)}%`
          ),
        ],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(femaleOtherPermanantWorker[0].value)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              (parseFloat(femaleOtherPermanantWorker[0].value) /
                parseFloat(totalNonPermanentWorkers)) *
              100
            ).toFixed(2)}%`
          ),
        ],
      }),
    ],
  });
  
  const workerRowTotal = new TableRow({
    children: [
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("6")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("Total employees (D + E)")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${
              parseInt(totalPermanentWorkers) + parseInt(totalNonPermanentWorkers)
            }`
          ),
        ],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${
              parseInt(malePermanantWorker[0].value) +
              parseInt(maleOtherPermanantWorker[0].value)
            }`
          ),
        ],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              parseFloat(malePermanantWorker[0].value) +
              (parseFloat(maleOtherPermanantWorker[0].value) /
                parseFloat(totalEmployees)) *
                100
            ).toFixed(2)}%`
          ),
        ],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(femaleOtherPermanantWorker[0].value)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              parseFloat(femalePermanantWorker[0].value) +
              (parseFloat(femaleOtherPermanantWorker[0].value) /
                parseFloat(totalEmployees)) *
                100
            ).toFixed(2)}%`
          ),
        ],
      }),
    ],
  });
  
  const differentlyabledTable = new TableRow({
    children: [
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph({
            text: "Differently Abled Employees",
            alignment: "center",
          }),
        ],
        columnSpan: 7,
        verticalAlign: "center",
      }),
    ],
  });
  
  const differentlyabledRowPermanant = new TableRow({
    children: [
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("4")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("Permanent (D)")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(totalPermanentWorkers)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(malePermanantWorker[0].value)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              (parseFloat(malePermanantWorker[0].value) /
                parseFloat(totalPermanentWorkers)) *
              100
            ).toFixed(2)}%`
          ),
        ],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(femalePermanantWorker[0].value)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              (parseFloat(femalePermanantWorker[0].value) /
                parseFloat(totalPermanentWorkers)) *
              100
            ).toFixed(2)}%`
          ),
        ],
      }),
    ],
  });
  
  const differentlyabledRowOther = new TableRow({
    children: [
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("5")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("Other than  Permanent (E) ")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(totalNonPermanentWorkers)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(maleOtherPermanantWorker[0].value)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              (parseFloat(maleOtherPermanantWorker[0].value) /
                parseFloat(totalNonPermanentWorkers)) *
              100
            ).toFixed(2)}%`
          ),
        ],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(femaleOtherPermanantWorker[0].value)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              (parseFloat(femaleOtherPermanantWorker[0].value) /
                parseFloat(totalNonPermanentWorkers)) *
              100
            ).toFixed(2)}%`
          ),
        ],
      }),
    ],
  });
  
  const differentlyabledRowTotal = new TableRow({
    children: [
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("6")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph("Total employees (D + E)")],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${
              parseInt(totalPermanentWorkers) + parseInt(totalNonPermanentWorkers)
            }`
          ),
        ],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${
              parseInt(malePermanantWorker[0].value) +
              parseInt(maleOtherPermanantWorker[0].value)
            }`
          ),
        ],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              parseFloat(malePermanantWorker[0].value) +
              (parseFloat(maleOtherPermanantWorker[0].value) /
                parseFloat(totalEmployees)) *
                100
            ).toFixed(2)}%`
          ),
        ],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [new Paragraph(femaleOtherPermanantWorker[0].value)],
      }),
      new TableCell({
        width: { size: 5505, type: WidthType.DXA },
        children: [
          new Paragraph(
            `${(
              parseFloat(femalePermanantWorker[0].value) +
              (parseFloat(femaleOtherPermanantWorker[0].value) /
                parseFloat(totalEmployees)) *
                100
            ).toFixed(2)}%`
          ),
        ],
      }),
    ],
  });
  
  const table_question_20 = () => {
  return new Table({
    rows: [
      employeeHeaderRows,
      employeeRows1,
      employeeTable,
      employeeRowPermanant,
      employeeRowOther,
      employeeRowTotal,
      workerTable,
      workerRowPermanant,
      workerRowOther,
      workerRowTotal,
      differentlyabledTable,
      differentlyabledRowOther,
      differentlyabledRowPermanant,
      differentlyabledRowTotal,
    ],
  })
};

module.exports = {question_20, table_question_20};