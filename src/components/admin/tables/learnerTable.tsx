"use client";
import { FC, useState } from "react";
import { Eye, Pencil, Trash2} from "lucide-react"; // Added X for potential use
import LearnerDetailSidebar from "../LearnerDetailSidebar"; // Adjust path if necessary

interface Learners {
  id: number;
  learner: string;
  course: string;
  amount: string;
  date: string;
  gender: "Male" | "Female";
  avatarUrl: string;
  // Add other fields that might be displayed in the sidebar if they come from data
  email?: string;
  contact?: string;
  location?: string;
  bio?: string;
}

interface LearnersTableProps {
  data: Learners[];
  resultsPerPageOptions?: number[];
}

const LearnerTable: FC<LearnersTableProps> = ({
  data,
  resultsPerPageOptions = [5, 10, 25],
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(
    resultsPerPageOptions[0]
  );

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedLearner, setSelectedLearner] = useState<Learners | null>(null);

  const totalPages = Math.ceil(data.length / resultsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const handlePrevPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const handleViewLearner = (learner: Learners) => {
    setSelectedLearner(learner);
    setIsSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
    setSelectedLearner(null); // Optional: clear selected learner on close
  };

  return (
    <div>
      <div className="overflow-x-auto bg-gray-100 shadow-md p-4">
        <table className="min-w-full table-auto border-separate border-spacing-y-4">
          <thead>
            <tr className="text-left text-sm font-semibold text-gray-600 rounded-lg">
              <th>Learners</th>
              <th>Course</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Gender</th>
              <th></th> {/* Actions column */}
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((learner) => (
              <tr key={learner.id} className="bg-white rounded shadow-sm">
                <td className="flex items-center gap-3 py-4 px-2">
                  <img
                    src={learner.avatarUrl}
                    alt={learner.learner}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  {learner.learner}
                </td>
                <td className="px-2">{learner.course}</td>
                <td className="px-2">{learner.amount}</td>
                <td className="px-2">{learner.date}</td>
                <td className="px-2">{learner.gender}</td>
                <td className="px-2">
                  <div className="flex gap-2 justify-end items-center"> {/* items-center for vertical alignment */}
                    <button
                      title="View Learner"
                      className="text-blue-600 bg-blue-100 hover:text-white hover:bg-blue-600 p-2 rounded" // Added rounded
                      onClick={() => handleViewLearner(learner)}
                    >
                      <Eye size={18} /> {/* Adjusted icon size for consistency */}
                    </button>
                    <button
                      title="Edit Learner"
                      className="text-green-600 bg-green-100 hover:text-white hover:bg-green-600 p-2 rounded"
                      onClick={() =>
                        console.log(`Edit learner ID: ${learner.id}`)
                      }
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      title="Delete Learner"
                      className="text-red-600 bg-red-100 hover:text-white hover:bg-red-600 p-2 rounded">
                      <Trash2 size={18} />
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
            className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-50"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          <span>{currentPage}</span>
          <span className="text-gray-400">of {totalPages} pages</span>
          <button
            className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-50"
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
              setCurrentPage(1); // Reset to first page when results per page changes
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

      {/* Learner Detail Sidebar */}
      <LearnerDetailSidebar
        learner={selectedLearner}
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
      />
    </div>
  );
};

export default LearnerTable;