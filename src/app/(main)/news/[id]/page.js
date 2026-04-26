import NewsDetailsCard from "@/components/news/NewsDetailsCard";
import SocialLogin from "@/components/rightSidebar/social/SocialLogin";
import { getNewsById } from "@/lib/getData";

const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const data = await getNewsById(id);
  const news = data?.[0];

  if (!news) {
    return (
      <div className="text-center py-10 text-gray-500">News not found</div>
    );
  }

  return (
    <div className="flex gap-6 py-10">
      <div className="flex-1">
        <NewsDetailsCard news={news} />
      </div>

      <div className="w-full">
        <SocialLogin />
      </div>
    </div>
  );
};

export default NewsDetailsPage;
