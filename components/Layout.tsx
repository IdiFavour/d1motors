import Footer from "./Footer";
import Navbar from "./Navbar";
import Working from "./Working";
const Layout = ({ children }: any) => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      {children}
      <Footer />
      {/* <Working /> */}
    </div>
  );
};

export default Layout;
