type ProfileSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

const ProfileSearch = ({ value, onChange }: ProfileSearchProps) => {
  return (
    <div className="max-w-md mx-auto mb-8">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search profile..."
        className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
};

export default ProfileSearch;
