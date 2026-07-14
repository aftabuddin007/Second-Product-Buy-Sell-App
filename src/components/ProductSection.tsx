import React from "react";
import products from "@/data/products.json";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center text-4xl font-bold text-black mb-10">
        Our Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;