const  { TextRun, File, HeadingLevel, Packer, Paragraph, StyleLevel, TableOfContents,Document, Table, TableCell, TableRow, WidthType} = require("docx");
const docx = require("docx");
const fs = require("fs");
const axios = require("axios")
const dataSet = require("../models/hrGeneralData"); 


const companyInfo = dataSet[0].response.company_information;

const section_a_i = () => {
    return new Document({
    sections: [
        {
            children: [
                new Paragraph({ 
            children:[
                new TextRun({
                    text: "SECTION A: GENERAL DISCLOSURES",
                    bold: true,
                    spacing:{
                        after: 200,
                    },
                }),
            ],
        }),
                new Paragraph({
                    text: "I. Details of the listed entity " ,
                    spacing: {
                    after: 200,},
                }),
                new Paragraph({ text: `1. Corporate Identity Number (CIN) of the Listed Entity: ${companyInfo.cin_number}` }),
                new Paragraph({ text: `2. Name of the Listed Entity: ${companyInfo.company_name}` }),
                new Paragraph({ text: `3. Year of incorporation: ${companyInfo.establish_year}` }),
                new Paragraph({ text: `4. Registered office address: ${companyInfo.registered_address}` }),
                new Paragraph({ text: `5. Corporate address: ${companyInfo.corporate_address}` }),
                new Paragraph({ text: `6. E-mail: ${companyInfo.company_email}` }),
                new Paragraph({ text: `7. Telephone: ${companyInfo.company_telephone}` }),
                new Paragraph({ text: `8. Website: ${companyInfo.company_website}` }),
                new Paragraph({ text: `9. Financial year for which reporting is being done: ${companyInfo.reporting_year}` }),
                new Paragraph({ text: `10. Name of the Stock Exchange(s) where shares are listed: ${companyInfo.stock_name}` }),
                new Paragraph({ text: `11. Paid-up Capital: ${companyInfo.capital_paid}` }),
                new Paragraph({ text: `12. Name and contact details (telephone, email address) of the person who may be contacted in case of any queries on the BRSR report: ${companyInfo.contact_name}, ${companyInfo.contact_details}` }),
                new Paragraph({ text: `13. Reporting boundary - Are the disclosures under this report made on a standalone basis (i.e. only for the entity) or on a consolidated basis (i.e. for the entity and all the entities which form a part of its consolidated financial statements, taken together): ${companyInfo.reporting_boundary}` }),
                new Paragraph({ text: `14. Name of assurance provider: ${companyInfo.assurance_name}` }),
                new Paragraph({
                    text: `15. Type of assurance obtained: ${companyInfo.assurance_type}`,
                    spacing: {
                        after: 200,
                    },
                }),

            ],
        },
    ],
})
};

module.exports = {section_a_i} ;
