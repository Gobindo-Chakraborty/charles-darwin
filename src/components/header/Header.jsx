import MobileMenuIcon from "../icons/MobileMenuIcon";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container container">
        <a href="/" className="logo">
          Charles Darwin
        </a>

        <button className="menu-btn">
          <MobileMenuIcon />
        </button>
      </div>
    </header>
  );
}
