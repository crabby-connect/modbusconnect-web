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
} from "lucide-react";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modbus Connect v0.3.1 Hotfix: Bug Fixes & Stability Improvements",
  description:
    "Modbus Connect v0.3.1 hotfix release with critical bug fixes for connection handling, register configuration persistence, chart synchronization, and more.",
  keywords:
    "Modbus Connect v0.3.1, hotfix, bug fixes, stability, connection handling, register configuration",
  alternates: {
    canonical: "https://modbusconnect.com/blog/v0-3-1-release",
  },
  openGraph: {
    title: "Modbus Connect v0.3.1 Hotfix: Bug Fixes & Stability Improvements",
    description:
      "Critical bug fixes for connection handling, register configuration, and chart synchronization.",
    url: "https://modbusconnect.com/blog/v0-3-1-release",
    type: "article",
    publishedTime: "2025-11-16T00:00:00Z",
    authors: ["Crabby"],
  },
};

export default function V031Release() {
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
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">
                Hotfix Release
              </span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                November 16, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />5 min read
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Modbus Connect v0.3.1: Hotfix & Stability
            </h1>
            <p className="text-xl text-gray-600">
              A focused hotfix release addressing critical bugs in connection
              handling, register configuration, and chart synchronization.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 shadow-sm mb-8 border border-yellow-200">
              <div className="flex items-center mb-4">
                <Bug className="w-8 h-8 text-yellow-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900 m-0">
                  What's Fixed
                </h2>
              </div>
              <ul className="space-y-2 m-0">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Modbus connection error handling (error 10053)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Register configuration persistence
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Linear scaling in MonitoringLive
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Chart popout synchronization
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Chart data overlapping between registers
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">
                  Major Fixes
                </h2>
              </div>

              <div className="space-y-4 mt-6">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Connection Error Handling (Error 10053)
                  </h4>
                  <p className="text-gray-700">
                    Fixed critical I/O error handling by detecting unhealthy
                    connections and discarding them. The application now forces
                    fresh connection creation on the next poll, preventing
                    cascading failures.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Register Configuration Persistence
                  </h4>
                  <p className="text-gray-700">
                    Fixed configurations not persisting when switching sessions.
                    Configurations are now properly loaded from the backend when
                    a session is selected, and the workspace is marked as
                    modified when configurations are saved.
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Linear Scaling in MonitoringLive
                  </h4>
                  <p className="text-gray-700">
                    Fixed scaling calculations by ensuring register format is
                    set in the backend before applying scaling configuration.
                    Scaled values now display correctly with proper units.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Chart Popout Synchronization
                  </h4>
                  <p className="text-gray-700">
                    Fixed chart popout windows not syncing historical data.
                    lastUpdateTime is now reset to include all historical data
                    when initial sync is received from the main window.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Minor Fixes & Improvements
              </h2>

              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    Fixed chart data overlapping between registers by including
                    address in duplicate detection
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    Fixed chart point disabling by updating datasets in-place
                    instead of replacing them entirely
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    Resolved all cargo clippy warnings for cleaner codebase
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    Fixed logger not creating new file when logfile is deleted
                    while logging is active
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    Fixed Create chart menu label editing by restructuring modal
                    layout
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    Fixed "Keep current devices" checkbox to be checked by
                    default (opt-out instead of opt-in)
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    Removed redundant HEX/DEC/Binary format buttons from
                    MonitoringLive and ModbusLogDialog
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    Fixed start address validation to allow address 0
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    Fixed workspace loading to restore start address and offset
                    in ModbusReader
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    Fixed DataLoggerManager logging output to include function
                    code specific register address
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    Fixed DataLoggerManager CSV output to include label field
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    Fixed TypeError when clearing workspace
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    Fixed register format not persisting in ModbusLogDialog
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    Fixed formatted register values not displaying in logging
                    output
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    Fixed scale factor and offset not getting default values
                    when enabling custom calculations
                  </p>
                </div>

                <div className="flex items-start">
                  <span className="text-primary-600 font-bold mr-3">•</span>
                  <p className="text-gray-700">
                    Fixed label not loading in RegisterConfigModal after being
                    set in MonitoringLive
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                New Features
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Documentation Offset Support
                  </h3>
                  <p className="text-gray-700">
                    Added documentation_offset field in ModbusReader to align
                    with documentation that starts at register 1 instead of 0.
                    This makes it easier to work with device documentation that
                    uses 1-based indexing.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Why This Hotfix Matters
              </h2>

              <p className="text-gray-700 mb-4">
                v0.3.1 addresses critical stability issues that could impact
                production monitoring:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-2xl mr-3">🔌</span>
                  <div>
                    <strong className="text-gray-900">
                      Reliable Connections:
                    </strong>
                    <p className="text-gray-700">
                      Better error handling prevents connection cascades and
                      ensures monitoring continues reliably.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="text-2xl mr-3">💾</span>
                  <div>
                    <strong className="text-gray-900">
                      Configuration Persistence:
                    </strong>
                    <p className="text-gray-700">
                      Your register configurations now persist correctly across
                      sessions.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="text-2xl mr-3">📊</span>
                  <div>
                    <strong className="text-gray-900">Accurate Data:</strong>
                    <p className="text-gray-700">
                      Scaling calculations and chart synchronization work
                      correctly for accurate monitoring.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <span className="text-2xl mr-3">🧹</span>
                  <div>
                    <strong className="text-gray-900">Code Quality:</strong>
                    <p className="text-gray-700">
                      All clippy warnings resolved for a cleaner, more
                      maintainable codebase.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Download v0.3.1 Today
              </h2>

              <p className="text-gray-700 mb-6">
                Modbus Connect v0.3.1 is available now as a free download for
                Windows, macOS, and Linux.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Recommended for All Users
                </h3>
                <p className="text-gray-700 mb-4">
                  If you're using v0.3.0, we recommend upgrading to v0.3.1 to
                  benefit from these critical stability improvements.
                </p>

                <Link
                  href="/download"
                  className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-medium"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download v0.3.1
                </Link>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What's Next
                </h3>
                <p className="text-gray-700">
                  We're already working on v0.4.0 with major UI improvements,
                  write operations, and Modbus RTU support. Stay tuned!
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
