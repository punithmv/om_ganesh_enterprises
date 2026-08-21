import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Zap } from 'lucide-react';
import { STORE_INFO } from '../data/mockData';

export const BrandsSection: React.FC = () => {
  const brandLogos = [
    { name: 'Atomberg', category: 'Smart BLDC Fans', color: 'border-amber-300 bg-amber-50/60' },
    { name: 'Crompton', category: 'Ceiling & Exhaust Fans', color: 'border-blue-300 bg-blue-50/60' },
    { name: 'Havells', category: 'Switches, Wires & Fans', color: 'border-red-300 bg-red-50/60' },
    { name: 'Philips', category: 'LED & Smart Lighting', color: 'border-indigo-300 bg-indigo-50/60' },
    { name: 'Polycab', category: 'Flame Retardant Cables', color: 'border-emerald-300 bg-emerald-50/60' },
    { name: 'Anchor Panasonic', category: 'Modular Switchboards', color: 'border-slate-300 bg-slate-50' },
    { name: 'Luminous', category: 'Inverters & Batteries', color: 'border-blue-300 bg-blue-50/60' },
    { name: 'Bajaj', category: 'Water Heaters & Geysers', color: 'border-orange-300 bg-orange-50/60' },
    { name: 'Schneider Electric', category: 'Smart Automation & MCBs', color: 'border-emerald-300 bg-emerald-50/60' },
    { name: 'Finolex', category: 'Industrial & House Wires', color: 'border-purple-300 bg-purple-50/60' }
  ];

  return (
    <section id="brands" className="py-16 bg-[#0A0A0A] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FFB800] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            <Award className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>AUTHORIZED PARTNERS</span>
          </div>
          <h2 className="font-archivo text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            AUTHORIZED BRAND DEALERSHIPS
          </h2>
          <p className="font-inter text-xs sm:text-sm text-white/60 mt-2">
            Zero duplicate or grey-market stock. Direct factory shipments with 100% manufacturer warranty and barcode verification.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
          {brandLogos.map((brand) => (
            <div
              key={brand.name}
              className="p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center text-center hover:border-[#FFB800]/50 hover:bg-white/10 transition-all group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-3 group-hover:bg-[#FFB800] group-hover:text-black transition-colors">
                <Zap className="w-5 h-5 text-[#FFB800] group-hover:text-black" />
              </div>
              <h3 className="font-archivo text-white text-base uppercase tracking-wider">{brand.name}</h3>
              <p className="text-[11px] text-white/50 font-medium mt-1 font-inter">{brand.category}</p>
            </div>
          ))}
        </div>

        {/* Guarantee Banner */}
        <div className="bg-white/5 rounded-3xl border border-white/10 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 backdrop-blur-md">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Official GST Invoices</h4>
              <p className="text-xs text-white/60 mt-1 font-inter">
                Every purchase receives a tamper-proof printed GST tax invoice for easy brand warranty claims.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[#FFB800]/20 text-[#FFB800] flex items-center justify-center shrink-0 border border-[#FFB800]/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">On-site Brand Service</h4>
              <p className="text-xs text-white/60 mt-1 font-inter">
                Brands provide free doorstep technician visits throughout their warranty duration.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Contractor & Bulk Pricing</h4>
              <p className="text-xs text-white/60 mt-1 font-inter">
                Special commercial wholesale discounts for apartment renovations and building contractors.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
