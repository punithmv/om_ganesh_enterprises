import React, { useState } from 'react';
import { 
  Calculator, 
  Zap, 
  TrendingDown, 
  Leaf, 
  Coins, 
  ArrowRight, 
  Sparkles,
  Info,
  CheckCircle2
} from 'lucide-react';
import { ProductCategory } from '../types';

interface EnergySavingsCalculatorProps {
  onExploreBLDC: (category: ProductCategory) => void;
}

export const EnergySavingsCalculator: React.FC<EnergySavingsCalculatorProps> = ({ onExploreBLDC }) => {
  const [fansCount, setFansCount] = useState<number>(3);
  const [fanHoursPerDay, setFanHoursPerDay] = useState<number>(14);
  const [bulbsCount, setBulbsCount] = useState<number>(6);
  const [bulbHoursPerDay, setBulbHoursPerDay] = useState<number>(8);
  const [electricityTariff, setElectricityTariff] = useState<number>(8.5); // ₹ per kWh unit

  // Fan calculations (Standard 75W vs BLDC 28W)
  const standardFanWatts = 75;
  const bldcFanWatts = 28;
  const fanWattDifference = standardFanWatts - bldcFanWatts; // 47W saved per fan
  
  // Daily fan units saved (kWh) = (47W * hours * count) / 1000
  const dailyFanUnitsSaved = (fanWattDifference * fanHoursPerDay * fansCount) / 1000;
  
  // Bulb calculations (Standard 60W vs LED 9W)
  const standardBulbWatts = 60;
  const ledBulbWatts = 9;
  const bulbWattDifference = standardBulbWatts - ledBulbWatts; // 51W saved per bulb
  const dailyBulbUnitsSaved = (bulbWattDifference * bulbHoursPerDay * bulbsCount) / 1000;

  const totalDailyUnitsSaved = dailyFanUnitsSaved + dailyBulbUnitsSaved;
  const monthlyUnitsSaved = totalDailyUnitsSaved * 30;
  const annualUnitsSaved = totalDailyUnitsSaved * 365;

  const monthlyMoneySaved = monthlyUnitsSaved * electricityTariff;
  const annualMoneySaved = annualUnitsSaved * electricityTariff;
  const fiveYearMoneySaved = annualMoneySaved * 5;

  // Approx cost to buy BLDC fan is ~₹3,500. Payback period in months
  const estimatedUpgradeCost = (fansCount * 3699) + (bulbsCount * 199);
  const paybackPeriodMonths = monthlyMoneySaved > 0 ? (estimatedUpgradeCost / monthlyMoneySaved).toFixed(1) : '0';

  // CO2 reduction (approx 0.82 kg CO2 per kWh in grid power)
  const annualCo2SavedKg = Math.round(annualUnitsSaved * 0.82);

  return (
    <section id="calculator" className="py-16 bg-[#0A0A0A] text-white border-b border-white/10 relative overflow-hidden">
      
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FFB800]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#FFB800]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FFB800] text-xs font-bold uppercase tracking-[0.3em] mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#FFB800]" />
            <span>INTERACTIVE ROI ESTIMATOR</span>
          </div>
          <h2 className="font-archivo text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            ENERGY BILL SAVINGS CALCULATOR
          </h2>
          <p className="font-inter text-sm sm:text-base text-white/60 mt-2">
            See how upgrading standard 75W fans to 28W BLDC motors and 60W bulbs to 9W LEDs dramatically cuts your monthly electricity bill.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (Left 6 cols) */}
          <div className="lg:col-span-6 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl space-y-6 shadow-xl backdrop-blur-md">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-4 flex items-center justify-between">
              <span>HOUSEHOLD APPLIANCE USAGE</span>
              <span className="text-xs text-[#FFB800] font-archivo">ADJUST SLIDERS</span>
            </h3>

            {/* Fans Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2.5">
                <span className="text-white/80 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-[#FFB800]" />
                  Number of Ceiling Fans
                </span>
                <span className="text-[#FFB800] font-archivo text-xs bg-black/60 px-3 py-1 rounded-full border border-white/10">
                  {fansCount} FANS
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={fansCount}
                onChange={(e) => setFansCount(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FFB800]"
              />
              <div className="flex justify-between text-[10px] text-white/40 mt-1 uppercase font-bold tracking-wider">
                <span>1 fan</span>
                <span>5 fans</span>
                <span>10 fans</span>
              </div>
            </div>

            {/* Fan Running Hours Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2.5">
                <span className="text-white/80">Daily Fan Running Hours</span>
                <span className="text-[#FFB800] font-archivo text-xs bg-black/60 px-3 py-1 rounded-full border border-white/10">
                  {fanHoursPerDay} HRS / DAY
                </span>
              </div>
              <input
                type="range"
                min="4"
                max="24"
                value={fanHoursPerDay}
                onChange={(e) => setFanHoursPerDay(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FFB800]"
              />
              <div className="flex justify-between text-[10px] text-white/40 mt-1 uppercase font-bold tracking-wider">
                <span>4 hrs</span>
                <span>12 hrs</span>
                <span>24 hrs</span>
              </div>
            </div>

            {/* LED Bulbs Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2.5">
                <span className="text-white/80">Bulbs to Upgrade (9W LED vs 60W)</span>
                <span className="text-emerald-400 font-archivo text-xs bg-black/60 px-3 py-1 rounded-full border border-white/10">
                  {bulbsCount} BULBS
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                value={bulbsCount}
                onChange={(e) => setBulbsCount(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
            </div>

            {/* Electricity Tariff (₹/unit) */}
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2.5">
                <span className="text-white/80">Electricity Tariff Rate per Unit (kWh)</span>
                <span className="text-[#FFB800] font-archivo text-xs bg-black/60 px-3 py-1 rounded-full border border-white/10">
                  ₹{electricityTariff} / UNIT
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="13"
                step="0.5"
                value={electricityTariff}
                onChange={(e) => setElectricityTariff(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FFB800]"
              />
              <div className="text-[10px] text-white/40 mt-1.5">
                *Average Indian municipal electricity tariff rate is approx ₹7.50 to ₹9.50/unit
              </div>
            </div>

            {/* Comparison Tech Note */}
            <div className="bg-black/50 p-4 rounded-2xl border border-white/10 text-xs text-white/70 flex items-start gap-3">
              <Info className="w-4 h-4 text-[#FFB800] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white uppercase tracking-wider">How this math works:</span> Regular ceiling fan runs on 75W induction motor. Atomberg/Crompton BLDC fan runs on 28W permanent magnet motor, saving 47 Watts every single hour of operation.
              </div>
            </div>

          </div>

          {/* Results Showcase (Right 6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Primary Savings Hero Box */}
            <div className="bg-white/5 border border-[#FFB800]/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFB800] mb-2 flex items-center gap-2">
                <Coins className="w-4 h-4" />
                <span>ESTIMATED ANNUAL ELECTRICITY SAVINGS</span>
              </div>

              <div className="flex items-baseline gap-2 my-3">
                <span className="font-archivo text-4xl sm:text-6xl text-[#FFB800]">
                  ₹{Math.round(annualMoneySaved).toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-white/60 uppercase font-bold tracking-wider">/ Year</span>
              </div>

              <p className="text-xs sm:text-sm text-white/80 font-inter">
                You save <span className="text-emerald-400 font-bold">₹{Math.round(monthlyMoneySaved).toLocaleString('en-IN')}</span> on your electricity bill every single month!
              </p>

              {/* 3 Metric Pills */}
              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-white/10">
                <div className="bg-black/50 p-3.5 rounded-2xl border border-white/10 text-center">
                  <div className="text-[10px] text-white/40 uppercase font-bold tracking-wider">5-Yr Total Savings</div>
                  <div className="font-archivo text-base sm:text-lg text-[#FFB800] mt-1">
                    ₹{Math.round(fiveYearMoneySaved).toLocaleString('en-IN')}
                  </div>
                </div>

                <div className="bg-black/50 p-3.5 rounded-2xl border border-white/10 text-center">
                  <div className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Power Units Saved</div>
                  <div className="font-archivo text-base sm:text-lg text-emerald-400 mt-1">
                    {Math.round(annualUnitsSaved)} kWh
                  </div>
                </div>

                <div className="bg-black/50 p-3.5 rounded-2xl border border-white/10 text-center">
                  <div className="text-[10px] text-white/40 uppercase font-bold tracking-wider">Payback Period</div>
                  <div className="font-archivo text-base sm:text-lg text-blue-400 mt-1">
                    ~{paybackPeriodMonths} Mo
                  </div>
                </div>
              </div>

            </div>

            {/* Environmental Impact Box */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5 flex items-center justify-between gap-4 backdrop-blur-md">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-white">
                    {annualCo2SavedKg} kg CO₂ Greenhouse Emissions Avoided
                  </div>
                  <div className="text-[11px] text-white/50 font-inter mt-0.5">
                    Equivalent to planting {Math.max(1, Math.round(annualCo2SavedKg / 20))} mature trees every year!
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Shop CTA */}
            <div className="p-5 rounded-3xl bg-[#FFB800] text-black flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xl shadow-[#FFB800]/20">
              <div>
                <div className="font-archivo text-sm uppercase tracking-wide">
                  Ready to slash your power bill?
                </div>
                <div className="text-xs text-black/80 font-medium mt-0.5">
                  Atomberg & Crompton BLDC models in stock with same-day installation.
                </div>
              </div>

              <button
                onClick={() => {
                  onExploreBLDC('fans');
                  const catalogEl = document.getElementById('catalog');
                  if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-black hover:bg-neutral-900 text-white font-bold uppercase text-xs tracking-wider px-5 py-3 rounded-full shrink-0 transition-all flex items-center gap-2 shadow-md"
              >
                <span>Shop BLDC Fans</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
