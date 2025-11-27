import Link from "next/link";
import Image from "next/image";
import { Download, CheckCircle2, ArrowLeft, Monitor, Cpu } from "lucide-react";
import Footer from "../components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Modbus Connect - Free Modbus TCP/IP Monitoring Software",
  description:
    "Download Modbus Connect free beta for Windows and macOS. Professional Modbus TCP/IP scanner and monitoring tool for industrial automation. Native performance, supports Windows 7/8/10/11 and macOS.",
  keywords:
    "download Modbus software, Modbus TCP/IP tool download, free Modbus scanner, Windows Modbus monitoring, macOS Modbus tool, industrial automation software download, SCADA tool download, PLC monitoring software",
  alternates: {
    canonical: "https://modbusconnect.com/download",
  },
  openGraph: {
    title: "Download Modbus Connect - Free Modbus TCP/IP Monitoring Software",
    description:
      "Download Modbus Connect free beta for Windows and macOS. Professional Modbus TCP/IP scanner and monitoring tool. Native performance.",
    url: "https://modbusconnect.com/download",
    type: "website",
  },
};

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
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        aria-label="Download section"
      >
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
              Get started with the free beta. Available for Windows and macOS.
            </p>
          </div>

          {/* Download Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {/* Windows */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-2 border-primary-600 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                Windows
              </h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                Windows 7/8/10/11 (64-bit)
              </p>
              <a
                href="/downloads/Modbus Connect_0.4.0_x64-setup.exe"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-medium flex items-center justify-center"
                download
                title="Download Modbus Connect v0.4.0 for Windows"
                aria-label="Download Modbus Connect installer for Windows 64-bit"
              >
                <Download className="w-5 h-5 mr-2" />
                Download .exe
              </a>
              <p className="text-xs text-gray-500 text-center mt-3">
                v0.4.0-beta • ~2.7 MB
              </p>
            </div>

            {/* macOS */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-2 border-gray-300 flex flex-col">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <svg
                  className="w-8 h-8 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                macOS
              </h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                Intel & Apple Silicon
              </p>
              <a
                href="/downloads/Modbus Connect_0.4.0_x64.dmg"
                className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-medium flex items-center justify-center"
                download
                title="Download Modbus Connect v0.4.0 for macOS"
                aria-label="Download Modbus Connect DMG for macOS"
              >
                <Download className="w-5 h-5 mr-2" />
                Download .dmg
              </a>
              <p className="text-xs text-gray-500 text-center mt-3 mb-3">
                v0.4.0-beta • ~4.7 MB • Unsigned
              </p>
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg mt-auto">
                <p className="text-xs text-yellow-800 leading-relaxed">
                  <strong>⚠️ Unsigned:</strong> Right-click app → Show Package
                  Contents → MacOS folder → run "modbus-connect". See below.
                </p>
              </div>
            </div>

            {/* Linux */}
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition border-2 border-gray-300 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 0 0-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 0 0-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 0 1-.004-.021l-.004-.024a1.807 1.807 0 0 1-.15.706.953.953 0 0 1-.213.335.71.71 0 0 0-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 0 0-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 0 0-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 0 0-.205.334 1.18 1.18 0 0 0-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 0 1-.018-.2v-.02a1.772 1.772 0 0 1 .15-.768 1.08 1.08 0 0 1 .43-.533.985.985 0 0 1 .594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 0 0-.166-.267.248.248 0 0 0-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 0 0-.12.27.944.944 0 0 0-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 0 1-.131.068 2.62 2.62 0 0 1-.275-.402 1.772 1.772 0 0 1-.155-.667 1.759 1.759 0 0 1 .08-.668 1.43 1.43 0 0 1 .283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 0 1 .016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 0 1-.448-.067 3.566 3.566 0 0 1-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 0 0-.402-.533 1.45 1.45 0 0 0-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 0 0 .314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 0 1 .647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 0 1-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                Linux
              </h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                RPM & DEB Packages
              </p>
              <div className="space-y-2 w-full mb-4">
                <a
                  href="/downloads/Modbus Connect-0.4.0-1.x86_64.rpm"
                  className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition font-medium flex items-center justify-center text-sm"
                  download
                  title="Download Modbus Connect v0.4.0 RPM for Linux"
                  aria-label="Download Modbus Connect RPM package for Linux"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download .rpm
                </a>
                <a
                  href="/downloads/Modbus Connect_0.4.0_amd64.deb"
                  className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition font-medium flex items-center justify-center text-sm"
                  download
                  title="Download Modbus Connect v0.4.0 DEB for Linux"
                  aria-label="Download Modbus Connect DEB package for Linux"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download .deb
                </a>
              </div>
              <p className="text-xs text-gray-500 text-center">
                v0.4.0-beta • ~5.8 MB
              </p>
            </div>
          </div>

          {/* System Requirements */}
          <div className="bg-white rounded-xl p-8 shadow-sm mb-12">
            <div className="flex items-center justify-center mb-6">
              <Cpu className="w-6 h-6 text-primary-600 mr-3" />
              <h2
                className="text-2xl font-bold text-gray-900"
                id="system-requirements"
              >
                Modbus Connect System Requirements
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Installation Instructions
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <Monitor className="w-5 h-5 mr-2 text-blue-600" />
                  Windows Installation
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>Download the .exe installer</li>
                  <li>Run the installer and follow the setup wizard</li>
                  <li>Launch Modbus Connect from the Start menu</li>
                </ol>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  macOS Installation (Unsigned App)
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>Download and open the .dmg file</li>
                  <li>
                    Right-click the app package and select "Show Package
                    Contents"
                  </li>
                  <li>Navigate to the "MacOS" folder</li>
                  <li>
                    Double-click the "modbus-connect" file to launch the app
                  </li>
                </ol>
                <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-xs text-yellow-800">
                    <strong>Note:</strong> The app is not signed, so macOS
                    Gatekeeper will block it if you try to open it normally.
                    Follow the steps above to run it.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-orange-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                  Linux Installation
                </h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>
                    <strong>RPM:</strong> Download and run{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      sudo rpm -i Modbus*.rpm
                    </code>
                  </li>
                  <li>
                    <strong>DEB:</strong> Download and run{" "}
                    <code className="bg-gray-100 px-1 rounded">
                      sudo dpkg -i Modbus*.deb
                    </code>
                  </li>
                  <li>Launch from your application menu or terminal</li>
                </ol>
              </div>
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

      <Footer />
    </div>
  );
}
