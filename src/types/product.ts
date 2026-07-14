export interface ProductImage {
  id: number;
  url: string;
}

export interface Products {
  id: string;
  title: string;
  slug: string;

  price: number;
  originalPrice?: number;
  currency: string;

  condition: string;
  availability: string;

  category: string;
  brand: string;

  postedDate: string;
  views: number;
  rating: number;

  description: string;

  images?: ProductImage[] ;
}