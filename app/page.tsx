"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Zap,
  BarChart3,
  Save,
  Search,
  Monitor,
  CheckCircle2,
  ArrowRight,
  Download,
  Mail,
  Copy,
} from "lucide-react";
import StructuredData from "./components/StructuredData";

export default function Home() {
  return (
    <div className="min-h-screen">
      <StructuredData />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a
              href="#"
              className="flex items-center space-x-3 hover:opacity-80 transition"
            >
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
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/features"
                className="text-gray-600 hover:text-primary-600 transition"
                title="Modbus Connect Features"
              >
                Features
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-primary-600 transition"
                title="Modbus Connect Blog"
              >
                Blog
              </Link>
              <Link
                href="#pricing"
                className="text-gray-600 hover:text-primary-600 transition"
                title="Modbus Connect Pricing"
              >
                Pricing
              </Link>
              <Link
                href="/download"
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition font-medium"
                title="Download Modbus Connect Free"
              >
                Download Free
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
        aria-label="Hero section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>Free During Development</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Modern Modbus TCP/IP Monitoring Made Simple
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional Modbus TCP/IP scanner and monitoring tool for
                industrial automation engineers. Discover devices, monitor in
                real-time, and analyze data—all in one intuitive application.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/download"
                  className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition font-medium text-lg group"
                  title="Download Modbus Connect for Windows"
                  aria-label="Download Modbus Connect free beta for Windows"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Free Beta
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-primary-600 hover:text-primary-600 transition font-medium text-lg"
                  title="Learn more about Modbus Connect features"
                >
                  Learn More
                </Link>
              </div>
              <p className="mt-6 text-sm text-gray-500">
                By{" "}
                <a
                  href="#contact"
                  className="font-semibold text-primary-600 hover:text-primary-700 transition"
                >
                  Crabby
                </a>{" "}
                - Made for Windows
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <Image
                  src="/screenshots/main-dashboard.png"
                  alt="Modbus Connect Main Dashboard - Device list, monitoring sessions, and real-time data"
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                  priority
                />
              </div>
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6">
                <div className="relative">
                  <div className="absolute -inset-[3px] rounded-xl overflow-hidden">
                    <div className="electric-border-wrapper absolute inset-0">
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "conic-gradient(from 0deg, rgba(250, 204, 21, 1) 0%, rgba(250, 204, 21, 0.8) 12.5%, rgba(250, 204, 21, 1) 25%, rgba(250, 204, 21, 0.8) 37.5%, rgba(250, 204, 21, 1) 50%, rgba(250, 204, 21, 0.8) 62.5%, rgba(250, 204, 21, 1) 75%, rgba(250, 204, 21, 0.8) 87.5%, rgba(250, 204, 21, 1) 100%)",
                          filter: "blur(6px)",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div className="relative bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <Zap className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xl font-bold text-gray-900">
                          Unlimited Devices
                        </p>
                        <p className="text-sm text-gray-600">Lightning Speed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 bg-gray-50"
        aria-labelledby="features-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              id="features-heading"
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Modbus Monitoring Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed for industrial automation professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Smart Device Discovery
              </h3>
              <p className="text-gray-600 mb-4">
                Automatically scan your network and discover Modbus devices
                using industry-standard protocols. Get detailed device
                information instantly.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Scan device IDs 1-247</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Configurable timeouts (1-10000ms)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Extract vendor & product info</span>
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Real-Time Monitoring
              </h3>
              <p className="text-gray-600 mb-4">
                Monitor multiple devices simultaneously with configurable
                polling intervals. Track changes in real-time with visual
                highlighting.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Multi-session monitoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>100ms to 60s polling intervals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Pause/resume sessions</span>
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Data Visualization
              </h3>
              <p className="text-gray-600 mb-4">
                Professional real-time charts with up to 12 data series.
                Multiple display formats and custom labeling for better
                analysis.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Real-time charting with zoom/pan</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Decimal, Hex, Binary formats</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Pop-out windows for multi-monitor</span>
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Save className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Workspace Management
              </h3>
              <p className="text-gray-600 mb-4">
                Save and restore complete monitoring sessions. Never lose your
                configuration or data.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Save/load workspaces</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Auto-save functionality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Export/import configurations</span>
                </li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Protocol Logging
              </h3>
              <p className="text-gray-600 mb-4">
                Inspect raw Modbus traffic with TX/RX logging. Perfect for
                debugging and analysis.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Raw byte inspection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hex display with timestamps</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Error tracking</span>
                </li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                High Performance
              </h3>
              <p className="text-gray-600 mb-4">
                Built with Rust for blazing-fast performance and minimal
                resource usage.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Rust backend for speed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Low memory footprint</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Responsive UI</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-20"
        aria-labelledby="how-it-works-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              id="how-it-works-heading"
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              How Modbus Connect Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in minutes with our intuitive workflow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Discover Devices
              </h3>
              <p className="text-gray-600">
                Run the device scanner to automatically find all Modbus devices
                on your network. Add them to your device list with custom names.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Start Monitoring
              </h3>
              <p className="text-gray-600">
                Select a device, configure register type and address range, then
                start monitoring. Track multiple devices simultaneously.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Analyze & Save
              </h3>
              <p className="text-gray-600">
                View real-time data, create charts, and save your workspace.
                Export data for documentation and reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 bg-gray-50"
        aria-labelledby="pricing-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              id="pricing-heading"
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Modbus Connect Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get full access during development. Single license for production
              use.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary-600">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Free During Development</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Single License
                </h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-bold text-gray-900">$0</span>
                  <span className="text-xl text-gray-600 ml-2">now</span>
                </div>
                <p className="text-gray-600">Pricing TBD for v1.0 release</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    All current features included
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Unlimited devices & sessions
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Free updates during beta
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Windows 7/8/10/11 (64-bit) support
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Community support</span>
                </li>
              </ul>

              <Link
                href="/download"
                className="block w-full bg-primary-600 text-white text-center px-8 py-4 rounded-lg hover:bg-primary-700 transition font-medium text-lg"
              >
                Download Free Beta
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Simplify Your Modbus Workflow?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join automation professionals who are already using Modbus Connect
          </p>
          <Link
            href="/download"
            className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-medium text-lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Now
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gray-50"
        aria-labelledby="contact-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="contact-heading"
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Contact Modbus Connect Support
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Have questions or feedback? I'd love to hear from you.
          </p>
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto border border-gray-200">
            <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4 group">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <code className="text-base text-gray-900 select-all">
                  crabby@modbusconnect.com
                </code>
              </div>
              <button
                onClick={(e) => {
                  navigator.clipboard.writeText("crabby@modbusconnect.com");
                  const btn = e.currentTarget;
                  const icon = btn.querySelector("svg");
                  if (icon) {
                    icon.classList.add("text-green-600");
                    setTimeout(() => {
                      icon.classList.remove("text-green-600");
                    }, 2000);
                  }
                }}
                className="p-2 hover:bg-gray-200 rounded-lg transition flex-shrink-0"
                title="Copy email address"
              >
                <Copy className="w-5 h-5 text-gray-600 transition" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/icon.png"
                  alt="Modbus Connect"
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
                <span className="text-white font-bold">Modbus Connect</span>
              </div>
              <p className="text-sm">
                Modern Modbus monitoring tool by Crabby, indie developer.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-white transition"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="hover:text-white transition">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/download"
                    className="hover:text-white transition"
                  >
                    Download
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="hover:text-white transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/docs" className="hover:text-white transition">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/changelog"
                    className="hover:text-white transition"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <p className="text-sm">
                Software provided as-is without warranty of any kind. Use at
                your own risk.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 Modbus Connect by Crabby. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
