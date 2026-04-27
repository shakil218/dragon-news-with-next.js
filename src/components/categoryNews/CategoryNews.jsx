"use client";

import { useState } from "react";
import CategoryNewsCard from "./CategoryNewsCard";
import EmptyState from "../shared/emptyState/EmptyState";

const CategoryNews = ({ allNews }) => {
  const [showAll, setShowAll] = useState(false);

  const visibleNews = showAll ? allNews : allNews.slice(0, 4);

  return (
    <div>
      <h3 className="text-xl font-bold pb-2">
        News by Category
      </h3>

      <div className="grid grid-cols-1 gap-5">
        {allNews?.length > 0 ? (
          visibleNews.map((news) => (
            <CategoryNewsCard key={news._id} news={news} />
          ))
        ) : (
          <EmptyState/>
        )}
      </div>

      {/* Show More Button */}
      {allNews?.length > 5 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-6 py-2 bg-linear-to-br from-indigo-900 via-purple-900 to-black text-white rounded-md cursor-pointer transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryNews;