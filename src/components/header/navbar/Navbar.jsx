import FacebookIcon from "../../icons/FacebookIcon";
import InstagramIcon from "../../icons/InstagramIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";
import MenuCancelIcon from "../../icons/MenuCancelIcon";
import TwitterIcon from "../../icons/TwitterIcon";
import ArrowUpIcon from "../../icons/ArrowUpIcon";
import "./Navbar.css";

export default function Navbar({ open, setOpen }) {
  return (
    <nav className={`navbar ${open ? "show" : ""}`}>
      <div className="navbar-top">
        <button
          className="menu-close-btn"
          onClick={() => {
            setOpen(false);
          }}
        >
          <MenuCancelIcon />
        </button>

        <a href="/legacy" className="legacy">
          My Legacy
        </a>
      </div>

      <div className="navbar-bottom">
        <ul className="nav-links">
          <li className="underline">
            <a href="#">Home</a>
          </li>
          <li className="underline">
            <a href="#">The Voyage</a>
          </li>
          <li className="underline">
            <a href="#">Origin of Species</a>
          </li>
          <li className="underline">
            <a href="#">The Galápagos</a>
          </li>
          <li className="underline">
            <a href="#">Dive Deeper</a>
          </li>
          <li className="underline">
            <a href="#">Support Science</a>
          </li>
        </ul>
        <div className="color-profile">
          <button className="color-profile__btn">
            Color Profile <ArrowUpIcon />
          </button>
          <div className="theme-options">
            <button className="underline">Light Theme</button>
            <button className="underline">Dark Theme</button>
            <button className="">Device Theme</button>
          </div>
        </div>
        <div className="social-links">
          <a href="#">
            <InstagramIcon />
          </a>
          <a href="#">
            <LinkedinIcon />
          </a>
          <a href="#">
            <TwitterIcon />
          </a>
          <a href="#">
            <FacebookIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}
