import { FaRegNewspaper } from "react-icons/fa";

const EmptyState = ({ message = "No news found" }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center border border-gray-200 rounded-md bg-gray-50">
      <FaRegNewspaper className="text-5xl text-gray-400 mb-4" />

      <h2 className="text-xl font-semibold text-gray-700">
        {message}
      </h2>

      <p className="text-gray-500 mt-2 text-sm max-w-sm">
        There are no news articles available in this category right now.
        Please check back later or try another category.
      </p>
    </div>
  );
};

export default EmptyState;