import * as React from "react";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <NavBar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <Intro isMobileMenuOpen={isMobileMenuOpen} />
    </>
  );
}
