import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#8B0000] text-white">
      <div className="container py-12 px-4 md:py-16 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold mb-4">SMU Gavel Club</h3>
            <p className="text-gray-200 mb-4">
              Developing leadership through public speaking and communication skills.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-gray-300">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-gray-300">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-gray-300">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">About Us</Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-gray-300">Events</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-gray-300">Gallery</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">Contact</Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-gray-300">Join Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>SMU Campus, 81 Victoria St, Singapore 188065</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:gavelclub@smu.edu.sg" className="hover:text-gray-300">
                  gavelclub@smu.edu.sg
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+65 6828 0100</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} SMU Gavel Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}