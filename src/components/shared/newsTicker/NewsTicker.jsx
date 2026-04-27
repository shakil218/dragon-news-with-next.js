import Marquee from "react-fast-marquee";
import { getAllNewsByCategory } from "@/lib/getData";

const NewsTicker = async () => {
  const news = await getAllNewsByCategory("01");

  const headlines = news.map((item) => item.title);

  return (
    <div className="flex items-center bg-base-300 p-3 gap-3">
      <button className="bg-red-500 text-white px-3 py-2 text-lg font-medium">
        Latest
      </button>

      <Marquee pauseOnHover speed={60} gradient={false}>
        {headlines?.map((text, index) => (
          <span key={index} className="mx-6 font-medium">
            📰 {text}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default NewsTicker;
