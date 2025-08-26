'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Programs', href: '#programs' },
    { name: 'Admissions', href: '#' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out text-white',
          scrolled ? 'h-[64px] bg-background/80 shadow-md backdrop-blur-sm' : 'h-[72px]',
          isMenuOpen ? 'bg-background' : ''
        )}
      >
        <div className="container mx-auto flex h-full items-center justify-between px-6">
          <Link href="/" className="flex items-center">
            <span className={`font-headline text-2xl font-bold ${scrolled? "text-primary":"text-background"}`}>
              Aurora Institute of Engineering
            </span>
          </Link>
          <nav className="hidden items-center space-x-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-body text-sm font-medium text-foreground ${scrolled? "text-primary":"text-white"} hover:text-accent transition-colors`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background transition-opacity duration-300 ease-in-out md:hidden',
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="container mx-auto pt-24 px-6">
          <nav className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-headline text-3xl font-bold text-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
