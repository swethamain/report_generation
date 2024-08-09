const docx = require("docx");
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
const fs = require("fs");
const axios = require("axios");
const dataSet = require("./test");
const { sectionAQ1_15 } = require("./sectionA_I");

const companyInfo = dataSet[0].response.company_information;
const businessData = dataSet[0].response.business;
const productData = dataSet[0].response.products;
const operationsData = dataSet[0].response.operations;
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

const tableQ16 = new Table({
  columnWidths: [3505, 5505, 5505, 5505],
  rows: [businessHeaderRow, ...businessRows],
});

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

const tableQ17 = new Table({
  columnWidths: [3505, 5505, 5505, 5505],
  rows: [productHeaderRow, ...productRows],
});

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

const tableQ18 = new Table({
  rows: [operationsHeaderRow, operationsColumn, operationsColumn2],
});

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
      children: [new Paragraph({ text: "Employees", alignment: "center" })],
      columnSpan: 7,
      verticalAlign: "center",
    }),
  ],
});

const employeeRowPermanant = new TableRow({
  children: [
    new TableCell({
      children: [new Paragraph("1")],
    }),
    new TableCell({
      children: [new Paragraph("Permanent (D)")],
    }),
    new TableCell({
      children: [new Paragraph(totalPermanentEmployees)],
    }),
    new TableCell({
      children: [new Paragraph(malePermanant[0].value)],
    }),
    new TableCell({
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
      children: [new Paragraph(femalePermanant[0].value)],
    }),
    new TableCell({
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
      children: [new Paragraph("2")],
    }),
    new TableCell({
      children: [new Paragraph("Other than  Permanent (E) ")],
    }),
    new TableCell({
      children: [new Paragraph(totalNonPermanentEmployees)],
    }),
    new TableCell({
      children: [new Paragraph(maleOtherPermanant[0].value)],
    }),
    new TableCell({
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
      children: [new Paragraph(femaleOtherPermanant[0].value)],
    }),
    new TableCell({
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
      children: [new Paragraph("3")],
    }),
    new TableCell({
      children: [new Paragraph("Total employees (D + E)")],
    }),
    new TableCell({
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
      children: [new Paragraph(femaleOtherPermanant[0].value)],
    }),
    new TableCell({
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
      children: [new Paragraph({ text: "Workers", alignment: "center" })],
      columnSpan: 7,
      verticalAlign: "center",
    }),
  ],
});

const workerRowPermanant = new TableRow({
  children: [
    new TableCell({
      children: [new Paragraph("4")],
    }),
    new TableCell({
      children: [new Paragraph("Permanent (D)")],
    }),
    new TableCell({
      children: [new Paragraph(totalPermanentWorkers)],
    }),
    new TableCell({
      children: [new Paragraph(malePermanantWorker[0].value)],
    }),
    new TableCell({
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
      children: [new Paragraph(femalePermanantWorker[0].value)],
    }),
    new TableCell({
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
      children: [new Paragraph("5")],
    }),
    new TableCell({
      children: [new Paragraph("Other than  Permanent (E) ")],
    }),
    new TableCell({
      children: [new Paragraph(totalNonPermanentWorkers)],
    }),
    new TableCell({
      children: [new Paragraph(maleOtherPermanantWorker[0].value)],
    }),
    new TableCell({
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
      children: [new Paragraph(femaleOtherPermanantWorker[0].value)],
    }),
    new TableCell({
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
      children: [new Paragraph("6")],
    }),
    new TableCell({
      children: [new Paragraph("Total employees (D + E)")],
    }),
    new TableCell({
      children: [
        new Paragraph(
          `${
            parseInt(totalPermanentWorkers) + parseInt(totalNonPermanentWorkers)
          }`
        ),
      ],
    }),
    new TableCell({
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
      children: [new Paragraph(femaleOtherPermanantWorker[0].value)],
    }),
    new TableCell({
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
      children: [
        new Paragraph({
          text: "Differntly Abled Employees",
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
      children: [new Paragraph("4")],
    }),
    new TableCell({
      children: [new Paragraph("Permanent (D)")],
    }),
    new TableCell({
      children: [new Paragraph(totalPermanentWorkers)],
    }),
    new TableCell({
      children: [new Paragraph(malePermanantWorker[0].value)],
    }),
    new TableCell({
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
      children: [new Paragraph(femalePermanantWorker[0].value)],
    }),
    new TableCell({
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
      children: [new Paragraph("5")],
    }),
    new TableCell({
      children: [new Paragraph("Other than  Permanent (E) ")],
    }),
    new TableCell({
      children: [new Paragraph(totalNonPermanentWorkers)],
    }),
    new TableCell({
      children: [new Paragraph(maleOtherPermanantWorker[0].value)],
    }),
    new TableCell({
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
      children: [new Paragraph(femaleOtherPermanantWorker[0].value)],
    }),
    new TableCell({
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
      children: [new Paragraph("6")],
    }),
    new TableCell({
      children: [new Paragraph("Total employees (D + E)")],
    }),
    new TableCell({
      children: [
        new Paragraph(
          `${
            parseInt(totalPermanentWorkers) + parseInt(totalNonPermanentWorkers)
          }`
        ),
      ],
    }),
    new TableCell({
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
      children: [new Paragraph(femaleOtherPermanantWorker[0].value)],
    }),
    new TableCell({
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

const tableQ20 = new Table({
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
});

const headerBOD = new TableRow({
  children: [
    new TableCell({
      children: [new Paragraph("   ")],
      rowSpan: 2,
    }),
    new TableCell({
      children: [new Paragraph("Total(A) ")],
      rowSpan: 2,
    }),
    new TableCell({
      children: [new Paragraph("No. of percentage of females")],
      columnSpan: 2,
    }),
  ],
});

const rowsHeader2 = new TableRow({
  children: [
    new TableCell({
      children: [new Paragraph("No. (B)")],
    }),
    new TableCell({
      children: [new Paragraph("% (B / A)")],
    }),
  ],
});

const rowsBOD = new TableRow({
  children: [
    new TableCell({
      children: [new Paragraph(" Board of Directors ")],
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
});

const rowsKMP = new TableRow({
  children: [
    new TableCell({
      children: [new Paragraph(" Key Management Personnel  ")],
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
});

const tableQ21 = new Table({
  rows: [headerBOD, rowsHeader2, rowsBOD, rowsKMP],
});

const tableQ22 = new Table({
  rows: [
    new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph(" ")],
          rowSpan: 2,
        }),
        new TableCell({
          children: [new Paragraph(" FY_____  (Turnover rate in current FY )")],
          columnSpan: 3,
        }),
        new TableCell({
          children: [
            new Paragraph(" FY_____  (Turnover rate in previous FY )"),
          ],
          columnSpan: 3,
        }),
        new TableCell({
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
          children: [new Paragraph(" Male ")],
        }),
        new TableCell({
          children: [new Paragraph(" Female ")],
        }),
        new TableCell({
          children: [new Paragraph(" Total ")],
        }),
        new TableCell({
          children: [new Paragraph(" Male ")],
        }),
        new TableCell({
          children: [new Paragraph(" Female ")],
        }),
        new TableCell({
          children: [new Paragraph(" Total ")],
        }),
        new TableCell({
          children: [new Paragraph(" Male ")],
        }),
        new TableCell({
          children: [new Paragraph(" Female ")],
        }),
        new TableCell({
          children: [new Paragraph(" Total ")],
        }),
      ],
    }),
    new TableRow({
      children: [
        new TableCell({
          children: [new Paragraph(" Male ")],
        }),
        new TableCell({
          children: [new Paragraph(" Female ")],
        }),
        new TableCell({
          children: [new Paragraph(" Total ")],
        }),
        new TableCell({
          children: [new Paragraph(" Male ")],
        }),
        new TableCell({
          children: [new Paragraph(" Female ")],
        }),
        new TableCell({
          children: [new Paragraph(" Total ")],
        }),
        new TableCell({
          children: [new Paragraph(" Male ")],
        }),
        new TableCell({
          children: [new Paragraph(" Female ")],
        }),
        new TableCell({
          children: [new Paragraph(" Total ")],
        }),
      ],
    }),
  ],
});

const doc = new Document({
  sections: [
    {
      children: [
        new Paragraph({
          text: "I. Details of the listed entity ",
          spacing: {
            after: 200,
          },
        }),
        new Paragraph({
          text: `1. Corporate Identity Number (CIN) of the Listed Entity: ${companyInfo.cin_number}`,
        }),
        new Paragraph({
          text: `2. Name of the Listed Entity: ${companyInfo.company_name}`,
        }),
        new Paragraph({
          text: `3. Year of incorporation: ${companyInfo.establish_year}`,
        }),
        new Paragraph({
          text: `4. Registered office address: ${companyInfo.registered_address}`,
        }),
        new Paragraph({
          text: `5. Corporate address: ${companyInfo.corporate_address}`,
        }),
        new Paragraph({ text: `6. E-mail: ${companyInfo.company_email}` }),
        new Paragraph({
          text: `7. Telephone: ${companyInfo.company_telephone}`,
        }),
        new Paragraph({ text: `8. Website: ${companyInfo.company_website}` }),
        new Paragraph({
          text: `9. Financial year for which reporting is being done: ${companyInfo.reporting_year}`,
        }),
        new Paragraph({
          text: `10. Name of the Stock Exchange(s) where shares are listed: ${companyInfo.stock_name}`,
        }),
        new Paragraph({
          text: `11. Paid-up Capital: ${companyInfo.capital_paid}`,
        }),
        new Paragraph({
          text: `12. Name and contact details (telephone, email address) of the person who may be contacted in case of any queries on the BRSR report: ${companyInfo.contact_name}, ${companyInfo.contact_details}`,
        }),
        new Paragraph({
          text: `13. Reporting boundary - Are the disclosures under this report made on a standalone basis (i.e. only for the entity) or on a consolidated basis (i.e. for the entity and all the entities which form a part of its consolidated financial statements, taken together): ${companyInfo.reporting_boundary}`,
        }),
        new Paragraph({
          text: `14. Name of assurance provider: ${companyInfo.assurance_name}`,
        }),
        new Paragraph({
          text: `15. Type of assurance obtained: ${companyInfo.assurance_type}`,
          spacing: {
            after: 200,
          },
        }),
        sectionAQ1_15,
        new Paragraph({
          text: "II. Products/services",
          spacing: {
            after: 200,
          },
        }),
        new Paragraph({
          text: "16. Details of business activities (accounting for 90% of the turnover): ",
        }),
        new Paragraph({ text: " " }),
        tableQ16,
        new Paragraph({ text: " " }),
        new Paragraph({
          text: "17. Products/Services sold by the entity (accounting for 90% of the entity’s Turnover): ",
        }),
        new Paragraph({ text: " " }),
        tableQ17,
        new Paragraph({ text: " " }),
        new Paragraph({
          text: "   18. Number of locations where plants and/or operations/offices of the entity are situated: ",
        }),
        new Paragraph({ text: " " }),
        tableQ18,
        new Paragraph({ text: " " }),
        new Paragraph({ text: " 19. Markets served by the entity: " }),
        new Paragraph({ text: " " }),
        new Paragraph({ text: " a. Number of locations " }),
        new Paragraph({ text: " " }),
        new Paragraph({
          text: " b. What is the contribution of exports as a percentage of the total turnover of the entity?   ",
        }),
        new Paragraph({ text: " " }),
        new Paragraph({ text: " c. A brief on types of customers  " }),
        new Paragraph({ text: " " }),
        new Paragraph({ text: " IV. Employees " }),
        new Paragraph({ text: " " }),
        new Paragraph({
          text: "20. Details as at the end of Financial Year:  ",
        }),
        new Paragraph({ text: " " }),
        new Paragraph({
          text: "a. Employees and workers (including differently abled):",
        }),
        tableQ20,
        new Paragraph({ text: " " }),
        new Paragraph({
          text: " 21. Participation/Inclusion/Representation of women   ",
        }),
        new Paragraph({ text: " " }),
        tableQ21,
        new Paragraph({ text: " " }),
        new Paragraph({
          text: " 22. Turnover rate for permanent employees and workers ",
        }),
        tableQ22,
      ],
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("My Document0121.docx", buffer);
});
