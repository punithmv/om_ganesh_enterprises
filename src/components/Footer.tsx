import React from 'react';
import { 
  Zap, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  ArrowUp
} from 'lucide-react';
import { STORE_INFO } from '../data/mockData';
import { ProductCategory } from '../types';

interface FooterProps {
  onSelectCategory: (category: ProductCategory) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onOpenBooking
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white border-t border-white/10">
      
      {/* Top Banner: Immediate Help & Store Location */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Store Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FFB800] flex items-center justify-center text-black shadow-lg shadow-[#FFB800]/20 font-bold">
                <Zap className="w-5 h-5 fill-black text-black" />
              </div>
              <div>
                <span className="font-archivo text-xl tracking-wider text-white">OM GANESH ENTERPRISES</span>
                <p className="text-[10px] text-[#FFB800] font-bold uppercase tracking-widest">ELECTRICALS & CONSTRUCTION SUPPLIES • DAVANAGERE</p>
              </div>
            </div>

            <p className="text-xs text-white/60 leading-relaxed font-inter">
              Authorized retailer & construction electrical material depot. Supplying copper house wires, 10kA switchgear, PVC conduits, chemical earthing pits alongside energy-saving BLDC appliances.
            </p>
          </div>

          {/* Col 2: Store Timings & Contact */}
          <div className="space-y-3">
            <h4 className="font-archivo text-xs uppercase tracking-widest text-[#FFB800]">STORE HOURS & PHONE</h4>
            
            <div className="text-xs space-y-3 text-white/70 font-inter">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-white uppercase text-xs">Mon – Sun (All 7 Days)</div>
                  <div className="text-white/50">9:00 AM to 9:30 PM</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${STORE_INFO.phone}`} className="font-bold text-white hover:text-[#FFB800] transition-colors">
                    {STORE_INFO.phone}
                  </a>
                  <div className="text-white/50">Counter & Wholesale Bookings</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/80">{STORE_INFO.email}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Quick Category Links */}
          <div className="space-y-3">
            <h4 className="font-archivo text-xs uppercase tracking-widest text-[#FFB800]">POPULAR CATEGORIES</h4>
            <ul className="space-y-2 text-xs text-white/60 font-inter">
              <li>
                <button
                  onClick={() => onSelectCategory('wires')}
                  className="hover:text-[#FFB800] transition-colors text-left"
                >
                  ⚡ Polycab & Finolex Copper Wires
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('switchgear')}
                  className="hover:text-[#FFB800] transition-colors text-left"
                >
                  🛡️ MCBs, DB Boards & Fuses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('conduits')}
                  className="hover:text-[#FFB800] transition-colors text-left"
                >
                  🏗️ PVC Conduit Pipes & GI Boxes
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('earthing')}
                  className="hover:text-[#FFB800] transition-colors text-left"
                >
                  ⏚ Chemical Earthing & Safety Pits
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectCategory('fans')}
                  className="hover:text-[#FFB800] transition-colors text-left"
                >
                  🌀 Atomberg BLDC 28W Fans
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Store Location & WhatsApp */}
          <div className="space-y-3">
            <h4 className="font-archivo text-xs uppercase tracking-widest text-[#FFB800]">STORE LOCATION</h4>
            
            <div className="text-xs text-white/60 flex items-start gap-2 font-inter">
              <MapPin className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
              <span>{STORE_INFO.address}, {STORE_INFO.cityStatePincode}</span>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Om%20Ganesh%20Enterprises,%20I%20need%20price%20inquiry%20or%20electrician%20booking.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase text-xs tracking-wider py-2.5 px-4 rounded-full transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 bg-[#FFB800] hover:bg-[#ffc629] text-black font-bold uppercase text-xs tracking-wider py-2.5 px-4 rounded-full transition-colors shadow-md"
              >
                <span>Book Technician Visit</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40 font-inter">
        <div>
          © {new Date().getFullYear()} Om Ganesh Enterprises. All Rights Reserved.
        </div>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-400 font-bold uppercase tracking-wider text-[11px]">
            <ShieldCheck className="w-4 h-4" />
            <span>Authorized Dealership</span>
          </span>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-white/10 hover:bg-[#FFB800] text-white hover:text-black transition-colors"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

    </footer>
  );
};
