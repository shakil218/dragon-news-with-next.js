import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import Navbar from "@/components/shared/navbar/Navbar";
import NewsTicker from "@/components/shared/newsTicker/NewsTicker";

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-5 lg:px-0">
        <Header />
        <NewsTicker />
        <Navbar />
      </div>
      <main className="min-h-[calc(100vh-514.49px)] max-w-7xl mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
