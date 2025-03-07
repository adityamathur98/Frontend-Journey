import { Link } from "react-router-dom";

const Header = () => (
  <nav className="h-[30vh] flex flex-col justify-center items-center bg-cover bg-center bg-[url('https://assets.ccbp.in/frontend/react-js/books-blog-bg.png')]">
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-[#ffffff] text-[16px] sm:text-white sm:text-[34px]">
        Dev Blog
      </h1>
      <ul className="list-none flex gap-6">
        <li>
          <Link className="no-underline m-[8px] text-white" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="no-underline m-[8px] text-white" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="no-underline m-[8px] text-white" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Header;
