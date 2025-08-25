import Link from 'next/link';
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  const quickLinks = [
    { name: 'Privacy', href: '#' },
    { name: 'Accessibility', href: '#' },
    { name: 'Jobs', href: '#' },
  ];

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Contact Block */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
                <span className="ml-3">123 Innovation Drive, Aurora, CO 80011</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+1234567890" className="ml-3 hover:underline">(123) 456-7890</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:admissions@aurora.edu" className="ml-3 hover:underline">admissions@aurora.edu</a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="opacity-60 hover:opacity-100 hover:underline transition-opacity">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social Icons */}
          <div>
            <h3 className="text-lg font-bold">Connect With Us</h3>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} aria-label={social.name}>
                  <social.icon className="h-6 w-6 opacity-80 hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm opacity-60">
            © {new Date().getFullYear()} Aurora Institute of Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
