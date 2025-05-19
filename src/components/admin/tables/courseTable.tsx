"use client";
import { FC, useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react"; // Added X for potential use

interface Courses {
  id: number;

  course: string;

  imageUrl: string;
  // Add other fields that might be displayed in the sidebar if they come from data
  track: string;
  detail?: string;
}

interface CourseTableProps {
  data: Courses[];
  resultsPerPageOptions?: number[];
}

const CourseTable: FC<CourseTableProps> = ({
  data,
  resultsPerPageOptions = [5, 10, 25],
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(
    resultsPerPageOptions[0]
  );

  const [selectedCourse, setSelectedCourse] = useState<Courses | null>(null);

  const totalPages = Math.ceil(data.length / resultsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  const handleViewLearner = (course: Courses) => {
    setSelectedCourse(course);
  };

  return (
    <div>
      <div className="overflow-x-auto bg-gray-100 shadow-md p-4">
        <table className="min-w-full table-auto border-separate border-spacing-y-4">
          <thead>
            <tr className="text-left text-sm font-semibold text-gray-600">
              <th className="px-6 w-[20%]">Image</th>
              <th className="px-6 w-[25%]">Course</th>
              <th className="px-6 w-[25%]">Track</th>
              <th className="px-6 w-[30%] text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((course) => (
              <tr key={course.id} className="bg-white rounded shadow-sm">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={course.imageUrl}
                      alt={course.course}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-800">{course.course}</td>
                <td className="px-6 py-4 text-gray-800">{course.track}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-3 justify-end items-center">
                    <button
                      title="View Learner"
                      className="text-blue-600 bg-blue-100 hover:text-white hover:bg-blue-600 p-2 rounded"
                      onClick={() => handleViewLearner(course)}
                    >
                      <Eye size={18} />
                    </button>
                    <button
                      title="Edit Learner"
                      className="text-green-600 bg-green-100 hover:text-white hover:bg-green-600 p-2 rounded"
                      onClick={() =>
                        console.log(`Edit learner ID: ${course.id}`)
                      }
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      title="Delete Learner"
                      className="text-red-600 bg-red-100 hover:text-white hover:bg-red-600 p-2 rounded"
                    >
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
    </div>
  );
};

export default CourseTable;
