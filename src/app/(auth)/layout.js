import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <div>
      {/* <div className="max-w-7xl mx-auto"> */}
        <Navbar />
        <main className="min-h-[calc(100vh-316.8px)]">
          {children}
        </main>
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default AuthLayout;
