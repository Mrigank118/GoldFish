"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Internships", href: "/internship" },
  { name: "Events", href: "/events" },
  { name: "Podcasts", href: "/podcast" },
  { name: "AI Cofounder", href: "/ai-co-founder" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-2.png"
              alt="Logo"
              height={150}
              width={150}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex lg:items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-gray-700 hover:text-[#FDBA3C] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Button
              variant="ghost"
              className="rounded-full text-[#FDBA3C] hover:bg-[#FDBA3C] hover:text-white text-lg font-medium px-4 py-2"
            >
              Login
            </Button>
            <Button className="rounded-full bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#6B3F2D] hover:text-white px-4 py-2 text-lg font-medium">
              Sign Up
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4">
            <div className="space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-medium text-gray-700 hover:text-[#FDBA3C] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <Button
                variant="ghost"
                className="rounded-full text-[#FDBA3C] hover:bg-[#FDBA3C] hover:text-white w-full py-2"
              >
                Login
              </Button>
              <Button className="rounded-full bg-[#FDBA3C] text-[#6B3F2D] hover:bg-[#6B3F2D] hover:text-white w-full py-2">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
