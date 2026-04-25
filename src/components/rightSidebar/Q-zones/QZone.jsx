"use client";

import Image from "next/image";
import swimming from "@/assets/swimming.png";
import classRoom from "@/assets/class.png";
import playground from "@/assets/playground.png";

const activities = [
  {
    id: 1,
    title: "Swimming",
    image: swimming,
  },
  {
    id: 2,
    title: "Class",
    image: classRoom,
  },
  {
    id: 3,
    title: "Play Ground",
    image: playground,
  },
];

const QZone = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <h2 className="text-lg font-semibold mb-4">Q-Zone</h2>

      <div className="flex flex-col gap-3">
        {activities.map((item) => (
          <div key={item.id}>
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={250}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QZone;
