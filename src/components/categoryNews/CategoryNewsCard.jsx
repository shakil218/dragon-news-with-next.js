import Image from "next/image";
import Link from "next/link";
import { FaStar, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";

const CategoryNewsCard = ({ news }) => {
  const {
    _id,
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
  } = news;

  // Format date
  const formattedDate = new Date(author.published_date).toDateString();

  // Short description
  const shortDetails =
    details.length > 200 ? details.slice(0, 200) + "..." : details;

  return (
    <Link href={`/news/${_id}`} className="bg-white rounded-md shadow-sm overflow-hidden border border-base-200">
      
      {/* Header */}
      <div className="flex items-center justify-between bg-slate-100 p-4 mb-3">
        <div className="flex items-center gap-3">
          <Image
            src={author.img}
            alt={author.name || "Author-Name"}
            width={400}
            height={400}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800 capitalize">
              {author.name}
            </h3>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <div className="px-4">
        <h2 className="font-bold text-lg text-gray-900 leading-snug">
          {title}
        </h2>
      </div>

      {/* Image */}
      <div className="p-4 pt-3">
        <Image
          src={image_url}
          alt="news"
          width={500}
          height={208}
          className="w-full h-52 object-cover rounded-lg"
        />
      </div>

      {/* Description */}
      <div className="px-4 pb-2 text-sm text-gray-600">
        <p>{shortDetails}</p>

        <button className="text-orange-500 font-semibold mt-2 hover:underline">
          Read More
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-t-gray-200 text-sm text-gray-600">
        
        {/* Rating */}
        <div className="flex items-center gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(rating.number)
                  ? "text-orange-400"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="text-gray-700 ml-2">
            {rating.number} ({rating.badge})
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryNewsCard;