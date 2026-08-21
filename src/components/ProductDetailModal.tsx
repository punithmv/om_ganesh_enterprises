import React from 'react';
import { 
  X, 
  Star, 
  ShieldCheck, 
  Zap, 
  Plus, 
  Check, 
  MessageCircle, 
  Truck, 
  Wrench,
  Sparkles
} from 'lucide-react';
import { Product, QuoteCartItem } from '../types';
import { STORE_INFO } from '../data/mockData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (item: QuoteCartItem) => void;
  onBookInstallation: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onBookInstallation
}) => {
  const [added, setAdded] = React.useState(false);

  if (!product) return null;

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleAdd = () => {
    onAddToCart({
      id: product.id,
      type: 'product',
      title: product.name,
      brandOrDuration: product.brand,
      price: product.price,
      quantity: 1,
      image: product.image,
      warrantyOrSpecs: product.warranty
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWhatsAppInquiry = () => {
    const msg = `⚡ *Om Ganesh Electricals - Product Inquiry*\n\n` +
      `Product: ${product.name}\n` +
      `Brand: ${product.brand}\n` +
      `Offer Price: ₹${product.price.toLocaleString('en-IN')}\n\n` +
      `Is this item currently in stock at the store for pickup / same-day delivery?`;
    
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0A0A0A] text-white w-full max-w-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-white/5 text-white p-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="font-archivo text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-[#FFB800] text-black font-bold">
              {product.brand}
            </span>
            <span className="font-archivo text-xs text-white/50 tracking-wider truncate">
              {product.category.toUpperCase()}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6 text-white">
          
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-start">
            
            {/* Product Image */}
            <div className="sm:col-span-5 relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-square">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              {discountPercent > 0 && (
                <div className="absolute top-3 right-3 bg-[#FFB800] text-black text-xs font-archivo font-black px-2.5 py-1 rounded-full shadow-lg">
                  {discountPercent}% OFF
                </div>
              )}
            </div>

            {/* Main Info */}
            <div className="sm:col-span-7 space-y-3">
              <div className="flex items-center gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-[#FFB800] font-bold">
                  <Star className="w-4 h-4 fill-[#FFB800]" />
                  <span>{product.rating}</span>
                  <span className="text-white/40 font-normal">({product.reviewsCount} customer reviews)</span>
                </div>
              </div>

              <h2 className="font-archivo text-lg sm:text-xl uppercase tracking-wider text-white leading-snug">
                {product.name}
              </h2>

              <p className="text-xs text-white/70 leading-relaxed font-inter">
                {product.description}
              </p>

              {/* Price Row */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-[#FFB800] uppercase font-bold tracking-wider">Special Store Offer Price</div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-archivo text-2xl sm:text-3xl text-white">
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-white/40 line-through font-inter">
                      M.R.P: ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-medium">Includes 18% GST Tax Invoice</span>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold uppercase tracking-wider border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    In Stock
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-3">
            <h3 className="font-archivo text-xs uppercase tracking-widest text-[#FFB800] flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#FFB800]" />
              <span>Technical Specifications & Features</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-inter">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col">
                  <span className="text-white/50 text-[11px] font-medium uppercase tracking-wider">{key}</span>
                  <span className="font-bold text-white mt-1">{value}</span>
                </div>
              ))}
              
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex flex-col">
                <span className="text-white/50 text-[11px] font-medium uppercase tracking-wider">Manufacturer Warranty</span>
                <span className="font-bold text-emerald-400 mt-1 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" />
                  {product.warranty}
                </span>
              </div>

              {product.wattage && (
                <div className="p-3 rounded-xl bg-[#FFB800]/10 border border-[#FFB800]/30 flex flex-col">
                  <span className="text-[#FFB800] text-[11px] font-bold uppercase tracking-wider">Energy Consumption</span>
                  <span className="font-archivo text-[#FFB800] mt-1 text-sm">
                    {product.wattage}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Store Assurance Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-white/70 font-inter">
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10">
              <Truck className="w-4 h-4 text-blue-400" />
              <span>Free Delivery in 8km</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10">
              <Wrench className="w-4 h-4 text-[#FFB800]" />
              <span>₹199 Installation</span>
            </div>
            <div className="flex items-center gap-2 p-3 rounded-2xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Brand Seal Intact</span>
            </div>
          </div>

        </div>

        {/* Action Footer */}
        <div className="p-5 bg-white/5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={handleWhatsAppInquiry}
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-5 py-3 rounded-full transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Price on WhatsApp</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto font-archivo uppercase text-xs">
            <button
              onClick={() => {
                onClose();
                onBookInstallation(product);
              }}
              className="flex-1 sm:flex-initial px-5 py-3 rounded-full border border-white/10 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              Book Installation
            </button>

            <button
              onClick={handleAdd}
              className={`flex-1 sm:flex-initial px-6 py-3 rounded-full transition-all shadow-md flex items-center justify-center gap-2 ${
                added 
                  ? 'bg-emerald-600 text-white font-bold' 
                  : 'bg-[#FFB800] hover:bg-[#ffc629] text-black font-bold'
              }`}
            >
              {added ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              <span>{added ? 'Added to Quote!' : 'Add to Quote Cart'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
