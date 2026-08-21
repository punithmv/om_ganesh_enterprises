import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Truck, 
  Wrench, 
  ArrowRight, 
  Sparkles, 
  Calculator,
  Search,
  Star,
  CheckCircle2
} from 'lucide-react';
import { STORE_INFO } from '../data/mockData';
import { ProductCategory } from '../types';

interface HeroProps {
  onSelectCategory: (category: ProductCategory) => void;
  onOpenBooking: () => void;
  onOpenCalculator: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectCategory,
  onOpenBooking,
  onOpenCalculator,
  searchQuery,
  onSearchChange
}) => {
  const quickCategories: { id: ProductCategory; label: string; icon: string; highlight?: string; division?: string }[] = [
    { id: 'wires', label: 'Wires & Heavy Cables', icon: '⚡', highlight: 'Polycab & Finolex FR-LSH', division: 'Construction' },
    { id: 'switchgear', label: 'MCBs, DBs & Fuses', icon: '🛡️', highlight: 'Legrand & Havells 10kA', division: 'Construction' },
    { id: 'conduits', label: 'PVC Pipes & GI Boxes', icon: '🏗️', highlight: 'Heavy Slab Grade IS:9537', division: 'Construction' },
    { id: 'fans', label: 'BLDC Ceiling Fans', icon: '🌀', highlight: 'Up to 65% Power Saver', division: 'Appliances' },
    { id: 'lighting', label: 'LED & Floodlights', icon: '💡', highlight: 'Smart App & Commercial', division: 'Lighting' },
    { id: 'earthing', label: 'Chemical Earthing Kit', icon: '⏚', highlight: 'Pure Copper Rods & Compound', division: 'Construction' }
  ];

  return (
    <div className="relative overflow-hidden bg-[#0A0A0A] text-white border-b border-white/10">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#FFB800]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#E65100]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 sm:pt-16 sm:pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Local Authority Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FFB800] text-xs font-bold uppercase tracking-[0.3em] shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-[#FFB800]" />
              <span>ESTABLISHED 1988 • DAVANAGERE WHOLESALE & RETAIL</span>
            </div>

            {/* Huge Headline in Archivo Black */}
            <h1 className="font-archivo text-4xl sm:text-6xl md:text-7xl lg:text-7xl leading-[0.92] tracking-tighter accent-glow text-white uppercase">
              POWER YOUR BUILD. <br className="hidden sm:inline" />
              <span className="text-[#FFB800]">BRIGHTEN YOUR HOME.</span>
            </h1>

            {/* Subtitle in Inter with white/60 contrast */}
            <p className="font-inter text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed">
              <strong className="text-white">Om Ganesh Enterprises</strong> is your 1-stop authorized supplier for <span className="text-white font-bold">House Construction Electrical Materials</span> (copper wires, MCB distribution boards, porcelain fuses, PVC conduits & earthing pits) and <span className="text-white font-bold">5-Star Energy BLDC Home Appliances</span> in Davanagere.
            </p>

            {/* Live Search Bar */}
            <div className="relative max-w-xl mx-auto lg:mx-0">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-white/40 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  placeholder="Search Polycab wires, MCBs, fuses, conduit pipes, BLDC fans..."
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 pl-11 pr-24 py-3.5 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:border-transparent transition-all shadow-inner font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => onSearchChange('')}
                    className="absolute right-20 text-xs text-white/40 hover:text-white px-2 py-1 font-bold uppercase tracking-wider"
                  >
                    Clear
                  </button>
                )}
                <button
                  onClick={() => {
                    const catalogEl = document.getElementById('catalog');
                    if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="absolute right-1.5 bg-[#FFB800] hover:bg-[#ffc629] text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-colors shadow-xs"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Key Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={() => {
                  const catalogEl = document.getElementById('catalog');
                  if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 bg-[#FFB800] hover:bg-[#ffc629] text-black px-6 py-3.5 rounded-full font-bold uppercase text-xs tracking-widest transition-all shadow-lg shadow-[#FFB800]/20 hover:scale-105"
              >
                <span>Browse Materials & Stock</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  const boqEl = document.getElementById('boq-estimator');
                  if (boqEl) boqEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/15 text-[#FFB800] border border-[#FFB800]/40 px-5 py-3.5 rounded-full font-bold uppercase text-xs tracking-widest transition-all hover:border-[#FFB800]"
              >
                <Calculator className="w-4 h-4 text-[#FFB800]" />
                <span>Construction BOQ Calculator</span>
              </button>

              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/15 px-5 py-3.5 rounded-full font-bold uppercase text-xs tracking-widest transition-all hover:border-white/30"
              >
                <Wrench className="w-4 h-4 text-[#FFB800]" />
                <span>Electrician Booking</span>
              </button>
            </div>

            {/* Stat Row in Archivo Black */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center lg:text-left">
                <div className="font-archivo text-2xl sm:text-3xl text-[#FFB800]">36+ Yrs</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40 mt-1 font-bold">Trusted Since 1988</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center lg:text-left">
                <div className="font-archivo text-2xl sm:text-3xl text-[#FFB800]">100% ISI</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40 mt-1 font-bold">Certified Brands</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl text-center lg:text-left">
                <div className="font-archivo text-2xl sm:text-3xl text-[#FFB800]">Site Tempo</div>
                <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40 mt-1 font-bold">Bulk Site Delivery</div>
              </div>
            </div>

          </div>

          {/* Right Showcase Card: Bold Typography Featured Highlight */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Construction & Materials Quick Highlights Card */}
            <div className="relative group bg-white/5 border border-white/10 p-5 rounded-3xl backdrop-blur-md">
              <div className="h-44 w-full bg-gradient-to-br from-[#1a1a1a] to-[#2a1a00] border border-[#FFB800]/30 rounded-2xl mb-4 p-5 flex flex-col justify-between overflow-hidden relative shadow-lg">
                <div className="absolute top-2 right-2 text-7xl opacity-20 text-[#FFB800] select-none font-archivo">
                  🏗️
                </div>
                <div className="space-y-1 relative z-10">
                  <span className="text-[10px] font-bold text-[#FFB800] tracking-widest uppercase bg-[#FFB800]/10 px-2.5 py-1 rounded-full border border-[#FFB800]/30">
                    DIRECT AUTHORIZED DISTRIBUTOR
                  </span>
                  <h2 className="font-archivo text-2xl sm:text-3xl text-white tracking-tight uppercase leading-tight pt-1">
                    POLYCAB & HAVELLS MATERIAL DEPOT
                  </h2>
                </div>
                <div className="text-xs text-white/70 relative z-10 flex items-center justify-between border-t border-white/10 pt-2 font-inter">
                  <span>90m Wire Coils • 10kA MCB DBs • Heavy Conduits</span>
                  <span className="text-[#FFB800] font-bold font-archivo">GST INVOICE</span>
                </div>
              </div>
              
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#FFB800] mb-1">🏗️ Wholesale Contractor Supply</div>
                  <div className="font-bold text-base text-white">Full House Electrical Wiring Bundles</div>
                  <div className="text-xs text-white/50">Wholesale pricing for builders, contractors & home owners</div>
                </div>
                <button
                  onClick={() => {
                    const boqEl = document.getElementById('boq-estimator');
                    if (boqEl) boqEl.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#FFB800] hover:bg-[#ffc629] text-black text-xs font-bold uppercase px-3.5 py-2 rounded-full tracking-wider shrink-0 transition-colors"
                >
                  Estimate BOQ
                </button>
              </div>
            </div>

            {/* Quick Contact & Emergency Box */}
            <div className="bg-white/5 border border-white/10 p-5 rounded-3xl">
              <h3 className="font-archivo text-lg mb-3 uppercase tracking-tight text-white flex items-center justify-between">
                <span>Direct Trade & Sales Counter</span>
                <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                  OPEN 9 AM - 9:30 PM
                </span>
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 border-b border-white/10 pb-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FFB800]/10 flex items-center justify-center text-[#FFB800] font-archivo text-sm">
                    ☏
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-white/40">Wholesale & Retail Enquiries</div>
                    <div className="text-sm font-bold text-white">{STORE_INFO.phone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#FFB800]/10 flex items-center justify-center text-[#FFB800] font-archivo text-sm">
                    📍
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold tracking-widest text-white/40">Main Showroom & Warehouse</div>
                    <div className="text-xs font-bold text-white">{STORE_INFO.address}, {STORE_INFO.cityStatePincode}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Quick Category Jump Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#FFB800] mb-4">
            FEATURED CONSTRUCTION MATERIALS & APPLIANCE CATEGORIES
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {quickCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory(cat.id);
                  const catalogEl = document.getElementById('catalog');
                  if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex flex-col items-start p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#FFB800]/50 transition-all text-left group"
              >
                <div className="flex items-center justify-between w-full mb-1.5">
                  <span className="text-2xl">{cat.icon}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#FFB800] group-hover:translate-x-1 transition-all" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#FFB800] line-clamp-1">
                  {cat.label}
                </span>
                {cat.highlight && (
                  <span className="text-[10px] text-[#FFB800] font-bold mt-1 line-clamp-1">
                    {cat.highlight}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
