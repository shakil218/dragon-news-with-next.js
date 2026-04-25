import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
  const links = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      href: "#",
      color: "text-blue-600",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      href: "#",
      color: "text-sky-500",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "#",
      color: "text-pink-500",
    },
  ];

  return (
    <div className="bg-base-100 ">
      <h3 className="text-lg font-semibold mb-4">Find Us On</h3>

      <div className="border rounded-sm border-gray-400 divide-y divide-gray-400">
        {links.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="flex items-center gap-3 px-4 py-2 hover:bg-base-200 transition"
          >
            <div className="flex justify-center items-center w-10 h-10 bg-base-300 rounded-full">
              <span className={`text-lg ${item.color}`}>
              {item.icon}
            </span>
            </div>

            <span className="text-sm font-medium text-gray-600">
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
