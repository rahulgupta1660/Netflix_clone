import logo from "/logo.png";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="logo" />
        <nav className="navigation">
          <Link to="/">Home</Link>
          <Link to="/">TV Shows</Link>
          <Link to="/">Movies</Link>
          <Link to="/">New & Popular</Link>
          <Link to="/">My List</Link>
          <Link to="/">Browse By Languages</Link>
        </nav>
      </div>
      <nav>
        <IoIosSearch fontSize="2rem" />
      </nav>
    </header>
  );
};

export default Header;
