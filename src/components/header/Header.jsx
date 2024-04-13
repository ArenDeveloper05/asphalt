import { useEffect, useRef } from "react";

import HeaderInfo from "./header-info/HeaderInfo";
import Nav from "./nav/Nav";

import "./Header.scss";

const Header = () => {
  const scrollRef = useRef(false);
  const header = useRef(null);

  function handleScroll() {
    if (window.scrollY > 300) {
      if (scrollRef.current === false) {
        console.log("hatec ancav");
        header.current.style.background = "var(--header-gradient-transparent)";
        scrollRef.current = true;
      }
    } else {
      if (scrollRef.current) {
        console.log("het ekav");
        header.current.style.background = "var(--header-gradient)";
        scrollRef.current = false;
      }
    }
  }
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <header ref={header}>
      <Nav />
      <HeaderInfo />
    </header>
  );
};

export default Header;
