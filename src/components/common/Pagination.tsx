interface PaginationProps {
  currentPage: number;
  total: number;
  limit: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  total,
  limit,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / limit);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <button
        className="px-3 py-1 border rounded disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Prev
      </button>

      <span className="text-sm text-gray-600 hidden sm:inline">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="px-3 py-1 border rounded disabled:opacity-50"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
