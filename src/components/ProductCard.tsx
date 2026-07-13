"use client";

import Image from "next/image";
import { FaStar, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-xl overflow-hidden">

      {/* Product Image */}
      <figure className="relative h-60 bg-base-200">
       <Image
  src={product?.images?.[0]?.url || "/images/no-image.png"}
  alt={product?.title || "Product"}
  fill
  className="object-cover"
/>

        {/* Available Badge */}
        <div className="absolute top-3 left-3 badge badge-success text-white">
          {product.productStatus}
        </div>

        {/* Condition Badge */}
        <div className="absolute top-3 right-3 badge badge-primary">
          {product.condition.grade}
        </div>
      </figure>

      <div className="card-body">

        {/* Title */}
        <h2 className="card-title line-clamp-2">
          {product.title}
        </h2>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">
            ৳ {product.price.sellingPrice.toLocaleString()}
          </span>

          <span className="line-through text-gray-400 text-sm">
            ৳ {product.price.originalPrice.toLocaleString()}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          <FaStar />
          <span className="font-semibold">
            {product.seller.rating}
          </span>

          <span className="text-gray-500 text-sm">
            ({product.seller.totalReviews} reviews)
          </span>
        </div>

        {/* Condition */}
        <div className="flex justify-between text-sm">
          <span>
            <strong>Condition:</strong> {product.condition.grade}
          </span>

          <span>
            {product.condition.workingCondition}
          </span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <FaMapMarkerAlt />
          {product.location.city}
        </div>

        {/* Seller */}
        <div className="flex items-center justify-between mt-2">

          <div className="flex items-center gap-2">

            <div className="avatar placeholder">
              <div className="bg-primary text-primary-content rounded-full w-10">
                <span>{product.seller.name.charAt(0)}</span>
              </div>
            </div>

            <div>
              <p className="font-semibold">
                {product.seller.name}
              </p>

              {product.seller.verified && (
                <p className="flex items-center gap-1 text-success text-xs">
                  <FaCheckCircle />
                  Verified Seller
                </p>
              )}
            </div>

          </div>
        </div>

        {/* Buttons */}
        <div className="card-actions mt-4">

          <button className="btn btn-primary flex-1">
            View Details
          </button>

          <button className="btn btn-outline">
            ❤️
          </button>

        </div>

      </div>
    </div>
  );
}