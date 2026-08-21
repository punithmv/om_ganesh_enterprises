export type ProductCategory = 
  | 'all'
  | 'construction'
  | 'wires' 
  | 'switchgear'
  | 'conduits'
  | 'earthing'
  | 'fans' 
  | 'lighting' 
  | 'switches' 
  | 'inverters' 
  | 'geysers' 
  | 'industrial'
  | 'kitchen';

export interface Product {
  id: string;
  name: string;
  category: 'wires' | 'switchgear' | 'conduits' | 'earthing' | 'fans' | 'lighting' | 'switches' | 'inverters' | 'geysers' | 'industrial' | 'kitchen';
  division?: 'construction' | 'appliances';
  brand: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  warranty: string;
  unit?: string; // e.g. '90m Roll', '1 Piece', 'Pack of 25', '25kg Bag', 'Per Metre'
  wattage?: string;
  color?: string;
  specs: Record<string, string>;
  image: string;
  badge?: string;
  bldc?: boolean;
  energyRating?: number; // 1 to 5 stars
  description: string;
}

export interface ElectricalService {
  id: string;
  title: string;
  category: string;
  startingPrice: number;
  duration: string;
  description: string;
  includedFeatures: string[];
  iconName: string;
  popular?: boolean;
}

export interface QuoteCartItem {
  id: string;
  type: 'product' | 'service';
  title: string;
  brandOrDuration?: string;
  price: number;
  quantity: number;
  unit?: string;
  image?: string;
  warrantyOrSpecs?: string;
}

export interface ServiceBookingForm {
  serviceId: string;
  serviceName: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  address: string;
  city: string;
  pincode: string;
  preferredDate: string;
  preferredTimeSlot: string;
  additionalNotes: string;
  emergency: boolean;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  verifiedPurchase: boolean;
  comment: string;
  productOrService: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'warranty' | 'services' | 'delivery';
}
