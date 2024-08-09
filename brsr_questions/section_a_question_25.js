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
  const grievanceDataSet = require("../models/grievanceData");

//   console.log(Array.isArray(grievanceDataSet)); 
// console.log(grievanceDataSet);

const shareholderGrievanceDetails = grievanceDataSet?.find(
  (task) => task.task_name === "Shareholders"
).response;

const policyPresentShareholders = shareholderGrievanceDetails.filter(
  (res) => res.question_id === "65e57c0c7cf7487e73c0f28d"
);

const noOfComplaintsShareholders = shareholderGrievanceDetails.filter(
  (res) => res.question_id === "65e57c0c7cf7487e73c0f28e"
);

const noOfComplaintsResolvedShareholders = shareholderGrievanceDetails.filter(
  (res) => res.question_id === "65e57c0c7cf7487e73c0f28f"
);

const noOfComplaintsPendingShareholders = `${
  parseInt(noOfComplaintsShareholders[0].value) - parseInt(noOfComplaintsResolvedShareholders[0].value)
}`;

const employeeGrievanceDetails = grievanceDataSet?.find(
  (task) => task.task_name === "Employee Grevience Redressal"
).response;

const policyPresentEmployee = employeeGrievanceDetails.filter(
  (res) => res.question_id === "65e57c0c7cf7487e73c0f291"
);

const noOfComplaintsEmployee = employeeGrievanceDetails.filter(
  (res) => res.question_id === "65e57c0c7cf7487e73c0f292"
);

const noOfComplaintsResolvedEmployee = employeeGrievanceDetails.filter(
  (res) => res.question_id === "65e57c0c7cf7487e73c0f293"
);

const noOfComplaintsPendingEmployee = `${
  parseInt(noOfComplaintsEmployee[0].value) - parseInt(noOfComplaintsResolvedEmployee[0].value)
}`;

const customerGrievanceDetails = grievanceDataSet?.find(
  (task) => task.task_name === "Customer Complaints"
).response;

const policyPresentCustomer = customerGrievanceDetails.filter(
  (res) => res.question_id === "65e57c0c7cf7487e73c0f2b5"
);

const noOfComplaintsCustomer = customerGrievanceDetails.filter(
  (res) => res.question_id === "65e57c0c7cf7487e73c0f2b6"
);

const noOfComplaintsResolvedCustomer = customerGrievanceDetails.filter(
  (res) => res.question_id === "65e57c0c7cf7487e73c0f2b7"
);

const noOfComplaintsPendingCustomer = `${
  parseInt(noOfComplaintsCustomer[0].value) - parseInt(noOfComplaintsResolvedCustomer[0].value)
}`;

const valueChainGrievanceDetails = grievanceDataSet?.find(
  (task) => task.task_name === "Value Chain Partners"
).response;

const policyPresentValueChain = valueChainGrievanceDetails.filter(
  (res) => res.question_id === "65e57c0c7cf7487e73c0f2d3"
);

const noOfComplaintsValueChain = valueChainGrievanceDetails.filter(
  (res) => res.question_id === "65e57c0c7cf7487e73c0f2d4"
);

const noOfComplaintsResolvedValueChain = valueChainGrievanceDetails.filter(
  (res) => res.question_id === "65e57c0c7cf7487e73c0f2d5"
);

const noOfComplaintsPendingValueChain = `${
  parseInt(noOfComplaintsValueChain[0].value) - parseInt(noOfComplaintsResolvedValueChain[0].value)
}`;

  
const question_25 = () => {
    return new Paragraph({
        text: " 25. Complaints/Grievances on any of the principles (Principles 1 to 9) under the National  Guidelines on Responsible Business Conduct: ",
        spacing: {
           before: 200,
           after: 200,
       }
     })
   };

   const table_question_25 = () => {
   return new Table ({
    rows :[
        new TableRow({
            children : [
                new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(" Stakeholder  group from  whom  complaint is  received ")],
                    rowSpan: 2,
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(" Grievance  Redressal  Mechanism  in Place  (Yes/No)  (If Yes,  then  provide  web-link  for  grievance  redress  policy) ")],
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
            ]
        }),
        new TableRow({
            children:[
                new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(" Number of  complaints  filed during the  year ")],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(" Number of  complaints  pending resolution  at close of  the year ")],
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
                    children: [new Paragraph(" Number of  complaints  filed during the  year ")],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(" Number of  complaints  pending resolution  at close of  the year ")],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(" Remarks ")],
                  }),
            ]
        }),
      //   new TableRow({
      //     children:[
      //         new TableCell({
      //             width: {
      //               size: 5505,
      //               type: WidthType.DXA,
      //             },
      //             children: [new Paragraph(" Communities ")],
      //           }),
      //           new TableCell({
      //             width: {
      //               size: 5505,
      //               type: WidthType.DXA,
      //             },
      //             children: [new Paragraph(" ")],
      //           }),
      //           new TableCell({
      //             width: {
      //               size: 5505,
      //               type: WidthType.DXA,
      //             },
      //             children: [new Paragraph("  ")],
      //           }),
      //           new TableCell({
      //             width: {
      //               size: 5505,
      //               type: WidthType.DXA,
      //             },
      //             children: [new Paragraph("  ")],
      //           }),
      //           new TableCell({
      //             width: {
      //               size: 5505,
      //               type: WidthType.DXA,
      //             },
      //             children: [new Paragraph("  ")],
      //           }),
      //           new TableCell({
      //             width: {
      //               size: 5505,
      //               type: WidthType.DXA,
      //             },
      //             children: [new Paragraph("  ")],
      //           }),
      //           new TableCell({
      //             width: {
      //               size: 5505,
      //               type: WidthType.DXA,
      //             },
      //             children: [new Paragraph("  ")],
      //           }),
      //           new TableCell({
      //             width: {
      //               size: 5505,
      //               type: WidthType.DXA,
      //             },
      //             children: [new Paragraph("  ")],
      //           }),
      //     ]
      // }),
      new TableRow({
        children:[
            new TableCell({
                width: {
                  size: 5505,
                  type: WidthType.DXA,
                },
                children: [new Paragraph(" Investors (other than shareholders) ")],
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
        ]
    }),
        new TableRow({
            children:[
                new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(" Shareholders ")],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(policyPresentShareholders[0].value.displayText)],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(noOfComplaintsShareholders[0].value)],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(noOfComplaintsPendingShareholders)],
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
            ]
        }),
        new TableRow({
            children:[
                new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(" Employees and workers ")],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(policyPresentEmployee[0].value.displayText)],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(noOfComplaintsEmployee[0].value)],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(noOfComplaintsPendingEmployee)],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph("")],
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
            ]
        }),
        new TableRow({
            children:[
                new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(" Customers ")],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(policyPresentCustomer[0].value)],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(noOfComplaintsCustomer[0].value)],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(noOfComplaintsPendingCustomer)],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph("   ")],
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
            ]
        }), 
        new TableRow({
            children:[
                new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(" Value Chain Partners ")],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(policyPresentValueChain[0].value.displayText)],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(noOfComplaintsValueChain[0].value)],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(noOfComplaintsPendingValueChain)],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph("   ")],
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
            ]
        }), 
        new TableRow({
            children:[
                new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(" Other (please  specify) ")],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph(" Yes ")],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph("7")],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph("5")],
                  }),
                  new TableCell({
                    width: {
                      size: 5505,
                      type: WidthType.DXA,
                    },
                    children: [new Paragraph("   ")],
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

module.exports = { question_25, table_question_25};