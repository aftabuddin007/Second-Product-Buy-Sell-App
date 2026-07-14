"use client";
import productsData from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import { Products } from "@/types/product";

import { useState } from "react";
export default function ProductsPage() {
  const products: Products[] = productsData;
  const [selectedCategory, setSelectedCategory] = useState("All");
const categories = [
  "All",
  "Mobile Phones",
  "Laptops",
  "Electronics",
  "Gaming",
  "Fashion",
  "Vehicles",
  "Furniture",
  "Books",
  "Home Appliances",
  "Sports",
  "Cameras",
];
const filteredProducts =
  selectedCategory === "All"
    ? products
    : products.filter(
        (product) => product.category === selectedCategory
      );
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-center text-4xl font-bold my-20 mb-10">
        Our All Products
      </h1>
<div className="flex flex-wrap gap-3 justify-center mb-10">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      className={`btn rounded-full ${
        selectedCategory === category
          ? "btn-primary"
          : "btn-outline"
      }`}
    >
      {category}
    </button>
  ))}
</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
  <ProductCard
    key={product.id}
    product={product}
  />
))}
      </div>
    </div>
  );
}