import {
  FaStar,
  FaEye,
  FaRegBookmark,
  FaShareAlt,
  FaArrowLeft,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const NewsDetailsCard = ({ news }) => {
  const { title, details, image_url, rating, total_view, author } = news;

  return (
    <div className="bg-white border border-gray-200 rounded-md p-5 overflow-hidden space-y-4">
      {/* Back Button */}
      <button>
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-violet-500"
        >
          <FaArrowLeft />
          Back All News
        </Link>
      </button>

      <div className="space-y-3">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-slate-100">
          <div className="flex items-center gap-3">
            {/* author image */}
            <Image
              src={author?.img}
              alt={author?.name || "Author Name"}
              width={400}
              height={400}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-800 capitalize">
                {author?.name}
              </h3>
              <p className="text-xs text-gray-500">
                {new Date(author?.published_date).toDateString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-gray-500">
            <FaRegBookmark className="cursor-pointer hover:text-black transition" />
            <FaShareAlt className="cursor-pointer hover:text-black transition" />
          </div>
        </div>

        {/* Title */}
        <h1 className="font-bold text-lg text-gray-900 leading-snug">
          {title}
        </h1>

        {/* Image */}
        <Image
          src={image_url}
          alt="news"
          width={500}
          height={208}
          className="w-full h-auto object-cover rounded-lg"
        />

        {/* Details */}
        <div className="text-gray-600 text-sm leading-7">{details}</div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 border-t border-t-gray-200 text-sm text-gray-600">
          {/* Rating */}
          <div className="flex items-center gap-1 mt-4 text-orange-400">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.round(rating?.number)
                    ? "text-orange-400"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="text-gray-700 ml-2">
              {rating?.number} ({rating?.badge})
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-1">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
