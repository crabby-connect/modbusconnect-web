import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Download,
  CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Getting Started with Modbus Connect: Complete Setup Guide | Modbus Connect Blog",
  description:
    "Learn how to set up and use Modbus Connect for monitoring your industrial devices. Step-by-step tutorial covering installation, device discovery, and real-time monitoring for beginners.",
  keywords:
    "Modbus Connect tutorial, Modbus monitoring setup, industrial device monitoring, Modbus scanner guide, SCADA setup tutorial, PLC monitoring guide",
  alternates: {
    canonical: "https://modbusconnect.com/blog/getting-started-guide",
  },
  openGraph: {
    title: "Getting Started with Modbus Connect: Complete Setup Guide",
    description:
      "Step-by-step tutorial for setting up Modbus Connect and monitoring your industrial devices. Perfect for beginners.",
    url: "https://modbusconnect.com/blog/getting-started-guide",
    type: "article",
    publishedTime: "2025-11-10T00:00:00Z",
    authors: ["Crabby"],
  },
};

export default function GettingStartedGuide() {
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
              href="/blog"
              className="flex items-center text-gray-600 hover:text-primary-600 transition"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </nav>

      {/* Article */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                Tutorial
              </span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                November 10, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />5 min read
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Getting Started with Modbus Connect: A Complete Guide
            </h1>
            <p className="text-xl text-gray-600">
              Learn how to set up and use Modbus Connect for monitoring your
              industrial devices. This step-by-step tutorial will have you up
              and running in minutes.
            </p>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Are you looking for a simple way to monitor your Modbus TCP/IP
                devices? Whether you're an automation engineer, technician, or
                just getting started with industrial protocols, Modbus Connect
                makes device monitoring straightforward and efficient.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In this guide, we'll walk through everything from installation
                to your first monitoring session. By the end, you'll be
                confidently monitoring multiple Modbus devices in real-time.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Step 1: Download and Install Modbus Connect
              </h2>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                System Requirements
              </h3>
              <p className="text-gray-700 mb-4">
                Before we begin, make sure your system meets these minimal
                requirements:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Windows 7, 8, 10, or 11 (64-bit)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    2 GB RAM (4 GB recommended)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">50 MB free disk space</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Network connection to Modbus devices
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Installation Steps
              </h3>
              <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
                <li>
                  <Link
                    href="/download"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Download the latest version
                  </Link>{" "}
                  of Modbus Connect (currently v0.2.0-beta)
                </li>
                <li>
                  Run the installer file (Modbus Connect_0.2.0_x64-setup.exe)
                </li>
                <li>
                  Follow the installation wizard - it takes less than a minute
                </li>
                <li>
                  Launch Modbus Connect from your Start menu or desktop shortcut
                </li>
              </ol>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">
                  ✨ Pro Tip: The entire application is only 2.7 MB - no bloat,
                  just performance!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Step 2: Discover Your Modbus Devices
              </h2>

              <p className="text-gray-700 mb-4">
                Once Modbus Connect is running, the first thing you'll want to
                do is discover devices on your network. The built-in device
                scanner makes this incredibly easy.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Using the Device Scanner
              </h3>
              <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
                <li>Click the "Device Scanner" button in the main toolbar</li>
                <li>Enter your device's IP address (e.g., 192.168.1.100)</li>
                <li>
                  Configure scan settings:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>
                      Device ID range: 1-247 (or narrow it down if you know the
                      range)
                    </li>
                    <li>Timeout: 1000ms is a good starting point</li>
                    <li>Port: 502 (standard Modbus TCP port)</li>
                  </ul>
                </li>
                <li>Click "Start Scan" and wait for results</li>
              </ol>

              <p className="text-gray-700 mb-4">
                The scanner will automatically detect active Modbus devices and
                extract vendor information when available. Found devices appear
                in a list with their device ID, response time, and any
                identification data.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Adding Devices to Your List
              </h3>
              <p className="text-gray-700 mb-4">
                Once you've found your devices:
              </p>
              <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                <li>Select a discovered device from the scan results</li>
                <li>Click "Add to Device List"</li>
                <li>
                  Give it a friendly name (e.g., "Temperature Sensor 1" or "Main
                  PLC")
                </li>
                <li>Save the device</li>
              </ol>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 font-medium">
                  💡 Tip: Use descriptive names for your devices. "Warehouse
                  Temp Sensor" is much better than "Device 5" when you're
                  monitoring dozens of devices!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Step 3: Create Your First Monitoring Session
              </h2>

              <p className="text-gray-700 mb-4">
                Now that you have devices in your list, let's start monitoring
                them in real-time.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Starting a Monitoring Session
              </h3>
              <ol className="list-decimal list-inside space-y-3 mb-6 text-gray-700">
                <li>Select a device from your device list</li>
                <li>Click "New Monitoring Session"</li>
                <li>
                  Configure the session parameters:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>
                      <strong>Register Type:</strong> Choose from Coils,
                      Discrete Inputs, Holding Registers, or Input Registers
                    </li>
                    <li>
                      <strong>Starting Address:</strong> The first register to
                      monitor (e.g., 40001)
                    </li>
                    <li>
                      <strong>Number of Registers:</strong> How many consecutive
                      registers to read
                    </li>
                    <li>
                      <strong>Polling Interval:</strong> How often to read
                      (100ms to 60s)
                    </li>
                  </ul>
                </li>
                <li>Click "Start Monitoring"</li>
              </ol>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Understanding Register Types
              </h3>
              <div className="space-y-3 mb-6">
                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="font-semibold text-gray-900">
                    Holding Registers (40001-49999)
                  </p>
                  <p className="text-gray-600 text-sm">
                    Read/write 16-bit values. Use for configuration and
                    setpoints.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-semibold text-gray-900">
                    Input Registers (30001-39999)
                  </p>
                  <p className="text-gray-600 text-sm">
                    Read-only 16-bit values. Use for sensor readings.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-semibold text-gray-900">
                    Coils (00001-09999)
                  </p>
                  <p className="text-gray-600 text-sm">
                    Read/write boolean values. Use for digital outputs.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-600 pl-4">
                  <p className="font-semibold text-gray-900">
                    Discrete Inputs (10001-19999)
                  </p>
                  <p className="text-gray-600 text-sm">
                    Read-only boolean values. Use for digital inputs.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 font-medium">
                  ⚠️ Note: Always check your device's documentation for the
                  correct register addresses and types. Using the wrong address
                  can result in errors or incorrect data.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Step 4: Visualize Your Data
              </h2>

              <p className="text-gray-700 mb-4">
                Once your monitoring session is running, you'll see real-time
                data in the table view. But Modbus Connect offers powerful
                visualization tools to help you understand your data better.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Creating Charts
              </h3>
              <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
                <li>Click the "Chart" button in your monitoring session</li>
                <li>Select which registers to plot (up to 12 series)</li>
                <li>Choose your display format (Decimal, Hex, or Binary)</li>
                <li>Watch your data update in real-time</li>
              </ol>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Chart Features
              </h3>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Zoom & Pan:</strong> Click and drag to zoom,
                    right-click to reset
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Pop-out Windows:</strong> Open charts in separate
                    windows for multi-monitor setups
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Custom Labels:</strong> Rename series for better
                    clarity
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Auto-scaling:</strong> Y-axis adjusts automatically
                    to your data range
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Step 5: Save Your Workspace
              </h2>

              <p className="text-gray-700 mb-4">
                Don't lose your configuration! Modbus Connect lets you save
                complete workspaces including all devices, monitoring sessions,
                and settings.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Saving Your Work
              </h3>
              <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
                <li>Click "File" → "Save Workspace"</li>
                <li>Choose a location and filename</li>
                <li>Your entire setup is saved in a single file</li>
              </ol>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Loading a Workspace
              </h3>
              <p className="text-gray-700 mb-4">
                To restore your saved configuration:
              </p>
              <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700">
                <li>Click "File" → "Load Workspace"</li>
                <li>Select your saved workspace file</li>
                <li>All devices and sessions are restored instantly</li>
              </ol>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">
                  ✨ Pro Tip: Enable auto-save in Settings to automatically save
                  your workspace every few minutes. Never lose your work again!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Advanced Features to Explore
              </h2>

              <p className="text-gray-700 mb-4">
                Once you're comfortable with the basics, check out these
                advanced features:
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Protocol Logging
                  </h3>
                  <p className="text-gray-700">
                    View raw Modbus traffic with TX/RX logging. Perfect for
                    debugging communication issues or understanding exactly
                    what's happening on the wire.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Multiple Sessions
                  </h3>
                  <p className="text-gray-700">
                    Monitor multiple devices simultaneously. Each session runs
                    independently with its own polling interval and
                    configuration.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Data Export
                  </h3>
                  <p className="text-gray-700">
                    Export your monitoring data to CSV for analysis in Excel or
                    other tools. Great for documentation and reporting.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Write Operations
                  </h3>
                  <p className="text-gray-700">
                    Write values to coils and holding registers. Useful for
                    testing, configuration, and control applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Troubleshooting Common Issues
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    "Connection Timeout" Error
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Causes:</strong> Wrong IP address, device offline,
                    firewall blocking
                  </p>
                  <p className="text-gray-700">
                    <strong>Solutions:</strong> Verify IP address, check device
                    power, ensure firewall allows port 502
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    "Illegal Data Address" Error
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Cause:</strong> Trying to read a register that
                    doesn't exist
                  </p>
                  <p className="text-gray-700">
                    <strong>Solution:</strong> Check your device's register map
                    documentation
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No Devices Found During Scan
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Causes:</strong> Wrong network, device ID out of
                    range, timeout too short
                  </p>
                  <p className="text-gray-700">
                    <strong>Solutions:</strong> Verify network connection,
                    expand device ID range, increase timeout
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Conclusion
              </h2>

              <p className="text-gray-700 mb-4">
                Congratulations! You now know how to use Modbus Connect to
                discover, monitor, and visualize data from your industrial
                devices. From installation to your first monitoring session,
                you've learned the essential skills to work effectively with
                Modbus TCP/IP devices.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Key Takeaways
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Installation is quick and lightweight (2.7 MB)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Device scanner makes discovery automatic
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Monitoring sessions are easy to configure
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Real-time charting helps visualize data
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">
                    Workspaces save your entire configuration
                  </span>
                </li>
              </ul>

              <div className="bg-white rounded-lg p-6 mb-6">
                <p className="text-gray-900 font-semibold mb-2">
                  Ready to start monitoring your devices?
                </p>
                <Link
                  href="/download"
                  className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-medium"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Modbus Connect Free
                </Link>
              </div>

              <p className="text-gray-600 text-sm">
                Have questions or need help?{" "}
                <Link
                  href="/#contact"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Contact us
                </Link>{" "}
                - we're here to help!
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Related Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blog/modbus-tcp-ip-explained"
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  Understanding Modbus TCP/IP Protocol
                </h4>
                <p className="text-sm text-gray-600">
                  Learn the fundamentals of Modbus TCP/IP and how it works in
                  industrial automation.
                </p>
              </Link>
              <Link
                href="/blog/v0-2-0-release"
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  What's New in v0.2.0
                </h4>
                <p className="text-sm text-gray-600">
                  Discover the latest features and improvements in Modbus
                  Connect.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
