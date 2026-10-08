import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolio';
import { FiSun, FiMoon, FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';

export const Navigation: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Projects', href: '#projects' },
    { label: 'Trajectory', href: '#timeline' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-[20px] bg-white/80 dark:bg-black/80 border-b border-[#d6d6d6] dark:border-[#333336] transition-colors duration-200">
      <div className="max-w-[1024px] mx-auto px-6 h-[48px] flex items-center justify-between">
        {/* Logo: Ismail. */}
        <a
          href="#hero"
          className="flex items-center gap-1.5 font-semibold text-[18px] tracking-[-0.22px] text-[#1d1d1f] dark:text-[#f5f5f7] hover:opacity-80 transition-opacity"
        >
          <span className="font-bold text-[20px] tracking-tight">{PERSONAL_INFO.shortName}</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] font-normal tracking-[-0.12px] text-[#1d1d1f]/80 dark:text-[#f5f5f7]/80 hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right utility items: Theme Toggle + Contact CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-1.5 text-[#1d1d1f]/70 dark:text-[#f5f5f7]/70 hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] rounded-full hover:bg-[#f5f5f7] dark:hover:bg-[#1c1c1e] transition-colors duration-150 cursor-pointer"
          >
            {theme === 'dark' ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-3.5 py-1 text-[12px] font-normal tracking-[-0.12px] rounded-full bg-[#0071e3] text-white hover:bg-[#0071e3]/90 transition-colors duration-150"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Utility + Hamburger Menu Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-[#1d1d1f]/70 dark:text-[#f5f5f7]/70 hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] rounded-full transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="p-2 text-[#1d1d1f] dark:text-[#f5f5f7] hover:opacity-80 transition-opacity cursor-pointer"
          >
            {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with smooth Apple-style overlay */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-[#d6d6d6]/60 dark:border-[#333336] bg-white dark:bg-black ${
          mobileMenuOpen ? 'max-h-[380px] opacity-100 py-6 px-6' : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[17px] font-medium tracking-[-0.374px] text-[#1d1d1f] dark:text-[#f5f5f7] hover:text-[#0066cc] dark:hover:text-[#2997ff] transition-colors flex items-center justify-between"
            >
              <span>{link.label}</span>
              <FiArrowUpRight className="w-4 h-4 text-[#707070] dark:text-[#a1a1a6]" />
            </a>
          ))}
          <div className="pt-4 border-t border-[#d6d6d6]/60 dark:border-[#333336]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center py-2.5 text-[14px] font-medium tracking-[-0.224px] rounded-full bg-[#0071e3] text-white hover:bg-[#0071e3]/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
