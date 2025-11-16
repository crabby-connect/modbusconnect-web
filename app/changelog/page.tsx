import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Download } from "lucide-react";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modbus Connect Changelog - Version History & Release Notes",
  description:
    "Complete changelog for Modbus Connect. View all version releases, features, improvements, and bug fixes.",
  keywords: "Modbus Connect changelog, version history, release notes, updates",
  alternates: {
    canonical: "https://modbusconnect.com/changelog",
  },
  openGraph: {
    title: "Modbus Connect Changelog",
    description:
      "Complete version history and release notes for Modbus Connect.",
    url: "https://modbusconnect.com/changelog",
    type: "website",
  },
};

export default function ChangelogPage() {
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

      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Changelog</h1>
          <p className="text-xl text-gray-600">
            Complete version history and release notes for Modbus Connect
          </p>
        </div>
      </section>

      {/* Changelog */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* v0.3.1 */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8 border-l-4 border-green-500">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  v0.3.1
                </h2>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  November 16, 2025
                </div>
              </div>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium text-sm">
                Latest
              </span>
            </div>

            <div className="prose prose-sm max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                New Features
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Documentation Offset Support
                  </h4>
                  <p className="text-gray-700">
                    Added documentation_offset field in ModbusReader to align
                    with documentation that starts at register 1 instead of 0.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Major Fixes
              </h3>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Fixed linear scaling in MonitoringLive by ensuring register
                  format is set in backend before applying scaling configuration
                </li>
                <li>
                  Fixed register configuration persistence by loading
                  configurations from backend when session is selected and
                  marking workspace as modified when configurations are saved
                </li>
                <li>
                  Fixed Modbus connection error handling (error 10053) by
                  detecting I/O errors and discarding unhealthy connections,
                  forcing fresh connection creation on next poll
                </li>
                <li>
                  Fixed chart popout synchronization by resetting lastUpdateTime
                  to include all historical data when initial sync is received
                  from main window
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Minor Fixes
              </h3>

              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Fixed chart data overlapping between registers by including
                  address in duplicate detection, preventing data from different
                  registers with the same timestamp from being skipped
                </li>
                <li>
                  Fixed chart point disabling by updating datasets in-place
                  instead of replacing them entirely, which preserves Chart.js
                  internal state for disabled points
                </li>
                <li>
                  Resolved all cargo clippy warnings by removing unused
                  function, converting single-match to if statement, and
                  refactoring functions with too many arguments using parameter
                  structs
                </li>
                <li>
                  Fixed logger not creating new file when logfile is deleted
                  while logging is active by checking if file exists before
                  writing and recreating it if necessary
                </li>
                <li>
                  Fixed Create chart menu label editing by restructuring the
                  modal layout to prevent button click handlers from blocking
                  input field interactions
                </li>
                <li>
                  Fixed "Keep current devices" checkbox in NewWorkspaceModal to
                  be checked by default (opt-out instead of opt-in)
                </li>
                <li>
                  Removed redundant HEX/DEC/Binary format buttons from
                  MonitoringLive and ModbusLogDialog (format selection is now
                  handled through register configuration)
                </li>
                <li>
                  Fixed start address validation in ModbusReader to allow
                  address 0 (was incorrectly treating 0 as falsy)
                </li>
                <li>
                  Fixed workspace loading to restore start address and offset in
                  ModbusReader by saving and loading device formState in
                  frontend and backend
                </li>
                <li>
                  Fixed DataLoggerManager logging output to include function
                  code specific register address (e.g., 40001 for holding
                  registers) by adding register_type to LogEntry and calculating
                  Modbus address with proper offset
                </li>
                <li>
                  Fixed DataLoggerManager CSV output to include label field by
                  adding Label column to header, label value to each row, and
                  passing address labels from MonitoringLive to logging service
                </li>
                <li>
                  Fixed TypeError when clearing workspace by importing
                  selectedDevice and currentMonitoringSessionId at module level
                  instead of using dynamic import
                </li>
                <li>
                  Fixed register format not persisting in ModbusLogDialog by
                  passing registerFormats and processedValues props from
                  MonitoringLive
                </li>
                <li>
                  Fixed formatted register values not displaying in logging
                  output by using processed values in ModbusLogDialog preview
                  mode
                </li>
                <li>
                  Fixed scale factor and offset not getting default values when
                  enabling custom calculations in RegisterConfigModal for the
                  first time
                </li>
                <li>
                  Fixed label not loading in RegisterConfigModal after being set
                  in MonitoringLive by reading directly from addressLabels store
                  instead of trying to load from backend
                </li>
              </ul>

              <div className="mt-6 flex gap-4">
                <Link
                  href="/download"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </Link>
              </div>
            </div>
          </div>

          {/* v0.3.0 */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8 border-l-4 border-blue-500">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  v0.3.0
                </h2>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  November 15, 2025
                </div>
              </div>
            </div>

            <div className="prose prose-sm max-w-none">
              <p className="text-sm text-gray-600 mb-4">
                This release introduced major features including file logging
                service integration, data processor integration, and register
                configuration with linear scaling.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                New Features
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Mac OS X DMG Installer
                  </h4>
                  <p className="text-gray-700">
                    Added a DMG file for Mac OS X with support for both Intel
                    and Apple Silicon architectures.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Linux RPM + DEB Files
                  </h4>
                  <p className="text-gray-700">
                    Added Linux distribution packages for RPM and DEB-based
                    systems.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    File Logging Service Integration
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>CSV, JSON, and Tab-Delimited format support</li>
                    <li>Data Logger Manager view accessible from sidebar</li>
                    <li>
                      Create multiple loggers with different configurations
                    </li>
                    <li>
                      Configurable log rotation (Daily, Session-Based,
                      Size-Based, None)
                    </li>
                    <li>
                      Rolling files automatically named with date+time suffix
                    </li>
                    <li>
                      Assign monitoring sessions to loggers for automatic data
                      logging
                    </li>
                    <li>
                      Real-time logging statistics (file size, error count,
                      current file path)
                    </li>
                    <li>Session logging toggle in monitoring view header</li>
                    <li>
                      Buffered writes with configurable auto-flush intervals
                    </li>
                    <li>Maintenance tools for cleaning up old log files</li>
                    <li>Multiple concurrent loggers support</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Logger Configuration Editing
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      Edit button on each logger card to modify configuration
                    </li>
                    <li>
                      Change folder path, filename, format, rotation policy, and
                      buffer settings
                    </li>
                    <li>Updates applied immediately to the logger</li>
                    <li>
                      Folder picker button for easy log path selection (with
                      manual text input for power users)
                    </li>
                    <li>
                      Custom filename configuration (separate from folder path)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Data Processor Integration
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      Per-register format selection (UInt16, Int16, UInt32,
                      Int32, Float32, Float64, Hex, Binary, ASCII)
                    </li>
                    <li>
                      Format dropdown in monitoring view for each register
                    </li>
                    <li>
                      Real-time value formatting using backend data processor
                    </li>
                    <li>
                      Processed values displayed with tooltips showing raw
                      values
                    </li>
                    <li>
                      Configurable byte order (BigEndian/LittleEndian) and word
                      order (HighFirst/LowFirst)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Register Configuration Modal
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>
                      Linear scaling with scale factor and offset (e.g., convert
                      ADC values to voltage)
                    </li>
                    <li>
                      Units dropdown with 30+ common presets organized by
                      category
                    </li>
                    <li>Custom units input for specialized measurements</li>
                    <li>Register labels for easy identification</li>
                    <li>
                      Formula preview showing scaling calculation with units
                    </li>
                    <li>
                      Configuration button (⚙️) next to format dropdown that
                      highlights blue when scaling or labels are configured
                    </li>
                    <li>
                      Scaled values with units automatically displayed in
                      monitoring view
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Improved Modal UX
                  </h4>
                  <p className="text-gray-700">
                    Modals now only close on explicit overlay click, not when
                    dragging text selection.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <Link
                  href="/blog/v0-3-0-release"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Read full release notes →
                </Link>
                <Link
                  href="/download"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </Link>
              </div>
            </div>
          </div>

          {/* v0.2.0 */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8 border-l-4 border-gray-300">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  v0.2.0
                </h2>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  November 5, 2025
                </div>
              </div>
            </div>

            <div className="prose prose-sm max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                New Features
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Enhanced Real-Time Charting
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Support for up to 12 data series (previously 6)</li>
                    <li>3x faster chart rendering with smoother animations</li>
                    <li>
                      Improved zoom & pan controls with mouse wheel support
                    </li>
                    <li>Custom series colors</li>
                    <li>Export charts as PNG images</li>
                    <li>Auto-scale toggle for dynamic Y-axis adjustment</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Performance Improvements
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>50% faster device scanning</li>
                    <li>30% lower memory usage</li>
                    <li>3x faster chart rendering</li>
                    <li>100ms minimum polling interval support</li>
                    <li>40% reduced startup time</li>
                    <li>Upgraded to Tauri 2.0</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    UI/UX Improvements
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Visual value changes with green flash on updates</li>
                    <li>
                      Improved device list with color-coded connection status
                    </li>
                    <li>Better error messages with suggested solutions</li>
                    <li>Dark mode refinements</li>
                    <li>New keyboard shortcuts (Ctrl+N, Ctrl+S, Ctrl+D, F5)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Bug Fixes
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Fixed crash with very short timeout values</li>
                    <li>Resolved chart freezing after extended monitoring</li>
                    <li>Fixed workspace loading with special characters</li>
                    <li>Corrected register address calculations</li>
                    <li>Fixed memory leak in protocol logging</li>
                    <li>Resolved UI glitches on high-DPI displays</li>
                    <li>Fixed pop-out chart window restoration</li>
                    <li>Corrected timezone handling in data export</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex gap-4">
                <Link
                  href="/blog/v0-2-0-release"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Read full release notes →
                </Link>
              </div>
            </div>
          </div>

          {/* v0.1.0 */}
          <div className="bg-white rounded-xl p-8 shadow-sm border-l-4 border-gray-300">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  v0.1.0
                </h2>
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  Initial Release
                </div>
              </div>
            </div>

            <div className="prose prose-sm max-w-none">
              <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
                Features
              </h3>

              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Device Scanner - Automatic network device discovery</li>
                <li>Real-Time Monitoring - Multi-session device monitoring</li>
                <li>
                  Data Visualization - Real-time charts with up to 6 series
                </li>
                <li>Workspace Management - Save and restore sessions</li>
                <li>Protocol Logging - TX/RX traffic inspection</li>
                <li>All Register Types - Coils, Discrete, Holding, Input</li>
                <li>Windows 7/8/10/11 support (64-bit)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Download the latest version of Modbus Connect today.
          </p>
          <Link
            href="/download"
            className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-medium"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Now
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
