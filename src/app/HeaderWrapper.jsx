'use client';

import { useEffect, useRef, useState } from "react";
import TopHeader from "./Navbar/TopNavbar";
import MainNavbar from "./Navbar/Navbar";

export default function HeaderWrapper() {
  const [scrolled, setScrolled] = useState(false);
  const [topHeight, setTopHeight] = useState(0);
  const topRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 6);

    };

    const updateTopHeight = () => {
      if (topRef.current) {
        setTopHeight(topRef.current.offsetHeight);
      }
    };

    updateTopHeight(); // Initial
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateTopHeight);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateTopHeight);
    };
  }, []);

  return (
    <>
      <div
        ref={topRef}
        className={`topHeaderWrapper ${scrolled ? "relativeHeader" : "fixedHeader"}`}
      >
        <TopHeader />
      </div>
      <div
        className="mainNavbarFixed"
        style={{ top: scrolled ? 0 : `${topHeight}px` }}
      >
        <MainNavbar scrolled={scrolled} />
      </div>
    </>
  );
}
