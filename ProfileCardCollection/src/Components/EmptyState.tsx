type EmptyStateProp = {
  message: string;
};

const EmptyState = ({ message }: EmptyStateProp) => {
  return (
    <div className="col-span-full rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center">
      <h2 className="text-lg font-semibold text-gray-900">No profile found</h2>

      <p className="mt-2 text-sm text-gray-500">{message}</p>
    </div>
  );
};

export default EmptyState;
