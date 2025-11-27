import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  AlertTriangle,
  Shield,
  Lock,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "NIS2 Directive & Modbus TCP Security: Compliance Guide for Industrial Automation | Modbus Connect",
  description:
    "Learn how to secure Modbus TCP devices for NIS2 compliance. Covers IEC 62443, TLS encryption, DPI firewalls, and practical steps to protect industrial automation systems from regulatory penalties.",
  keywords:
    "NIS2 directive industrial automation, securing Modbus TCP, IEC 62443 Modbus, Modbus TCP security, NIS2 compliance OT, industrial cybersecurity, Modbus TLS, OT security regulations",
  alternates: {
    canonical: "https://modbusconnect.com/blog/nis2-modbus-tcp-security",
  },
  openGraph: {
    title:
      "NIS2 Is Here: Why Your Modbus TCP Devices Are Now a Legal Liability",
    description:
      "The EU's NIS2 Directive mandates strict cybersecurity for industrial operators. Learn how to secure your Modbus TCP infrastructure and avoid regulatory penalties.",
    url: "https://modbusconnect.com/blog/nis2-modbus-tcp-security",
    type: "article",
    publishedTime: "2025-11-27T00:00:00Z",
    authors: ["Crabby"],
  },
};

export default function NIS2ModbusTCPSecurity() {
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
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full font-medium">
                Compliance & Security
              </span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                November 27, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                10 min read
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              NIS2 Is Here: Why Your Modbus TCP Devices Are Now a Legal
              Liability
            </h1>
            <p className="text-xl text-gray-600">
              The EU's NIS2 Directive mandates strict cybersecurity risk
              management for critical infrastructure. If your facility runs
              standard Modbus TCP, you have a compliance gap that needs
              immediate attention.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* Urgency Banner */}
            <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-6 mb-8">
              <div className="flex items-start">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-bold text-red-800 mb-2">
                    Compliance Deadline Has Passed
                  </h2>
                  <p className="text-red-700">
                    As of October 2024, the EU's NIS2 Directive is no longer a
                    "future consideration"—it is a present reality. For
                    industrial operators in critical sectors (energy, water,
                    manufacturing, transport), the rules have changed.
                    Non-compliance can result in fines up to €10 million or 2%
                    of global turnover, plus personal liability for C-level
                    management.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                The NIS2 directive mandates strict cybersecurity risk management
                measures for "essential" and "important" entities across the
                European Union. If your facility runs on standard Modbus TCP,
                you have a massive compliance gap.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Modbus TCP is the workhorse of industrial automation, but it is{" "}
                <strong>insecure-by-design</strong>. It has no encryption, no
                authentication, and no integrity checks. Under NIS2, leaving
                these connections exposed isn't just a security risk; it's a
                potential regulatory violation.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The Core Problem: Modbus TCP is a "Trusting" Protocol
              </h2>

              <p className="text-gray-700 mb-4">
                To understand the risk, you must understand the protocol.
                Standard Modbus TCP (Port 502) operates on blind trust:
              </p>

              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r-lg">
                  <p className="font-semibold text-gray-900">
                    Clear Text Payload
                  </p>
                  <p className="text-gray-600">
                    Anyone with Wireshark and network access can read your
                    holding registers and coil statuses. All data travels
                    unencrypted.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r-lg">
                  <p className="font-semibold text-gray-900">
                    No Authentication
                  </p>
                  <p className="text-gray-600">
                    The PLC doesn't care who sent the "Write Single Coil"
                    command. If the packet reaches the port, the command
                    executes.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4 bg-red-50 p-4 rounded-r-lg">
                  <p className="font-semibold text-gray-900">
                    No Integrity Checks
                  </p>
                  <p className="text-gray-600">
                    Replay attacks are trivial. An attacker can record a
                    legitimate "shutdown" command and replay it hours later.
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 font-medium">
                  ⚠️ This flat, unverified communication architecture violates
                  the "Defense in Depth" principles mandated by IEC 62443 and
                  the risk management requirements of NIS2.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                3 Ways to Secure Modbus TCP for NIS2 Compliance
              </h2>

              <p className="text-gray-700 mb-6">
                You cannot simply "patch" a 40-year-old protocol, but you can
                wrap it in security layers. Here's how to engineer a defense.
              </p>

              {/* Method 1 */}
              <div className="border-2 border-primary-200 rounded-lg p-6 bg-primary-50 mb-6">
                <div className="flex items-center mb-3">
                  <Shield className="w-6 h-6 text-primary-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">
                    1. The Perimeter Defense: Deep Packet Inspection (DPI)
                    Firewalls
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Standard IT firewalls only block ports. Industrial firewalls
                  with Modbus DPI (Deep Packet Inspection) are required for true
                  security.
                </p>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="font-semibold text-gray-900 mb-2">
                    How it works:
                  </p>
                  <p className="text-gray-700">
                    Instead of just allowing traffic on Port 502, the firewall
                    inspects the function codes inside the packet.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="font-semibold text-gray-900 mb-2">
                    The Strategy:
                  </p>
                  <p className="text-gray-700">
                    Configure your firewall to allow "Read" commands (Function
                    Codes 03, 04) from your HMI/SCADA but block "Write" commands
                    (Function Codes 05, 06, 15, 16) from all unauthorized IPs.
                  </p>
                </div>
                <div className="bg-green-100 rounded-lg p-4">
                  <p className="text-green-800 font-medium">
                    ✓ NIS2 Benefit: Fulfills the requirement for "Access
                    Control" and limits the blast radius of a compromised node.
                  </p>
                </div>
              </div>

              {/* Method 2 */}
              <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50 mb-6">
                <div className="flex items-center mb-3">
                  <Lock className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">
                    2. The Remote Shield: VPNs for Maintenance
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  NIS2 explicitly targets supply chain security and remote
                  access. Third-party vendors dialing into your PLCs via open
                  ports is a non-starter.
                </p>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="font-semibold text-gray-900 mb-2">The Fix:</p>
                  <p className="text-gray-700">
                    All remote Modbus traffic must be encapsulated inside a VPN
                    tunnel (e.g., IPsec or OpenVPN).
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 mb-4">
                  <p className="font-semibold text-gray-900 mb-2">
                    Why it helps:
                  </p>
                  <p className="text-gray-700">
                    The VPN provides the encryption and authentication that
                    Modbus lacks. The attacker sees only encrypted gibberish,
                    not your proprietary register data.
                  </p>
                </div>
                <div className="bg-yellow-100 rounded-lg p-4">
                  <p className="text-yellow-800 font-medium">
                    ⚠️ Warning: VPNs only secure the tunnel. Once the traffic
                    exits the VPN at the plant floor, it is clear text again.
                    This is why VPNs must be combined with segmentation (Zones
                    and Conduits).
                  </p>
                </div>
              </div>

              {/* Method 3 */}
              <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
                <div className="flex items-center mb-3">
                  <Shield className="w-6 h-6 text-green-600 mr-2" />
                  <h3 className="text-xl font-bold text-gray-900">
                    3. The Gold Standard: Modbus Secure (TLS Wrappers)
                  </h3>
                </div>
                <p className="text-gray-700 mb-4">
                  If you want to fix the root cause, you need Modbus Secure
                  (specifically Modbus/TCP Security). This wraps the Modbus PDU
                  in a TLS (Transport Layer Security) tunnel—the same tech that
                  secures your banking app.
                </p>
                <div className="space-y-3 mb-4">
                  <div className="bg-white rounded-lg p-3">
                    <span className="font-semibold text-gray-900">
                      Port Change:
                    </span>
                    <span className="text-gray-700 ml-2">
                      Moves traffic from Port 502 to Port 802
                    </span>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <span className="font-semibold text-gray-900">
                      Certificate Exchange:
                    </span>
                    <span className="text-gray-700 ml-2">
                      Client (SCADA) and Server (PLC) exchange X.509
                      certificates. If the PLC doesn't recognize the SCADA's
                      certificate, the connection is dropped immediately.
                    </span>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <span className="font-semibold text-gray-900">
                      Encryption:
                    </span>
                    <span className="text-gray-700 ml-2">
                      The entire payload is encrypted end-to-end.
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">
                    Implementation:
                  </p>
                  <p className="text-gray-700">
                    Newer PLCs support this natively. For legacy devices
                    (brownfield), you can use TLS Proxies or edge gateways that
                    sit in front of the PLC, accept Secure Modbus, and translate
                    it to standard Modbus locally (via a short, physically
                    secure patch cable).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Aligning with IEC 62443 Standards
              </h2>

              <p className="text-gray-700 mb-6">
                The NIS2 directive encourages the use of European and
                international standards. IEC 62443 is your blueprint for Modbus
                security implementation.
              </p>

              <div className="space-y-4">
                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="font-semibold text-gray-900">
                    Zones and Conduits (IEC 62443-3-2)
                  </p>
                  <p className="text-gray-600">
                    Do not let Modbus traffic traverse from the IT network to
                    the OT network without passing through a DMZ (Demilitarized
                    Zone). Segment your network into security zones with
                    controlled conduits between them.
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-semibold text-gray-900">
                    Least Privilege Access
                  </p>
                  <p className="text-gray-600">
                    Ensure that only the specific IP of the Historian can read
                    data, and only the specific IP of the Engineering Station
                    can write logic. No blanket permissions.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-semibold text-gray-900">
                    Security Level Targeting
                  </p>
                  <p className="text-gray-600">
                    Define your target security level (SL-T) based on risk
                    assessment. Critical infrastructure typically requires SL-3
                    or SL-4, which mandates encryption and strong
                    authentication.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                NIS2 Readiness Checklist
              </h2>

              <p className="text-gray-700 mb-6">
                Use this checklist to assess and improve your Modbus TCP
                security posture:
              </p>

              <div className="space-y-4">
                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <span className="text-2xl mr-3">1️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Audit</h3>
                    <p className="text-gray-700">
                      Scan your network for open Port 502. Use tools like{" "}
                      <Link
                        href="/download"
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Modbus Connect
                      </Link>{" "}
                      to discover and inventory all Modbus devices on your
                      network.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <span className="text-2xl mr-3">2️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Segment
                    </h3>
                    <p className="text-gray-700">
                      Isolate Modbus devices into their own VLANs. Create clear
                      boundaries between IT and OT networks with proper DMZ
                      architecture.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <span className="text-2xl mr-3">3️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Filter</h3>
                    <p className="text-gray-700">
                      Deploy OT-aware firewalls with DPI capabilities to block
                      Modbus Write commands from non-critical nodes. Whitelist
                      only authorized function codes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <span className="text-2xl mr-3">4️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Encrypt
                    </h3>
                    <p className="text-gray-700">
                      Plan a roadmap to replace or wrap legacy PLCs with Modbus
                      Secure (TLS) capable hardware. Prioritize critical assets
                      first.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-lg">
                  <span className="text-2xl mr-3">5️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Monitor
                    </h3>
                    <p className="text-gray-700">
                      Implement continuous monitoring of Modbus traffic. Log all
                      communications and set up alerts for anomalous behavior or
                      unauthorized access attempts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Start Your Security Assessment Today
              </h2>

              <p className="text-gray-700 mb-6">
                The first step to NIS2 compliance is understanding what's on
                your network. Modbus Connect helps you discover and monitor all
                Modbus TCP devices, giving you visibility into your industrial
                infrastructure.
              </p>

              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Get Started with Modbus Connect
                </h3>
                <ul className="space-y-2 mb-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>
                      Scan device IDs 1-247 to discover all Modbus devices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>Monitor register values in real-time</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>Log protocol traffic for security analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-bold mr-2">•</span>
                    <span>Export data for compliance documentation</span>
                  </li>
                </ul>
                <Link
                  href="/download"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
                >
                  Download Free Beta →
                </Link>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                The Bottom Line
              </h2>
              <p className="text-gray-300 leading-relaxed">
                The NIS2 directive is not a suggestion. It is a mandate to
                secure the infrastructure that keeps our society running. The
                era of "security through obscurity" for Modbus is over.
                Organizations that fail to act face not only regulatory
                penalties but also the very real risk of operational disruption
                from cyber attacks targeting unprotected industrial systems.
              </p>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Related Articles
              </h2>
              <div className="space-y-4">
                <Link
                  href="/blog/modbus-tcp-ip-explained"
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <h3 className="font-semibold text-primary-600 mb-1">
                    Understanding Modbus TCP/IP: A Complete Guide for Beginners
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Learn the fundamentals of Modbus TCP/IP protocol, register
                    types, and function codes.
                  </p>
                </Link>
                <Link
                  href="/blog/modbus-protocol-deep-dive"
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <h3 className="font-semibold text-primary-600 mb-1">
                    Modbus Protocol Deep Dive: Frame Structure and
                    Implementation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Technical exploration of Modbus RTU, ASCII, and TCP
                    protocols with implementation details.
                  </p>
                </Link>
                <Link
                  href="/blog/modbus-tcp-vs-profinet-ethernetip-opcua"
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <h3 className="font-semibold text-primary-600 mb-1">
                    Modbus TCP vs PROFINET, EtherNet/IP & OPC UA — 2025
                    Comparison
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Compare industrial Ethernet protocols including security
                    considerations.
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">
            © 2025 Modbus Connect. Built for industrial automation
            professionals.
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <Link href="/download" className="hover:text-white transition">
              Download
            </Link>
            <Link href="/blog" className="hover:text-white transition">
              Blog
            </Link>
            <Link href="/docs" className="hover:text-white transition">
              Documentation
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
