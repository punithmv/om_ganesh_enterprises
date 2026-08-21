import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  HeartHandshake, 
  Building2, 
  MapPin,
  Clock,
  Phone,
  ShieldCheck
} from 'lucide-react';
import { CUSTOMER_REVIEWS, FAQS, STORE_INFO } from '../data/mockData';

export const AboutReviewsFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="bg-[#0A0A0A] text-white">
      
      {/* 1. ABOUT STORE SECTION */}
      <section id="about" className="py-16 border-b border-white/10 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Story Content (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FFB800] text-xs font-bold uppercase tracking-[0.3em]">
                <HeartHandshake className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>OUR HERITAGE & PROMISE</span>
              </div>

              <h2 className="font-archivo text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
                ABOUT OM GANESH ENTERPRISES
              </h2>

              <p className="font-inter text-sm text-white/70 leading-relaxed">
                Located at Muddegowdru Complex, Near Bapuji Bank on Binny Co Road, Mandipet, Davanagere, <strong className="text-white font-bold">Om Ganesh Enterprises</strong> has established itself as the region's premier hub for heavy house-construction electrical materials and energy-efficient home appliances.
              </p>

              <p className="font-inter text-sm text-white/70 leading-relaxed">
                Whether you are a building contractor procuring 90m Polycab FR-LSH wire bundles, 10kA distribution boards and PVC conduits for a multi-storey project, or a homeowner looking for 5-Star BLDC ceiling fans and decorative chandeliers in Davanagere, our experienced team provides direct trade pricing with 100% genuine manufacturer warranties.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-3">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="font-archivo text-2xl sm:text-3xl text-[#FFB800]">12+</div>
                  <div className="text-[11px] text-white/50 uppercase font-bold tracking-wider mt-1">Years Legacy</div>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="font-archivo text-2xl sm:text-3xl text-emerald-400">10,000+</div>
                  <div className="text-[11px] text-white/50 uppercase font-bold tracking-wider mt-1">Satisfied Homes</div>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="font-archivo text-2xl sm:text-3xl text-blue-400">100%</div>
                  <div className="text-[11px] text-white/50 uppercase font-bold tracking-wider mt-1">GST Invoices</div>
                </div>
              </div>
            </div>

            {/* Store Showcase & Contact Details Card (5 cols) */}
            <div id="contact" className="lg:col-span-5 scroll-mt-24">
              <div className="bg-white/5 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 space-y-5 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFB800] flex items-center justify-center text-black font-bold">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-archivo text-lg uppercase text-white">Contact & Experience Store</h3>
                    <p className="text-xs text-[#FFB800] font-medium">Mandipet, Davanagere</p>
                  </div>
                </div>

                <div className="text-xs text-white/70 space-y-3 pt-3 border-t border-white/10 font-inter">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
                    <span>{STORE_INFO.address}, {STORE_INFO.cityStatePincode}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{STORE_INFO.timing}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>Store Desk: {STORE_INFO.phone}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={`tel:${STORE_INFO.phone}`}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#FFB800] hover:bg-[#ffc629] text-black font-bold text-xs uppercase tracking-wider text-center transition-transform hover:scale-105"
                  >
                    Direct Call
                  </a>
                  <a
                    href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Om%20Ganesh%20Enterprises,%20I%20want%20to%20inquire%20about%20materials%20and%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center transition-transform hover:scale-105"
                  >
                    WhatsApp
                  </a>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 text-[11px] text-white/60 font-inter">
                  🅿️ Customer parking available | 💳 UPI, Cards, Bajaj Finserv EMI & Cash accepted.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CUSTOMER REVIEWS SECTION */}
      <section id="reviews" className="py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#FFB800] mb-2">
                <Star className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                <span>CUSTOMER REVIEWS</span>
              </div>
              <h2 className="font-archivo text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
                TRUSTED BY 10,000+ HOMES
              </h2>
            </div>

            <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full text-xs">
              <span className="font-archivo text-xl text-[#FFB800]">4.9 / 5.0</span>
              <div className="flex text-[#FFB800]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800]" />
                ))}
              </div>
              <span className="text-white/60 font-medium">({STORE_INFO.reviewsCount}+ Reviews)</span>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CUSTOMER_REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white/5 rounded-3xl border border-white/10 p-6 flex flex-col justify-between hover:border-[#FFB800]/50 transition-all backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-[#FFB800]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800]" />
                      ))}
                    </div>
                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">{rev.date}</span>
                  </div>

                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#FFB800] bg-[#FFB800]/10 border border-[#FFB800]/20 px-3 py-1 rounded-full mb-3 inline-block">
                    {rev.productOrService}
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed mb-5 font-inter">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-white uppercase text-xs">{rev.author}</div>
                    <div className="text-[10px] text-white/40">{rev.location}</div>
                  </div>
                  {rev.verifiedPurchase && (
                    <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider" title="Verified Customer">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. FAQS SECTION */}
      <section className="py-16 bg-[#0A0A0A] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FFB800] text-xs font-bold uppercase tracking-[0.3em] mb-3">
              <HelpCircle className="w-3.5 h-3.5 text-[#FFB800]" />
              <span>COMMON INQUIRIES</span>
            </div>
            <h2 className="font-archivo text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="font-inter text-xs sm:text-sm text-white/60 mt-2">
              Everything you need to know about appliances warranties, electrician visits, and order deliveries.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden transition-all backdrop-blur-sm"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-white text-xs sm:text-sm hover:text-[#FFB800] transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#FFB800] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-white/40 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs text-white/70 leading-relaxed border-t border-white/10 pt-3.5 font-inter">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
};

