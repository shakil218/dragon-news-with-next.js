const CategoryAllNewsLoading = () => {
   return (
    <div className="w-full space-y-6 animate-pulse">
      {/* Heading */}
      <h3 className="text-xl font-bold pb-2">
        News by Category
      </h3>

      {/* Category Tabs Skeleton */}
      <div className="flex gap-3 flex-wrap">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-8 w-24 rounded-full bg-gray-200 dark:bg-gray-700"
          />
        ))}
      </div>

      {/* News Cards Skeleton */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 space-y-4"
          >
            {/* Image placeholder */}
            <div className="h-40 w-full rounded-lg bg-gray-200 dark:bg-gray-700" />

            {/* Title */}
            <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />

            {/* Description */}
            <div className="space-y-2">
              <div className="h-3 w-full rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-3 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
            </div>

            {/* Footer */}
            <div className="flex justify-between pt-2">
              <div className="h-3 w-20 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-3 w-16 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryAllNewsLoading;
