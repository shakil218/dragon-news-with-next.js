import NewsDetailsCard from "@/components/news/NewsDetailsCard";
import SocialLogin from "@/components/rightSidebar/social/SocialLogin";
import { getNewsById } from "@/lib/getData";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const data = await getNewsById(id);
  const news = data?.[0];

  if (!news) {
    return {
      title: "News Not Found | The Dragon News",
      description: "The requested news article could not be found.",
    };
  }

  return {
    title: `${news.title} | The Dragon News`,
    description: news.details.length > 160 ? news.details.slice(0, 160) + "..." : news.details,
  };
}

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
    <div className="grid md:grid-cols-12 gap-6 py-10 px-5 lg:px-0">
      <div className="md:col-span-9 space-y-6">
        <h3 className="text-lg font-bold border-b border-b-base-300 pb-2">
          Dragon News
        </h3>
        <NewsDetailsCard news={news} />
      </div>

      <div className="md:col-span-3">
        <SocialLogin />
      </div>
    </div>
  );
};

export default NewsDetailsPage;
