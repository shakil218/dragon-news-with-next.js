"use client";

import Image from "next/image";
import bgImage from "@/assets/bg.png";

const BackgroundWrapper = () => {
  return (
    <div className="relative w-full h-100 md:h-125 lg:h-150">
      <Image
        src={bgImage}
        alt="Background"
        fill
        priority
        className="object-cover"
      />
    </div>
  );
};

export default BackgroundWrapper;