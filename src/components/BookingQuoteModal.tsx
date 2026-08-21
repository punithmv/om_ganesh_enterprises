import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Wrench, 
  Send, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  FileText, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { QuoteCartItem, ElectricalService, ServiceBookingForm } from '../types';
import { STORE_INFO, ELECTRICAL_SERVICES } from '../data/mockData';

interface BookingQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: QuoteCartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
  initialTab?: 'quote' | 'service';
  preselectedService?: ElectricalService | null;
}

export const BookingQuoteModal: React.FC<BookingQuoteModalProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  initialTab = 'quote',
  preselectedService = null
}) => {
  const [activeTab, setActiveTab] = useState<'quote' | 'service'>(initialTab);
  const [deliveryOption, setDeliveryOption] = useState<'delivery' | 'pickup'>('delivery');
  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [confirmedBookingId, setConfirmedBookingId] = useState<string>('');

  // Service Booking Form State
  const [serviceForm, setServiceForm] = useState<ServiceBookingForm>({
    serviceId: preselectedService ? preselectedService.id : ELECTRICAL_SERVICES[0].id,
    serviceName: preselectedService ? preselectedService.title : ELECTRICAL_SERVICES[0].title,
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    address: '',
    city: 'Davanagere',
    pincode: '577001',
    preferredDate: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    preferredTimeSlot: '10:00 AM - 1:00 PM (Morning Slot)',
    additionalNotes: '',
    emergency: false
  });

  // Quote Cart Customer Info
  const [quoteCustomerName, setQuoteCustomerName] = useState('');
  const [quoteCustomerPhone, setQuoteCustomerPhone] = useState('');
  const [quoteCustomerAddress, setQuoteCustomerAddress] = useState('');

  if (!isOpen) return null;

  const totalQuoteAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceForm.customerName || !serviceForm.customerPhone || !serviceForm.address) {
      alert('Please fill in your name, phone number, and address.');
      return;
    }

    const bookingId = `OGE-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedBookingId(bookingId);
    setBookingSuccess(true);
  };

  const handleWhatsAppBookingDispatch = () => {
    const selectedServiceObj = ELECTRICAL_SERVICES.find(s => s.id === serviceForm.serviceId);
    const serviceName = selectedServiceObj ? selectedServiceObj.title : serviceForm.serviceName;
    
    const msg = `⚡ *Om Ganesh Enterprises - Service Appointment Request*\n\n` +
      `📌 *Booking ID:* ${confirmedBookingId || 'NEW-SERVICE'}\n` +
      `🛠️ *Service:* ${serviceName}\n` +
      `👤 *Customer:* ${serviceForm.customerName}\n` +
      `📞 *Phone:* ${serviceForm.customerPhone}\n` +
      `📍 *Address:* ${serviceForm.address}, Davanagere - ${serviceForm.pincode}\n` +
      `📅 *Date:* ${serviceForm.preferredDate}\n` +
      `⏰ *Time Slot:* ${serviceForm.preferredTimeSlot}\n` +
      `${serviceForm.emergency ? '🚨 *PRIORITY EMERGENCY VISIT REQUESTED*\n' : ''}` +
      `${serviceForm.additionalNotes ? `📝 *Notes:* ${serviceForm.additionalNotes}\n` : ''}\n` +
      `Please confirm technician dispatch!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  const handleWhatsAppQuoteOrder = () => {
    if (cartItems.length === 0) return;

    let itemsList = cartItems.map((item, idx) => 
      `${idx + 1}. ${item.title} (${item.brandOrDuration || 'Item'}) x ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString('en-IN')}`
    ).join('\n');

    const msg = `⚡ *Om Ganesh Enterprises - Quote & Order Inquiry*\n\n` +
      `🛍️ *Requested Items:*\n${itemsList}\n\n` +
      `💰 *Estimated Total:* ₹${totalQuoteAmount.toLocaleString('en-IN')}\n` +
      `🚚 *Mode:* ${deliveryOption === 'delivery' ? 'Doorstep / Site Delivery' : 'Store Pickup (Muddegowdru Complex)'}\n` +
      `${quoteCustomerName ? `👤 *Name:* ${quoteCustomerName}\n` : ''}` +
      `${quoteCustomerPhone ? `📞 *Phone:* ${quoteCustomerPhone}\n` : ''}` +
      `${quoteCustomerAddress && deliveryOption === 'delivery' ? `📍 *Delivery Address:* ${quoteCustomerAddress}\n` : ''}\n` +
      `Please provide best store price, warranty, and availability confirmation!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0A0A0A] text-white w-full max-w-2xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="bg-white/5 text-white p-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#FFB800] flex items-center justify-center text-black font-bold">
              <Sparkles className="w-5 h-5 fill-black text-black" />
            </div>
            <div>
              <h3 className="font-archivo text-base sm:text-lg uppercase tracking-wider text-white">
                {bookingSuccess ? 'BOOKING CONFIRMED' : 'QUOTES & ELECTRICIAN BOOKING'}
              </h3>
              <p className="text-xs text-[#FFB800] font-medium">Om Ganesh Enterprises • Mandipet, Davanagere</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector (Hidden if already succeeded) */}
        {!bookingSuccess && (
          <div className="flex border-b border-white/10 bg-black/40 text-xs font-bold font-archivo uppercase tracking-wider">
            <button
              onClick={() => setActiveTab('quote')}
              className={`flex-1 py-3.5 px-4 flex items-center justify-center gap-2 border-b-2 transition-all ${
                activeTab === 'quote'
                  ? 'border-[#FFB800] text-[#FFB800] bg-white/5'
                  : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              <ShoppingBag className="w-4 h-4 text-[#FFB800]" />
              <span>Appliances Cart ({cartItems.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('service')}
              className={`flex-1 py-3.5 px-4 flex items-center justify-center gap-2 border-b-2 transition-all ${
                activeTab === 'service'
                  ? 'border-[#FFB800] text-[#FFB800] bg-white/5'
                  : 'border-transparent text-white/50 hover:text-white'
              }`}
            >
              <Wrench className="w-4 h-4 text-[#FFB800]" />
              <span>Book Electrician</span>
            </button>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 text-white">
          
          {/* SUCCESS SCREEN */}
          {bookingSuccess ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="font-archivo text-2xl uppercase tracking-wider text-white">
                  APPOINTMENT CONFIRMED!
                </h4>
                <p className="text-xs text-white/60 mt-1 font-inter">
                  Reference ID: <span className="font-mono font-bold text-[#FFB800]">{confirmedBookingId}</span>
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-left text-xs space-y-2.5 max-w-md mx-auto font-inter">
                <div className="flex justify-between">
                  <span className="text-white/50">Service:</span>
                  <span className="font-bold text-white">{serviceForm.serviceName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Customer:</span>
                  <span className="font-bold text-white">{serviceForm.customerName} ({serviceForm.customerPhone})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Scheduled Date:</span>
                  <span className="font-bold text-white">{serviceForm.preferredDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Slot:</span>
                  <span className="font-bold text-white">{serviceForm.preferredTimeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Address:</span>
                  <span className="font-bold text-white">{serviceForm.address}</span>
                </div>
              </div>

              <p className="text-xs text-white/60 max-w-sm mx-auto font-inter">
                Our service coordinator will call you within 15 minutes to verify technician dispatch. You can also send this directly via WhatsApp for instant priority assignment.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleWhatsAppBookingDispatch}
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    setBookingSuccess(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-full transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : activeTab === 'quote' ? (
            /* TAB 1: QUOTE CART */
            <div className="space-y-6">
              {cartItems.length > 0 ? (
                <>
                  <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white/5 p-3.5 rounded-2xl border border-white/10 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {item.image && (
                            <img
                              src={item.image}
                              alt={item.title}
                              referrerPolicy="no-referrer"
                              className="w-12 h-12 rounded-xl object-cover bg-white/10 border border-white/10 shrink-0"
                            />
                          )}
                          <div className="min-w-0">
                            <h4 className="font-archivo text-white text-xs uppercase truncate">{item.title}</h4>
                            <div className="text-[11px] text-white/50 font-inter">
                              ₹{item.price.toLocaleString('en-IN')} per unit
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 shrink-0">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-white/20 bg-black/60 rounded-full overflow-hidden">
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="px-2.5 py-1 text-white/70 hover:text-white hover:bg-white/10"
                              title="Decrease"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-1 font-bold text-xs text-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="px-2.5 py-1 text-white/70 hover:text-white hover:bg-white/10"
                              title="Increase"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="font-archivo text-[#FFB800] w-20 text-right text-xs">
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                          </span>

                          <button
                            onClick={() => onRemoveItem(item.id)}
                            className="text-white/40 hover:text-red-400 p-1 transition-colors"
                            title="Remove"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Delivery vs Store Pickup */}
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-white/80">Fulfillment Preference:</div>
                    <div className="grid grid-cols-2 gap-3 text-xs font-inter">
                      <button
                        type="button"
                        onClick={() => setDeliveryOption('delivery')}
                        className={`p-3 rounded-full border font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all text-xs ${
                          deliveryOption === 'delivery'
                            ? 'bg-[#FFB800] text-black border-[#FFB800] shadow-md'
                            : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        <span>🚚 Free Delivery</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setDeliveryOption('pickup')}
                        className={`p-3 rounded-full border font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all text-xs ${
                          deliveryOption === 'pickup'
                            ? 'bg-[#FFB800] text-black border-[#FFB800] shadow-md'
                            : 'bg-white/5 text-white/80 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        <span>🏬 Store Pickup</span>
                      </button>
                    </div>
                  </div>

                  {/* Customer Details for Instant Quote */}
                  <div className="space-y-3 font-inter">
                    <div className="text-xs font-bold uppercase tracking-wider text-white/80">Your Contact Info (Optional):</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <input
                        type="text"
                        placeholder="Your Full Name"
                        value={quoteCustomerName}
                        onChange={(e) => setQuoteCustomerName(e.target.value)}
                        className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-[#FFB800]"
                      />
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        value={quoteCustomerPhone}
                        onChange={(e) => setQuoteCustomerPhone(e.target.value)}
                        className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl text-white placeholder-white/40 focus:outline-none focus:border-[#FFB800]"
                      />
                    </div>
                    {deliveryOption === 'delivery' && (
                      <input
                        type="text"
                        placeholder="Delivery Address / Landmark in Bangalore"
                        value={quoteCustomerAddress}
                        onChange={(e) => setQuoteCustomerAddress(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 px-4 py-3 rounded-2xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#FFB800]"
                      />
                    )}
                  </div>

                  {/* Total & Action Bar */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <div className="text-[11px] text-white/50 uppercase tracking-wider font-bold">Estimated Total (GST Incl.):</div>
                      <div className="font-archivo text-2xl sm:text-3xl text-[#FFB800]">
                        ₹{totalQuoteAmount.toLocaleString('en-IN')}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <button
                        onClick={onClearCart}
                        className="px-4 py-3 rounded-full border border-white/10 text-white/60 hover:text-white hover:bg-white/10 text-xs font-bold uppercase tracking-wider"
                      >
                        Clear Cart
                      </button>

                      <button
                        onClick={handleWhatsAppQuoteOrder}
                        className="flex-1 sm:flex-initial bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow-lg transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Order on WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 text-white/40 flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-7 h-7" />
                  </div>
                  <h4 className="font-archivo text-base uppercase text-white">Your Cart is Empty</h4>
                  <p className="text-xs text-white/60 max-w-xs mx-auto font-inter">
                    Browse our appliances catalog and click "Add Quote" to calculate estimated totals and book orders directly.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-2 bg-[#FFB800] text-black font-bold uppercase tracking-wider text-xs px-6 py-3 rounded-full hover:bg-[#ffc629]"
                  >
                    Browse Catalog
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* TAB 2: SERVICE BOOKING */
            <form onSubmit={handleServiceSubmit} className="space-y-4 text-xs font-inter">
              
              {/* Select Service Dropdown */}
              <div>
                <label className="block font-bold uppercase tracking-wider text-white/80 mb-1.5 text-[11px]">
                  Select Electrical Service Needed *
                </label>
                <select
                  value={serviceForm.serviceId}
                  onChange={(e) => {
                    const svc = ELECTRICAL_SERVICES.find(s => s.id === e.target.value);
                    setServiceForm({
                      ...serviceForm,
                      serviceId: e.target.value,
                      serviceName: svc ? svc.title : ''
                    });
                  }}
                  className="w-full bg-white/5 border border-white/10 p-3.5 rounded-2xl font-bold text-white focus:outline-none focus:border-[#FFB800]"
                >
                  {ELECTRICAL_SERVICES.map((s) => (
                    <option key={s.id} value={s.id} className="bg-slate-900 text-white">
                      {s.title} — (Starts ₹{s.startingPrice})
                    </option>
                  ))}
                </select>
              </div>

              {/* Emergency Flag Checkbox */}
              <div className="bg-red-500/10 border border-red-500/30 p-3.5 rounded-2xl flex items-center gap-3">
                <input
                  type="checkbox"
                  id="emergency-cb"
                  checked={serviceForm.emergency}
                  onChange={(e) => setServiceForm({ ...serviceForm, emergency: e.target.checked })}
                  className="w-4 h-4 text-red-600 rounded border-red-500/50 focus:ring-red-500 cursor-pointer"
                />
                <label htmlFor="emergency-cb" className="text-xs text-red-300 font-bold uppercase tracking-wide cursor-pointer">
                  🚨 Priority Emergency Visit (Technician in 45-60 mins)
                </label>
              </div>

              {/* Customer Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-white/80 mb-1.5 text-[11px]">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={serviceForm.customerName}
                    onChange={(e) => setServiceForm({ ...serviceForm, customerName: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 p-3.5 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-[#FFB800]"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-white/80 mb-1.5 text-[11px]">WhatsApp Phone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98450 12345"
                    value={serviceForm.customerPhone}
                    onChange={(e) => setServiceForm({ ...serviceForm, customerPhone: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 p-3.5 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-[#FFB800]"
                  />
                </div>
              </div>

              {/* Address & Pincode */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="sm:col-span-2">
                  <label className="block font-bold uppercase tracking-wider text-white/80 mb-1.5 text-[11px]">Address & Street *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Flat 302, Sai Residency, 5th Cross"
                    value={serviceForm.address}
                    onChange={(e) => setServiceForm({ ...serviceForm, address: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 p-3.5 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-[#FFB800]"
                  />
                </div>
                <div>
                  <label className="block font-bold uppercase tracking-wider text-white/80 mb-1.5 text-[11px]">Pincode</label>
                  <input
                    type="text"
                    placeholder="560070"
                    value={serviceForm.pincode}
                    onChange={(e) => setServiceForm({ ...serviceForm, pincode: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 p-3.5 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-[#FFB800]"
                  />
                </div>
              </div>

              {/* Preferred Date & Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-white/80 mb-1.5 text-[11px]">Preferred Date</label>
                  <input
                    type="date"
                    value={serviceForm.preferredDate}
                    onChange={(e) => setServiceForm({ ...serviceForm, preferredDate: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 p-3.5 rounded-2xl text-white focus:outline-none focus:border-[#FFB800] font-bold"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase tracking-wider text-white/80 mb-1.5 text-[11px]">Time Window</label>
                  <select
                    value={serviceForm.preferredTimeSlot}
                    onChange={(e) => setServiceForm({ ...serviceForm, preferredTimeSlot: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 p-3.5 rounded-2xl text-white focus:outline-none focus:border-[#FFB800] font-bold"
                  >
                    <option value="9:30 AM - 1:00 PM (Morning Slot)" className="bg-slate-900 text-white">9:30 AM - 1:00 PM (Morning)</option>
                    <option value="1:30 PM - 5:00 PM (Afternoon Slot)" className="bg-slate-900 text-white">1:30 PM - 5:00 PM (Afternoon)</option>
                    <option value="5:30 PM - 8:30 PM (Evening Slot)" className="bg-slate-900 text-white">5:30 PM - 8:30 PM (Evening)</option>
                  </select>
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block font-bold uppercase tracking-wider text-white/80 mb-1.5 text-[11px]">Problem Description</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Fan making clicking sound on speed 4, ceiling height is approx 10 feet."
                  value={serviceForm.additionalNotes}
                  onChange={(e) => setServiceForm({ ...serviceForm, additionalNotes: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 p-3.5 rounded-2xl text-white placeholder-white/30 focus:outline-none focus:border-[#FFB800] resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="text-[11px] text-white/50">
                  ⚡ 30-Day Guarantee & Verified Electrician
                </div>

                <button
                  type="submit"
                  className="bg-[#FFB800] hover:bg-[#ffc629] text-black font-bold uppercase tracking-wider text-xs px-7 py-3.5 rounded-full transition-all shadow-md"
                >
                  Confirm Appointment
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </div>
  );
};
