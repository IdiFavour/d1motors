import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }: any) => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
