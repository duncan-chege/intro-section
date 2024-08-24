"use client";

import * as React from "react";
import { useState } from "react";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative">
      <div className={`${isMobileMenuOpen ? "absolute inset-0 bg-almost-black opacity-50" : ""}`}></div>
      <NavBar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <Intro isMobileMenuOpen={isMobileMenuOpen} />
    </div>
  );
}
