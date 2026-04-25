// "use client";

import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import learning from "@/assets/learning-child.png";
import team from "@/assets/team-happiness.png";
import playground from "@/assets/playground-field.png";

const newsData = [
  {
    id: 1,
    title: "Bayern Slams Authorities Over Flight Delay to Club World Cup",
    category: "Sports",
    date: "Jan 4, 2022",
    image: learning,
  },
  {
    id: 2,
    title: "Bayern Slams Authorities Over Flight Delay to Club World Cup",
    category: "Sports",
    date: "Jan 4, 2022",
    image: team,
  },
  {
    id: 3,
    title: "Bayern Slams Authorities Over Flight Delay to Club World Cup",
    category: "Sports",
    date: "Jan 4, 2022",
    image: playground,
  },
];

const NewsLists = () => {
  return (
    <div className="space-y-6">
      {newsData.map((news) => (
        <div
          key={news.id}
          className="bg-base-100 rounded-xl shadow-sm hover:shadow-md transition p-3"
        >
          {/* IMAGE */}
          <div className="relative w-full h-44 rounded-lg overflow-hidden">
            <Image
              src={news.image}
              alt={news.title}
              fill
              className="object-cover"
            />
          </div>

          {/* CONTENT */}
          <div className="mt-3 space-y-2">
            <h2 className="text-lg font-semibold leading-snug hover:text-red-600 cursor-pointer">
              {news.title}
            </h2>

            {/* META */}
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span>{news.category}</span>

              <span className="flex items-center gap-1">
                <FaRegCalendarAlt className="text-xs" />
                {news.date}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsLists;
