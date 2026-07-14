import React from 'react';
import Link from 'next/link';
import { CalendarIcon, UserIcon, TagIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

// Sample post data - in real project, fetch from API
const getPostData = (slug: string) => {
  const posts = {
    'tips-for-buying-used-electronics': {
      title: "10 Tips for Buying Used Electronics Safely",
      content: `
        <p>Buying used electronics can save you a lot of money, but it also comes with risks. Here are 10 essential tips to ensure you get a great deal without getting scammed.</p>
        
        <h2>1. Research Before You Buy</h2>
        <p>Always research the market price of the item you're interested in. Check multiple sources to understand the fair price range.</p>
        
        <h2>2. Check the IMEI/Serial Number</h2>
        <p>For phones and electronics, always verify the IMEI or serial number to ensure it's not stolen or blacklisted.</p>
        
        <h2>3. Test Everything</h2>
        <p>Before paying, test all features including camera, speakers, ports, and buttons. Don't rush the testing process.</p>
        
        <h2>4. Meet in Safe Locations</h2>
        <p>Always meet in public, well-lit places. Busy shopping malls or coffee shops are ideal for transactions.</p>
        
        <h2>5. Bring a Friend</h2>
        <p>Never go alone to a meeting. Bring a friend or family member for safety and a second opinion.</p>
      `,
      author: "Md. Rahman",
      date: "2026-07-12",
      readTime: "5 min read",
      category: "Buying Tips",
      tags: ["Electronics", "Safety", "Tips"]
    }
  };
  return posts[slug as keyof typeof posts] || null;
};

const BlogPostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = getPostData(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-6">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="text-blue-400 hover:text-blue-300 font-medium">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Blog
        </Link>

        {/* Post Header */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
          <div className="relative h-80 bg-gradient-to-r from-blue-600 to-purple-700 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative text-white text-center">
              <span className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 px-4">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
                <span className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString('en-BD', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <UserIcon className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="p-8 md:p-12">
            <div className="prose prose-invert prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="flex flex-wrap items-center gap-3">
                <TagIcon className="w-5 h-5 text-gray-400" />
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-gray-600 transition-colors cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-400">Share this post:</span>
                  <div className="flex gap-2">
                    <button className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"/>
                      </svg>
                    </button>
                    <button className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.113-2.672 13.94 13.94 0 002.383-7.82c0-.27-.008-.54-.024-.807A10.016 10.016 0 0024 4.57z"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <Link href="/blog" className="text-sm text-blue-400 hover:text-blue-300">
                  ← Read more articles
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-white mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-700">
              <div className="p-6">
                <span className="text-xs bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full">Buying Tips</span>
                <h4 className="text-lg font-semibold text-white mt-3 mb-2">
                  How to Spot Counterfeit Products
                </h4>
                <p className="text-sm text-gray-400">Learn the tell-tale signs of fake electronics and luxury items.</p>
                <Link href="#" className="text-sm text-blue-400 hover:text-blue-300 mt-3 inline-block">
                  Read More →
                </Link>
              </div>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-700">
              <div className="p-6">
                <span className="text-xs bg-green-900/50 text-green-300 px-3 py-1 rounded-full">Selling Guide</span>
                <h4 className="text-lg font-semibold text-white mt-3 mb-2">
                  Best Time to Sell Used Items
                </h4>
                <p className="text-sm text-gray-400">Learn when to list your items for maximum profit and quick sales.</p>
                <Link href="#" className="text-sm text-blue-400 hover:text-blue-300 mt-3 inline-block">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;