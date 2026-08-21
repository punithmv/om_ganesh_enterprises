import React from 'react';
import { 
  Wrench, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  PhoneCall, 
  Calendar, 
  AlertTriangle,
  Lightbulb,
  Fan,
  Flame,
  BatteryCharging,
  ShieldAlert
} from 'lucide-react';
import { ELECTRICAL_SERVICES, STORE_INFO } from '../data/mockData';
import { ElectricalService } from '../types';

interface ServicesSectionProps {
  onBookService: (service: ElectricalService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Fan':
        return <Fan className="w-5 h-5 text-amber-500" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-amber-500" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'BatteryCharging':
        return <BatteryCharging className="w-5 h-5 text-amber-500" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-amber-500" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-red-500" />;
      default:
        return <Wrench className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="services" className="py-16 bg-[#0A0A0A] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FFB800] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            <Wrench className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>DOORSTEP ELECTRICIAN CREW</span>
          </div>
          <h2 className="font-archivo text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            CERTIFIED ELECTRICAL SERVICES
          </h2>
          <p className="font-inter text-sm sm:text-base text-white/60 mt-2">
            No haggling, no substandard wiring. Experienced, police-verified electricians with high-precision tools and 30-day post-service warranty.
          </p>
        </div>

        {/* 4 Guarantees Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mb-12">
          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3.5">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">30-Day Guarantee</div>
              <div className="text-[11px] text-white/40">Free rework if any defect</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3.5">
            <Clock className="w-6 h-6 text-[#FFB800] shrink-0" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">On-Time Arrival</div>
              <div className="text-[11px] text-white/40">Scheduled exact slots</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3.5">
            <Zap className="w-6 h-6 text-blue-400 shrink-0" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">Genuine Spares</div>
              <div className="text-[11px] text-white/40">Sealed branded packs</div>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-3.5">
            <AlertTriangle className="w-6 h-6 text-red-400 shrink-0" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">24/7 Emergency</div>
              <div className="text-[11px] text-white/40">45-min arrival in city</div>
            </div>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ELECTRICAL_SERVICES.map((service) => (
            <div
              key={service.id}
              className={`bg-white/5 rounded-3xl border ${
                service.popular ? 'border-[#FFB800]/60 ring-1 ring-[#FFB800]/30 shadow-lg shadow-[#FFB800]/10' : 'border-white/10'
              } p-6 flex flex-col justify-between hover:border-[#FFB800]/60 transition-all relative backdrop-blur-sm group`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-6 bg-[#FFB800] text-black text-[10px] font-archivo px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                  MOST BOOKED
                </div>
              )}

              <div>
                {/* Header Icon + Title */}
                <div className="flex items-start gap-3.5 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#FFB800] uppercase tracking-widest">
                      {service.category}
                    </span>
                    <h3 className="font-bold text-white text-lg leading-snug">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-white/60 mb-5 leading-relaxed font-inter">
                  {service.description}
                </p>

                {/* Checklist */}
                <div className="space-y-2 mb-6 pt-3 border-t border-white/10">
                  <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">
                    WHAT'S INCLUDED:
                  </div>
                  {service.includedFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-white/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Booking Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Starting from</div>
                  <div className="font-archivo text-2xl text-[#FFB800]">
                    ₹{service.startingPrice}
                  </div>
                  <div className="text-[10px] text-white/50 flex items-center gap-1 font-medium mt-0.5">
                    <Clock className="w-3 h-3" />
                    <span>Est: {service.duration}</span>
                  </div>
                </div>

                <button
                  onClick={() => onBookService(service)}
                  className="bg-[#FFB800] hover:bg-[#ffc629] text-black font-bold uppercase text-xs tracking-wider px-5 py-2.5 rounded-full transition-all shadow-md shadow-[#FFB800]/20 flex items-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>Book Slot</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Emergency Callout Card */}
        <div className="mt-14 bg-white/5 border border-red-500/30 rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-red-500/20 border border-red-500/40 flex items-center justify-center shrink-0 text-red-400">
              <ShieldAlert className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-archivo text-lg sm:text-xl text-white uppercase">
                Facing a sudden blackout, sparking switchboard, or short circuit?
              </h3>
              <p className="text-xs sm:text-sm text-white/60 mt-1 font-inter">
                Our emergency response vehicle is equipped with high-amp isolators, wire fault detectors, and MCBs.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-6 py-3.5 rounded-full font-bold uppercase text-xs tracking-widest transition-colors shadow-lg shadow-red-600/30"
            >
              <PhoneCall className="w-4 h-4 animate-bounce" />
              <span>Call: {STORE_INFO.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
