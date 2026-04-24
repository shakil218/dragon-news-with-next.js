import Header from "@/components/shared/header/Header";
import Navbar from "@/components/shared/navbar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
