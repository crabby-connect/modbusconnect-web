import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modbus Connect Blog - Industrial Automation Insights & Tutorials",
  description:
    "Learn about Modbus TCP/IP, industrial automation, SCADA systems, and PLC monitoring. Expert tutorials, guides, and industry insights for automation professionals.",
  keywords:
    "Modbus blog, industrial automation tutorials, SCADA guides, PLC monitoring tips, Modbus TCP/IP articles",
  alternates: {
    canonical: "https://modbusconnect.com/blog",
  },
};

// Blog posts data - in production, this would come from a CMS or markdown files
const blogPosts = [
  {
    id: 1,
    title:
      "Modbus TCP vs PROFINET, EtherNet/IP & OPC UA — Definitive 2025 Comparison",
    excerpt:
      "Choosing the right industrial Ethernet protocol significantly impacts machine performance, scalability, cybersecurity, vendor lock-in, and long-term maintenance. Clear breakdown of Modbus TCP, PROFINET, EtherNet/IP, and OPC UA without marketing fluff.",
    date: "2025-11-16",
    readTime: "7 min read",
    slug: "modbus-tcp-vs-profinet-ethernetip-opcua",
    category: "Technical Deep Dive",
  },
  {
    id: 2,
    title: "Modbus Connect v0.3.1 Hotfix: Bug Fixes & Stability Improvements",
    excerpt:
      "Critical hotfix release addressing connection handling, register configuration persistence, chart synchronization, and more. Recommended for all v0.3.0 users.",
    date: "2025-11-16",
    readTime: "5 min read",
    slug: "v0-3-1-release",
    category: "Product Update",
  },
  {
    id: 3,
    title: "Modbus Connect v0.3.0 Release: Data Logging & Advanced Features",
    excerpt:
      "Discover the latest features in v0.3.0: file logging service, advanced data processor, register configuration, and cross-platform support for Windows, macOS, and Linux.",
    date: "2025-11-15",
    readTime: "8 min read",
    slug: "v0-3-0-release",
    category: "Product Update",
  },
  {
    id: 3,
    title:
      "Modbus Protocol Deep Dive: Understanding Frame Structure and Implementation",
    excerpt:
      "Comprehensive technical exploration of Modbus RTU, ASCII, and TCP protocols covering frame structures, CRC/LRC algorithms, and low-level implementation details.",
    date: "2025-11-10",
    readTime: "15 min read",
    slug: "modbus-protocol-deep-dive",
    category: "Technical Deep Dive",
  },
  {
    id: 4,
    title: "Getting Started with Modbus Connect: A Complete Guide",
    excerpt:
      "Learn how to set up and use Modbus Connect for monitoring your industrial devices. Step-by-step tutorial for beginners.",
    date: "2025-11-10",
    readTime: "5 min read",
    slug: "getting-started-guide",
    category: "Tutorial",
  },
  {
    id: 5,
    title: "Understanding Modbus TCP/IP Protocol: A Beginner's Guide",
    excerpt:
      "Comprehensive introduction to Modbus TCP/IP protocol, how it works, and why it's essential for industrial automation.",
    date: "2025-11-08",
    readTime: "8 min read",
    slug: "modbus-tcp-ip-explained",
    category: "Technical",
  },
  {
    id: 6,
    title: "Modbus Connect v0.2.0 Release: What's New",
    excerpt:
      "Discover the latest features and improvements in Modbus Connect v0.2.0, including enhanced charting and performance optimizations.",
    date: "2025-11-05",
    readTime: "3 min read",
    slug: "v0-2-0-release",
    category: "Product Update",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/icon.png"
                alt="Modbus Connect Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-gray-900">
                Modbus Connect
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center text-gray-600 hover:text-primary-600 transition"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Blog Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Modbus Connect Blog
          </h1>
          <p className="text-xl text-gray-600">
            Tutorials, guides, and insights for industrial automation
            professionals
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary-600 transition"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                >
                  Read more →
                </Link>
              </article>
            ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-12 text-center">
            <p className="text-gray-600">
              More articles coming soon! Subscribe to stay updated.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
