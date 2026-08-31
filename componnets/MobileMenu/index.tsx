"use client";

import { Menu, X } from "lucide-react";

type MobileMenuProps = {
  isOpen: boolean;
  onToggle: () => void;
};

const MobileMenu = ({ isOpen, onToggle }: MobileMenuProps) => {
  return (
    <>
      <nav className="flex h-16 items-center justify-between bg-[#121212] px-5 text-white">
        <button
          type="button"
          onClick={onToggle}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        <div className="font-mono text-2xl font-bold">
          Velora
        </div>
      </nav>

      {isOpen && (
        <div className="bg-[#121212] text-[#babcbc]">
          {/* Main categories */}
          <div className="border-b border-[#444] px-6 py-6">
            <ul className="flex flex-col gap-5 font-serif text-lg">
              <li><a href="">News</a></li>
              <li><a href="">Body</a></li>
              <li><a href="">Home</a></li>
              <li><a href="">Beauty</a></li>
              <li><a href="">Gifts</a></li>
              <li><a href="">For him</a></li>
              <li><a href="">Collections</a></li>
              <li><a href="">Sun care</a></li>
              <li><a href="">Online Outlet</a></li>
              <li><a href="">Advent competition</a></li>
            </ul>
          </div>

          {/* Top links */}
          <div className="border-b border-[#444] px-6 py-6">
            <ul className="flex flex-col gap-5 font-serif">
              <li><a href="">Velora Magazine</a></li>
              <li><a href="">Impact</a></li>
              <li><a href="">Help and support</a></li>
              <li><a href="">Find a store</a></li>
            </ul>
          </div>

          {/* Delivery */}
          <div className="px-6 py-5 text-center text-sm">
            <p>Free home delivery on purchases over 400 SEK</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;