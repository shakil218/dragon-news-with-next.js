import Header from "@/components/shared/header/Header";
import Navbar from "@/components/shared/navbar/Navbar";
import NewsTicker from "@/components/shared/newsTicker/NewsTicker";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <NewsTicker />
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
