import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav
        className="bg-white border-b border-gray-200"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition"
            >
              <picture>
                <source
                  srcSet="/icon-40.webp 1x, /icon-60.webp 1.5x"
                  type="image/webp"
                />
                <img
                  src="/icon-40.png"
                  srcSet="/icon-40.png 1x, /icon-60.png 1.5x"
                  alt="Modbus Connect Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </picture>
              <span className="text-xl font-bold text-gray-900">
                Modbus Connect
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/#features"
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
                href="/#pricing"
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

      <main>
        {/* Features Showcase */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Features in Action
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                See how Modbus Connect makes industrial automation monitoring
                simple and powerful
              </p>
            </div>

            {/* Feature 1: Main Dashboard */}
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Intuitive Dashboard
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Everything you need in one place. Manage devices, monitor
                    sessions, and view real-time data with a clean, modern
                    interface.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Sidebar with device list and drag-and-drop reordering
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Active monitoring sessions with status indicators
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Responsive design works on desktop and tablets
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Quick access to scanner and workspace management
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image
                    src="/screenshots/main-dashboard.png"
                    alt="Modbus Connect Main Dashboard"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Feature 2: Device Scanner */}
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image
                    src="/screenshots/device-scanner.png"
                    alt="Modbus Connect Device Scanner"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Smart Device Discovery
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Automatically find all Modbus devices on your network with
                    intelligent scanning using industry-standard protocols.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Scan device IDs 1-247 with configurable timeouts
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Real-time progress tracking with status updates
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Extract device information (vendor, product code, model)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Bulk add found devices with custom names
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature 3: Live Monitoring */}
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Real-Time Monitoring
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Monitor register values in real-time with change detection,
                    custom labels, and multiple display formats.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Visual change highlighting (yellow background)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Custom address labels for better organization
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Decimal, hexadecimal, and binary display formats
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Pause/resume sessions without losing data
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image
                    src="/screenshots/live-monitoring.png"
                    alt="Modbus Connect Live Monitoring"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Feature 4: Real-Time Charts */}
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image
                    src="/screenshots/realtime-chart.png"
                    alt="Modbus Connect Real-Time Charts"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Professional Data Visualization
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Create beautiful real-time charts with up to 12 data series.
                    Perfect for trend analysis and documentation.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Up to 12 data series per chart with custom colors
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Zoom and pan controls for detailed analysis
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Pop-out windows for multi-monitor setups
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Export chart data to CSV for further analysis
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature 5: Protocol Logging */}
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Protocol-Level Debugging
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Inspect raw Modbus traffic with detailed TX/RX logging.
                    Essential for troubleshooting and protocol analysis.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Raw byte inspection with hex display
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Timestamps for every transaction
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Function code identification and error tracking
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Auto-scroll and manual navigation controls
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image
                    src="/screenshots/protocol-logs.png"
                    alt="Modbus Connect Protocol Logging"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Feature 6: Data Logger */}
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image
                    src="/screenshots/datalogger.png"
                    alt="Modbus Connect Data Logger Manager"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    File Logging Service
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Automatically log register data to files with multiple
                    formats. Perfect for long-term data collection and
                    compliance.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        CSV, JSON, and Tab-Delimited format support
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Configurable log rotation (Daily, Session, Size-based)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Multiple concurrent loggers with different configs
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Real-time statistics and maintenance tools
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Feature 7: Device View */}
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Device Configuration
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Configure device settings and start monitoring sessions with
                    an intuitive interface. Real-time latency display keeps you
                    informed.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Configure IP, port, device ID, and custom names
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Real-time network latency display
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Quick-start monitoring with register type selection
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Documentation offset support for 1-based addressing
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image
                    src="/screenshots/deviceview.png"
                    alt="Modbus Connect Device Configuration"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Feature 8: Keyboard Shortcuts */}
            <div className="mb-24">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                  <Image
                    src="/screenshots/poweruser_keyboard_shortcuts.png"
                    alt="Modbus Connect Keyboard Shortcuts"
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Power User Keyboard Shortcuts
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Work faster with comprehensive keyboard shortcuts. Navigate
                    between devices and sessions without reaching for the mouse.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Quick navigation between views (Ctrl+1-5)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Navigation history tracking for devices and sessions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Smart shortcuts modal shows current selections
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">
                        Escape key closes all modals consistently
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-primary-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Download Modbus Connect today and experience modern Modbus
                monitoring
              </p>
              <Link
                href="/download"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-medium text-lg"
              >
                Download Free Beta
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
