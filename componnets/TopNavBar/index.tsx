"use client"
import { Menu, X } from "lucide-react";
import { useState } from "react";
const TopNavBar = () => {

  return (
    <nav className="relative flex items-center justify-around bg-[#2c2b2b] text-white h-15 font-serif tracking-[0.01em] text-base">
  
      <div className="text-center min-[913px]:block pt-4 pb-4">
        <p>Free home delivery on purchases over 400 SEK</p>
      </div>
      <div className="text-2xl font-bold font-mono">Velora</div>
      <ul className="flex items-center justify-around gap-6 tracking-[0.01em]">
        <li>
          <a href="">Velora Magazine</a>
        </li>
        <li>
          <a href="">Impact</a>
        </li>
        <li>
          <a href="">Help and support</a>
        </li>
        <li>
          <a href="">Fond a store</a>
        </li>
      </ul>
    </nav>
  );
};
export default TopNavBar;
