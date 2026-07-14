import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarIcon, ClockIcon, UserIcon, TagIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Sample blog post data with real Unsplash images
const blogPosts = [
  {
    id: 1,
    title: "10 Tips for Buying Used Electronics Safely",
    excerpt: "Learn how to avoid scams and get the best deals when purchasing second-hand electronics in Bangladesh.",
    category: "Buying Tips",
    author: {
      name: "Md. Rahman",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    date: "2026-07-12",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=400&fit=crop",
    slug: "tips-for-buying-used-electronics",
    tags: ["Electronics", "Safety", "Tips"],
    featured: true
  },
  {
    id: 2,
    title: "How to Determine Fair Prices for Used Items",
    excerpt: "A comprehensive guide to pricing second-hand items based on condition, age, and market demand.",
    category: "Pricing Guide",
    author: {
      name: "Taslima Akhter",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
    },
    date: "2026-07-10",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    slug: "determine-fair-prices-used-items",
    tags: ["Pricing", "Market", "Guide"],
    featured: false
  },
  {
    id: 3,
    title: "The Environmental Impact of Buying Second-Hand",
    excerpt: "Discover how choosing pre-owned items helps reduce waste and contributes to a sustainable future.",
    category: "Sustainability",
    author: {
      name: "Dr. Hasan Mahmud",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    date: "2026-07-08",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
    slug: "environmental-impact-second-hand",
    tags: ["Environment", "Sustainability", "Eco-friendly"],
    featured: false
  },
  {
    id: 4,
    title: "Essential Checklist Before Selling Your Phone",
    excerpt: "Maximize your earnings by following this complete checklist before listing your smartphone for sale.",
    category: "Selling Guide",
    author: {
      name: "Rafiqul Islam",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    date: "2026-07-06",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=400&fit=crop",
    slug: "checklist-before-selling-phone",
    tags: ["Smartphone", "Selling", "Checklist"],
    featured: false
  },
  {
    id: 5,
    title: "Top 5 Most Resellable Items in Bangladesh",
    excerpt: "From smartphones to furniture, discover which items hold their value best in the second-hand market.",
    category: "Market Trends",
    author: {
      name: "Nadia Sultana",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    },
    date: "2026-07-04",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1560221322-310d5f0411fa?w=800&h=400&fit=crop",
    slug: "most-resellable-items-bangladesh",
    tags: ["Market", "Trends", "Reselling"],
    featured: false
  },
  {
    id: 6,
    title: "Safety Tips for Meeting Buyers and Sellers",
    excerpt: "Stay safe during in-person transactions with these essential safety guidelines for both buyers and sellers.",
    category: "Safety",
    author: {
      name: "Inspector Mahbub Alam",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    date: "2026-07-02",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    slug: "safety-tips-meeting-buyers-sellers",
    tags: ["Safety", "Meeting", "Transaction"],
    featured: false
  }
];

const categories = [
  { name: "All", count: blogPosts.length },
  { name: "Buying Tips", count: blogPosts.filter(p => p.category === "Buying Tips").length },
  { name: "Selling Guide", count: blogPosts.filter(p => p.category === "Selling Guide").length },
  { name: "Pricing Guide", count: blogPosts.filter(p => p.category === "Pricing Guide").length },
  { name: "Safety", count: blogPosts.filter(p => p.category === "Safety").length },
  { name: "Sustainability", count: blogPosts.filter(p => p.category === "Sustainability").length },
  { name: "Market Trends", count: blogPosts.filter(p => p.category === "Market Trends").length }
];

const Blog = () => {
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white py-16">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                📝 SecondHand Blog
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
                Expert tips, guides, and insights for smart second-hand shopping and selling in Bangladesh
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
                <p className="text-sm text-blue-200">📊 Total Articles</p>
                <p className="text-3xl font-bold">{blogPosts.length}+</p>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 70C672 80 768 100 864 100C960 100 1056 80 1152 70C1248 60 1344 60 1392 60L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="#111827"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
                ${category.name === 'All' 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
                }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-12">
            <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 border border-gray-700">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent lg:hidden"></div>
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
                    Featured
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3 flex-wrap">
                    <span className="bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-700">
                      {featuredPost.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString('en-BD', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-gray-300 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-gray-600">
                        <Image
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{featuredPost.author.name}</p>
                        <p className="text-xs text-gray-400">{featuredPost.readTime}</p>
                      </div>
                    </div>
                    <Link 
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors bg-blue-900/30 px-4 py-2 rounded-lg border border-blue-700"
                    >
                      Read More
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-700"
            >
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent"></div>
                <div className="absolute top-3 right-3 bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-300 border border-gray-700">
                  {post.readTime}
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                  <CalendarIcon className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString('en-BD', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 hover:text-blue-400 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="text-xs text-gray-500">+{post.tags.length - 2}</span>
                  )}
                </div>
                <div className="flex items-center justify-between border-t border-gray-700 pt-3">
                  <div className="flex items-center gap-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-600">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-xs font-medium text-gray-300">{post.author.name}</span>
                  </div>
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-sm text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              📬 Never Miss a Post
            </h3>
            <p className="text-blue-100 mb-6">
              Subscribe to our newsletter and get the latest buying and selling tips delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white bg-white/90 backdrop-blur-sm"
              />
              <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
                Subscribe
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;