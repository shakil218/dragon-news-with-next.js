import NotFoundClient from "@/components/404-notFound/NotFoundClient";

export const metadata = {
  title: "404 Not Found | Dragon News",
  description:
    "The page you are looking for cannot be found. Return home or go back to continue reading the latest news.",
  keywords: ["404", "not found", "Dragon News", "page missing", "error"],
};

export default function NotFound() {
  return <NotFoundClient />;
}