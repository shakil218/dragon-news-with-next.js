import Link from "next/link";
import NewsLists from "../newsLists/NewsLists";

const Categories = ({ categories, active_id }) => {
  return (
    <div className="space-y-5">
      <div className="space-y-6">
        <h3 className="text-xl font-bold border-b border-b-base-300 pb-2">
          All Category
        </h3>
        <ul className="flex flex-col gap-3">
          {categories.map((category) => (
            <li
              key={category.category_id}
              className={`${active_id === category.category_id && "bg-slate-200"} text-md font-semibold p-2 rounded-sm`}
            >
              <Link href={`/category/${category.category_id}`} className="block">{category.category_name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <NewsLists />
      </div>
    </div>
  );
};

export default Categories;
