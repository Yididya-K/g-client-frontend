"use client";
import { FC, useState } from "react";

import {Check ,Clock, Pencil, Trash2 } from "lucide-react";

interface Invoice {
  id: number;
  learner: string;
  email: string;
  amount: string;
  date: string;
  status: "Paid" | "Pending";
  avatarUrl: string;
}

interface InvoiceTableProps {
  data: Invoice[];
  resultsPerPageOptions?: number[];
}

const InvoiceTable: FC<InvoiceTableProps> = ({ data, resultsPerPageOptions = [5, 10, 25] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(resultsPerPageOptions[0]);

  const totalPages = Math.ceil(data.length / resultsPerPage);
  const paginatedData = data.slice((currentPage - 1) * resultsPerPage, currentPage * resultsPerPage);

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div >
      <div className="overflow-x-auto bg-gray-100  shadow-md p-4">
        <table className="min-w-full table-auto border-separate border-spacing-y-4">
          <thead>
            <tr className="text-left text-sm font-semibold text-gray-600 rounded-lg">
              <th>Learners</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((invoice) => (
              <tr key={invoice.id} className="bg-white rounded shadow-sm">
                <td className="flex items-center gap-3 py-4 px-2">
                  <img
                    src={invoice.avatarUrl}
                    alt={invoice.learner}
                    className="w-10 h-10 rounded-full"
                  />
                  {invoice.learner}
                </td>
                <td className="px-2">{invoice.email}</td>
                <td className="px-2">{invoice.amount}</td>
                <td className="px-2">{invoice.date}</td>
                <td className="px-2">
                  {invoice.status === "Paid" ? (
                    <span className="bg-[#77C053] text-white px-3 py-1 w-[110px] h-[40px] text-center justify-center  inline-flex items-center gap-2 text-md">
                      Paid <Check />
                    </span>
                  ) : (
                    <span className="bg-gray-300 text-gray-600 px-3 py-1  w-[110px] h-[40px] justify-center   inline-flex items-center gap-1 text-md">
                      Pending <Clock  className="text-black"/>
                    </span>
                  )}
                </td>
                <td className="px-2">
                  <div className="flex gap-3 items-center">
                    <button
                      className="text-green-600 bg-green-100 hover:text-white hover:bg-green-600 items-center justify-center p-2"
                      onClick={() => console.log(`Selected invoice ID: ${invoice.id}`)}
                    >
                      <Pencil />
                    </button>
                    <button className="text-red-600 bg-red-100 hover:text-white hover:bg-red-600 items-center justify-center p-2">
                      <Trash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <button
            className="px-2 py-1 border rounded disabled:opacity-50"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          <span>{currentPage}</span>
          <span className="text-gray-400">of {totalPages} pages</span>
          <button
            className="px-2 py-1 border rounded disabled:opacity-50"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
        <div>
          Results per page
          <select
            className="ml-2 border rounded px-2 py-1"
            value={resultsPerPage}
            onChange={(e) => {
              setResultsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            {resultsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default InvoiceTable;
