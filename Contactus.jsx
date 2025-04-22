import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const data = [
  {
    id: 1,
    sno: "1",
    distict: "Almora",
    name: "Name",
    category: "Crime Officer",
    email: "@example.com",
    contact: "0000000000"
  },
  {
    id: 2,
    sno: "2",
    distict: "Bageshwar",
    name: "Name",
    category: "Crime Officer",
    email: "@example.com",
    contact: "0000000000"
  },
  {
    id: 3,
    sno: "3",
    distict: "Chamoli",
    name: "Name",
    category: "Crime Officer",
    email: "@example.com",
    contact: "0000000000"
  },
  {
    id: 4,
    sno: "4",
    distict: "Champawat",
    name: "Name",
    category: "Crime Officer",
    email: "@example.com",
    contact: "0000000000"
  },
  {
    id: 5,
    sno: "5",
    distict: "Dehradun",
    name: "Name",
    category: "Crime Officer",
    email: "@example.com",
    contact: "0000000000"
  },
  {
    id: 6,
    sno: "6",
    distict: "Haridwar",
    name: "Name",
    category: "Crime Officer",
    email: "@example.com",
    contact: "0000000000"
  },
  {
    id: 7,
    sno: "7",
    distict: "Nainital",
    name: "Name",
    category: "Crime Officer",
    email: "@example.com",
    contact: "0000000000"
  },
  {
    id: 8,
    sno: "8",
    distict: "Pauri Garhwal",
    name: "Name",
    category: "Crime Officer",
    email: "@example.com",
    contact: "0000000000"
  },
  {
    id: 9,
    sno: "9",
    distict: "Pithoragarh",
    name: "Name",
    category: "Crime Officer",
    email: "@example.com",
    contact: "0000000000"
  },
  {
    id: 10,
    sno: "10",
    distict: "Rudraprayag",
    name: "Name",
    category: "Crime Officer",
    email: "@example.com",
    contact: "0000000000"
  },
  {
    id: 11,
    sno: "11",
    distict: "Tehri Garhwal",
    name: "Name",
    category: "Crime Officer",
    email: "@example.com",
    contact: "0000000000"
  },
  {
    id: 12,
    sno: "12",
    distict: "Udham Singh Nagar",
    name: "Name",
    category: "Crime Officer",
    email: "@example.com",
    contact: "0000000000"
  },
  {
    id: 13,
    sno: "13",
    distict: "Uttarkashi",
    name: "Name",
    category: "Crime Officer",
    email: "@example.com",
    contact: "0000000000"
  }
];

const CyberCrimeTable = () => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter((row) =>
    row.distict.toLowerCase().includes(search.toLowerCase())
  );

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("District & Crime Officer Contact Details", 20, 10);

    const tableColumn = [
      "S.NO", "District", "Name", "Rank", "Category", "Email", "Contact"
    ];
    const tableRows = [];

    filteredData.forEach(row => {
      tableRows.push([
        row.sno, row.distict, row.name, row.rank, row.category, row.email, row.contact
      ]);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20
    });

    doc.save("Cyber_Crime_Contacts.pdf");
  };

  return (
    <div className="mt-20 px-4 md:px-20 p-6">
      <p className="text-lg text-black font-semibold mb-5">District & Crime Officer Contact Details</p>
      <dir className = 'h-0.5 w-full bg-gray-100'></dir>
      <p className="mb-4 text-sm text-gray-600 mt-5">
        <span className="font-bold">Note:</span> Complainants using <span className="font-bold">"Report & Track"</span> option may contact the respective District & Crime Officer if the response has not been appropriate.
      </p>
      <dir className = 'h-0.5 w-full bg-gray-100'></dir>

      <div className="p-4 min-h-screen">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row gap-2 mb-4 justify-between">
            <input
              type="text"
              placeholder="Search by District"
              className="border p-2 rounded w-full sm:w-72"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded w-full sm:w-auto"
              onClick={downloadPDF}
            >
              Download PDF
            </button>
          </div>
          <dir className = 'h-0.5 w-full bg-gray-100'></dir>
          <div className="overflow-x-auto mt-5">
            <table className="w-full border-collapse border text-left text-sm">
              <thead>
                <tr className="bg-blue-100">
                  <th className="p-2 border">S.NO</th>
                  <th className="p-2 border">District</th>
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Rank</th>
                  <th className="p-2 border">Category</th>
                  <th className="p-2 border">Email</th>
                  <th className="p-2 border">Contact</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr
                    key={row.id}
                    className={`border ${index % 2 === 0 ? "bg-gray-200 hover:bg-gray-300" : "bg-white hover:bg-gray-200"}`}
                  >
                    <td className="p-2 border">{row.sno}</td>
                    <td className="p-2 border">{row.distict}</td>
                    <td className="p-2 border">{row.name}</td>
                    <td className="p-2 border">{row.rank}</td>
                    <td className="p-2 border">{row.category}</td>
                    <td className="p-2 border">{row.email}</td>
                    <td className="p-2 border">{row.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberCrimeTable;
