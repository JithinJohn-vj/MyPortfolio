import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/utils/constants.tsx";

interface NavbarProps {
  activeSection: string | null;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-white/10 transition-all duration-300",
        scrolled ? "shadow-md" : ""
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a 
              href="#hero" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero");
              }}
              className="text-xl font-bold text-white"
            >
              <span className="text-primary">&lt;</span>Jithin<span className="text-primary">/&gt;</span>
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className={cn(
                      "nav-link text-sm font-medium hover:text-primary transition-colors py-1 px-1",
                      activeSection === link.id ? "text-primary" : "text-white/80"
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={cn("md:hidden bg-surface border-b border-white/10", mobileMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.id);
              }}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary",
                activeSection === link.id ? "text-primary bg-primary/5" : "text-white/80"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
