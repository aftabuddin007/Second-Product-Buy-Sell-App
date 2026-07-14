"use client";

import Image from "next/image";
import { FaStar, FaMapMarkerAlt, FaCheckCircle, FaTag } from "react-icons/fa";

interface Product {
  id: string;
  title: string;
  category: string;
  subcategory?: string;
  productStatus: string;

  price: {
    sellingPrice: number;
    originalPrice: number;
    negotiable: boolean;
  };

  condition: {
    grade: string;
    workingCondition: string;
  };

  seller: {
    name: string;
    verified: boolean;
    rating: number;
    totalReviews: number;
  };

  location: {
    city: string;
  };

  images: {
    id: number;
    url: string;
    type: string;
  }[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition rounded-xl overflow-hidden">

      {/* Image */}
      <figure className="relative h-60 bg-base-200">
        <Image
          src={product.images?.[0]?.url || "/images/no-image.png"}
          alt={product.title}
          fill
          className="object-cover"
        />

        <div className="absolute top-3 left-3 badge badge-success">
          {product.productStatus}
        </div>

        <div className="absolute top-3 right-3 badge badge-primary">
          {product.condition.grade}
        </div>
      </figure>

      <div className="card-body">

        {/* Category */}
        <div className="flex items-center gap-2 text-primary text-sm font-semibold">
          <FaTag />
          <span>{product.category}</span>
        </div>

        {/* Title */}
        <h2 className="card-title line-clamp-2">
          {product.title}
        </h2>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">
            ৳{product.price.sellingPrice.toLocaleString()}
          </span>

          <span className="line-through text-gray-400">
            ৳{product.price.originalPrice.toLocaleString()}
          </span>
        </div>

        {/* Negotiable */}
        {product.price.negotiable && (
          <div className="badge badge-warning badge-outline">
            Negotiable
          </div>
        )}

        {/* Rating */}
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />

          <span className="font-semibold">
            {product.seller.rating}
          </span>

          <span className="text-sm text-gray-500">
            ({product.seller.totalReviews})
          </span>
        </div>

        {/* Condition */}
        <div className="flex justify-between text-sm">
          <span>{product.condition.grade}</span>
          <span>{product.condition.workingCondition}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-sm">
          <FaMapMarkerAlt />
          {product.location.city}
        </div>

        
        

        <div className="card-actions mt-4">
          <button className="btn btn-primary flex-1">
            View Details
          </button>

          <button className="btn btn-outline">❤</button>
        </div>

      </div>
    </div>
  );
}