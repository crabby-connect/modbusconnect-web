import Link from "next/link";
import Image from "next/image";
import { Download, CheckCircle2, ArrowLeft, Monitor, Cpu } from "lucide-react";

export default function DownloadPage() {
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

      {/* Download Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span>Free During Development</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Download Modbus Connect
            </h1>
            <p className="text-xl text-gray-600">
              Get started with the free beta. Available for Windows.
            </p>
          </div>

          {/* Download Cards */}
          <div className="max-w-md mx-auto mb-12">
            {/* Windows */}
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition border-2 border-primary-600">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <Monitor className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                Windows
              </h3>
              <p className="text-sm text-gray-600 text-center mb-6">
                Windows 7/8/10/11 (64-bit)
              </p>
              <a
                href="/downloads/Modbus Connect_0.2.0_x64-setup.exe"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-medium flex items-center justify-center"
                download
              >
                <Download className="w-5 h-5 mr-2" />
                Download .exe
              </a>
              <p className="text-xs text-gray-500 text-center mt-3">
                v0.2.0-beta • ~2.7 MB
              </p>
            </div>
          </div>

          {/* System Requirements */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
            <div className="flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                System Requirements
              </h2>
            </div>
            <div className="text-center mb-6">
              <p className="text-lg text-gray-700 mb-4">
                Thanks to the absolute wizardry of Tauri, this thing is so
                lightweight you could probably run it on a potato.
              </p>
              <p className="text-gray-600">
                Seriously. 2.7 MB download. Native performance. Minimal memory
                footprint.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  2.7 MB
                </div>
                <p className="text-sm text-gray-600">
                  Download size (not a typo)
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  ~30 MB
                </div>
                <p className="text-sm text-gray-600">RAM usage (yes, really)</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  Native
                </div>
                <p className="text-sm text-gray-600">
                  Performance (chef's kiss)
                </p>
              </div>
            </div>
          </div>

          {/* Installation Instructions */}
          <div className="bg-primary-50 rounded-xl p-8 border border-primary-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Installation Instructions
            </h2>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Windows Installation
              </h3>
              <ol className="list-decimal list-inside space-y-1 text-sm text-gray-700">
                <li>Download the .exe installer</li>
                <li>Run the installer and follow the setup wizard</li>
                <li>Launch Modbus Connect from the Start menu</li>
              </ol>
            </div>
          </div>

          {/* What's Included */}
          <div className="mt-12 bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              What's Included in Beta
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Device Scanner
                  </h4>
                  <p className="text-sm text-gray-600">
                    Automatic network device discovery
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Real-Time Monitoring
                  </h4>
                  <p className="text-sm text-gray-600">
                    Multi-session device monitoring
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Data Visualization
                  </h4>
                  <p className="text-sm text-gray-600">
                    Real-time charts with 12 series
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Workspace Management
                  </h4>
                  <p className="text-sm text-gray-600">
                    Save and restore sessions
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Protocol Logging
                  </h4>
                  <p className="text-sm text-gray-600">
                    TX/RX traffic inspection
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    All Register Types
                  </h4>
                  <p className="text-sm text-gray-600">
                    Coils, Discrete, Holding, Input
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need help? Check out the{" "}
              <Link href="/docs" className="text-primary-600 hover:underline">
                documentation
              </Link>
              .
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Software provided as-is without warranty. Use at your own risk.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
