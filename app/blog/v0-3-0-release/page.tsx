import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Download,
  CheckCircle2,
  Sparkles,
  FileText,
  Zap,
  Settings,
} from "lucide-react";
import Footer from "../../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modbus Connect v0.3.0 Release: Data Logging & Advanced Features",
  description:
    "Discover the latest features in Modbus Connect v0.3.0. File logging service, data processor integration, register configuration, Linux/macOS support, and more.",
  keywords:
    "Modbus Connect v0.3.0, release notes, data logging, Linux support, macOS DMG, industrial automation",
  alternates: {
    canonical: "https://modbusconnect.com/blog/v0-3-0-release",
  },
  openGraph: {
    title: "Modbus Connect v0.3.0 Release: Data Logging & Advanced Features",
    description:
      "File logging service, data processor integration, register configuration, and cross-platform support.",
    url: "https://modbusconnect.com/blog/v0-3-0-release",
    type: "article",
    publishedTime: "2025-11-15T00:00:00Z",
    authors: ["Crabby"],
  },
};

export default function V030Release() {
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
                November 15, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />8 min read
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Modbus Connect v0.3.0: Data Logging & Advanced Features
            </h1>
            <p className="text-xl text-gray-600">
              I'm thrilled to announce v0.3.0 with comprehensive data logging,
              advanced register configuration, cross-platform support, and
              powerful data processing capabilities.
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
                    File Logging Service with CSV, JSON, and Tab-Delimited
                    formats
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Advanced Data Processor with 8 format types
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Per-register configuration with scaling and units
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    macOS DMG installer and Linux RPM/DEB packages
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Improved modal UX and real-time logging statistics
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <div className="flex items-center mb-4">
                <FileText className="w-8 h-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">
                  File Logging Service
                </h2>
              </div>

              <p className="text-gray-700 mb-4">
                One of the most requested features is finally here. Modbus
                Connect v0.3.0 introduces a comprehensive file logging system
                that lets you automatically capture and store register data for
                analysis and compliance.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Key Features
              </h3>

              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Multiple Format Support
                  </h4>
                  <p className="text-gray-700">
                    Choose from CSV, JSON, or Tab-Delimited formats. Each format
                    is optimized for different use cases: CSV for spreadsheets,
                    JSON for APIs, Tab-Delimited for legacy systems.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Flexible Log Rotation
                  </h4>
                  <p className="text-gray-700">
                    Configure automatic log rotation: Daily (new file each day),
                    Session-Based (new file per session), Size-Based (rotate at
                    specified file size), or None (single continuous file).
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Data Logger Manager
                  </h4>
                  <p className="text-gray-700">
                    New sidebar view for managing multiple concurrent loggers.
                    Create, edit, and monitor loggers with real-time statistics
                    showing file size, error count, and current file path.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Buffered Writes
                  </h4>
                  <p className="text-gray-700">
                    Configurable auto-flush intervals for optimal performance.
                    Data is buffered in memory and written to disk at specified
                    intervals, reducing I/O overhead.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Session Integration
                  </h4>
                  <p className="text-gray-700">
                    Assign monitoring sessions to loggers for automatic data
                    logging. Toggle session logging from the monitoring view
                    header with a single click.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Maintenance Tools
                  </h4>
                  <p className="text-gray-700">
                    Built-in tools for cleaning up old log files. Automatically
                    delete logs older than a specified number of days.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 font-medium">
                  💡 Pro Tip: Use rolling files with date+time suffixes (e.g.,
                  modbus_data_20241115_184530.csv) to automatically organize
                  logs by timestamp. Perfect for long-term data collection.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">
                  Data Processor Integration
                </h2>
              </div>

              <p className="text-gray-700 mb-4">
                Advanced data formatting capabilities are now built into the
                frontend. Process and display register data in multiple formats
                with real-time conversion.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Supported Formats
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Numeric Formats
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• UInt16 (Unsigned 16-bit)</li>
                    <li>• Int16 (Signed 16-bit)</li>
                    <li>• UInt32 (Unsigned 32-bit)</li>
                    <li>• Int32 (Signed 32-bit)</li>
                    <li>• Float32 (32-bit floating point)</li>
                    <li>• Float64 (64-bit floating point)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Other Formats
                  </h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Hex (Hexadecimal)</li>
                    <li>• Binary (Binary representation)</li>
                    <li>• ASCII (Text interpretation)</li>
                    <li>• Byte Order: BigEndian/LittleEndian</li>
                    <li>• Word Order: HighFirst/LowFirst</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-700 mb-4">
                Select format per-register in the monitoring view. Processed
                values display with tooltips showing raw values for reference.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <div className="flex items-center mb-4">
                <Settings className="w-8 h-8 text-primary-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">
                  Register Configuration Modal
                </h2>
              </div>

              <p className="text-gray-700 mb-4">
                New advanced per-register settings modal for fine-tuning how
                data is displayed and processed.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Configuration Options
              </h3>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Linear Scaling
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Apply scale factor and offset to convert raw values. Perfect
                    for converting ADC readings to voltage or temperature
                    sensors to Celsius.
                  </p>
                  <div className="bg-gray-50 rounded p-3 font-mono text-sm text-gray-700">
                    Scaled Value = (Raw Value × Scale) + Offset
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Units Selection
                  </h4>
                  <p className="text-gray-700 mb-2">
                    Choose from 30+ common unit presets organized by category:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-gray-50 rounded p-3 text-sm text-gray-700">
                      <strong>Temperature:</strong> °C, °F, K
                    </div>
                    <div className="bg-gray-50 rounded p-3 text-sm text-gray-700">
                      <strong>Electrical:</strong> V, mV, A, mA, W, kW
                    </div>
                    <div className="bg-gray-50 rounded p-3 text-sm text-gray-700">
                      <strong>Pressure:</strong> bar, mbar, Pa, kPa, MPa, psi
                    </div>
                    <div className="bg-gray-50 rounded p-3 text-sm text-gray-700">
                      <strong>Frequency:</strong> Hz, kHz, MHz, rpm
                    </div>
                    <div className="bg-gray-50 rounded p-3 text-sm text-gray-700">
                      <strong>Distance:</strong> m, cm, mm, km
                    </div>
                    <div className="bg-gray-50 rounded p-3 text-sm text-gray-700">
                      <strong>Volume:</strong> L, mL
                    </div>
                    <div className="bg-gray-50 rounded p-3 text-sm text-gray-700">
                      <strong>Mass:</strong> kg, g
                    </div>
                    <div className="bg-gray-50 rounded p-3 text-sm text-gray-700">
                      <strong>Other:</strong> %
                    </div>
                  </div>
                  <p className="text-gray-700 mt-3">
                    Or enter custom units for specialized measurements.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Register Labels
                  </h4>
                  <p className="text-gray-700">
                    Add descriptive labels to registers for easy identification
                    in monitoring views.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Formula Preview
                  </h4>
                  <p className="text-gray-700">
                    See a live preview of your scaling calculation with units
                    before applying changes.
                  </p>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">
                  ✨ Visual Feedback: Configuration button (⚙️) next to format
                  dropdown highlights blue when scaling or labels are
                  configured. Scaled values with units automatically display in
                  monitoring view.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🖥️ Cross-Platform Support
              </h2>

              <p className="text-gray-700 mb-4">
                Modbus Connect is now available on Windows, macOS, and Linux!
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Windows
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Windows 7/8/10/11 (64-bit)
                  </p>
                  <p className="text-gray-600 text-xs">
                    .exe installer with automatic updates
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    macOS
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    Intel & Apple Silicon
                  </p>
                  <p className="text-gray-600 text-xs">
                    .dmg installer (unsigned, see docs for installation)
                  </p>
                </div>

                <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Linux
                  </h3>
                  <p className="text-gray-700 text-sm mb-3">
                    RPM & DEB packages
                  </p>
                  <p className="text-gray-600 text-xs">
                    Compatible with major distributions
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 font-medium">
                  📦 All installers are available on the{" "}
                  <Link
                    href="/download"
                    className="text-primary-600 hover:text-primary-700 underline"
                  >
                    download page
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🎨 UI/UX Improvements
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Improved Modal UX
                  </h3>
                  <p className="text-gray-700">
                    Modals now only close on explicit overlay click, not when
                    dragging text selection. Much better for editing long
                    configurations.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Logger Configuration Editing
                  </h3>
                  <p className="text-gray-700">
                    Edit logger settings after creation with an edit button on
                    each logger card. Change folder path, filename, format,
                    rotation policy, and buffer settings. Updates apply
                    immediately.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Folder Picker
                  </h3>
                  <p className="text-gray-700">
                    New folder picker button for easy log path selection, with
                    manual text input for power users.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Real-Time Statistics
                  </h3>
                  <p className="text-gray-700">
                    Monitor logging statistics in real-time: file size, error
                    count, and current file path.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ⚙️ Advanced Format Configurations
              </h2>

              <p className="text-gray-700 mb-4">
                Beyond the basic format selection, the register configuration
                modal supports advanced customization for specialized use cases:
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Custom Format Combinations
                  </h4>
                  <p className="text-gray-700">
                    Combine byte order (BigEndian/LittleEndian) with word order
                    (HighFirst/LowFirst) for precise control over multi-register
                    data interpretation.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Per-Register Scaling
                  </h4>
                  <p className="text-gray-700">
                    Apply linear transformations with scale factor and offset to
                    convert raw sensor values to engineering units (e.g., ADC to
                    voltage, raw counts to temperature).
                  </p>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Custom Unit Labels
                  </h4>
                  <p className="text-gray-700">
                    Define custom units beyond the 30+ presets for specialized
                    measurements. Units display automatically with scaled values
                    in the monitoring view.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Descriptive Register Labels
                  </h4>
                  <p className="text-gray-700">
                    Add meaningful names to registers for easy identification in
                    complex monitoring sessions with many data points.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Formula Preview
                  </h4>
                  <p className="text-gray-700">
                    See a live preview of your scaling calculation before
                    applying changes. Verify the transformation is correct with
                    sample values.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                🔜 Coming Soon
              </h2>

              <p className="text-gray-700 mb-4">
                We're already working on the next release with major
                improvements:
              </p>

              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">🎨</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Major UI Overhaul
                    </h3>
                    <p className="text-gray-700">
                      Comprehensive redesign of the user interface with improved
                      usability, better visual hierarchy, and modern design
                      patterns.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-3">🛠️</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Better Error Handling
                    </h3>
                    <p className="text-gray-700">
                      Localized, user-friendly error messages with actionable
                      solutions and improved diagnostics for troubleshooting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-3">✏️</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Write Operations
                    </h3>
                    <p className="text-gray-700">
                      Write values back to Modbus devices. Configure coils and
                      holding registers directly from the monitoring interface.
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
                      types. Reuse configurations across projects.
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
                      Monitor Modbus RTU devices over serial connections for
                      legacy industrial equipment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Download v0.3.0 Today
              </h2>

              <p className="text-gray-700 mb-6">
                Modbus Connect v0.3.0 is available now as a free download for
                Windows, macOS, and Linux.
              </p>

              <div className="bg-white rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  What's Included
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      File logging with multiple formats
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Advanced data processor integration
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Per-register configuration with scaling
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Cross-platform support (Windows, macOS, Linux)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      Free during beta period
                    </span>
                  </li>
                </ul>

                <Link
                  href="/download"
                  className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-medium"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download v0.3.0 Free
                </Link>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Installation Size:</strong> 2.7 MB
                </p>
                <p className="text-gray-700 text-sm mb-2">
                  <strong>Release Date:</strong> November 15, 2025
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Compatibility:</strong> Windows 7+, macOS, Linux
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Thank You!
              </h2>
              <p className="text-gray-700 mb-4">
                A huge thank you to everyone who provided feedback and feature
                requests. Your input directly shaped v0.3.0.
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
                href="/blog/v0-2-0-release"
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  Modbus Connect v0.2.0 Release
                </h4>
                <p className="text-sm text-gray-600">
                  Enhanced charting, performance improvements, and UI/UX
                  refinements.
                </p>
              </Link>
              <Link
                href="/changelog"
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  View All Releases
                </h4>
                <p className="text-sm text-gray-600">
                  Complete changelog with all version history and updates.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
