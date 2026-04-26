import CategoryNews from "@/components/categoryNews/CategoryNews";
import Categories from "@/components/leftSidebar/categories/Categories";
import SocialLogin from "@/components/rightSidebar/social/SocialLogin";
import { getAllNewsByCategory, getCategories } from "@/lib/getData";

const CategoryByAllNewsPage = async ({params}) => {
  const {id} = await params;
  const categories = await getCategories();
  const allNews = await getAllNewsByCategory(id);

  return (
    <div className="grid md:grid-cols-12 gap-5 py-10 px-5 lg:px-0">
      {/* Left sidebar news category */}
      <div className="md:col-span-3">
        <Categories categories={categories} active_id={id} />
      </div>

      {/* news by category */}
      <div className="md:col-span-6">
        <CategoryNews allNews={allNews} />
      </div>
      
      {/* Right sidebar social login */}
      <div className="md:col-span-3">
        <SocialLogin />
      </div>
    </div>
  );
};

export default CategoryByAllNewsPage;
