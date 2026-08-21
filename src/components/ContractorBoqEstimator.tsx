import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  Calculator, 
  CheckCircle2, 
  ShoppingBag, 
  MessageCircle, 
  ShieldCheck, 
  Truck, 
  FileText, 
  Zap, 
  Sparkles, 
  ArrowRight,
  Plus
} from 'lucide-react';
import { STORE_INFO } from '../data/mockData';
import { QuoteCartItem } from '../types';

interface ContractorBoqEstimatorProps {
  onAddBoqToCart: (items: QuoteCartItem[]) => void;
}

type ProjectType = '1bhk' | '2bhk' | '3bhk' | 'villa' | 'shop';

export const ContractorBoqEstimator: React.FC<ContractorBoqEstimatorProps> = ({
  onAddBoqToCart
}) => {
  const [projectType, setProjectType] = useState<ProjectType>('2bhk');
  const [includeAcLines, setIncludeAcLines] = useState<number>(2);
  const [includeGeysers, setIncludeGeysers] = useState<number>(2);
  const [brandPreference, setBrandPreference] = useState<'polycab' | 'finolex' | 'havells'>('polycab');
  const [addedBoqSuccess, setAddedBoqSuccess] = useState<boolean>(false);

  // Bill of Quantities formulas based on floor plan
  const estimates = React.useMemo(() => {
    let baseMultiplier = 1;
    let roomLabel = '2 BHK Apartment (~1100 Sq.Ft)';

    switch (projectType) {
      case '1bhk':
        baseMultiplier = 0.65;
        roomLabel = '1 BHK Apartment (~600 Sq.Ft)';
        break;
      case '2bhk':
        baseMultiplier = 1.0;
        roomLabel = '2 BHK Apartment (~1100 Sq.Ft)';
        break;
      case '3bhk':
        baseMultiplier = 1.55;
        roomLabel = '3 BHK Apartment (~1600 Sq.Ft)';
        break;
      case 'villa':
        baseMultiplier = 2.6;
        roomLabel = '4 BHK / Duplex Independent Villa (~2800 Sq.Ft)';
        break;
      case 'shop':
        baseMultiplier = 0.85;
        roomLabel = 'Commercial Retail Shop / Clinic (~800 Sq.Ft)';
        break;
    }

    const conduitPipes = Math.ceil(40 * baseMultiplier); // 3m lengths
    const giModularBoxes = Math.ceil(24 * baseMultiplier);
    const junctionBoxes = Math.ceil(30 * baseMultiplier);
    
    // Wire Coils (90m rolls)
    const wires1_0 = Math.ceil(2 * baseMultiplier); // Earthing green
    const wires1_5 = Math.ceil(4 * baseMultiplier); // Light/Fan lines
    const wires2_5 = Math.ceil((3 + includeGeysers * 0.5) * baseMultiplier); // Power sockets
    const wires4_0 = Math.ceil((1 + includeAcLines * 0.8) * baseMultiplier); // AC & Mains

    // Switchgear
    const dbWays = projectType === '1bhk' || projectType === 'shop' ? '6-Way SPN' : (projectType === '3bhk' || projectType === 'villa' ? '12-Way TPN' : '8-Way SPN');
    const mcbCount = Math.ceil(10 * baseMultiplier + includeAcLines + includeGeysers);
    const rccbType = projectType === 'villa' ? '63A 4-Pole 30mA RCCB' : '40A Double Pole 30mA RCCB';
    const earthingRods = projectType === 'villa' ? 2 : 1;
    const earthingCompoundBags = projectType === 'villa' ? 3 : 2;

    // Approximate Material Cost calculation
    const conduitCost = conduitPipes * 98;
    const boxesCost = giModularBoxes * 135 + junctionBoxes * 24;
    const wireCost = (wires1_0 * 1650) + (wires1_5 * 2280) + (wires2_5 * 3450) + (wires4_0 * 5290);
    const switchgearCost = 1890 + 2650 + (mcbCount * 210) + (earthingRods * 2650) + (earthingCompoundBags * 750);
    const totalEstimatedCost = conduitCost + boxesCost + wireCost + switchgearCost;

    return {
      roomLabel,
      conduitPipes,
      giModularBoxes,
      junctionBoxes,
      wires1_0,
      wires1_5,
      wires2_5,
      wires4_0,
      dbWays,
      mcbCount,
      rccbType,
      earthingRods,
      earthingCompoundBags,
      totalEstimatedCost
    };
  }, [projectType, includeAcLines, includeGeysers, brandPreference]);

  const handleAddAllToCart = () => {
    const itemsToAdd: QuoteCartItem[] = [
      {
        id: `boq-conduits-${projectType}`,
        type: 'product',
        title: `VIP 25mm Heavy PVC Conduits (${estimates.conduitPipes} Pipes)`,
        brandOrDuration: 'VIP Conduits',
        price: estimates.conduitPipes * 98,
        quantity: 1,
        unit: `${estimates.conduitPipes} Pipes (3m each)`,
        warrantyOrSpecs: 'IS:9537 Part-3 Heavy Duty Slab Grade'
      },
      {
        id: `boq-boxes-${projectType}`,
        type: 'product',
        title: `Precision GI Modular Backboxes (${estimates.giModularBoxes} pcs) + Junctions`,
        brandOrDuration: 'Precision GI',
        price: estimates.giModularBoxes * 135,
        quantity: 1,
        unit: `${estimates.giModularBoxes} Modular Boxes`,
        warrantyOrSpecs: '1.2mm Galvanized Rust-proof'
      },
      {
        id: `boq-wires-15-${projectType}`,
        type: 'product',
        title: `${brandPreference.toUpperCase()} 1.5 sq.mm FR-LSH Copper Wires (${estimates.wires1_5} Rolls)`,
        brandOrDuration: brandPreference.toUpperCase(),
        price: estimates.wires1_5 * 2280,
        quantity: estimates.wires1_5,
        unit: '90m Rolls',
        warrantyOrSpecs: '100% Pure Electrolytic Copper ISI'
      },
      {
        id: `boq-wires-25-${projectType}`,
        type: 'product',
        title: `${brandPreference.toUpperCase()} 2.5 sq.mm Power Socket Wires (${estimates.wires2_5} Rolls)`,
        brandOrDuration: brandPreference.toUpperCase(),
        price: estimates.wires2_5 * 3450,
        quantity: estimates.wires2_5,
        unit: '90m Rolls',
        warrantyOrSpecs: 'FR-LSH Heavy Socket Grade'
      },
      {
        id: `boq-wires-40-${projectType}`,
        type: 'product',
        title: `${brandPreference.toUpperCase()} 4.0 sq.mm AC & Master Line (${estimates.wires4_0} Rolls)`,
        brandOrDuration: brandPreference.toUpperCase(),
        price: estimates.wires4_0 * 5290,
        quantity: estimates.wires4_0,
        unit: '90m Rolls',
        warrantyOrSpecs: 'High Load AC 1100V Grade'
      },
      {
        id: `boq-db-panel-${projectType}`,
        type: 'product',
        title: `Legrand / Havells ${estimates.dbWays} DB Box + ${estimates.rccbType} + ${estimates.mcbCount} MCBs`,
        brandOrDuration: 'Legrand / Havells',
        price: 4950,
        quantity: 1,
        unit: 'Complete DB Assembly',
        warrantyOrSpecs: '10kA Short-Circuit Protection'
      },
      {
        id: `boq-earthing-kit-${projectType}`,
        type: 'product',
        title: `Chemical Earthing Rod (${estimates.earthingRods} pcs) + Compound (${estimates.earthingCompoundBags} bags)`,
        brandOrDuration: 'Havells / Polycab',
        price: estimates.earthingRods * 2650 + estimates.earthingCompoundBags * 750,
        quantity: 1,
        unit: 'Earthing Pit Kit',
        warrantyOrSpecs: '< 1 Ohm Ground Resistance'
      }
    ];

    onAddBoqToCart(itemsToAdd);
    setAddedBoqSuccess(true);
    setTimeout(() => setAddedBoqSuccess(false), 3000);
  };

  const generateWhatsAppMessage = () => {
    const text = `Hello Om Ganesh Enterprises (Davanagere), I need a wholesale quote for a *${estimates.roomLabel}* construction project:
- *Brand Preference:* ${brandPreference.toUpperCase()} Wires & Legrand/Schneider Switchgear
- *PVC Conduit Pipes:* ${estimates.conduitPipes} pcs (25mm Heavy Duty)
- *GI Modular Backboxes:* ${estimates.giModularBoxes} pcs (assorted modules)
- *1.5 sq.mm Wires:* ${estimates.wires1_5} Rolls (90m)
- *2.5 sq.mm Wires:* ${estimates.wires2_5} Rolls (90m)
- *4.0 sq.mm AC Wires:* ${estimates.wires4_0} Rolls (90m)
- *Distribution Board:* ${estimates.dbWays} with ${estimates.rccbType} & ${estimates.mcbCount} MCBs
- *Chemical Earthing:* ${estimates.earthingRods} Copper Rod + ${estimates.earthingCompoundBags} Compound Bags
- *Approx Budget Estimate:* ₹${estimates.totalEstimatedCost.toLocaleString('en-IN')}

Please share your best wholesale contractor prices & tempo site delivery schedule in Davanagere.`;
    return encodeURIComponent(text);
  };

  return (
    <section id="boq-estimator" className="py-16 bg-[#0A0A0A] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FFB800] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>CONTRACTOR & BUILDER TOOL</span>
          </div>
          <h2 className="font-archivo text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            HOUSE CONSTRUCTION ELECTRICAL ESTIMATOR (BOQ)
          </h2>
          <p className="font-inter text-xs sm:text-sm text-white/60 mt-2">
            Planning new house construction, villa renovation, or commercial wiring? Calculate exact conduit pipe bundles, copper wire rolls, MCB distribution boards, and earthing materials in 1 click.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Config Panel (5 cols) */}
          <div className="lg:col-span-5 bg-white/5 rounded-3xl p-6 sm:p-7 border border-white/10 space-y-6 backdrop-blur-md">
            
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-white/70 block mb-3">
                1. Select Floor Plan / Construction Type:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: '1bhk', label: '1 BHK Flat', sub: '~600 sq.ft' },
                  { id: '2bhk', label: '2 BHK Home', sub: '~1100 sq.ft' },
                  { id: '3bhk', label: '3 BHK Home', sub: '~1600 sq.ft' },
                  { id: 'villa', label: 'Duplex Villa', sub: '~2800 sq.ft' },
                  { id: 'shop', label: 'Shop/Office', sub: '~800 sq.ft' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setProjectType(item.id as ProjectType)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      projectType === item.id
                        ? 'bg-[#FFB800] text-black border-[#FFB800] font-bold shadow-lg shadow-[#FFB800]/20'
                        : 'bg-black/40 text-white border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="font-archivo text-xs uppercase">{item.label}</div>
                    <div className={`text-[10px] ${projectType === item.id ? 'text-black/80' : 'text-white/40'}`}>
                      {item.sub}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Loads: AC & Geyser Points */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-white/70 block mb-2">
                  AC Points (4.0 sq.mm):
                </label>
                <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-xl p-1.5">
                  <button 
                    onClick={() => setIncludeAcLines(Math.max(0, includeAcLines - 1))}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center text-sm"
                  >-</button>
                  <span className="flex-1 text-center font-archivo text-sm text-[#FFB800]">{includeAcLines} ACs</span>
                  <button 
                    onClick={() => setIncludeAcLines(includeAcLines + 1)}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center text-sm"
                  >+</button>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold uppercase tracking-wider text-white/70 block mb-2">
                  Geyser Points (2.5 sq.mm):
                </label>
                <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-xl p-1.5">
                  <button 
                    onClick={() => setIncludeGeysers(Math.max(0, includeGeysers - 1))}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center text-sm"
                  >-</button>
                  <span className="flex-1 text-center font-archivo text-sm text-[#FFB800]">{includeGeysers} Geysers</span>
                  <button 
                    onClick={() => setIncludeGeysers(includeGeysers + 1)}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold flex items-center justify-center text-sm"
                  >+</button>
                </div>
              </div>
            </div>

            {/* Wire Brand Preference */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-white/70 block mb-2">
                Preferred Wire Brand:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'polycab', name: 'Polycab FR-LSH' },
                  { id: 'finolex', name: 'Finolex Flame' },
                  { id: 'havells', name: 'Havells Life Line' }
                ].map((b) => (
                  <button
                    key={b.id}
                    onClick={() => setBrandPreference(b.id as any)}
                    className={`py-2 px-3 rounded-xl border text-center text-xs font-bold uppercase transition-all ${
                      brandPreference === b.id
                        ? 'bg-white text-black border-white'
                        : 'bg-black/40 text-white/60 border-white/10 hover:text-white'
                    }`}
                  >
                    {b.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contractor Assurance Badges */}
            <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2 text-xs font-inter text-white/70">
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase text-[11px]">
                <Truck className="w-4 h-4" />
                <span>Free On-Site Tempo Delivery for Bulk Orders</span>
              </div>
              <p className="text-[11px] text-white/50">
                Direct factory-sealed bundles with test certificates, zero counterfeit stock, and official GST tax invoices for builders.
              </p>
            </div>

          </div>

          {/* Right Calculated BOQ Output (7 cols) */}
          <div className="lg:col-span-7 bg-white/5 rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between backdrop-blur-md">
            
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div>
                  <span className="text-[10px] font-bold text-[#FFB800] uppercase tracking-widest">
                    ESTIMATED BILL OF QUANTITIES (BOQ)
                  </span>
                  <h3 className="font-archivo text-xl text-white uppercase mt-0.5">
                    {estimates.roomLabel}
                  </h3>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-white/40 uppercase font-bold">Estimated Material Budget</div>
                  <div className="font-archivo text-2xl text-[#FFB800]">
                    ₹{estimates.totalEstimatedCost.toLocaleString('en-IN')}*
                  </div>
                </div>
              </div>

              {/* Material Breakdown Checklist */}
              <div className="space-y-3 font-inter">
                
                {/* 1. Conduits & Masonry Backboxes */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                      1
                    </span>
                    <div>
                      <div className="font-bold text-white uppercase">PVC Conduit Pipes (25mm Heavy Duty)</div>
                      <div className="text-white/50 text-[11px]">Slab & wall groove piping for clean wire pulling</div>
                    </div>
                  </div>
                  <span className="font-archivo text-sm text-[#FFB800]">{estimates.conduitPipes} Pipes (3m)</span>
                </div>

                {/* 2. GI Metal Conceal Boxes & Junctions */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">
                      2
                    </span>
                    <div>
                      <div className="font-bold text-white uppercase">GI Modular Backboxes & Fan Junctions</div>
                      <div className="text-white/50 text-[11px]">1.2mm rust-proof galvanized concealed steel</div>
                    </div>
                  </div>
                  <span className="font-archivo text-sm text-[#FFB800]">{estimates.giModularBoxes} Boxes + {estimates.junctionBoxes} JNs</span>
                </div>

                {/* 3. House Wires (1.5, 2.5, 4.0 sq.mm) */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-[#FFB800]/20 text-[#FFB800] flex items-center justify-center font-bold text-xs">
                      3
                    </span>
                    <div>
                      <div className="font-bold text-white uppercase">{brandPreference.toUpperCase()} FR-LSH Copper Wires</div>
                      <div className="text-white/50 text-[11px]">
                        1.0mm ({estimates.wires1_0} rolls) • 1.5mm ({estimates.wires1_5} rolls) • 2.5mm ({estimates.wires2_5} rolls) • 4.0mm ({estimates.wires4_0} rolls)
                      </div>
                    </div>
                  </div>
                  <span className="font-archivo text-sm text-[#FFB800]">
                    {estimates.wires1_0 + estimates.wires1_5 + estimates.wires2_5 + estimates.wires4_0} Rolls Total
                  </span>
                </div>

                {/* 4. Switchgear & Shock Protection */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                      4
                    </span>
                    <div>
                      <div className="font-bold text-white uppercase">Distribution Board & Breakers</div>
                      <div className="text-white/50 text-[11px]">{estimates.dbWays} DB + {estimates.rccbType} + {estimates.mcbCount} MCBs</div>
                    </div>
                  </div>
                  <span className="font-archivo text-sm text-emerald-400">Complete DB Assembly</span>
                </div>

                {/* 5. Chemical Earthing Pit Kit */}
                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs">
                      5
                    </span>
                    <div>
                      <div className="font-bold text-white uppercase">Pure Copper Chemical Earthing Kit</div>
                      <div className="text-white/50 text-[11px]">2m Copper Electrode Rods + Conductive Compound Powder</div>
                    </div>
                  </div>
                  <span className="font-archivo text-sm text-[#FFB800]">{estimates.earthingRods} Rod + {estimates.earthingCompoundBags} Bags</span>
                </div>

              </div>
            </div>

            {/* Actions & WhatsApp Export */}
            <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <button
                onClick={handleAddAllToCart}
                className={`px-6 py-3.5 rounded-full font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg ${
                  addedBoqSuccess 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-[#FFB800] hover:bg-[#ffc629] text-black shadow-[#FFB800]/20'
                }`}
              >
                {addedBoqSuccess ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Complete BOQ Added to Cart!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add Complete BOQ to Quote Cart</span>
                  </>
                )}
              </button>

              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase text-xs tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Wholesale WhatsApp BOQ</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
