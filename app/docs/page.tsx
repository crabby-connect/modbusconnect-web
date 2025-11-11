import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Book, Zap, Search, Activity, Save } from "lucide-react";

export default function DocsPage() {
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

      {/* Documentation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <Book className="w-8 h-8 text-primary-600" />
              <h1 className="text-5xl font-bold text-gray-900">
                Documentation
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              Everything you need to know to get started with Modbus Connect
            </p>
          </div>

          {/* Quick Start */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Quick Start Guide
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    1
                  </span>
                  Installation
                </h3>
                <p className="text-gray-600 ml-11">
                  Download the installer for your operating system from the{" "}
                  <Link
                    href="/download"
                    className="text-primary-600 hover:underline"
                  >
                    download page
                  </Link>
                  . Run the installer and follow the setup wizard. Launch Modbus
                  Connect from your applications menu.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    2
                  </span>
                  Add Your First Device
                </h3>
                <p className="text-gray-600 ml-11 mb-3">
                  Click the "Add Device" button in the sidebar. Enter your
                  device's IP address, port (default: 502), and device ID
                  (1-254).
                </p>
                <div className="ml-11 bg-gray-50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-700">IP: 192.168.1.100</div>
                  <div className="text-gray-700">Port: 502</div>
                  <div className="text-gray-700">Device ID: 1</div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                    3
                  </span>
                  Start Monitoring
                </h3>
                <p className="text-gray-600 ml-11">
                  Select your device, choose the register type (Holding
                  Registers, Input Registers, Coils, or Discrete Inputs), set
                  the start address and count, then click "Start Monitoring".
                  Your data will appear in real-time.
                </p>
              </div>
            </div>
          </div>

          {/* Features Guide */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Features Guide
            </h2>

            <div className="space-y-8">
              {/* Device Scanner */}
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <Search className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Device Scanner
                  </h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Automatically discover Modbus devices on your network:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Click "Device Scanner" in the sidebar</li>
                  <li>Enter your network IP address and port</li>
                  <li>Set the device ID range to scan (e.g., 1-10)</li>
                  <li>Configure timeout (1000ms recommended)</li>
                  <li>Click "Start Scan" and wait for results</li>
                  <li>Select found devices and add them to your device list</li>
                </ul>
              </div>

              {/* Real-Time Monitoring */}
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <Activity className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Real-Time Monitoring
                  </h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Monitor register values in real-time:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>
                    <strong>Register Types:</strong> Coils (FC01), Discrete
                    Inputs (FC02), Holding Registers (FC03), Input Registers
                    (FC04)
                  </li>
                  <li>
                    <strong>Addressing:</strong> Enter addresses in decimal or
                    hexadecimal format
                  </li>
                  <li>
                    <strong>Polling Interval:</strong> Set from 100ms to 60
                    seconds
                  </li>
                  <li>
                    <strong>Multi-Session:</strong> Monitor multiple devices
                    simultaneously
                  </li>
                  <li>
                    <strong>Change Detection:</strong> Changed values are
                    highlighted in yellow
                  </li>
                  <li>
                    <strong>Custom Labels:</strong> Right-click addresses to add
                    custom labels
                  </li>
                </ul>
              </div>

              {/* Data Visualization */}
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <Zap className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Data Visualization
                  </h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Create real-time charts from your data:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Click the chart icon next to any register address</li>
                  <li>Select up to 12 addresses to track</li>
                  <li>Charts update in real-time as data changes</li>
                  <li>Use mouse wheel to zoom, drag to pan</li>
                  <li>
                    Pop out charts to separate windows for multi-monitor setups
                  </li>
                  <li>Export chart data to CSV for analysis</li>
                </ul>
              </div>

              {/* Workspace Management */}
              <div>
                <div className="flex items-center space-x-3 mb-3">
                  <Save className="w-6 h-6 text-primary-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    Workspace Management
                  </h3>
                </div>
                <p className="text-gray-600 mb-3">
                  Save and restore your complete setup:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>
                    Click "Save Workspace" to save all devices and sessions
                  </li>
                  <li>
                    Workspaces include device configurations, monitoring
                    sessions, and chart setups
                  </li>
                  <li>Load workspaces to quickly restore your environment</li>
                  <li>Auto-save keeps your work safe (coming soon)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Troubleshooting
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Device Not Found
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>
                    Verify the device is powered on and connected to the network
                  </li>
                  <li>Check IP address and port are correct</li>
                  <li>Ensure device ID matches the configured slave ID</li>
                  <li>Try increasing the timeout value</li>
                  <li>Check firewall settings aren't blocking port 502</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Connection Timeout
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Increase the timeout value in settings</li>
                  <li>Check network connectivity with ping</li>
                  <li>Verify the device supports Modbus TCP/IP</li>
                  <li>Ensure no other software is using the same connection</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Invalid Register Address
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>
                    Check the device documentation for valid address ranges
                  </li>
                  <li>
                    Remember: Modbus addresses start at 0 (protocol) or 1
                    (device)
                  </li>
                  <li>Verify you're using the correct register type</li>
                  <li>Some devices have gaps in their address space</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-primary-50 rounded-xl p-8 border border-primary-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need More Help?
            </h2>
            <p className="text-gray-700 mb-4">
              Can't find what you're looking for? Check out these resources:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link
                  href="/blog"
                  className="text-primary-600 hover:underline font-medium"
                >
                  Blog
                </Link>{" "}
                - Tutorials and guides
              </li>
              <li>
                <Link
                  href="/blog/v0-2-0-release"
                  className="text-primary-600 hover:underline font-medium"
                >
                  Changelog
                </Link>{" "}
                - See what's new in each version
              </li>
              <li>
                <a
                  href="mailto:crabby@modbusconnect.com"
                  className="text-primary-600 hover:underline font-medium"
                >
                  Contact Support
                </a>{" "}
                - Get help via email
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
