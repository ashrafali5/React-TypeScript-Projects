export type AvailabilityFilter = "all" | "available" | "busy";
type ProfileFilterProps = {
  value: string;
  onChange: (value: AvailabilityFilter) => void;
};

const ProfileFilter = ({ value, onChange }: ProfileFilterProps) => {
  return (
    <div className="flex justify-center gap-2 mb-8">
      <button
        type="button"
        onClick={() => onChange("all")}
        className={`rounded-lg font-medium px-4 py-2 transition ${
          value === "all"
            ? "bg-gray-900 text-white"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      >
        All
      </button>
      <button
        type="button"
        onClick={() => onChange("available")}
        className={`rounded-lg font-medium px-4 py-2 transition ${
          value === "available"
            ? "bg-green-600 text-white"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      >
        Available
      </button>
      <button
        type="button"
        onClick={() => onChange("busy")}
        className={`rounded-lg font-medium px-4 py-2 transition ${
          value === "busy"
            ? "bg-gray-700 text-white"
            : "bg-white text-gray-600 hover:bg-gray-100"
        }`}
      >
        Busy
      </button>
    </div>
  );
};

export default ProfileFilter;
