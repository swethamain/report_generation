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

  //employee data 
  const employeeDetails = dataSet.find(
    (task) => task.task_name === "Employee Details"
  ).response;

  const malePermanant = employeeDetails.filter(
    (res) => res.question_id === "655b37f8615a58e640ec3f93"
  );
  // console.log(malePermanant);
  const femalePermanant = employeeDetails.filter(
    (res) => res.question_id === "655b37f9615a58e640ec3f94"
  );
  const totalPermanentEmployees = `${
    parseInt(malePermanant[0].value) +
    parseInt(femalePermanant[0].value)
  }`;

  const maleOtherPermanant = employeeDetails.filter(
    (res) => res.question_id === "655b37f9615a58e640ec3f95"
  );

  const femaleOtherPermanant = employeeDetails.filter(
    (res) => res.question_id === "655b37f9615a58e640ec3f96"
  );

  const totalOtherPermanentEmployees = `${
    parseInt(maleOtherPermanant[0].value) +
    parseInt(femaleOtherPermanant[0].value)
  }`;
console.log(totalOtherPermanentEmployees);
  //worker data
  const malePermanantWorker = employeeDetails.filter(
    (res) => res.question_id === "655c81c30c5353d8af0ebb86"
  );
  const femalePermanantWorker = employeeDetails.filter(
    (res) => res.question_id === "655c81c30c5353d8af0ebb87"
  );
  const totalPermanentWorkers = `${
    parseInt(malePermanantWorker[0].value) +
    parseInt(femalePermanantWorker[0].value)
  }`;
  const maleOtherPermanantWorker = employeeDetails.filter(
    (res) => res.question_id === "655c81c30c5353d8af0ebb88"
  );
  const femaleOtherPermanantWorker = employeeDetails.filter(
    (res) => res.question_id === "655c81c30c5353d8af0ebb89"
  );
  const totalOtherPermanentWorkers = `${
    parseInt(maleOtherPermanantWorker[0].value) +
    parseInt(femaleOtherPermanantWorker[0].value)
  }`;

  //health insurance employees
  const healthInsurance = dataSet.find(
    (task) => task.task_name === "Health Insurance"
  ).response;

  const malePermanantHealthInsurance = healthInsurance.filter(
    (res) => res.question_id === "65619d4998f8d6efd473807f"
  );

  const femalePermanantHealthInsurance = healthInsurance.filter(
    (res) => res.question_id === "65619d4998f8d6efd4738080"
  );

  const totalPermanentEmployeesHealthInsuranceCovered = `${
    parseInt(malePermanantHealthInsurance[0].value) +
    parseInt(femalePermanantHealthInsurance[0].value)
  }`;

  const maleOtherPermanantHealthInsurance = healthInsurance.filter(
    (res) => res.question_id === "65619e4698f8d6efd4738085"
  );

  const femaleOtherPermanantHealthInsurance = healthInsurance.filter(
    (res) => res.question_id === "65619e4698f8d6efd4738086"
  );

  const totalOtherPermanentEmployeesHealthInsuranceCovered = `${
    parseInt(maleOtherPermanantHealthInsurance[0].value) +
    parseInt(femaleOtherPermanantHealthInsurance[0].value)
  }`;

  //worker health insurance
  const malePermanantWorkerHealthInsurance = healthInsurance.filter(
    (res) => res.question_id === "6561a92998f8d6efd473809c"
  );
  const femalePermanantWorkerHealthInsurance = healthInsurance.filter(
    (res) => res.question_id === "6561a92998f8d6efd473809d"
  );
  const totalPermanentWorkersHealthInsuranceCovered = `${
    parseInt(maleOtherPermanantHealthInsurance[0].value) +
    parseInt(femaleOtherPermanantHealthInsurance[0].value)
  }`;

  const maleOtherPermanantWorkerHealthInsurance = healthInsurance.filter(
    (res) => res.question_id === "6561aa3698f8d6efd47380a8"
  );
  const femaleOtherPermanantWorkerHealthInsurance = healthInsurance.filter(
    (res) => res.question_id === "6561aa3698f8d6efd47380a9"
  );
  const totalOtherPermanentWorkersHealthInsuranceCovered = `${
    parseInt(maleOtherPermanantHealthInsurance[0].value) +
    parseInt(femaleOtherPermanantHealthInsurance[0].value)
  }`;

  //accident insurance employee
  const accidentInsurance = dataSet.find(
    (task) => task.task_name === "Accident Insurance"
  ).response;

  const malePermanantAccidentInsurance = accidentInsurance.filter(
    (res) => res.question_id === "6561ce4998f8d6efd47380c6"
  );

  const femalePermanantAccidentInsurance = accidentInsurance.filter(
    (res) => res.question_id === "6561ce4998f8d6efd47380c7"
  );

  const totalPermanentEmployeesAccidentInsuranceCovered = `${
    parseInt(malePermanantAccidentInsurance[0].value) +
    parseInt(femalePermanantAccidentInsurance[0].value)
  }`;

  const maleOtherPermanantAccidentInsurance = accidentInsurance.filter(
    (res) => res.question_id === "6561cebf98f8d6efd47380cc"
  );

  const femaleOtherPermanantAccidentInsurance = accidentInsurance.filter(
    (res) => res.question_id === "6561cebf98f8d6efd47380cd"
  );

  const totalOtherPermanentEmployeesAccidentInsuranceCovered = `${
    parseInt(maleOtherPermanantAccidentInsurance[0].value) +
    parseInt(femaleOtherPermanantAccidentInsurance[0].value)
  }`;

  //accident insurance worker 
  const malePermanantWorkerAccidentInsurance = accidentInsurance.filter(
    (res) => res.question_id === "6561def698f8d6efd47380f3"
  );
  const femalePermanantWorkerAccidentInsurance = accidentInsurance.filter(
    (res) => res.question_id === "6561def698f8d6efd47380f4"
  );
  const totalPermanentWorkersAccidentInsuranceCovered = `${
    parseInt(maleOtherPermanantAccidentInsurance[0].value) +
    parseInt(femaleOtherPermanantAccidentInsurance[0].value)
  }`;

  const maleOtherPermanantWorkerAccidentInsurance = accidentInsurance.filter(
    (res) => res.question_id === "6561df6e98f8d6efd47380f9"
  );
  const femaleOtherPermanantWorkerAccidentInsurancee = accidentInsurance.filter(
    (res) => res.question_id === "6561df6e98f8d6efd47380fa"
  );
  const totalOtherPermanentWorkersAccidentInsuranceCovered = `${
    parseInt(maleOtherPermanantAccidentInsurance[0].value) +
    parseInt(femaleOtherPermanantAccidentInsurance[0].value)
  }`;
  
  const percentageMaleEmployeeCovered = healthInsurance.filter(
    (res) => res.question_id === "65619ed998f8d6efd473808c"
  );

  const percentageMaleWorkersCovered = healthInsurance.filter(
    (res) => res.question_id === "65619ed998f8d6efd473808c"
  );

  //total employee count 
  const totalEmployees =
  `${
    parseInt(totalOtherPermanentEmployees) +
    parseInt(totalPermanentEmployees)
  }`;
  console.log(totalEmployees);

  //ESI Payements data
  const esiPayments = dataSet.find(
    (task) => task.task_name === "ESI Payments"
  ).response;

  const EmployeesEsi = esiPayments.filter(
    (res) => res.question_id === "65641f1d98f8d6efd47381dc"
  );
  const WorkersEsi = esiPayments.filter(
    (res) => res.question_id === "65641f5698f8d6efd47381e2"
  );

  const EmployeesPercentageEsi = `${(
    (parseFloat(EmployeesEsi[0].value) /
      parseFloat((totalEmployees))) *
    100
  ).toFixed(2)}%`;
  const WorkersPercentageEsi = `${(
    (parseFloat(WorkersEsi[0].value) /
      parseFloat(totalEmployees)) *
    100
  ).toFixed(2)}%`;

    //PF Payements data
    const pfPayments = dataSet.find(
        (task) => task.task_name === "PF Payments"
      ).response;
    
      const EmployeesPf = pfPayments.filter(
        (res) => res.question_id === "65641e5698f8d6efd47381cd"
      );
      const WorkersPf = pfPayments.filter(
        (res) => res.question_id === "65641ea998f8d6efd47381d3"
      );
    
      const EmployeesPercentagePf = `${(
        (parseFloat(EmployeesPf[0].value) /
          parseFloat((totalEmployees))) *
        100
      ).toFixed(2)}%`;
      const WorkersPercentagePf = `${(
        (parseFloat(WorkersPf[0].value) /
          parseFloat(totalEmployees)) *
        100
      ).toFixed(2)}%`;


const principle_3 = () => {
    return new Paragraph({
      children: [
        new TextRun({
          text: "PRINCIPLE 3 Businesses should respect and promote the well-being  of all employees, including those in their value chains",
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

  const questionEmployeeWellBeing = () => {
    return new Paragraph({
        text: "1. a. Details of measures for the well-being of employees:",
        spacing: { after: 200 },
    });
};


const tableEmployeeWellBeing = () => {
    return new Table({
        columnWidths: [2505, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                    children:[new Paragraph("% of employees covered by")],
                    columnSpan: 12,
                }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Category")],
                        rowSpan: 2,
                    }),
                    new TableCell({
                        children: [new Paragraph("Total (A)")],
                        rowSpan:2,
                    }),
                    new TableCell({
                        children: [new Paragraph("Health insurance")],
                        columnSpan: 2,
                    }),
                    new TableCell({
                        children: [new Paragraph("Accident insurance")],
                        columnSpan: 2,

                    }),
                   
                    new TableCell({
                        children: [new Paragraph("Maternity benefits")],
                        columnSpan: 2,

                    }),
                    
                    new TableCell({
                        children: [new Paragraph("Paternity Benefits")],
                        columnSpan: 2,

                    }),
                    
                    new TableCell({
                        children: [new Paragraph("Day Care facilities")],
                        columnSpan: 2,

                    }),
                    
                ],
            }),
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Number (B )")],
                    }),
                    new TableCell({
                        children: [new Paragraph("% (B / A)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Number (C )")],
                    }),
                    new TableCell({
                        children: [new Paragraph("% (C / A)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Number (D )")],
                    }),
                    new TableCell({
                        children: [new Paragraph("% (D / A)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Number (E )")],
                    }),
                    new TableCell({
                        children: [new Paragraph("% (E / A)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Number (F )")],
                    }),
                    new TableCell({
                        children: [new Paragraph("% (F / A)")],
                    }),
                ]
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Permanent employees")],
                        columnSpan: 12,
                    }),

                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Male")],
                    }),
                    new TableCell({
                        children: [new Paragraph(malePermanant[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(malePermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(malePermanantHealthInsurance[0].value) /
                              parseFloat(malePermanant[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(malePermanantAccidentInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(malePermanantAccidentInsurance[0].value) /
                              parseFloat(malePermanant[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(malePermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(malePermanantHealthInsurance[0].value) /
                              parseFloat(malePermanant[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(malePermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(malePermanantHealthInsurance[0].value) /
                              parseFloat(malePermanant[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(malePermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(malePermanantHealthInsurance[0].value) /
                              parseFloat(malePermanant[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Female")],
                    }),
                    new TableCell({
                        children: [new Paragraph(femalePermanant[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(femalePermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                                parseFloat(femalePermanantHealthInsurance[0].value) /
                                  parseFloat(femalePermanant[0].value) *
                                  100
                              ).toFixed(2)}%`)],    
                    }),
                    new TableCell({
                        children: [new Paragraph(femalePermanantAccidentInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                                parseFloat(femalePermanantAccidentInsurance[0].value) /
                                  parseFloat(femalePermanant[0].value) *
                                  100
                              ).toFixed(2)}%`)],    
                    }),
                    new TableCell({
                        children: [new Paragraph(femalePermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                                parseFloat(femalePermanantHealthInsurance[0].value) /
                                  parseFloat(femalePermanant[0].value) *
                                  100
                              ).toFixed(2)}%`)],    
                    }),
                    new TableCell({
                        children: [new Paragraph(femalePermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                                parseFloat(femalePermanantHealthInsurance[0].value) /
                                  parseFloat(femalePermanant[0].value) *
                                  100
                              ).toFixed(2)}%`)],    
                    }),
                    new TableCell({
                        children: [new Paragraph(femalePermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                                parseFloat(femalePermanantHealthInsurance[0].value) /
                                  parseFloat(femalePermanant[0].value) *
                                  100
                              ).toFixed(2)}%`)],    
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total")],
                    }),
                    new TableCell({
                        children: [new Paragraph(totalPermanentEmployees)],
                    }),
                    new TableCell({
                        children: [new Paragraph(totalPermanentEmployeesHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalPermanentEmployeesHealthInsuranceCovered) /
                                  parseFloat(totalPermanentEmployees) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(totalPermanentEmployeesAccidentInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalPermanentEmployeesAccidentInsuranceCovered) /
                                  parseFloat(totalPermanentEmployees) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(totalPermanentEmployeesHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalPermanentEmployeesHealthInsuranceCovered) /
                                  parseFloat(totalPermanentEmployees) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(totalPermanentEmployeesHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalPermanentEmployeesHealthInsuranceCovered) /
                                  parseFloat(totalPermanentEmployees) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(totalPermanentEmployeesHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalPermanentEmployeesHealthInsuranceCovered) /
                                  parseFloat(totalPermanentEmployees) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Other than Permanent employees")],
                        columnSpan:12,
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Male")],
                    }),
                    new TableCell({
                        children: [new Paragraph(maleOtherPermanant[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(maleOtherPermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(maleOtherPermanantHealthInsurance[0].value) /
                              parseFloat(maleOtherPermanant[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(maleOtherPermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(maleOtherPermanantHealthInsurance[0].value) /
                              parseFloat(maleOtherPermanant[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(maleOtherPermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(maleOtherPermanantHealthInsurance[0].value) /
                              parseFloat(maleOtherPermanant[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(maleOtherPermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(maleOtherPermanantHealthInsurance[0].value) /
                              parseFloat(maleOtherPermanant[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(maleOtherPermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(maleOtherPermanantHealthInsurance[0].value) /
                              parseFloat(maleOtherPermanant[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Female")],
                    }),
                    new TableCell({
                        children: [new Paragraph(femaleOtherPermanant[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(femaleOtherPermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(femaleOtherPermanantHealthInsurance[0].value) /
                              parseFloat(femaleOtherPermanant[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(femaleOtherPermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(femaleOtherPermanantHealthInsurance[0].value) /
                              parseFloat(femaleOtherPermanant[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(femaleOtherPermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(femaleOtherPermanantHealthInsurance[0].value) /
                              parseFloat(femaleOtherPermanant[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(femaleOtherPermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(femaleOtherPermanantHealthInsurance[0].value) /
                              parseFloat(femaleOtherPermanant[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(femaleOtherPermanantHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(femaleOtherPermanantHealthInsurance[0].value) /
                              parseFloat(femaleOtherPermanant[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total")],
                    }),
                    new TableCell({
                        children: [new Paragraph(totalOtherPermanentEmployees)],
                    }),
                    new TableCell({
                        children: [new Paragraph(totalOtherPermanentEmployeesHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalOtherPermanentEmployeesHealthInsuranceCovered) /
                                  parseFloat(totalOtherPermanentEmployees) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(totalOtherPermanentEmployeesHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalOtherPermanentEmployeesHealthInsuranceCovered) /
                                  parseFloat(totalOtherPermanentEmployees) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(totalOtherPermanentEmployeesHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalOtherPermanentEmployeesHealthInsuranceCovered) /
                                  parseFloat(totalOtherPermanentEmployees) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(totalOtherPermanentEmployeesHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalOtherPermanentEmployeesHealthInsuranceCovered) /
                                  parseFloat(totalOtherPermanentEmployees) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(totalOtherPermanentEmployeesHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalOtherPermanentEmployeesHealthInsuranceCovered) /
                                  parseFloat(totalOtherPermanentEmployees) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                ],
            }),
        ],
    });
};

const questionWorkersWellBeing = () => {
    return new Paragraph({
        text: "  b. Details of measures for the well-being of workers:",
        spacing: { after: 200 },
    });
};


const tableWorkersWellBeing = () => {
    return new Table({
        columnWidths: [2505, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                    children:[new Paragraph("% of workers covered by")],
                    columnSpan: 12,
                }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Category")],
                        rowSpan: 2,
                    }),
                    new TableCell({
                        children: [new Paragraph("Total (A)")],
                        rowSpan:2,
                    }),
                    new TableCell({
                        children: [new Paragraph("Health insurance")],
                        columnSpan: 2,
                    }),
                    new TableCell({
                        children: [new Paragraph("Accident insurance")],
                        columnSpan: 2,

                    }),
                   
                    new TableCell({
                        children: [new Paragraph("Maternity benefits")],
                        columnSpan: 2,

                    }),
                    
                    new TableCell({
                        children: [new Paragraph("Paternity Benefits")],
                        columnSpan: 2,

                    }),
                    
                    new TableCell({
                        children: [new Paragraph("Day Care facilities")],
                        columnSpan: 2,

                    }),
                    
                ],
            }),
            
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Number (B )")],
                    }),
                    new TableCell({
                        children: [new Paragraph("% (B / A)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Number (C )")],
                    }),
                    new TableCell({
                        children: [new Paragraph("% (C / A)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Number (D )")],
                    }),
                    new TableCell({
                        children: [new Paragraph("% (D / A)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Number (E )")],
                    }),
                    new TableCell({
                        children: [new Paragraph("% (E / A)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Number (F )")],
                    }),
                    new TableCell({
                        children: [new Paragraph("% (F / A)")],
                    }),
                ]
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Permanent workers")],
                        columnSpan: 12,
                    }),

                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Male")],
                    }),
                    new TableCell({
                        children: [new Paragraph(malePermanantWorker[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(malePermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(malePermanantWorkerHealthInsurance[0].value) /
                              parseFloat(malePermanantWorker[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(malePermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(malePermanantWorkerHealthInsurance[0].value) /
                              parseFloat(malePermanantWorker[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(malePermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(malePermanantWorkerHealthInsurance[0].value) /
                              parseFloat(malePermanantWorker[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(malePermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(malePermanantWorkerHealthInsurance[0].value) /
                              parseFloat(malePermanantWorker[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(malePermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(malePermanantWorkerHealthInsurance[0].value) /
                              parseFloat(malePermanantWorker[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Female")],
                    }),
                    new TableCell({
                        children: [new Paragraph(femalePermanantWorker[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(femalePermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                                parseFloat(femalePermanantWorkerHealthInsurance[0].value) /
                                  parseFloat(femalePermanantWorker[0].value) *
                                  100
                              ).toFixed(2)}%`)],    
                    }),
                    new TableCell({
                        children: [new Paragraph(femalePermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                                parseFloat(femalePermanantWorkerHealthInsurance[0].value) /
                                  parseFloat(femalePermanantWorker[0].value) *
                                  100
                              ).toFixed(2)}%`)],    
                    }),
                    new TableCell({
                        children: [new Paragraph(femalePermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                                parseFloat(femalePermanantWorkerHealthInsurance[0].value) /
                                  parseFloat(femalePermanantWorker[0].value) *
                                  100
                              ).toFixed(2)}%`)],    
                    }),
                    new TableCell({
                        children: [new Paragraph(femalePermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                                parseFloat(femalePermanantWorkerHealthInsurance[0].value) /
                                  parseFloat(femalePermanantWorker[0].value) *
                                  100
                              ).toFixed(2)}%`)],    
                    }),
                    new TableCell({
                        children: [new Paragraph(femalePermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                                parseFloat(femalePermanantWorkerHealthInsurance[0].value) /
                                  parseFloat(femalePermanantWorker[0].value) *
                                  100
                              ).toFixed(2)}%`)],    
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total")],
                    }),
                    new TableCell({
                        children: [new Paragraph(totalPermanentWorkers)],
                    }),
                    new TableCell({
                        children: [new Paragraph(totalPermanentWorkersHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalPermanentWorkersHealthInsuranceCovered) /
                                  parseFloat(totalPermanentWorkers) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(totalPermanentWorkersHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalPermanentWorkersHealthInsuranceCovered) /
                                  parseFloat(totalPermanentWorkers) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(totalPermanentWorkersHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalPermanentWorkersHealthInsuranceCovered) /
                                  parseFloat(totalPermanentWorkers) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(totalPermanentWorkersHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalPermanentWorkersHealthInsuranceCovered) /
                                  parseFloat(totalPermanentWorkers) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(totalPermanentWorkersHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalPermanentWorkersHealthInsuranceCovered) /
                                  parseFloat(totalPermanentWorkers) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Other than Permanent workers")],
                        columnSpan:12,
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Male")],
                    }),
                    new TableCell({
                        children: [new Paragraph(maleOtherPermanantWorker[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(maleOtherPermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(maleOtherPermanantWorkerHealthInsurance[0].value) /
                              parseFloat(maleOtherPermanantWorker[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(maleOtherPermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(maleOtherPermanantWorkerHealthInsurance[0].value) /
                              parseFloat(maleOtherPermanantWorker[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(maleOtherPermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(maleOtherPermanantWorkerHealthInsurance[0].value) /
                              parseFloat(maleOtherPermanantWorker[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(maleOtherPermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(maleOtherPermanantWorkerHealthInsurance[0].value) /
                              parseFloat(maleOtherPermanantWorker[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(maleOtherPermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                            parseFloat(maleOtherPermanantWorkerHealthInsurance[0].value) /
                              parseFloat(maleOtherPermanantWorker[0].value) *
                              100
                          ).toFixed(2)}%`)],  
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Female")],
                    }),
                    new TableCell({
                        children: [new Paragraph(femaleOtherPermanantWorker[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(femaleOtherPermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                                parseFloat(femaleOtherPermanantWorkerHealthInsurance[0].value) /
                                  parseFloat(femaleOtherPermanantWorker[0].value) *
                                  100
                              ).toFixed(2)}%`)],    
                    }),
                    new TableCell({
                        children: [new Paragraph(femaleOtherPermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                                parseFloat(femaleOtherPermanantWorkerHealthInsurance[0].value) /
                                  parseFloat(femaleOtherPermanantWorker[0].value) *
                                  100
                              ).toFixed(2)}%`)],    
                    }),
                    new TableCell({
                        children: [new Paragraph(femaleOtherPermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                                parseFloat(femaleOtherPermanantWorkerHealthInsurance[0].value) /
                                  parseFloat(femaleOtherPermanantWorker[0].value) *
                                  100
                              ).toFixed(2)}%`)],    
                    }),
                    new TableCell({
                        children: [new Paragraph(femaleOtherPermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                                parseFloat(femaleOtherPermanantWorkerHealthInsurance[0].value) /
                                  parseFloat(femaleOtherPermanantWorker[0].value) *
                                  100
                              ).toFixed(2)}%`)],    
                    }),
                    new TableCell({
                        children: [new Paragraph(femaleOtherPermanantWorkerHealthInsurance[0].value)],  
                    }),
                    new TableCell({
                        children: [new Paragraph( `${(
                                parseFloat(femaleOtherPermanantWorkerHealthInsurance[0].value) /
                                  parseFloat(femaleOtherPermanantWorker[0].value) *
                                  100
                              ).toFixed(2)}%`)],    
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total")],
                    }),
                    new TableCell({
                        children: [new Paragraph(totalOtherPermanentWorkers)],
                    }),
                    new TableCell({
                        children: [new Paragraph(totalOtherPermanentWorkersHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalOtherPermanentWorkersHealthInsuranceCovered) /
                                  parseFloat(totalOtherPermanentWorkers) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(totalOtherPermanentWorkersHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalOtherPermanentWorkersHealthInsuranceCovered) /
                                  parseFloat(totalOtherPermanentWorkers) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(totalOtherPermanentWorkersHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalOtherPermanentWorkersHealthInsuranceCovered) /
                                  parseFloat(totalOtherPermanentWorkers) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(totalOtherPermanentWorkersHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalOtherPermanentWorkersHealthInsuranceCovered) /
                                  parseFloat(totalOtherPermanentWorkers) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(totalOtherPermanentWorkersHealthInsuranceCovered)],  
                    }),
                    new TableCell({
                        children: [new Paragraph(`${(
                                parseFloat(totalOtherPermanentWorkersHealthInsuranceCovered) /
                                  parseFloat(totalOtherPermanentWorkers) *
                                  100
                              ).toFixed(2)}%`)],  
                    }),
                ],
            }),
        ],
    });
};


const questionSpendingWellbeing = () => {
    return new Paragraph({
        text: " c. Spending on measures towards well-being of employees and workers (including  permanent and other than permanent) in the following format – ",
        spacing: { after: 200 },
    });
};


const tableSpendingWellBeing = () => {
    return new Table({
        columnWidths: [3505, 3505, 3505],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph(" ")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY _____ Current Financial Year")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY _____ Previous Financial Year")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Cost incurred on well-being measures as a % of total revenue of the company")],
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


const questionRetirementBenefits = () => {
    return new Paragraph({
        text: " 2. Details of retirement benefits, for Current FY and Previous Financial Year. ",
        spacing: { after: 200 },
    });
};

const tableRetirementBenefits = () => {
    return new Table({
        columnWidths: [2000, 1500, 1500, 2000, 1500, 1500, 1500, 1500, 1500],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Benefits")],
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
        
                    new TableCell({
                        children: [new Paragraph("No. of employees covered as a % of total employees")],
                    }),
                    new TableCell({
                        children: [new Paragraph("No. of workers covered as a % of total workers")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Deducted and deposited with the authority (Y/N/N.A.)")],
                    }),
                    new TableCell({
                        children: [new Paragraph("No. of employees covered as a % of total employees")],
                    }),
                    new TableCell({
                        children: [new Paragraph("No. of workers covered as a % of total workers")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Deducted and deposited with the authority (Y/N/N.A.)")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("PF")],
                    }),
                    new TableCell({
                        children: [new Paragraph(EmployeesPercentagePf)], 
                    }),
                    new TableCell({
                        children: [new Paragraph(WorkersPercentagePf)], 
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
                        children: [new Paragraph("Gratuity")],
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
                        children: [new Paragraph("ESI")],
                    }),
                    new TableCell({
                        children: [new Paragraph(EmployeesPercentageEsi)], 
                    }),
                    new TableCell({
                        children: [new Paragraph(WorkersPercentageEsi)], 
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
                        children: [new Paragraph("Others – please specify")],
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

const questionAccessibility = () => {
    return new Paragraph({
        text: "3. Accessibility of workplaces: Are the premises / offices of the entity accessible to differently abled employees and  workers, as per the requirements of the Rights of Persons with Disabilities Act, 2016? If  not, whether any steps are being taken by the entity in this regard. ",
        spacing: { before:200,after: 200 },
    });
};

const questionEqualOpportunityPolicy = () => {
    return new Paragraph({
        text: "4. Does the entity have an equal opportunity policy as per the Rights of Persons with Disabilities Act, 2016? If so, provide a web-link to the policy.",
        spacing: { before:200,after: 200 },
    });
};

const questionParentalLeaveRates = () => {
    return new Paragraph({
        text: "5. Return to work and Retention rates of permanent employees and workers that took  parental leave.",
        spacing: { before:200,after: 200 },
    });
};

const tableParentalLeaveRates = () => {
    return new Table({
        
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph(" ")],
                        
                    }),
                    new TableCell({
                        children: [new Paragraph("Permanent employees")],
                        columnSpan: 2,
                    }),
                    new TableCell({
                        children: [new Paragraph("Permanent workers")],
                        columnSpan: 2,
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Gender")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Return to work rate")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Retention rate")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Return to work rate")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Retention rate")],
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
                ],
            }),
        ],
    });
};

const questionGrievanceRedressMechanism = () => {
    return new Paragraph({
        text: "6. Is there a mechanism available to receive and redress grievances for the following  categories of employees and worker? If yes, give details of the mechanism in brief.",
        spacing: { before:200, after: 200 },
    });
};

const tableGrievanceRedressMechanism = () => {
    return new Table({
        columnWidths: [4000, 8000],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Category")],
                    }),
                    new TableCell({
                        children: [new Paragraph("Yes/No (If Yes, then give details of the mechanism in brief)")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Permanent Workers")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Other than Permanent Workers")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Permanent Employees")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Other than Permanent Employees")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
        ],
    });
};


const questionMembershipAssociationsUnions = () => {
    return new Paragraph({
        text: "7. Membership of employees and worker in association(s) or Unions recognised by the  listed entity: ",
        spacing: { after: 200 },
    });
};

const tableMembershipAssociationsUnions = () => {
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
        
                    new TableCell({children:  [new Paragraph("Total employees /  workers in  respective category (A)")],}),
                    new TableCell({ children: [new Paragraph("No. of employees / workers in respective category, who are part of association(s) or Union (B)")] }),
                    new TableCell({ children: [new Paragraph("% (B / A)")] }),
                    new TableCell({ children: [new Paragraph("Total employees / workers in respective category (C)")] }),
                    new TableCell({ children: [new Paragraph("No. of employees / workers in respective category, who are part of association(s) or Union (D)")] }),
                    new TableCell({ children: [new Paragraph("% (D / C)")] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Total Permanent Employees")],
                    }),
                    new TableCell({
                        children: [new Paragraph("60")], 
                    }),
                    new TableCell({
                        children: [new Paragraph("50")], 
                    }),
                    new TableCell({
                        children: [new Paragraph("83.33%")], 
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
                        children: [new Paragraph("40")], 
                    }),
                    new TableCell({
                        children: [new Paragraph("20")], 
                    }),
                    new TableCell({
                        children: [new Paragraph("50%")], 
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
                        children: [new Paragraph("20")], 
                    }),
                    new TableCell({
                        children: [new Paragraph("10")], 
                    }),
                    new TableCell({
                        children: [new Paragraph("50%")], 
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
                        children: [new Paragraph("47")], 
                    }),
                    new TableCell({
                        children: [new Paragraph("30")], 
                    }),
                    new TableCell({
                        children: [new Paragraph("63.82%")], 
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
                        children: [new Paragraph("Male ")],
                    }),
                    new TableCell({
                        children: [new Paragraph("24")], 
                    }),
                    new TableCell({
                        children: [new Paragraph("10")], 
                    }),
                    new TableCell({
                        children: [new Paragraph("41.66%")], 
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
                        children: [new Paragraph("23")], 
                    }),
                    new TableCell({
                        children: [new Paragraph("10")], 
                    }),
                    new TableCell({
                        children: [new Paragraph("43.47%")], 
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

const questionTrainingDetails = () => {
    return new Paragraph({
        text: "8. Details of training given to employees and workers:",
        spacing: { after: 200 },
    });
};

const tableTrainingDetails = () => {
    return new Table({
        columnWidths: [3000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000],
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
                        children: [new Paragraph("Total  ")],
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
        ],
    });
};


const questionCareerDevelopmentReview = () => {
    return new Paragraph({
        text: "9. Details of performance and career development reviews of employees and worker:",
        spacing: { before:200, after: 200 },
    });
};

const tableCareerDevelopmentReview = () => {
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
                    new TableCell({ children: [new Paragraph("No. (B)")] }),
                    new TableCell({ children: [new Paragraph("% (B / A)")] }),
                    new TableCell({ children: [new Paragraph("Total (C)")] }),
                    new TableCell({ children: [new Paragraph("No. (D)")] }),
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

const healthSafetyManagement = () => {
    return new Paragraph({
      children: [
        new TextRun({
          text: "10. Health and safety management system: a. Whether an occupational health and safety management system has been  implemented by the entity? (Yes/ No). If yes, the coverage such system?  b. What are the processes used to identify work-related hazards and assess risks on a  routine and non-routine basis by the entity?  ",
          break: 2,
        }),
        new TextRun({
          text: "c. Whether you have processes for workers to report the work related hazards and to remove themselves from such risks. (Y/N)",
          break: 2,
        }),
        new TextRun({
            text: "d. Do the employees/ worker of the entity have access to non-occupational medical  and healthcare services? (Yes/ No) ",
            break: 2,
          }),
      ],
    });
  };

  const questionSafetyIncidents = () => {
    return new Paragraph({
        text: "11. Details of safety related incidents, in the following format:",
        spacing: { before:200, after: 200 },
    });
};

const tableSafetyIncidents = () => {
    return new Table({
        columnWidths: [3000, 2000, 2000, 2000, 2000],
        rows: [
            
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Safety Incident/Number")] }),
                    new TableCell({ children: [new Paragraph("Category*")] }),
                    new TableCell({ children: [new Paragraph("FY _____ (Current Financial Year)")] }),
                    new TableCell({ children: [new Paragraph("FY _____ (Previous Financial Year)")] }),
                ],
            }),

            
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Lost Time Injury Frequency Rate (LTIFR) (per one million-person hours worked)")],
                        rowSpan: 2,
                     }),

                    new TableCell({ children: [new Paragraph("Employees")] }),
                    new TableCell({ children: [new Paragraph("")] }), 
                    new TableCell({ children: [new Paragraph("")] }), 
                    
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Workers")] }),
                    new TableCell({ children: [new Paragraph("")] }), 
                    new TableCell({ children: [new Paragraph("")] }), 
                    
                ],
            }),

            
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Total recordable work-related injuries")],
                        rowSpan: 2,
                     }),
                     new TableCell({ children: [new Paragraph("Employees")] }),
                    new TableCell({ children: [new Paragraph("")] }), 
                    new TableCell({ children: [new Paragraph("")] }), 
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Workers")] }),
                    new TableCell({ children: [new Paragraph("")] }), 
                    new TableCell({ children: [new Paragraph("")] }),                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("No. of fatalities")],
                        rowSpan: 2,
                     }),

                    new TableCell({ children: [new Paragraph("Employees")] }),
                    new TableCell({ children: [new Paragraph("")] }), 
                    new TableCell({ children: [new Paragraph("")] }), 
                    
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Workers")] }),
                    new TableCell({ children: [new Paragraph("")] }), 
                    new TableCell({ children: [new Paragraph("")] }), 
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("High consequence work-related injury or ill-health (excluding fatalities)")],
                        rowSpan: 2,
                     }),

                    new TableCell({ children: [new Paragraph("Employees")] }),
                    new TableCell({ children: [new Paragraph("")] }), 
                    new TableCell({ children: [new Paragraph("")] }), 
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({ children: [new Paragraph("Workers")] }),
                    new TableCell({ children: [new Paragraph("")] }), 
                    new TableCell({ children: [new Paragraph("")] }), 
                ],
            }), 
        ],
    });
};

const conditionSafetyRelated = () => {
    return new Paragraph({
        text: "*Including in the contract workforce ",
        spacing: { before:200, after: 200 },
    });
};

const questionMeasuresTaken = () => {
    return new Paragraph({
        text: "12. Describe the measures taken by the entity to ensure a safe and healthy work place.   ",
        spacing: { before:200, after: 200 },
    });
};

const questionComplaintsWorkingConditions = () => {
    return new Paragraph({
        text: "13. Number of Complaints on the following made by employees and workers:   ",
        spacing: { before:200, after: 200 },
    });
};


const ComplaintsWorkingConditions = () => {
    return new Table({
        columnWidths: [2000, 1500, 1500, 2000, 1500, 1500, 1500, 1500, 1500],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph(" ")],
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
        
                    new TableCell({children:  [new Paragraph("Filed during  the year")],}),
                    new TableCell({ children: [new Paragraph("Pending resolution  at the end  of year")] }),
                    new TableCell({ children: [new Paragraph("Remarks")] }),
                    new TableCell({children:  [new Paragraph("Filed during  the year")],}),
                    new TableCell({ children: [new Paragraph("Pending resolution  at the end  of year")] }),
                    new TableCell({ children: [new Paragraph("Remarks")] }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Working Conditions")],
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
                        children: [new Paragraph("Health &  Safety")],
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

const questionAssessmentWorkingConditions = () => {
    return new Paragraph({
        text: "14. Assessments for the year: ",
        spacing: { before:200, after: 200 },
    });
};

const tableAssessmentWorkingConditions = () => {
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
                        children: [new Paragraph("Health and safety practices")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Working Conditions")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
        ],
    });
};

const detailsCorrectiveAction = () => {
    return new Paragraph({
        text: "15. Provide details of any corrective action taken or underway to address safety-related  incidents (if any) and on significant risks / concerns arising from assessments of health  & safety practices and working conditions. ",
        spacing: { before:200, after: 200 },
    });
};

const p3_leadership_indicators = () => {
    return new Paragraph({
      children: [
        new TextRun({
            text: "Leadership Indicators ",
            bold: true,
          break: 2,
        }),
        new TextRun({
          text: "1. Does the entity extend any life insurance or any compensatory package in the event of  death of (A) Employees (Y/N) (B) Workers (Y/N).  ",
          break: 2,
        }),
        new TextRun({
            text: "2. Provide the measures undertaken by the entity to ensure that statutory dues have been  deducted and deposited by the value chain partners.   ",
            break: 2,
          }),
      ],
    });
  };    


const questionHighConsequenceInjuries = () => {
    return new Paragraph({
        text: "3. Provide the number of employees / workers having suffered high consequence work related injury / ill-health / fatalities (as reported in Q11 of Essential Indicators above),  who have been are rehabilitated and placed in suitable employment or whose family  members have been placed in suitable employment: ",
        spacing: { before:200, after: 200 },
    });
};

const tableHighConsequenceInjuries = () => {
    return new Table({
        columnWidths: [4000, 8000],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("  ")],
                    }),
                    new TableCell({
                        children: [new Paragraph(" Total no. of affected employees/ workers ")],
                        columnSpan: 2,
                    }),
                    new TableCell({
                        children: [new Paragraph("No. of employees/workers that are rehabilitated and placed in suitable employment or whose family members have been placed in suitable employmentx ")],
                        columnSpan: 2,

                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("  ")],
                    }),
                    new TableCell({
                        children: [new Paragraph(" FY _____ Current Financial Year")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY _____ Previous Financial Year ")],
                    }),
                    new TableCell({
                        children: [new Paragraph(" FY _____ Current Financial Year")],
                    }),
                    new TableCell({
                        children: [new Paragraph("FY _____ Previous Financial Year ")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Employees")],
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
                        children: [new Paragraph("Workers ")],
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

const questionTransitionAssistance = () => {
    return new Paragraph({
        text: "4. Does the entity provide transition assistance programs to facilitate continued  employability and the management of career endings resulting from retirement or  termination of employment? (Yes/ No)  ",
        spacing: { before:200, after: 200 },
    });
};


const questionAssessmentValueChain = () => {
    return new Paragraph({
        text: "5. Details on assessment of value chain partners:   ",
        spacing: { before:200, after: 200 },
    });
};

const tableAssessmentValueChain = () => {
    return new Table({
        columnWidths: [4000, 8000],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph(" ")],
                    }),
                    new TableCell({
                        children: [new Paragraph("% of value chain partners (by value of business done with such partners) that were assessed ")],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Health and safety practices")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        children: [new Paragraph("Working Conditions")],
                    }),
                    new TableCell({
                        children: [new Paragraph("")], 
                    }),
                ],
            }),
        ],
    });
};

const detailsCorrectiveActionValueChain = () => {
    return new Paragraph({
        text: "6. Provide details of any corrective actions taken or underway to address significant risks /  concerns arising from assessments of health and safety practices and working conditions of value chain partners.  ",
        spacing: { before:200, after: 200 },
    });
};

module.exports = {
    principle_3,
    questionEmployeeWellBeing,
    tableEmployeeWellBeing,
    questionWorkersWellBeing,
    tableWorkersWellBeing,
    questionSpendingWellbeing,
    tableSpendingWellBeing,
    questionRetirementBenefits,
    tableRetirementBenefits,
    questionAccessibility,
    questionEqualOpportunityPolicy,
    questionParentalLeaveRates,
    tableParentalLeaveRates,
    questionGrievanceRedressMechanism,
    tableGrievanceRedressMechanism,
    questionMembershipAssociationsUnions,
    tableMembershipAssociationsUnions,
    questionTrainingDetails,
    tableTrainingDetails,
    questionCareerDevelopmentReview,
    tableCareerDevelopmentReview,
    healthSafetyManagement,
    questionSafetyIncidents,
    tableSafetyIncidents,
    conditionSafetyRelated,
    questionMeasuresTaken,
    questionComplaintsWorkingConditions,
    ComplaintsWorkingConditions,
    questionAssessmentWorkingConditions,
    tableAssessmentWorkingConditions,
    detailsCorrectiveAction,
    p3_leadership_indicators,
    questionHighConsequenceInjuries,
    tableHighConsequenceInjuries,
    questionTransitionAssistance,
    questionAssessmentValueChain,
    tableAssessmentValueChain,
    detailsCorrectiveActionValueChain,
};
