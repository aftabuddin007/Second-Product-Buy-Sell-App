import React from "react";
import productsData from "@/data/products.json";
import ProductCard from "./ProductCard";
import { Products } from "@/types/product";

const ProductSection = () => {
  // Type assertion - tell TypeScript this is an array of Products
  const products = productsData as Products[];
  // const products = productsData as any[];
  const featuredProducts = products.slice(0, 8);
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-center text-4xl font-bold mb-10">
        Our Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {featuredProducts.map((products) => (
          <ProductCard key={products.id} product={products} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;