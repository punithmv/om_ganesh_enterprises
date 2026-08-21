/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { ContractorBoqEstimator } from './components/ContractorBoqEstimator';
import { ServicesSection } from './components/ServicesSection';
import { EnergySavingsCalculator } from './components/EnergySavingsCalculator';
import { BrandsSection } from './components/BrandsSection';
import { AboutReviewsFaq } from './components/AboutReviewsFaq';
import { Footer } from './components/Footer';
import { BookingQuoteModal } from './components/BookingQuoteModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { 
  Product, 
  ProductCategory, 
  QuoteCartItem, 
  ElectricalService 
} from './types';
import { 
  MessageCircle, 
  Phone, 
  Wrench, 
  ShoppingBag, 
  Zap,
  CheckCircle2
} from 'lucide-react';
import { STORE_INFO } from './data/mockData';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('catalog');
  
  // Cart / Quote State (with LocalStorage sync)
  const [cartItems, setCartItems] = useState<QuoteCartItem[]>(() => {
    try {
      const saved = localStorage.getItem('om_ganesh_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modal States
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [bookingModalInitialTab, setBookingModalInitialTab] = useState<'quote' | 'service'>('quote');
  const [preselectedService, setPreselectedService] = useState<ElectricalService | null>(null);
  const [selectedProductForDetails, setSelectedProductForDetails] = useState<Product | null>(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('om_ganesh_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (newItem: QuoteCartItem) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.id === newItem.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      } else {
        return [...prev, newItem];
      }
    });
    showToast(`Added "${newItem.title}" to Quote Cart`);
  };

  const handleAddMultipleToCart = (newItems: QuoteCartItem[]) => {
    setCartItems((prev) => {
      let updated = [...prev];
      for (const item of newItems) {
        const existingIndex = updated.findIndex((p) => p.id === item.id);
        if (existingIndex > -1) {
          updated[existingIndex] = {
            ...updated[existingIndex],
            quantity: updated[existingIndex].quantity + item.quantity
          };
        } else {
          updated.push(item);
        }
      }
      return updated;
    });
    showToast(`Added ${newItems.length} Construction BOQ Materials to Cart!`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      }).filter(Boolean) as QuoteCartItem[];
    });
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast('Item removed from Quote Cart');
  };

  const handleClearCart = () => {
    setCartItems([]);
    showToast('Quote Cart cleared');
  };

  const handleOpenCart = () => {
    setBookingModalInitialTab('quote');
    setPreselectedService(null);
    setIsBookingModalOpen(true);
  };

  const handleOpenBooking = (service?: ElectricalService) => {
    setBookingModalInitialTab('service');
    setPreselectedService(service || null);
    setIsBookingModalOpen(true);
  };

  const handleBookInstallationFromProduct = (product: Product) => {
    setBookingModalInitialTab('service');
    setIsBookingModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col font-sans selection:bg-[#FFB800] selection:text-black">
      
      {/* Toast Notification Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#141414] text-white px-4 py-3 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-2.5 text-xs font-semibold animate-in fade-in slide-in-from-bottom-5">
          <CheckCircle2 className="w-4 h-4 text-[#FFB800] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Sticky Header */}
      <Header
        cartItems={cartItems}
        onOpenCart={handleOpenCart}
        onOpenBooking={() => handleOpenBooking()}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onSelectCategory={(cat) => {
            setSelectedCategory(cat);
            setActiveSection('catalog');
          }}
          onOpenBooking={() => handleOpenBooking()}
          onOpenCalculator={() => handleNavigate('calculator')}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* 2. Interactive Product Catalog */}
        <ProductCatalog
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onAddToCart={handleAddToCart}
          onViewProductDetails={(p) => setSelectedProductForDetails(p)}
        />

        {/* 3. Contractor & House Construction BOQ Estimator */}
        <ContractorBoqEstimator
          onAddBoqToCart={handleAddMultipleToCart}
        />

        {/* 4. Electrician & Appliance Services */}
        <ServicesSection
          onBookService={(service) => handleOpenBooking(service)}
        />

        {/* 5. Interactive Energy Savings & Bill Calculator */}
        <EnergySavingsCalculator
          onExploreBLDC={(cat) => {
            setSelectedCategory(cat);
            setActiveSection('catalog');
          }}
        />

        {/* 6. Authorized Dealer Brands */}
        <BrandsSection />

        {/* 7. About Store, Verified Reviews & FAQs */}
        <AboutReviewsFaq />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          handleNavigate('catalog');
        }}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Action Buttons on Bottom (Mobile & Desktop) */}
      <div className="fixed bottom-5 left-5 z-40 flex flex-col gap-2.5">
        <a
          href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hello%20Om%20Ganesh%20Enterprises,%20I%20want%20to%20inquire%20about%20construction%20materials%20and%20electrical%20appliances.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110"
          title="Direct WhatsApp with Om Ganesh Enterprises"
          aria-label="Direct WhatsApp with Om Ganesh Enterprises"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </div>

      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
        {totalCartCount > 0 && (
          <button
            onClick={handleOpenCart}
            className="flex items-center gap-2 bg-[#FFB800] hover:bg-[#ffc629] text-black font-archivo text-xs uppercase tracking-wider px-4 py-3 rounded-full shadow-xl transition-all hover:scale-105"
            aria-label="View Quote Cart"
          >
            <ShoppingBag className="w-4 h-4 stroke-[2.5]" />
            <span>Quote ({totalCartCount})</span>
          </button>
        )}
      </div>

      {/* Modals */}
      <BookingQuoteModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        initialTab={bookingModalInitialTab}
        preselectedService={preselectedService}
      />

      <ProductDetailModal
        product={selectedProductForDetails}
        onClose={() => setSelectedProductForDetails(null)}
        onAddToCart={handleAddToCart}
        onBookInstallation={handleBookInstallationFromProduct}
      />

    </div>
  );
}

