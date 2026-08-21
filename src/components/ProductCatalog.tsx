import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Zap, 
  ShieldCheck, 
  Star, 
  Check, 
  Plus, 
  Info, 
  Sparkles,
  SlidersHorizontal,
  ChevronDown,
  RotateCcw
} from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { Product, ProductCategory, QuoteCartItem } from '../types';

interface ProductCatalogProps {
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onAddToCart: (item: QuoteCartItem) => void;
  onViewProductDetails: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onAddToCart,
  onViewProductDetails
}) => {
  const [selectedDivision, setSelectedDivision] = useState<'all' | 'construction' | 'appliances'>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);
  const [bldcOnly, setBldcOnly] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');
  const [addedItemIds, setAddedItemIds] = useState<Set<string>>(new Set());

  const categories: { id: ProductCategory; label: string; count: number; division?: 'construction' | 'appliances' }[] = [
    { id: 'all', label: 'All Catalog', count: PRODUCTS.length },
    { id: 'wires', label: 'Wires & Heavy Cables', count: PRODUCTS.filter(p => p.category === 'wires').length, division: 'construction' },
    { id: 'switchgear', label: 'Switchgear, MCBs & Fuses', count: PRODUCTS.filter(p => p.category === 'switchgear').length, division: 'construction' },
    { id: 'conduits', label: 'Conduits & GI Backboxes', count: PRODUCTS.filter(p => p.category === 'conduits').length, division: 'construction' },
    { id: 'earthing', label: 'Chemical Earthing & Safety', count: PRODUCTS.filter(p => p.category === 'earthing').length, division: 'construction' },
    { id: 'industrial', label: 'Motor Starters & Heavy', count: PRODUCTS.filter(p => p.category === 'industrial').length, division: 'construction' },
    { id: 'fans', label: 'Ceiling & BLDC Fans', count: PRODUCTS.filter(p => p.category === 'fans').length, division: 'appliances' },
    { id: 'lighting', label: 'Lighting & Floodlights', count: PRODUCTS.filter(p => p.category === 'lighting').length, division: 'appliances' },
    { id: 'switches', label: 'Modular Switches', count: PRODUCTS.filter(p => p.category === 'switches').length, division: 'appliances' },
    { id: 'inverters', label: 'Inverters & Home UPS', count: PRODUCTS.filter(p => p.category === 'inverters').length, division: 'appliances' },
    { id: 'geysers', label: 'Water Heaters', count: PRODUCTS.filter(p => p.category === 'geysers').length, division: 'appliances' }
  ];

  const allBrands = useMemo(() => {
    const brands = Array.from(new Set(PRODUCTS.map(p => p.brand)));
    return ['all', ...brands];
  }, []);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Division filter (All vs Construction vs Appliances)
      if (selectedDivision !== 'all') {
        if (selectedDivision === 'construction' && product.division !== 'construction') {
          return false;
        }
        if (selectedDivision === 'appliances' && product.division === 'construction') {
          return false;
        }
      }
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'all' && product.brand !== selectedBrand) {
        return false;
      }
      // In Stock filter
      if (inStockOnly && !product.inStock) {
        return false;
      }
      // BLDC filter
      if (bldcOnly && !product.bldc) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesBrand = product.brand.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesSpecs = Object.values(product.specs).some(s => s.toLowerCase().includes(q));
        if (!matchesName && !matchesBrand && !matchesDesc && !matchesSpecs) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // default featured
    });
  }, [selectedDivision, selectedCategory, selectedBrand, inStockOnly, bldcOnly, searchQuery, sortBy]);

  const handleAddClick = (product: Product) => {
    onAddToCart({
      id: product.id,
      type: 'product',
      title: product.name,
      brandOrDuration: product.brand,
      price: product.price,
      quantity: 1,
      unit: product.unit || '1 Unit',
      image: product.image,
      warrantyOrSpecs: product.unit ? `${product.unit} • ${product.warranty}` : product.warranty
    });

    setAddedItemIds((prev) => new Set(prev).add(product.id));
    setTimeout(() => {
      setAddedItemIds((prev) => {
        const next = new Set(prev);
        next.delete(product.id);
        return next;
      });
    }, 1800);
  };

  const handleResetFilters = () => {
    setSelectedDivision('all');
    onSelectCategory('all');
    setSelectedBrand('all');
    setInStockOnly(false);
    setBldcOnly(false);
    onSearchChange('');
    setSortBy('featured');
  };

  return (
    <section id="catalog" className="py-16 bg-[#0A0A0A] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#FFB800] mb-2">
              <Zap className="w-4 h-4 text-[#FFB800] fill-[#FFB800]" />
              <span>CONSTRUCTION MATERIALS & APPLIANCES</span>
            </div>
            <h2 className="font-archivo text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
              ELECTRICAL PRODUCTS & MATERIALS
            </h2>
            <p className="font-inter text-sm text-white/60 mt-2 max-w-2xl">
              Complete inventory for house construction (copper house wires, MCBs, porcelain fuses, PVC conduit pipes, GI backboxes & chemical earthing) alongside 5-star BLDC fans and smart home appliances.
            </p>
          </div>

          <div className="text-xs text-white/60 bg-white/5 px-4 py-2 rounded-full border border-white/10 font-bold uppercase tracking-wider self-start md:self-auto">
            Showing <span className="font-archivo text-[#FFB800]">{filteredProducts.length}</span> of {PRODUCTS.length} Products
          </div>
        </div>

        {/* Division Quick Switcher (All vs Construction vs Appliances) */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <button
            onClick={() => {
              setSelectedDivision('all');
              onSelectCategory('all');
            }}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              selectedDivision === 'all'
                ? 'bg-white text-black font-archivo'
                : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
            }`}
          >
            <span>⚡ All Products ({PRODUCTS.length})</span>
          </button>

          <button
            onClick={() => {
              setSelectedDivision('construction');
              onSelectCategory('all');
            }}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              selectedDivision === 'construction'
                ? 'bg-[#FFB800] text-black font-archivo shadow-lg shadow-[#FFB800]/20'
                : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
            }`}
          >
            <span>🏗️ Construction Electrical Materials ({PRODUCTS.filter(p => p.division === 'construction').length})</span>
          </button>

          <button
            onClick={() => {
              setSelectedDivision('appliances');
              onSelectCategory('all');
            }}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
              selectedDivision === 'appliances'
                ? 'bg-emerald-500 text-black font-archivo shadow-lg shadow-emerald-500/20'
                : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
            }`}
          >
            <span>🏠 Home & Decor Appliances ({PRODUCTS.filter(p => p.division !== 'construction').length})</span>
          </button>
        </div>

        {/* Category Tabs Scrollbar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-[#FFB800] text-black shadow-lg shadow-[#FFB800]/20'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-archivo ${
                  isActive ? 'bg-black text-[#FFB800]' : 'bg-white/10 text-white/60'
                }`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filter Controls Toolbar */}
        <div className="bg-white/5 p-4 rounded-2xl border border-white/10 mb-8 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          
          {/* Brand & Toggles */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Brand Dropdown */}
            <div className="relative">
              <label htmlFor="brand-select" className="sr-only">Filter by Brand</label>
              <select
                id="brand-select"
                aria-label="Filter by Brand"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="appearance-none bg-black/50 border border-white/15 text-xs font-bold uppercase tracking-wider text-white pl-3.5 pr-8 py-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
              >
                <option value="all" className="bg-[#0A0A0A] text-white">All Brands ({allBrands.length - 1})</option>
                {allBrands.filter(b => b !== 'all').map((brand) => (
                  <option key={brand} value={brand} className="bg-[#0A0A0A] text-white">{brand}</option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-white/40 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* In Stock Toggle */}
            <button
              onClick={() => setInStockOnly(!inStockOnly)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-colors flex items-center gap-2 ${
                inStockOnly
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/50'
                  : 'bg-black/50 text-white/60 border-white/15 hover:bg-white/10'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${inStockOnly ? 'bg-emerald-400' : 'bg-white/30'}`} />
              <span>In Stock Only</span>
            </button>

            {/* BLDC Energy Saver Toggle */}
            <button
              onClick={() => setBldcOnly(!bldcOnly)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-colors flex items-center gap-2 ${
                bldcOnly
                  ? 'bg-[#FFB800]/20 text-[#FFB800] border-[#FFB800]/50'
                  : 'bg-black/50 text-white/60 border-white/15 hover:bg-white/10'
              }`}
            >
              <Zap className={`w-3.5 h-3.5 ${bldcOnly ? 'text-[#FFB800] fill-[#FFB800]' : 'text-white/40'}`} />
              <span>BLDC Power Savers</span>
            </button>
          </div>

          {/* Search bar & Sort By */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Inline search */}
            <div className="relative grow sm:grow-0">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search wires, MCB, pipes, fans..."
                className="w-full sm:w-60 bg-black/50 border border-white/15 text-xs text-white placeholder-white/40 pl-9 pr-3 py-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
              />
            </div>

            {/* Sort By Dropdown */}
            <div className="relative">
              <label htmlFor="sort-select" className="sr-only">Sort products</label>
              <select
                id="sort-select"
                aria-label="Sort products"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none bg-black/50 border border-white/15 text-xs font-bold uppercase tracking-wider text-white pl-3.5 pr-8 py-2.5 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FFB800]"
              >
                <option value="featured" className="bg-[#0A0A0A] text-white">Featured First</option>
                <option value="price-asc" className="bg-[#0A0A0A] text-white">Price: Low to High</option>
                <option value="price-desc" className="bg-[#0A0A0A] text-white">Price: High to Low</option>
                <option value="rating" className="bg-[#0A0A0A] text-white">Highest Rated</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-white/40 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Reset Filter Button */}
            {(selectedDivision !== 'all' || selectedBrand !== 'all' || inStockOnly || bldcOnly || searchQuery || selectedCategory !== 'all') && (
              <button
                onClick={handleResetFilters}
                className="p-2.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 text-xs flex items-center gap-1.5 font-bold uppercase tracking-wider transition-colors"
                title="Reset all filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => {
              const discountPercent = Math.round(
                ((product.originalPrice - product.price) / product.originalPrice) * 100
              );
              const isAdded = addedItemIds.has(product.id);

              return (
                <div
                  key={product.id}
                  className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:border-[#FFB800]/50 transition-all flex flex-col group backdrop-blur-sm"
                >
                  {/* Product Image Area */}
                  <div className="relative h-48 bg-black/40 overflow-hidden cursor-pointer" onClick={() => onViewProductDetails(product)}>
                    <img
                      src={product.image}
                      alt={product.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Brand Pill */}
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm text-white text-[11px] font-archivo uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                      {product.brand}
                    </div>

                    {/* Unit / Packaging pill */}
                    {product.unit && (
                      <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-[#FFB800] text-[10px] font-archivo px-2.5 py-1 rounded-full border border-[#FFB800]/30 shadow-md">
                        {product.unit}
                      </div>
                    )}

                    {/* Custom Highlight Badge */}
                    {product.badge && (
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/85 backdrop-blur-sm text-[#FFB800] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#FFB800]/20 truncate">
                        ⚡ {product.badge}
                      </div>
                    )}
                  </div>

                  {/* Product Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    
                    <div>
                      {/* Rating & Warranty Tag */}
                      <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                        <div className="flex items-center gap-1 text-[#FFB800] font-bold">
                          <Star className="w-3.5 h-3.5 fill-[#FFB800]" />
                          <span className="font-archivo text-xs">{product.rating}</span>
                          <span className="text-white/40 font-normal">({product.reviewsCount})</span>
                        </div>
                        <div className="flex items-center gap-1 text-white/50 text-[11px] font-medium truncate">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">Genuine ISI</span>
                        </div>
                      </div>

                      {/* Product Name */}
                      <h3 
                        onClick={() => onViewProductDetails(product)}
                        className="font-bold text-white text-base leading-snug line-clamp-2 hover:text-[#FFB800] cursor-pointer transition-colors"
                      >
                        {product.name}
                      </h3>

                      {/* Key Tech Specs Snippet */}
                      <div className="mt-3 pt-2.5 border-t border-white/10 flex flex-wrap gap-1.5 text-[11px] text-white/70">
                        {product.unit && (
                          <span className="bg-amber-500/10 text-[#FFB800] border border-[#FFB800]/30 px-2 py-0.5 rounded-full font-bold text-[10px]">
                            📦 {product.unit}
                          </span>
                        )}
                        {product.wattage && (
                          <span className="bg-white/10 px-2.5 py-0.5 rounded-full font-bold text-white text-[10px] uppercase tracking-wider">
                            {product.wattage}
                          </span>
                        )}
                        {product.energyRating && (
                          <span className="bg-[#FFB800]/10 text-[#FFB800] px-2.5 py-0.5 rounded-full font-bold border border-[#FFB800]/30 text-[10px]">
                            {product.energyRating}★ BEE Rating
                          </span>
                        )}
                        <span className="bg-white/5 text-white/50 px-2 py-0.5 rounded-full text-[10px] truncate max-w-full">
                          {product.warranty}
                        </span>
                      </div>
                    </div>

                    {/* Price & Action Row */}
                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-archivo text-xl text-[#FFB800]">
                            ₹{product.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-xs text-white/30 line-through">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                          GST Tax Invoice Included
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => onViewProductDetails(product)}
                          className="p-2.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                          title="View Technical Specifications"
                        >
                          <Info className="w-4 h-4" />
                        </button>

                        <button
                          onClick={() => handleAddClick(product)}
                          className={`px-4 py-2.5 rounded-full font-bold uppercase text-[11px] tracking-wider flex items-center gap-1.5 transition-all shadow-md ${
                            isAdded
                              ? 'bg-emerald-600 text-white'
                              : 'bg-[#FFB800] hover:bg-[#ffc629] text-black shadow-[#FFB800]/20'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5 stroke-[3]" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5 stroke-[3]" />
                              <span>Quote</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-white/5 rounded-3xl border border-white/10 p-12 text-center max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-[#FFB800]/10 text-[#FFB800] flex items-center justify-center mx-auto mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-archivo text-white text-lg uppercase">No matching electrical materials or appliances found</h3>
            <p className="text-xs text-white/60 mt-1 font-inter">
              Try adjusting your search keywords or switching between Construction Materials and Home Appliances.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-5 inline-flex items-center gap-2 bg-[#FFB800] text-black px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#ffc629]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
