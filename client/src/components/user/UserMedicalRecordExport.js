import React from "react";
import jsPDF from "jspdf";
import 'jspdf-autotable';

 const UserMedicalRecordExport = ({ rowData }) => {
  const handleExport = () => {
    var date = new Date(rowData.createdAt).toLocaleDateString();

    // Create a new jsPDF instance
    const doc = new jsPDF({ orientation: "landscape",});

     doc.setFont("helvetica", "normal");

    var y = 30; // Get the vertical center of the page
    doc.setLineWidth(2);
    doc.text(
      doc.internal.pageSize.getWidth() / 2,
      y,
      "Medical Record Details on " + date,
      { align: "center" }
    );
    y += 10; // Move down by 10 units for the line

    // Add a line below the text
    doc.setLineWidth(0.5);
    doc.line(20, y, doc.internal.pageSize.getWidth() - 20, y);

     // Add a line below the text
     doc.setLineWidth(0.5);
     doc.line(20, y, doc.internal.pageSize.getWidth() - 20, y);

     
    const headers = [["Height","Weight","Pressure","Temperature","Medications", "Symptoms", "Treatments", "MedicalRecordRemark" ]]; // Modify this array for more columns

        //console.log(rowData);
    // Prepare the data for the table
    const rows = [[rowData.Height,rowData.Weight,rowData.Pressure,rowData.Temperature,rowData.Medications,rowData.Symptoms,rowData.Treatments,rowData.MedicalRecordRemark]]; // Modify this for more columns

    console.log(rows);

    // // Add the table to the document
    doc.autoTable({
      head: headers,
      body: rows,
      startY: 70,
      theme: "grid",
    });

    // // Save the PDF file
     doc.save("MedicalRecord - "+date+".pdf");
  };

  return (
    <button
      onClick={handleExport}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
    >
      Export
    </button>
  );
};
export default UserMedicalRecordExport;