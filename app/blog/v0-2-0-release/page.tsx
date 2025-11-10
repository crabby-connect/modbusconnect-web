import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Download,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modbus Connect v0.2.0 Release: What's New | Product Update",
  description:
    "Discover the latest features and improvements in Modbus Connect v0.2.0. Enhanced charting, performance optimizations, improved UI, and more for better Modbus device monitoring.",
  keywords:
    "Modbus Connect update, v0.2.0 release notes, Modbus software update, new features, industrial automation software",
  alternates: {
    canonical: "https://modbusconnect.com/blog/v0-2-0-release",
  },
  openGraph: {
    title: "Modbus Connect v0.2.0 Release: What's New",
    description:
      "Enhanced charting, performance optimizations, and improved UI in the latest Modbus Connect release.",
    url: "https://modbusconnect.com/blog/v0-2-0-release",
    type: "article",
    publishedTime: "2025-11-05T00:00:00Z",
    authors: ["Crabby"],
  },
};

export default function V020Release() {
  return (
    <div className="min-h-screen bg-gray-50">
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
              href="/blog"
              className="flex items-center text-gray-600 hover:text-primary-600 transition"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </nav>

      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                Product Update
              </span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                November 5, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />3 min read
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Modbus Connect v0.2.0: What's New
            </h1>
            <p className="text-xl text-gray-600">
              We're excited to announce the release of Modbus Connect v0.2.0!
              This update brings significant improvements to charting,
              performance, and user experience.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-8 shadow-sm mb-8 border border-primary-200">
              <div className="flex items-center mb-4">
                <Sparkles className="w-8 h-8 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  Release Highlights
                </h2>
              </div>
              <ul className="space-y-2 m-0">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Enhanced real-time charting with up to 12 data series
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    50% faster device scanning performance
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Improved UI with better visual feedback
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Bug fixes and stability improvements
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🎨 Enhanced Charting Capabilities
              </h2>

              <p className="text-gray-700 mb-4">
                The biggest improvement in v0.2.0 is our completely redesigned
                charting system. We've listened to your feedback and made data
                visualization more powerful and intuitive.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                What's New in Charts
              </h3>

              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Up to 12 Data Series
                  </h4>
                  <p className="text-gray-700">
                    Previously limited to 6 series, you can now plot up to 12
                    registers simultaneously. Perfect for monitoring complex
                    systems with multiple sensors.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Improved Performance
                  </h4>
                  <p className="text-gray-700">
                    Charts now render 3x faster with smoother animations, even
                    when monitoring at high polling rates (100ms intervals).
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Better Zoom & Pan
                  </h4>
                  <p className="text-gray-700">
                    Enhanced zoom controls with mouse wheel support and improved
                    pan gestures. Analyzing historical data is now much easier.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Custom Series Colors
                  </h4>
                  <p className="text-gray-700">
                    Choose custom colors for each data series to match your
                    preferences or company branding.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Export Chart Images
                  </h4>
                  <p className="text-gray-700">
                    New feature: Export charts as PNG images for reports and
                    documentation. Right-click any chart to save.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 font-medium">
                  💡 Pro Tip: Use the new "Auto-scale" toggle to automatically
                  adjust the Y-axis range based on your data. Great for
                  monitoring values that change dramatically over time.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ⚡ Performance Improvements
              </h2>

              <p className="text-gray-700 mb-4">
                We've optimized the core engine for better performance across
                the board.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                  <div className="text-4xl font-bold text-green-600 mb-2">
                    50%
                  </div>
                  <p className="text-gray-900 font-semibold mb-1">
                    Faster Device Scanning
                  </p>
                  <p className="text-gray-600 text-sm">
                    Scan 247 device IDs in half the time with improved parallel
                    processing.
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    30%
                  </div>
                  <p className="text-gray-900 font-semibold mb-1">
                    Lower Memory Usage
                  </p>
                  <p className="text-gray-600 text-sm">
                    Optimized data structures reduce memory footprint,
                    especially with multiple sessions.
                  </p>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                  <div className="text-4xl font-bold text-purple-600 mb-2">
                    3x
                  </div>
                  <p className="text-gray-900 font-semibold mb-1">
                    Faster Chart Rendering
                  </p>
                  <p className="text-gray-600 text-sm">
                    Smoother real-time updates with optimized rendering
                    pipeline.
                  </p>
                </div>

                <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
                  <div className="text-4xl font-bold text-yellow-600 mb-2">
                    100ms
                  </div>
                  <p className="text-gray-900 font-semibold mb-1">
                    Minimum Polling Interval
                  </p>
                  <p className="text-gray-600 text-sm">
                    Now supports ultra-fast polling for time-critical
                    applications.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Under the Hood
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Upgraded to Tauri 2.0 for better native performance</li>
                <li>
                  • Optimized Modbus protocol handling with connection pooling
                </li>
                <li>• Improved error recovery and retry logic</li>
                <li>• Better thread management for concurrent operations</li>
                <li>• Reduced startup time by 40%</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ✨ UI/UX Improvements
              </h2>

              <p className="text-gray-700 mb-4">
                We've refined the user interface based on community feedback to
                make Modbus Connect more intuitive and pleasant to use.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Visual Value Changes
                  </h3>
                  <p className="text-gray-700">
                    Register values now flash green when they change, making it
                    easy to spot updates in real-time monitoring sessions. You
                    can disable this in settings if you prefer.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Improved Device List
                  </h3>
                  <p className="text-gray-700">
                    The device list now shows connection status with color-coded
                    indicators (green = connected, red = offline, yellow =
                    connecting). Hover over any device to see detailed
                    information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Better Error Messages
                  </h3>
                  <p className="text-gray-700">
                    Error messages are now more descriptive and include
                    suggested solutions. No more cryptic error codes!
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Dark Mode Refinements
                  </h3>
                  <p className="text-gray-700">
                    Improved contrast and readability in dark mode. Charts are
                    now easier to read with optimized color schemes.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Keyboard Shortcuts
                  </h3>
                  <p className="text-gray-700">
                    New keyboard shortcuts for common actions: Ctrl+N (new
                    session), Ctrl+S (save workspace), Ctrl+D (device scanner),
                    F5 (refresh). Press Ctrl+? to see all shortcuts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🐛 Bug Fixes
              </h2>

              <p className="text-gray-700 mb-4">
                We've squashed numerous bugs reported by our beta testers. Thank
                you for your feedback!
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>
                  • Fixed crash when scanning devices with very short timeouts
                </li>
                <li>
                  • Resolved issue where charts would freeze after extended
                  monitoring
                </li>
                <li>
                  • Fixed workspace loading error with special characters in
                  device names
                </li>
                <li>
                  • Corrected register address calculation for certain edge
                  cases
                </li>
                <li>• Fixed memory leak in protocol logging feature</li>
                <li>• Resolved UI glitches on high-DPI displays</li>
                <li>
                  • Fixed issue where pop-out chart windows wouldn't restore
                  properly
                </li>
                <li>• Corrected timezone handling in data export</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🔜 Coming Soon
              </h2>

              <p className="text-gray-700 mb-4">
                We're already working on the next release! Here's a sneak peek
                at what's coming:
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">📊</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Data Logging
                    </h3>
                    <p className="text-gray-700">
                      Automatically log monitoring data to CSV files for
                      long-term analysis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-3">🔔</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Alarms & Notifications
                    </h3>
                    <p className="text-gray-700">
                      Set up alerts when values exceed thresholds or devices go
                      offline.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-3">📝</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Register Templates
                    </h3>
                    <p className="text-gray-700">
                      Save and share register configurations for common device
                      types.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-3">🌐</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Modbus RTU Support
                    </h3>
                    <p className="text-gray-700">
                      Monitor Modbus RTU devices over serial connections.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 font-medium">
                  💬 Have a feature request?{" "}
                  <Link
                    href="/#contact"
                    className="text-primary-600 hover:text-primary-700 underline"
                  >
                    Let us know!
                  </Link>{" "}
                  We love hearing from our users.
                </p>
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Download v0.2.0 Today
              </h2>

              <p className="text-gray-700 mb-6">
                Modbus Connect v0.2.0 is available now as a free download. If
                you're already using Modbus Connect, the update will be
                automatically suggested when you launch the app.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What's Included
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      All features mentioned above
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Free during beta period
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Automatic updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Windows 7/8/10/11 support
                    </span>
                  </li>
                </ul>

                <Link
                  href="/download"
                  className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-medium"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download v0.2.0 Free
                </Link>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Installation Size:</strong> 2.7 MB
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Release Date:</strong> November 5, 2025
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Compatibility:</strong> Windows 7, 8, 10, 11 (64-bit)
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Thank You!
              </h2>
              <p className="text-gray-700 mb-4">
                A huge thank you to everyone who provided feedback during the
                beta period. Your suggestions and bug reports have been
                invaluable in making Modbus Connect better.
              </p>
              <p className="text-gray-700">
                Keep the feedback coming! Reach out via{" "}
                <Link
                  href="/#contact"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  email
                </Link>{" "}
                or join our community discussions.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Related Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blog/getting-started-guide"
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  Getting Started with Modbus Connect
                </h4>
                <p className="text-sm text-gray-600">
                  New to Modbus Connect? Learn how to set up and start
                  monitoring your devices.
                </p>
              </Link>
              <Link
                href="/blog/modbus-tcp-ip-explained"
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  Understanding Modbus TCP/IP
                </h4>
                <p className="text-sm text-gray-600">
                  Learn the fundamentals of the Modbus TCP/IP protocol.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
