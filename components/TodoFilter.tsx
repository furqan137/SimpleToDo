"use client";

interface TodoFilterProps {
  currentFilter: "all" | "active" | "completed";
  onFilterChange: (filter: "all" | "active" | "completed") => void;
}

export default function TodoFilter({
  currentFilter,
  onFilterChange,
}: TodoFilterProps) {
  return (
    <div className="flex justify-center mb-6">
      <div className="inline-flex rounded-md shadow-sm" role="group">
        <button
          type="button"
          onClick={() => onFilterChange("all")}
          className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
            currentFilter === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          All
        </button>
        <button
          type="button"
          onClick={() => onFilterChange("active")}
          className={`px-4 py-2 text-sm font-medium ${
            currentFilter === "active"
              ? "bg-primary text-primary-foreground"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Active
        </button>
        <button
          type="button"
          onClick={() => onFilterChange("completed")}
          className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
            currentFilter === "completed"
              ? "bg-primary text-primary-foreground"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          Completed
        </button>
      </div>
    </div>
  );
}