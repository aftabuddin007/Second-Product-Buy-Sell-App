"use client";

import { Products } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaTag, FaEye } from "react-icons/fa";

interface ProductCardProps {
  product: Products;
}

export default function ProductCard({ product }: ProductCardProps) {
  const imageUrl = product.images?.[0]?.url || "/images/no-image.png";

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden">
      
      {/* Product Image */}
      <figure className="relative h-60 bg-base-200">
        <Image
        width={400}
        height={400}
          src={imageUrl}
          alt={product.title}
          fill
          className="object-cover"
        />

        {/* Condition Badge */}
        <div className="absolute top-3 left-3 badge badge-primary">
          {product.condition}
        </div>

        {/* Availability Badge */}
        <div
          className={`absolute top-3 right-3 badge ${
            product.availability === "Available"
              ? "badge-success"
              : "badge-error"
          }`}
        >
          {product.availability}
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body">

        {/* Category */}
        <div className="flex items-center gap-2 text-primary text-sm font-medium">
          <FaTag />
          <span>{product.category}</span>
        </div>

        {/* Title */}
        <h2 className="card-title line-clamp-2 min-h-[56px]">
          {product.title}
        </h2>

        {/* Price */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-2xl font-bold text-primary">
            ৳{product.price.toLocaleString()}
          </span>

          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ৳{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Brand */}
        <p className="text-sm text-gray-500">
          Brand: {product.brand}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-500" />
          <span className="font-medium">{product.rating}</span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaEye />
          <span>{product.views} views</span>
        </div>

        {/* Posted Date */}
        <p className="text-sm text-gray-500">
          Posted: {product.postedDate}
        </p>

        {/* Actions */}
        <div className="card-actions mt-4">
         <Link href={`/products/${product.slug}`}>
  <button className="btn btn-primary flex-1">
    View Details
  </button>
</Link>

          <button className="btn btn-outline">
            ❤
          </button>
        </div>
      </div>
    </div>
  );
}