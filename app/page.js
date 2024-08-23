"use client";

import * as React from "react";
import { useState } from "react";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={`min-h-screen ${isMobileMenuOpen ? "bg-almost-black/75" : ""}`}>
      <NavBar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <Intro isMobileMenuOpen={isMobileMenuOpen} />
    </div>
  );
}
