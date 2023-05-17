import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  if (!totalPages) return null;

  return (
    <div className="fixed bottom-0 w-full text-purple-700  bg-white py-2 border-t-2 border-t-gray-300">
      <div className="flex justify-between gap-x-3 w-11/12 max-w-2xl mx-auto">
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="border-2 text-white
            shadow-purple-500 bg-purple-700
            hover:bg-purple-600 py-2 font-serif shadow-md px-4 rounded-md"
          >
            Previous
          </button>
        )}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="border-2 text-white
            shadow-purple-500 bg-purple-700
            hover:bg-purple-600 py-2 font-serif shadow-md px-4 rounded-md"


>
            Next
          </button>
        )}
        <p className=" font-semibold text-md">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
}
