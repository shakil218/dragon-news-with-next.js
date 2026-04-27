export const getCategories = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
    {
      cache: "no-store",
    },
  );
  const data = await res.json();
  return data?.data?.news_category;
};

export const getAllNewsByCategory = async (category_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
    {
      cache: "no-store",
    },
  );
  const data = await res.json();
  return data.data;
};

export const getNewsById = async (news_id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${news_id}`,
    {
      cache: "no-store",
    },
  );
  const data = await res.json();
  return data.data;
};
