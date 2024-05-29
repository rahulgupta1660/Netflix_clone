import "./Footer.scss";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <Link>
          <FaFacebookF className="icon" />
        </Link>
        <Link>
          <FaInstagram className="icon" />
        </Link>
        <Link>
          <FaTwitter className="icon" />
        </Link>
        <Link>
          <FaYoutube className="icon" />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="/">Audio Description</Link>
        </li>
        <li>
          <Link to="/">Help Centre</Link>
        </li>
        <li>
          <Link to="/">Gift Cards</Link>
        </li>
        <li>
          <Link to="/">Media Centre</Link>
        </li>
        <li>
          <Link to="/">Investor Relations</Link>
        </li>
        <li>
          <Link to="/">Jobs</Link>
        </li>
        <li>
          <Link to="/">Terms of Use</Link>
        </li>
        <li>
          <Link to="/">Privacy</Link>
        </li>
        <li>
          <Link to="/">Legal Notics</Link>
        </li>
        <li>
          <Link to="/">Cookie Preferences</Link>
        </li>
        <li>
          <Link to="/">Corporate Information</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
      <span>
        <Link>Service Code</Link>
      </span>
    </footer>
  );
};

export default Footer;
