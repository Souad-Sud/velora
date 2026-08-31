"use client"
import Navbar from "../Navbar";
import TopNavBar from "../TopNavBar";
import MobileMenu from "../MobileMenu";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="hidden min-[1280px]:block">
        <TopNavBar />
        <Navbar />
      </div>
      {/* Mobile */}
      <div className="min-[1280px]:hidden">
        <MobileMenu isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      </div>
    </header>
  );
};

export default Header;
