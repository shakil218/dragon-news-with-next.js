import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import Navbar from "@/components/shared/navbar/Navbar";
import NewsTicker from "@/components/shared/newsTicker/NewsTicker";

const MainLayout = ({ children }) => {
  return (
    <div>
      <main className="max-w-7xl mx-auto">
        <Header />
        <NewsTicker />
        <Navbar />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
