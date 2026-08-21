import React from 'react';
import { 
  Zap, 
  Phone, 
  MessageCircle, 
  Clock, 
  MapPin, 
  ShoppingBag, 
  Wrench,
  Menu,
  X
} from 'lucide-react';
import { STORE_INFO } from '../data/mockData';
import { QuoteCartItem } from '../types';

interface HeaderProps {
  cartItems: QuoteCartItem[];
  onOpenCart: () => void;
  onOpenBooking: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItems,
  onOpenCart,
  onOpenBooking,
  activeSection,
  onNavigate
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { id: 'catalog', label: 'Products' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-2xl">
      {/* Top Announcement & Quick Contact Bar */}
      <div className="bg-black/60 border-b border-white/5 text-white/60 text-xs px-4 py-2 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="flex items-center gap-1.5 text-[#FFB800] font-bold uppercase tracking-wider text-[11px]">
              <Zap className="w-3.5 h-3.5 fill-[#FFB800]" />
              100% Genuine Authorized Dealer
            </span>
            <span className="hidden sm:inline-block text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-white/60">
              <Clock className="w-3.5 h-3.5 text-[#FFB800]" />
              {STORE_INFO.timing}
            </span>
            <span className="hidden sm:inline-block text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-white/60">
              <MapPin className="w-3.5 h-3.5 text-[#FFB800]" />
              Mandipet, Davanagere
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="flex items-center gap-1.5 text-white/80 hover:text-[#FFB800] transition-colors font-bold uppercase text-[11px] tracking-wider"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Call: {STORE_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hi%20Om%20Ganesh%20Enterprises,%20I%20want%20to%20inquire%20about%20electrical%20supplies%20and%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600/90 hover:bg-emerald-500 text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider transition-colors shadow-xs"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Identity */}
          <div 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-11 h-11 rounded-2xl bg-[#FFB800] flex items-center justify-center text-black shadow-lg shadow-[#FFB800]/20 group-hover:scale-105 transition-transform">
              <Zap className="w-6 h-6 fill-black" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-archivo text-xl sm:text-2xl text-white tracking-tighter group-hover:text-[#FFB800] transition-colors">OM GANESH ENTERPRISES</span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full bg-white/10 text-[#FFB800] border border-white/10">
                  EST. 1988
                </span>
              </div>
              <p className="text-[11px] uppercase tracking-widest text-white/50 font-bold">Electricals & Construction Supplies • Davanagere</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeSection === link.id
                    ? 'text-[#FFB800] bg-white/10 shadow-inner'
                    : 'text-white/65 hover:text-[#FFB800] hover:bg-white/5'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Quote Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-[#FFB800] hover:bg-white/10 transition-colors"
              title="View Quote Cart"
              aria-label="View Quote Cart"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#FFB800] text-black font-archivo text-[11px] w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-black">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Book Electrician Button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 bg-[#FFB800] hover:bg-[#ffc629] text-black px-5 py-2.5 font-bold uppercase text-xs tracking-wider rounded-full transition-transform hover:scale-105 shadow-md shadow-[#FFB800]/20"
            >
              <Wrench className="w-3.5 h-3.5 stroke-[2.5]" />
              <span className="hidden sm:inline">Book Service</span>
              <span className="sm:hidden">Book</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full text-white/70 hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-white/10 px-4 pt-3 pb-6 space-y-3 shadow-2xl">
          <div className="grid grid-cols-1 gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider ${
                  activeSection === link.id
                    ? 'text-[#FFB800] bg-white/10'
                    : 'text-white/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#FFB800] text-black text-xs font-bold uppercase tracking-wider shadow-md"
            >
              <Phone className="w-4 h-4" />
              Direct Call: {STORE_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
