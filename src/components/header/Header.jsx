import { useState } from "react";
import MobileMenuIcon from "../icons/MobileMenuIcon";
import "./Header.css";
import Navbar from "./navbar/Navbar";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container container">
        <a href="/" className="logo">
          Charles Darwin
        </a>

        <Navbar open={open} setOpen={setOpen} />

        <button
          className="menu-btn"
          onClick={() => {
            setOpen(true);
          }}
        >
          <MobileMenuIcon />
        </button>
      </div>
    </header>
  );
}
