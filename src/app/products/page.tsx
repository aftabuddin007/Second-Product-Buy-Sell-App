import React from 'react'
import products from "@/data/products.json";
import ProductCard from '@/components/ProductCard';
function Product() {
  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <p className="text-center text-4xl font-bold text-black mb-10 my-20">Our All Products</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {
        products.map((product) => (

          <ProductCard key ={product.id} product={product}></ProductCard>))
      }
      </div>
    </div>
  )
}

export default Product
