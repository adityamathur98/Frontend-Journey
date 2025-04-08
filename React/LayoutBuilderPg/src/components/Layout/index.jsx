import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";

const Layout = () => (
  <div className="flex flex-col justify-center items-center">
    <div className="flex flex-col justify-center items-center w-[80%] max-w-[550px] md:max-w-[1140px]">
      <Header />
      <Body />
      <Footer />
    </div>
  </div>
);

export default Layout;
