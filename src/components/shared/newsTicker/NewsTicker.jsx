"use client";

import Marquee from "react-fast-marquee";

const NewsTicker = () => {
  const headlines = [
    "Breaking: Democracy thrives on transparent journalism",
    "Exclusive: Inside The Dragon News editorial process",
    "Update: 50K+ readers trust our reporting monthly",
    "Insight: Why independent journalism matters more than ever",
  ];

  return (
    <div className="flex justify-center items-center bg-base-300 p-3 gap-3">
      <button className="bg-red-500 text-white px-3 py-2 text-lg font-medium">Latest</button>
      <Marquee pauseOnHover speed={60} gradient={false}>
        {headlines.map((text, index) => (
          <span key={index} className="mx-6 font-medium">
            📰 {text}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default NewsTicker;