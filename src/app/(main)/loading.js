const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-base-100">

      {/* 🔥 Pro Spinner */}
      <div className="relative w-20 h-20 flex items-center justify-center">
        
        {/* Outer Glow Ring */}
        <div className="absolute w-full h-full rounded-full border-4 border-red-200 opacity-40 animate-pulse"></div>

        {/* Rotating Ring */}
        <div className="absolute w-full h-full rounded-full border-4 border-red-600 border-t-transparent animate-spin"></div>

        {/* Inner Dot */}
        <div className="w-3 h-3 bg-red-600 rounded-full animate-ping"></div>
      </div>

      {/* 📰 Text */}
      <h2 className="mt-6 text-lg font-semibold text-gray-700">
        Loading News...
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Please wait while we fetch the latest updates
      </p>

      {/* ✨ Animated Dots */}
      <div className="flex gap-1 mt-3">
        <span className="w-2 h-2 bg-red-600 rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-red-600 rounded-full animate-bounce delay-100"></span>
        <span className="w-2 h-2 bg-red-600 rounded-full animate-bounce delay-200"></span>
      </div>

    </div>
  );
};

export default Loading;