import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Download,
  CheckCircle2,
  Sparkles,
  Bug,
  Zap,
  Palette,
  Layout,
  Keyboard,
} from "lucide-react";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modbus Connect v0.4.0: Complete UI Redesign & Modern Experience",
  description:
    "Modbus Connect v0.4.0 brings a complete UI redesign with modern dark theme, improved navigation, keyboard shortcuts, and dozens of bug fixes for a polished experience.",
  keywords:
    "Modbus Connect v0.4.0, UI redesign, dark theme, keyboard shortcuts, modern interface, industrial automation",
  alternates: {
    canonical: "https://modbusconnect.com/blog/v0-4-0-release",
  },
  openGraph: {
    title: "Modbus Connect v0.4.0: Complete UI Redesign & Modern Experience",
    description:
      "Complete UI redesign with modern dark theme, improved navigation, and keyboard shortcuts.",
    url: "https://modbusconnect.com/blog/v0-4-0-release",
    type: "article",
    publishedTime: "2025-11-27T00:00:00Z",
    authors: ["Crabby"],
  },
};

export default function V040Release() {
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
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                Major Release
              </span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                November 27, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />8 min read
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Modbus Connect v0.4.0: Complete UI Redesign
            </h1>
            <p className="text-xl text-gray-600">
              A ground-up redesign bringing a modern dark theme, improved
              navigation, keyboard shortcuts, and a polished user experience
              across every component.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 shadow-sm mb-8 border border-purple-200">
              <div className="flex items-center mb-4">
                <Palette className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  What's New in v0.4.0
                </h2>
              </div>
              <ul className="space-y-2 m-0">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Complete UI redesign with modern dark theme
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    New onboarding experience with 3-card action layout
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Enhanced keyboard navigation with history tracking
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Real-time device latency display in sidebar
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Green animated spinner for active monitoring sessions
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <div className="flex items-center mb-4">
                <Layout className="w-8 h-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">
                  Complete UI Redesign
                </h2>
              </div>

              <p className="text-gray-700 mb-6">
                Every major component has been redesigned from the ground up
                with a modern dark theme, improved visual hierarchy, and
                consistent styling throughout the application.
              </p>

              <div className="space-y-4 mt-6">
                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    New Onboarding View
                  </h4>
                  <p className="text-gray-700">
                    A fresh 3-card action layout welcomes you with quick access
                    to Scan Network, Add Device, and Open Workspace — getting
                    you started faster than ever.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Redesigned Sidebar
                  </h4>
                  <p className="text-gray-700">
                    Improved layout with multi-level dropdown menu, device
                    latency display that auto-updates every 5 seconds, and green
                    animated spinners for active monitoring sessions.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Modern Component Styling
                  </h4>
                  <p className="text-gray-700">
                    DeviceList, MonitoringList, ModbusReader, MonitoringLive,
                    and Device Scanner all feature modern card-based layouts
                    with improved visual hierarchy and better interactions.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Enhanced Dark Theme
                  </h4>
                  <p className="text-gray-700">
                    More vibrant and saturated colors with better contrast.
                    Updated color palette includes new success-foreground and
                    warning-foreground tokens for improved visual feedback.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Consistent Modal Design
                  </h4>
                  <p className="text-gray-700">
                    All modal dialogs now feature dark mode support, blurry
                    backdrop effects, and consistent button styling across the
                    entire application.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <div className="flex items-center mb-4">
                <Keyboard className="w-8 h-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">
                  Keyboard Navigation & UX
                </h2>
              </div>

              <div className="space-y-4 mt-6">
                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    <strong>Navigation History:</strong> Ctrl+2 and Ctrl+3 now
                    track previous device and session selections for quick
                    switching
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    <strong>Smart Shortcuts Modal:</strong> Shows current
                    device/session selections and greys out unavailable
                    shortcuts
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    <strong>Escape Key Support:</strong> All modals now close
                    with Escape key via global window keydown listeners
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    <strong>Automatic Cleanup:</strong> Navigation history is
                    automatically cleaned up when devices or sessions are
                    deleted
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    <strong>Persistent Chart State:</strong> Chart visibility
                    preference now persists across view navigation per session
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">
                  Major Fixes
                </h2>
              </div>

              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">✓</span>
                  <p className="text-gray-700">
                    Device scanner now shows TCP connection errors properly
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">✓</span>
                  <p className="text-gray-700">
                    Ping mechanism starts correctly when devices are added from
                    scanner
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">✓</span>
                  <p className="text-gray-700">
                    Session logging preserved when resuming paused sessions
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">✓</span>
                  <p className="text-gray-700">
                    Chart popout data synchronization with batched updates
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">✓</span>
                  <p className="text-gray-700">
                    Centralized device ping management eliminates duplicate
                    operations
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">✓</span>
                  <p className="text-gray-700">
                    Improved responsive design for mobile, tablet, and desktop
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-green-500 font-bold mr-3">✓</span>
                  <p className="text-gray-700">
                    Better accessibility with improved focus states and keyboard
                    navigation
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Minor Fixes & Polish
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    • Fixed top bar labels cropping on small windows
                  </p>
                  <p className="text-sm text-gray-700">
                    • Added proper delete confirmation modals
                  </p>
                  <p className="text-sm text-gray-700">
                    • Fixed z-index layering for modals and menus
                  </p>
                  <p className="text-sm text-gray-700">
                    • Improved communication log modal layout
                  </p>
                  <p className="text-sm text-gray-700">
                    • Fixed Device Scanner "Add Device" button
                  </p>
                  <p className="text-sm text-gray-700">
                    • Added device name input in scanner cards
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    • Fixed workspace save with logger configs
                  </p>
                  <p className="text-sm text-gray-700">
                    • Fixed chart timestamp synchronization
                  </p>
                  <p className="text-sm text-gray-700">
                    • Restored documentation offset in ModbusReader
                  </p>
                  <p className="text-sm text-gray-700">
                    • Added edit device settings modal
                  </p>
                  <p className="text-sm text-gray-700">
                    • Migrated to Tailwind v4 CSS configuration
                  </p>
                  <p className="text-sm text-gray-700">
                    • Updated to lucide-svelte icons throughout
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why This Release Matters
              </h2>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🎨</span>
                  <div>
                    <strong className="text-gray-900">
                      Modern Experience:
                    </strong>
                    <p className="text-gray-700">
                      The complete redesign brings Modbus Connect in line with
                      modern application standards while maintaining the
                      functionality you rely on.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="text-2xl mr-3">⌨️</span>
                  <div>
                    <strong className="text-gray-900">
                      Power User Features:
                    </strong>
                    <p className="text-gray-700">
                      Enhanced keyboard navigation with history tracking lets
                      you work faster without reaching for the mouse.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="text-2xl mr-3">📊</span>
                  <div>
                    <strong className="text-gray-900">
                      Better Visibility:
                    </strong>
                    <p className="text-gray-700">
                      Real-time latency display and animated session indicators
                      give you instant insight into your device status.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="text-2xl mr-3">🔧</span>
                  <div>
                    <strong className="text-gray-900">Stability:</strong>
                    <p className="text-gray-700">
                      Dozens of bug fixes ensure a smoother, more reliable
                      experience across all features.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Download v0.4.0 Today
              </h2>

              <p className="text-gray-700 mb-6">
                Modbus Connect v0.4.0 is available now as a free download for
                Windows, macOS, and Linux.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Recommended for All Users
                </h3>
                <p className="text-gray-700 mb-4">
                  This release brings significant improvements to the user
                  experience. We recommend all users upgrade to v0.4.0.
                </p>

                <Link
                  href="/download"
                  className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-medium"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download v0.4.0
                </Link>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What's Next
                </h3>
                <p className="text-gray-700">
                  We're continuing to work on write operations, Modbus RTU
                  support, and additional features. Stay tuned for v0.5.0!
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
