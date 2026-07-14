// app/products/[slug]/page.tsx

import Image from "next/image";
import { notFound } from "next/navigation";
import products from "@/data/products.json";
import { Products } from "@/types/product";
import {
  FaStar,
  FaEye,
  FaTag,
  FaBoxOpen,
} from "react-icons/fa";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductDetails({ params }: PageProps) {
  const { slug } = await params;

  const product = (products as Products[]).find(
    (item) => item.slug === slug
  );

  if (!product) {
    return notFound();
  }
const imageUrl =
  product.images?.[0]?.url || "/images/no-image.png";
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">

      {/* Main Section */}
      <div className="grid lg:grid-cols-2 gap-10">

        {/* Product Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg border">
          <div className="relative h-[500px]">
          <Image
  src={imageUrl}
  alt={product.title}
  fill
  className="object-cover"
/>
          </div>
        </div>

        {/* Product Information */}
        <div className="space-y-6">

          {/* Category */}
          <div className="badge badge-primary badge-outline">
            {product.category}
          </div>

          {/* Title */}
          <h1 className="text-4xl font-bold">
            {product.title}
          </h1>

          {/* Rating & Views */}
          <div className="flex gap-6 text-gray-500">

            <div className="flex items-center gap-2">
              <FaStar className="text-yellow-500" />
              <span>{product.rating}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaEye />
              <span>{product.views} Views</span>
            </div>

          </div>

          {/* Price */}
          <div>

            <h2 className="text-4xl font-bold text-primary">
              ৳{product.price.toLocaleString()}
            </h2>

            {product.originalPrice && (
              <p className="text-gray-400 line-through text-lg">
                ৳{product.originalPrice.toLocaleString()}
              </p>
            )}

          </div>

          {/* Basic Details */}
          <div className="grid grid-cols-2 gap-4">

            <div className="p-4 rounded-xl bg-base-200">
              <p className="text-sm text-gray-500">
                Brand
              </p>

              <p className="font-semibold">
                {product.brand}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-base-200">
              <p className="text-sm text-gray-500">
                Condition
              </p>

              <p className="font-semibold">
                {product.condition}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-base-200">
              <p className="text-sm text-gray-500">
                Availability
              </p>

              <p className="font-semibold text-green-600">
                {product.availability}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-base-200">
              <p className="text-sm text-gray-500">
                Posted Date
              </p>

              <p className="font-semibold">
                {product.postedDate}
              </p>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-4">

            <button className="btn btn-primary flex-1">
              Buy Now
            </button>

            <button className="btn btn-outline">
              ❤ Wishlist
            </button>

          </div>

        </div>
      </div>

      {/* Description Section */}
      <div className="mt-14">

        <h2 className="text-3xl font-bold mb-5">
          Product Description
        </h2>

        <div className="bg-base-200 rounded-2xl p-6 shadow-sm">

          <p className="leading-8 text-gray-600">
            {product.description}
          </p>

        </div>

      </div>

      {/* Product Information */}
      <div className="mt-12">

        <h2 className="text-3xl font-bold mb-5">
          Product Information
        </h2>

        <div className="overflow-x-auto rounded-xl shadow">

          <table className="table">

            <tbody>

              <tr>
                <td>ID</td>
                <td>{product.id}</td>
              </tr>

              <tr>
                <td>Category</td>
                <td>{product.category}</td>
              </tr>

              <tr>
                <td>Brand</td>
                <td>{product.brand}</td>
              </tr>

              <tr>
                <td>Condition</td>
                <td>{product.condition}</td>
              </tr>

              <tr>
                <td>Availability</td>
                <td>{product.availability}</td>
              </tr>

              <tr>
                <td>Currency</td>
                <td>{product.currency}</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

      {/* Marketplace Safety Tips */}
      <div className="mt-14">

        <div className="bg-warning/10 border border-warning rounded-2xl p-6">

          <h3 className="font-bold text-xl mb-3">
            Safety Tips
          </h3>

          <ul className="space-y-2 list-disc pl-5">

            <li>Meet the seller in a public place.</li>

            <li>Inspect the product before payment.</li>

            <li>Avoid paying in advance.</li>

            <li>Verify product condition carefully.</li>

          </ul>

        </div>

      </div>

      {/* Related Products Placeholder */}
      <div className="mt-16">

        <h2 className="text-3xl font-bold mb-6">
          Related Products
        </h2>

        <div className="rounded-2xl bg-base-200 p-10 text-center">

          <FaBoxOpen
            size={40}
            className="mx-auto mb-3"
          />

          <p>
            Related products section will be added here.
          </p>

        </div>

      </div>
    </section>
  );
}