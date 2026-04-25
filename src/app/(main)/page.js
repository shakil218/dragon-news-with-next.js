import Categories from "@/components/leftSidebar/categories/Categories";
import SocialLogin from "@/components/rightSidebar/social/SocialLogin";
import { getCategories } from "@/lib/getData";

const HomePage = async () => {
  const categories = await getCategories();

  return (
    <div className="grid grid-cols-12 gap-5 py-10">
      {/* Left sidebar news category */}
      <div className="col-span-3">
        <Categories categories={categories} active_id={"01"} />
      </div>

      {/* news by category */}
      <div className="col-span-6 bg-cyan-100">news by category</div>
      {/* Right sidebar social login */}
      <div className="col-span-3">
        <SocialLogin />
      </div>
    </div>
  );
};

export default HomePage;
