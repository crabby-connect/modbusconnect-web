import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Modbus Protocol Deep Dive: RTU, ASCII, and TCP Frame Structure | Modbus Connect",
  description:
    "Technical deep dive into Modbus protocol architecture covering RTU and ASCII serial modes, TCP/IP framing, function codes, error checking algorithms (CRC16, LRC), and message structure with implementation examples.",
  keywords:
    "Modbus protocol specification, Modbus RTU frame structure, Modbus ASCII mode, CRC16 algorithm, LRC calculation, Modbus function codes, serial communication protocol, industrial protocol architecture",
  alternates: {
    canonical: "https://modbusconnect.com/blog/modbus-protocol-deep-dive",
  },
  openGraph: {
    title: "Modbus Protocol Deep Dive: RTU, ASCII, and TCP Frame Structure",
    description:
      "Comprehensive technical analysis of Modbus protocol architecture, frame structures, error checking, and implementation details.",
    url: "https://modbusconnect.com/blog/modbus-protocol-deep-dive",
    type: "article",
    publishedTime: "2025-11-10T00:00:00Z",
    authors: ["Crabby"],
  },
};

export default function ModbusProtocolDeepDive() {
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
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                Technical Deep Dive
              </span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                November 10, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                15 min read
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Modbus Protocol Deep Dive: Understanding Frame Structure and
              Implementation
            </h1>
            <p className="text-xl text-gray-600">
              Technical analysis of Modbus protocol architecture covering RTU,
              ASCII, and TCP variants with implementation details for engineers
              and developers.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Modbus is nearly half a century old, yet it remains the lingua
                franca of industrial automation. Its simplicity hides a brutal
                demand for precision: a single misplaced byte, a timing gap 0.5
                milliseconds too short, or a reversed word order can bring a
                factory line to a halt.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This isn't a spec rehash. This is about understanding why Modbus
                works the way it does, where implementations fail, and how to
                debug the inevitable issues when your PLC won't talk to your
                SCADA system at 3 AM.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We'll explore the three transmission variants (RTU, ASCII, TCP),
                dissect their frame structures byte-by-byte, examine the
                mathematics behind error detection, and cover the implementation
                gotchas that separate working code from production-ready code.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Three Variants? Understanding the Trade-offs
              </h2>

              <p className="text-gray-700 mb-4">
                Modbus evolved through three distinct eras, each solving
                different problems. Understanding why each variant exists helps
                you choose the right one and debug issues faster.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                The Communication Model: Strict Turn-Taking
              </h3>
              <p className="text-gray-700 mb-4">
                Think of Modbus as a walkie-talkie conversation: one side talks,
                the other listens, then they switch. No interruptions, no
                simultaneous transmission. This strict turn-taking is both
                Modbus's strength (simple, deterministic) and its limitation (no
                event-driven notifications—if a sensor trips, it can't yell for
                help; you have to poll it).
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-3 font-semibold">
                  Terminology by Variant:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Serial Modbus (RTU/ASCII):</strong> Master
                    initiates, slave responds
                  </li>
                  <li>
                    <strong>Modbus TCP:</strong> Client initiates, server
                    responds
                  </li>
                </ul>
                <p className="text-gray-600 text-sm mt-3">
                  The spec uses different terms, but the pattern is identical:
                  one side asks, the other answers. Always.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Variant Comparison: When to Use Each
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Variant
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Speed
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Robustness
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        When to Use
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700">
                    <tr className="border-b">
                      <td className="px-4 py-3 font-semibold">RTU</td>
                      <td className="px-4 py-3">Fast (binary)</td>
                      <td className="px-4 py-3">Excellent (CRC-16)</td>
                      <td className="px-4 py-3">
                        Production systems, long cable runs, noisy environments
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-semibold">ASCII</td>
                      <td className="px-4 py-3">Slow (2× overhead)</td>
                      <td className="px-4 py-3">Good (LRC)</td>
                      <td className="px-4 py-3">
                        Debugging, legacy systems, human monitoring
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold">TCP</td>
                      <td className="px-4 py-3">Very fast (Ethernet)</td>
                      <td className="px-4 py-3">Excellent (TCP)</td>
                      <td className="px-4 py-3">
                        Modern installations, high throughput, multiple devices
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-gray-700 mb-4">
                <strong>The real-world choice:</strong> RTU remains prevalent in
                existing installations due to its efficiency and the massive
                installed base. TCP is increasingly common for new deployments
                where Ethernet infrastructure exists. ASCII exists mainly for
                debugging—you can watch frames in a terminal and actually read
                them.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Modbus RTU: Where Timing is Everything
              </h2>

              <p className="text-gray-700 mb-4">
                RTU (Remote Terminal Unit) mode is the most widely deployed
                Modbus variant, offering maximum efficiency through binary
                encoding and robust error detection via CRC-16. But here's the
                catch: RTU doesn't use start/end bytes like most protocols.
                Instead, it relies on silence—gaps in transmission—to mark frame
                boundaries.
              </p>

              <p className="text-gray-700 mb-4">
                Why silence? In 1979, when Modbus was designed for 1200 baud
                modems, saving 2 bytes per frame was worth the complexity. At
                that speed, a 3.5 character gap is about 32ms—long enough for
                mechanical relays to settle. Modern systems can go faster, but
                the spec mandates these timing rules for compatibility.
              </p>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 font-medium mb-2">
                  Gotcha: Timing Violations
                </p>
                <p className="text-red-800 text-sm">
                  A software delay, interrupt storm, or poorly configured timer
                  can fragment frames. If your UART transmits with a 1.6
                  character gap mid-frame, the receiver will discard everything
                  and wait for the next 3.5 character silence. This is the #1
                  cause of "it works sometimes" bugs in RTU implementations.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Frame Structure
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Field
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Size
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700">
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">Address</td>
                      <td className="px-4 py-3">8 bits</td>
                      <td className="px-4 py-3">
                        Slave address (1-247, 0=broadcast)
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">Function</td>
                      <td className="px-4 py-3">8 bits</td>
                      <td className="px-4 py-3">Function code</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">Data</td>
                      <td className="px-4 py-3">N × 8 bits</td>
                      <td className="px-4 py-3">
                        Function-specific data payload
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">CRC</td>
                      <td className="px-4 py-3">16 bits</td>
                      <td className="px-4 py-3">CRC-16 checksum (LSB first)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 font-medium mb-2">
                  Note on Frame Delimiters
                </p>
                <p className="text-yellow-800 text-sm">
                  RTU frames have no explicit start/end delimiters. Instead, a
                  silent interval of at least 3.5 character times before the
                  address byte marks the frame start. A similar 3.5 character
                  silence after the CRC marks the frame end. These are timing
                  gaps on the line, not transmitted fields.
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 font-medium mb-2">
                  Broadcast Behavior
                </p>
                <p className="text-red-800 text-sm">
                  Address 0 indicates broadcast. Slaves receiving broadcast
                  requests execute the command but do not send responses.
                  Masters must not wait for responses to broadcast requests.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Character Timing and Framing
              </h3>
              <p className="text-gray-700 mb-4">
                RTU mode uses silent intervals to delimit frames. Character time
                depends on serial configuration:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="font-mono text-sm text-gray-700 mb-4">
                  With parity: (1 start + 8 data + 1 parity + 1 stop) = 11 bits
                  per character
                </p>
                <p className="font-mono text-sm text-gray-700 mb-4">
                  Without parity: (1 start + 8 data + 2 stop) = 11 bits per
                  character
                </p>
                <p className="text-gray-700 text-sm">
                  <strong>Example at 9600 baud with parity:</strong> 11 bits /
                  9600 baud = 1.146 ms per character
                  <br />
                  <strong>3.5 character time (minimum):</strong> 3.5 × 1.146 =
                  4.01 ms
                  <br />
                  <strong>
                    1.5 character time (maximum gap within frame):
                  </strong>{" "}
                  1.5 × 1.146 = 1.72 ms
                </p>
                <p className="text-gray-600 text-xs mt-3">
                  Note: At baud rates above 19200, the spec allows fixed timing:
                  1.75ms for 3.5 char time, 0.75ms for 1.5 char time.
                </p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <p className="text-blue-800 font-medium mb-2">
                  Why 3.5 character times? Historical context:
                </p>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li>
                    • At 1200 baud, that's ~32ms—long enough for mechanical
                    relays
                  </li>
                  <li>
                    • Modern systems can go faster, but spec mandates it for
                    compatibility
                  </li>
                  <li>
                    • Microcontroller trap: UART buffer overruns if you don't
                    respect this
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 font-medium mb-2">
                  Critical Timing Rule: The 1.5 Character Violation
                </p>
                <p className="text-yellow-800 text-sm mb-3">
                  If a silent interval exceeding 1.5 character times occurs
                  within a frame, the receiving device must discard the
                  incomplete message and wait for the next frame start (at least
                  3.5 character silence). This ensures frame synchronization.
                </p>
                <div className="font-mono text-xs text-yellow-900 bg-yellow-100 p-3 rounded">
                  <p className="mb-1">Frame timing diagram (@ 9600 baud):</p>
                  <p>
                    Silence (≥4ms) | 01 03 00 00 00 02 0B C4 | Silence (≥4ms) ←
                    Valid
                  </p>
                  <p className="text-red-600 mt-2">
                    Silence (≥4ms) | 01 03 00 [2ms gap] 00 00 02 0B C4 ←
                    INVALID!
                  </p>
                  <p className="text-xs mt-2">
                    The 2ms gap exceeds 1.5 char time (1.72ms), frame discarded
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 font-medium mb-2">
                  Real scenario: Failed frame
                </p>
                <p className="text-red-800 text-sm">
                  Your microcontroller is sending a frame when a high-priority
                  interrupt fires. The interrupt handler takes 2ms. By the time
                  you resume transmission, you've violated the 1.5 character
                  rule. The slave discards the partial frame and you get a
                  timeout. Solution: Use DMA for RTU transmission or disable
                  interrupts during frame transmission.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Serial Configuration
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Parameter
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700">
                    <tr className="border-b">
                      <td className="px-4 py-3">Encoding</td>
                      <td className="px-4 py-3 font-mono">
                        8-bit binary (0x00-0xFF)
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">Data Bits</td>
                      <td className="px-4 py-3 font-mono">8</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">Parity</td>
                      <td className="px-4 py-3 font-mono">
                        Even, Odd, or None
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">Stop Bits</td>
                      <td className="px-4 py-3 font-mono">
                        1 (with parity) or 2 (no parity)
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">Bit Order</td>
                      <td className="px-4 py-3 font-mono">LSB first</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Modbus ASCII: The Debugging Mode
              </h2>

              <p className="text-gray-700 mb-4">
                ASCII mode sacrifices efficiency for readability and debugging
                convenience. Each byte is transmitted as two ASCII hexadecimal
                characters, doubling the bandwidth requirement but allowing easy
                monitoring with terminal programs.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-3 font-semibold">
                  Same request in RTU vs ASCII—the efficiency cost:
                </p>
                <div className="font-mono text-sm space-y-2">
                  <p className="text-gray-700">
                    <span className="font-bold">RTU:</span> 01 03 00 00 00 02 C4
                    0B
                  </p>
                  <p className="text-gray-600 text-xs">
                    8 bytes, 9.2ms @ 9600 baud
                  </p>
                  <p className="text-gray-700 mt-3">
                    <span className="font-bold">ASCII:</span>{" "}
                    :110300000002EA&lt;CR&gt;&lt;LF&gt;
                  </p>
                  <p className="text-gray-600 text-xs">
                    17 bytes, 19.6ms @ 9600 baud
                  </p>
                  <p className="text-red-600 font-bold mt-3">
                    Throughput cost: 2.13× slower
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 font-medium mb-2">
                  When it's worth it:
                </p>
                <ul className="space-y-1 text-sm text-blue-800">
                  <li>
                    • Debugging with PuTTY or any terminal—you can read the
                    frames
                  </li>
                  <li>• Legacy systems that only support ASCII</li>
                  <li>
                    • Compliance testing where human verification is required
                  </li>
                  <li>
                    • Educational environments for teaching protocol concepts
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Frame Structure
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Field
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Size
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700">
                    <tr className="border-b bg-green-50">
                      <td className="px-4 py-3 font-mono">Start</td>
                      <td className="px-4 py-3">1 char</td>
                      <td className="px-4 py-3">Colon ':' (0x3A)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">Address</td>
                      <td className="px-4 py-3">2 chars</td>
                      <td className="px-4 py-3">
                        Slave address as ASCII hex (e.g., "01")
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">Function</td>
                      <td className="px-4 py-3">2 chars</td>
                      <td className="px-4 py-3">
                        Function code as ASCII hex (e.g., "03")
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">Data</td>
                      <td className="px-4 py-3">N × 2 chars</td>
                      <td className="px-4 py-3">
                        Data bytes as ASCII hex pairs
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">LRC</td>
                      <td className="px-4 py-3">2 chars</td>
                      <td className="px-4 py-3">
                        Longitudinal Redundancy Check
                      </td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-3 font-mono">End</td>
                      <td className="px-4 py-3">2 chars</td>
                      <td className="px-4 py-3">CR LF (0x0D 0x0A)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                ASCII Encoding Example
              </h3>
              <p className="text-gray-700 mb-4">
                Request to read holding registers from device 17 (0x11):
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6 font-mono text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 mb-2">Binary (RTU):</p>
                    <p className="text-gray-900">11 03 00 00 00 02 C4 0B</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">ASCII:</p>
                    <p className="text-gray-900">
                      :110300000002EA&lt;CR&gt;&lt;LF&gt;
                    </p>
                    <p className="text-gray-600 text-xs mt-2">
                      LRC: 0x11+0x03+0x00+0x00+0x00+0x02=0x16, -0x16=0xEA
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Timing Characteristics
              </h3>
              <p className="text-gray-700 mb-4">
                Unlike RTU's strict timing requirements, ASCII mode allows up to
                1 second between characters without causing frame errors. This
                makes ASCII mode more tolerant of software-based implementations
                and high-latency systems, though at the cost of throughput.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Error Detection: CRC-16 Algorithm
              </h2>

              <p className="text-gray-700 mb-4">
                Modbus RTU employs CRC-16 for error detection, providing robust
                protection against transmission errors. The algorithm uses
                polynomial division in GF(2) arithmetic.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                CRC-16 Specification
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <ul className="space-y-2 text-gray-700">
                  <li>
                    <strong>Polynomial:</strong>{" "}
                    <span className="font-mono">0xA001</span> (bit-reversed
                    0x8005)
                  </li>
                  <li>
                    <strong>Initial Value:</strong>{" "}
                    <span className="font-mono">0xFFFF</span>
                  </li>
                  <li>
                    <strong>Width:</strong> 16 bits
                  </li>
                  <li>
                    <strong>Byte Order:</strong> LSB transmitted first
                  </li>
                  <li>
                    <strong>Reflection:</strong> Input and output reflected
                  </li>
                </ul>
                <p className="text-gray-600 text-sm mt-3">
                  Why 0xA001? It's the bit-reversed form of the standard CRC-16
                  polynomial 0x8005. Modbus uses LSB-first transmission, so the
                  polynomial is reversed to match.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Worked Example: Step-by-Step CRC Calculation
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-3 font-semibold">
                  Message: 01 03 (first two bytes only, for brevity)
                </p>
                <div className="font-mono text-xs space-y-1 text-gray-700">
                  <p>Step 1: CRC = 0xFFFF (initial value)</p>
                  <p className="text-blue-600">Step 2: CRC ^= 0x01 = 0xFFFE</p>
                  <p>
                    Step 3: Process bit 0 (LSB): bit is 0, shift right: 0x7FFF
                  </p>
                  <p>
                    Step 4: Process bit 1: bit is 1, shift right and XOR:
                    (0x3FFF) ^ 0xA001 = 0x9FFE
                  </p>
                  <p>
                    Step 5: Process bit 2: bit is 1, shift right and XOR:
                    (0x4FFF) ^ 0xA001 = 0xEFFE
                  </p>
                  <p className="text-gray-600">
                    ... (continue for all 8 bits of 0x01)
                  </p>
                  <p className="text-blue-600 mt-2">
                    After byte 1: CRC = 0xC0C1
                  </p>
                  <p className="text-gray-600 mt-2">
                    ... (repeat for 0x03 and remaining bytes)
                  </p>
                  <p className="text-green-600 font-bold mt-2">
                    Final CRC for full message: 0xC40B
                  </p>
                  <p className="text-red-600 mt-2">
                    Transmitted as: 0B C4 (LSB first!)
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Implementation Algorithm
              </h3>
              <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
                <pre className="text-green-400 text-sm">
                  {`uint16_t calculateCRC16(const uint8_t *data, size_t length) {
    uint16_t crc = 0xFFFF;
    
    for (size_t i = 0; i < length; i++) {
        crc ^= data[i];
        
        for (uint8_t bit = 0; bit < 8; bit++) {
            if (crc & 0x0001) {
                crc >>= 1;
                crc ^= 0xA001;
            } else {
                crc >>= 1;
            }
        }
    }
    
    return crc;
}`}
                </pre>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Table-Based Optimization
              </h3>
              <p className="text-gray-700 mb-4">
                For performance-critical applications, a lookup table eliminates
                the inner loop:
              </p>
              <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
                <pre className="text-green-400 text-sm">
                  {`static const uint16_t crcTable[256] = {
    0x0000, 0xC0C1, 0xC181, 0x0140, 0xC301, 0x03C0, 0x0280, 0xC241,
    0xC601, 0x06C0, 0x0780, 0xC741, 0x0500, 0xC5C1, 0xC481, 0x0440,
    // ... (256 entries total)
};

uint16_t calculateCRC16Fast(const uint8_t *data, size_t length) {
    uint16_t crc = 0xFFFF;
    
    for (size_t i = 0; i < length; i++) {
        uint8_t index = crc ^ data[i];
        crc = (crc >> 8) ^ crcTable[index];
    }
    
    return crc;
}`}
                </pre>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                CRC Transmission Order
              </h3>
              <p className="text-gray-700 mb-4">
                The CRC is appended to the message with the low byte first, then
                the high byte:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6 font-mono text-sm">
                <p className="text-gray-700 mb-2">Message: 01 03 00 00 00 02</p>
                <p className="text-gray-700 mb-2">CRC Calculated: 0xC40B</p>
                <p className="text-gray-900 font-bold">
                  Transmitted: 01 03 00 00 00 02 0B C4
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 font-medium">
                  Common Pitfall: Many implementations incorrectly transmit the
                  CRC high byte first. Always verify byte order against the
                  specification.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Error Detection: LRC Algorithm
              </h2>

              <p className="text-gray-700 mb-4">
                Modbus ASCII uses LRC (Longitudinal Redundancy Check), a simpler
                checksum algorithm that trades detection capability for
                implementation simplicity.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                LRC Calculation Method
              </h3>
              <p className="text-gray-700 mb-4">The LRC is computed by:</p>
              <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
                <li>Summing all data bytes (address, function, data)</li>
                <li>Taking the two's complement of the sum</li>
                <li>Keeping only the least significant byte</li>
              </ol>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 font-medium mb-2">
                  When to use LRC:
                </p>
                <ul className="space-y-1 text-sm text-yellow-800">
                  <li>• Only when ASCII mode is required</li>
                  <li>
                    • Weaker than CRC-16: misses ~0.003% of multi-bit errors CRC
                    catches
                  </li>
                  <li>
                    • Real scenario: Caught single-bit errors, but missed a
                    4-bit burst error that CRC-16 would have detected in a noisy
                    factory environment
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg p-6 mb-6 overflow-x-auto">
                <pre className="text-green-400 text-sm">
                  {`uint8_t calculateLRC(const uint8_t *data, size_t length) {
    uint8_t lrc = 0;
    
    // Sum all bytes
    for (size_t i = 0; i < length; i++) {
        lrc += data[i];
    }
    
    // Two's complement
    return (uint8_t)(-((int8_t)lrc));
}`}
                </pre>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                LRC Example Calculation
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6 font-mono text-sm">
                <p className="text-gray-700 mb-2">
                  Message bytes: 01 03 00 00 00 02
                </p>
                <p className="text-gray-700 mb-2">
                  Sum: 0x01 + 0x03 + 0x00 + 0x00 + 0x00 + 0x02 = 0x06
                </p>
                <p className="text-gray-700 mb-2">
                  Two's complement: -0x06 = 0xFA
                </p>
                <p className="text-gray-900 font-bold">LRC: FA</p>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 font-medium">
                  Note: LRC provides weaker error detection than CRC-16. It can
                  detect single-bit errors and some multi-bit errors, but may
                  miss certain error patterns that CRC-16 would catch.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Function Code Specifications
              </h2>

              <p className="text-gray-700 mb-4">
                Function codes define the operation to perform. Valid codes
                range from 1-127 (7-bit space). The Modbus specification defines
                codes 1-24 and 43; codes above 43 are reserved or
                device-specific extensions. The MSB indicates normal response
                (0) or exception (1).
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Read Operations
              </h3>
              <div className="space-y-6 mb-6">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Function 0x03: Read Holding Registers
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Reads contiguous block of holding registers (16-bit values).
                  </p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
                    <p className="text-red-800 font-medium text-sm mb-1">
                      Common mistake:
                    </p>
                    <p className="text-red-800 text-sm">
                      Reading 126 registers (spec says 125 max). Some devices
                      accept it, others throw exception 0x03 (Illegal Data
                      Value). Always stay within spec limits to ensure
                      compatibility.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-3">
                    <p className="font-semibold text-gray-900 mb-2">
                      Request Frame:
                    </p>
                    <table className="w-full text-sm font-mono">
                      <tr>
                        <td className="py-1">Address:</td>
                        <td>1 byte (slave ID)</td>
                      </tr>
                      <tr>
                        <td className="py-1">Function:</td>
                        <td>0x03</td>
                      </tr>
                      <tr>
                        <td className="py-1">Start Address:</td>
                        <td>2 bytes (big-endian)</td>
                      </tr>
                      <tr>
                        <td className="py-1">Quantity:</td>
                        <td>2 bytes (1-125 registers)</td>
                      </tr>
                      <tr>
                        <td className="py-1">CRC:</td>
                        <td>2 bytes</td>
                      </tr>
                    </table>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">
                      Response Frame:
                    </p>
                    <table className="w-full text-sm font-mono">
                      <tr>
                        <td className="py-1">Address:</td>
                        <td>1 byte (echo)</td>
                      </tr>
                      <tr>
                        <td className="py-1">Function:</td>
                        <td>0x03 (echo)</td>
                      </tr>
                      <tr>
                        <td className="py-1">Byte Count:</td>
                        <td>1 byte (N = quantity × 2)</td>
                      </tr>
                      <tr>
                        <td className="py-1">Register Values:</td>
                        <td>N bytes (big-endian pairs)</td>
                      </tr>
                      <tr>
                        <td className="py-1">CRC:</td>
                        <td>2 bytes</td>
                      </tr>
                    </table>
                  </div>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Function 0x01: Read Coils
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Reads contiguous block of coil states (boolean values).
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4 mb-3">
                    <p className="font-semibold text-gray-900 mb-2">
                      Response Data Packing:
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                      Coils are packed 8 per byte, LSB first:
                    </p>
                    <div className="font-mono text-xs">
                      <p>
                        Byte 1: [Coil 8][Coil 7][Coil 6][Coil 5][Coil 4][Coil
                        3][Coil 2][Coil 1]
                      </p>
                      <p>
                        Byte 2: [Coil 16][Coil 15][Coil 14][Coil 13][Coil
                        12][Coil 11][Coil 10][Coil 9]
                      </p>
                    </div>
                    <p className="text-sm text-gray-700 mt-2">
                      Unused bits in final byte are zero-padded.
                    </p>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-800 font-medium text-sm mb-1">
                      Bit packing gotcha:
                    </p>
                    <p className="text-red-800 text-sm">
                      If you request 13 coils, response is 2 bytes. Last 3 bits
                      of byte 2 are zero-padded. Don't assume they're valid
                      coils—they're just padding. Always track the actual
                      quantity requested.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Write Operations
              </h3>
              <div className="space-y-6 mb-6">
                <div className="border-l-4 border-green-600 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Function 0x06: Write Single Register
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Writes a 16-bit value to a single holding register.
                  </p>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">
                      Request/Response (identical):
                    </p>
                    <table className="w-full text-sm font-mono">
                      <tr>
                        <td className="py-1">Address:</td>
                        <td>1 byte</td>
                      </tr>
                      <tr>
                        <td className="py-1">Function:</td>
                        <td>0x06</td>
                      </tr>
                      <tr>
                        <td className="py-1">Register Address:</td>
                        <td>2 bytes</td>
                      </tr>
                      <tr>
                        <td className="py-1">Register Value:</td>
                        <td>2 bytes</td>
                      </tr>
                      <tr>
                        <td className="py-1">CRC:</td>
                        <td>2 bytes</td>
                      </tr>
                    </table>
                    <p className="text-sm text-gray-700 mt-2">
                      Normal response echoes the request exactly.
                    </p>
                  </div>
                </div>

                <div className="border-l-4 border-yellow-600 pl-4">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Function 0x10: Write Multiple Registers
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Writes multiple consecutive holding registers (1-123
                    registers).
                  </p>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
                    <p className="text-red-800 font-medium text-sm mb-1">
                      Vendor quirk:
                    </p>
                    <p className="text-red-800 text-sm">
                      Some PLCs require byte count to match quantity×2 exactly.
                      Others ignore it. Always set it correctly to avoid
                      mysterious failures with certain devices.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-3">
                    <p className="font-semibold text-gray-900 mb-2">
                      Request Frame:
                    </p>
                    <table className="w-full text-sm font-mono">
                      <tr>
                        <td className="py-1">Address:</td>
                        <td>1 byte</td>
                      </tr>
                      <tr>
                        <td className="py-1">Function:</td>
                        <td>0x10</td>
                      </tr>
                      <tr>
                        <td className="py-1">Start Address:</td>
                        <td>2 bytes</td>
                      </tr>
                      <tr>
                        <td className="py-1">Quantity:</td>
                        <td>2 bytes (1-123)</td>
                      </tr>
                      <tr>
                        <td className="py-1">Byte Count:</td>
                        <td>1 byte (quantity × 2)</td>
                      </tr>
                      <tr>
                        <td className="py-1">Register Values:</td>
                        <td>N bytes</td>
                      </tr>
                      <tr>
                        <td className="py-1">CRC:</td>
                        <td>2 bytes</td>
                      </tr>
                    </table>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold text-gray-900 mb-2">
                      Response Frame:
                    </p>
                    <table className="w-full text-sm font-mono">
                      <tr>
                        <td className="py-1">Address:</td>
                        <td>1 byte</td>
                      </tr>
                      <tr>
                        <td className="py-1">Function:</td>
                        <td>0x10</td>
                      </tr>
                      <tr>
                        <td className="py-1">Start Address:</td>
                        <td>2 bytes (echo)</td>
                      </tr>
                      <tr>
                        <td className="py-1">Quantity:</td>
                        <td>2 bytes (echo)</td>
                      </tr>
                      <tr>
                        <td className="py-1">CRC:</td>
                        <td>2 bytes</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Diagnostic Functions
              </h3>
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">
                  Function 0x08: Diagnostics (with subfunctions)
                </h4>
                <p className="text-gray-700 mb-3">
                  Provides diagnostic and testing capabilities. Uses
                  subfunctions for different tests:
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-2 font-semibold">
                    Common subfunctions:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• 0x00: Return Query Data (loopback test)</li>
                    <li>• 0x01: Restart Communications Option</li>
                    <li>• 0x0A: Clear Counters and Diagnostic Register</li>
                    <li>• 0x0B: Return Bus Message Count</li>
                    <li>• 0x0C: Return Bus Communication Error Count</li>
                    <li>• 0x0D: Return Bus Exception Error Count</li>
                  </ul>
                  <p className="text-gray-600 text-xs mt-3">
                    Useful for troubleshooting communication issues and
                    verifying device health. Not all devices implement all
                    subfunctions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Exception Responses
              </h2>

              <p className="text-gray-700 mb-4">
                When a slave cannot process a request, it returns an exception
                response. The function code has its MSB set (original code +
                0x80), and a single exception code byte explains the error.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Exception Response Structure
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <table className="w-full text-sm font-mono">
                  <tr>
                    <td className="py-1 pr-4">Address:</td>
                    <td>1 byte (slave ID)</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4">Function:</td>
                    <td>Original function + 0x80</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4">Exception Code:</td>
                    <td>1 byte</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-4">CRC:</td>
                    <td>2 bytes</td>
                  </tr>
                </table>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Standard Exception Codes
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Code
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Name
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700">
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">0x01</td>
                      <td className="px-4 py-3 font-semibold">
                        Illegal Function
                      </td>
                      <td className="px-4 py-3">
                        Function code not supported by slave
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">0x02</td>
                      <td className="px-4 py-3 font-semibold">
                        Illegal Data Address
                      </td>
                      <td className="px-4 py-3">
                        Register address not valid or out of range
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">0x03</td>
                      <td className="px-4 py-3 font-semibold">
                        Illegal Data Value
                      </td>
                      <td className="px-4 py-3">
                        Value in request data field is invalid
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">0x04</td>
                      <td className="px-4 py-3 font-semibold">
                        Slave Device Failure
                      </td>
                      <td className="px-4 py-3">
                        Unrecoverable error while processing request
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">0x05</td>
                      <td className="px-4 py-3 font-semibold">Acknowledge</td>
                      <td className="px-4 py-3">
                        Long operation accepted, will complete later
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">0x06</td>
                      <td className="px-4 py-3 font-semibold">
                        Slave Device Busy
                      </td>
                      <td className="px-4 py-3">
                        Slave is processing long-duration command
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">0x08</td>
                      <td className="px-4 py-3 font-semibold">
                        Memory Parity Error
                      </td>
                      <td className="px-4 py-3">
                        Parity error in extended memory
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono">0x0A</td>
                      <td className="px-4 py-3 font-semibold">
                        Gateway Path Unavailable
                      </td>
                      <td className="px-4 py-3">
                        Gateway cannot route to target device
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Exception Example with Real CRC
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-3">
                  Request to read non-existent register:
                </p>
                <div className="font-mono text-sm space-y-2">
                  <p className="text-gray-700">
                    Request:{" "}
                    <span className="text-blue-600">01 03 FF FF 00 01</span>{" "}
                    <span className="text-green-600">80 3D</span>
                  </p>
                  <p className="text-gray-700">
                    Response: <span className="text-red-600">01 83 02</span>{" "}
                    <span className="text-green-600">C0 85</span>
                  </p>
                  <p className="text-gray-600 text-xs mt-3">
                    Parsing:
                    <br />• Function 0x83 = 0x03 | 0x80 (MSB set = exception)
                    <br />• Exception code 0x02 = Illegal Data Address
                    <br />• CRC 0xC085 (LSB first: 85 C0) validates the
                    exception response
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-800 font-medium">
                  Implementation Note: Always check the MSB of the function code
                  in responses. If set, parse as exception rather than normal
                  response to avoid misinterpreting the exception code as data.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Modbus TCP/IP: Ethernet Adaptation
              </h2>

              <p className="text-gray-700 mb-4">
                Modbus TCP encapsulates the Modbus protocol data unit (PDU)
                within a TCP/IP frame, adding a Modbus Application Protocol
                (MBAP) header while removing serial-specific elements.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                MBAP Header Structure
              </h3>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Offset
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Field
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Size
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700">
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">0</td>
                      <td className="px-4 py-3 font-mono">Transaction ID</td>
                      <td className="px-4 py-3">2 bytes</td>
                      <td className="px-4 py-3">
                        Client-generated identifier for matching responses
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">2</td>
                      <td className="px-4 py-3 font-mono">Protocol ID</td>
                      <td className="px-4 py-3">2 bytes</td>
                      <td className="px-4 py-3">Always 0x0000 for Modbus</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">4</td>
                      <td className="px-4 py-3 font-mono">Length</td>
                      <td className="px-4 py-3">2 bytes</td>
                      <td className="px-4 py-3">
                        Byte count of remaining fields (Unit ID + PDU)
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">6</td>
                      <td className="px-4 py-3 font-mono">Unit ID</td>
                      <td className="px-4 py-3">1 byte</td>
                      <td className="px-4 py-3">
                        Slave address (1-247, 0xFF=broadcast)
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="px-4 py-3 font-mono">7</td>
                      <td className="px-4 py-3 font-mono">Function Code</td>
                      <td className="px-4 py-3">1 byte</td>
                      <td className="px-4 py-3">Modbus function code</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="px-4 py-3 font-mono">8+</td>
                      <td className="px-4 py-3 font-mono">Data</td>
                      <td className="px-4 py-3">N bytes</td>
                      <td className="px-4 py-3">Function-specific data</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 font-medium mb-2">
                  Length Field Calculation
                </p>
                <p className="text-yellow-800 text-sm">
                  The Length field excludes the Transaction ID and Protocol ID
                  fields. It counts only the Unit ID and PDU bytes. For example,
                  a read request has Length = 6 (1 byte Unit ID + 1 byte
                  Function + 4 bytes data).
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Key Differences from Serial Modbus
              </h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Removed in TCP
                  </h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• CRC/LRC error checking</li>
                    <li>• Silent intervals (frame delimiters)</li>
                    <li>• Start/end markers</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-2">Added in TCP</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• MBAP header (7 bytes)</li>
                    <li>• Transaction ID for multiplexing</li>
                    <li>• Length field for framing</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 font-medium mb-2">
                  Note on Error Checking
                </p>
                <p className="text-blue-800 text-sm">
                  While TCP provides transport-level integrity (checksums,
                  retransmission), it does not guarantee Modbus-level semantic
                  correctness. Implementations should still validate message
                  length, function codes, and data ranges to detect truncated
                  PDUs, byte swaps, or application-level corruption.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Complete TCP Frame Example
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-3 font-semibold">
                  Read 2 holding registers starting at address 0:
                </p>
                <div className="font-mono text-sm space-y-2">
                  <p className="text-gray-700">
                    <span className="text-blue-600">00 01</span> - Transaction
                    ID
                    <br />
                    <span className="text-green-600">00 00</span> - Protocol ID
                    <br />
                    <span className="text-purple-600">00 06</span> - Length (6
                    bytes follow)
                    <br />
                    <span className="text-orange-600">01</span> - Unit ID
                    <br />
                    <span className="text-red-600">03</span> - Function (Read
                    Holding Registers)
                    <br />
                    <span className="text-gray-600">00 00</span> - Start Address
                    <br />
                    <span className="text-gray-600">00 02</span> - Quantity (2
                    registers)
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                TCP Connection Management
              </h3>
              <p className="text-gray-700 mb-4">Modbus TCP typically uses:</p>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">•</span>
                  <span>
                    <strong>Port:</strong> 502 (IANA registered)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">•</span>
                  <span>
                    <strong>Connection Model:</strong> Persistent connections
                    preferred, but short-lived connections supported
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">•</span>
                  <span>
                    <strong>Concurrency:</strong> Multiple simultaneous
                    connections allowed
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">•</span>
                  <span>
                    <strong>Transaction ID:</strong> Enables request/response
                    matching in pipelined operations
                  </span>
                </li>
              </ul>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 font-medium mb-2">
                  Connection management gotcha:
                </p>
                <div className="text-sm text-red-800 space-y-2">
                  <p>
                    <strong>Opening/closing per transaction:</strong> ~50
                    trans/sec max (TCP handshake overhead kills you)
                  </p>
                  <p>
                    <strong>Persistent connection:</strong> 1000+ trans/sec
                    possible
                  </p>
                  <p>
                    <strong>Socket leak scenario:</strong> Forgot to close after
                    timeout → 1024 sockets later, system hangs and you're
                    debugging at 3 AM
                  </p>
                  <p className="font-bold">
                    Best practice: Connection pool with health checks
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 font-medium">
                  Performance: Reuse TCP connections rather than opening/closing
                  for each transaction. Connection establishment overhead can
                  significantly impact polling performance.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Data Encoding and Byte Order
              </h2>

              <p className="text-gray-700 mb-4">
                Understanding data representation is critical for correct
                interpretation of Modbus values.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Register Byte Order (Big-Endian)
              </h3>
              <p className="text-gray-700 mb-4">
                Modbus transmits 16-bit register values in big-endian (network)
                byte order: high byte first, then low byte.
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-2 font-semibold">
                  Example: Value 0x1234
                </p>
                <div className="font-mono text-sm">
                  <p className="text-gray-700">
                    Transmitted as: <span className="text-blue-600">12 34</span>
                  </p>
                  <p className="text-gray-600 text-xs mt-2">
                    Byte 1 (high): 0x12, Byte 2 (low): 0x34
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                32-Bit Values: Word Order Variations
              </h3>
              <p className="text-gray-700 mb-4">
                When encoding 32-bit values across two registers, four possible
                word orders exist. The Modbus specification doesn't mandate one,
                leading to vendor variations. Common industry terminology:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Format
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Description
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Register Order
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Example (0x12345678)
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Common Vendors
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700 font-mono">
                    <tr className="border-b">
                      <td className="px-4 py-3">AB CD</td>
                      <td className="px-4 py-3">Big-endian word order</td>
                      <td className="px-4 py-3 text-xs">
                        Reg[n]=0x1234, Reg[n+1]=0x5678
                      </td>
                      <td className="px-4 py-3">12 34 56 78</td>
                      <td className="px-4 py-3 text-xs">
                        Schneider, Siemens S7-1200
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">CD AB</td>
                      <td className="px-4 py-3">Little-endian word order</td>
                      <td className="px-4 py-3 text-xs">
                        Reg[n]=0x5678, Reg[n+1]=0x1234
                      </td>
                      <td className="px-4 py-3">56 78 12 34</td>
                      <td className="px-4 py-3 text-xs">
                        Allen-Bradley, Mitsubishi
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3">BA DC</td>
                      <td className="px-4 py-3">
                        Big-endian word, byte-swapped
                      </td>
                      <td className="px-4 py-3 text-xs">
                        Reg[n]=0x3412, Reg[n+1]=0x7856
                      </td>
                      <td className="px-4 py-3">34 12 78 56</td>
                      <td className="px-4 py-3 text-xs">Some Modicon legacy</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">DC BA</td>
                      <td className="px-4 py-3">
                        Little-endian word, byte-swapped
                      </td>
                      <td className="px-4 py-3 text-xs">
                        Reg[n]=0x7856, Reg[n+1]=0x3412
                      </td>
                      <td className="px-4 py-3">78 56 34 12</td>
                      <td className="px-4 py-3 text-xs">Rare, but exists</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> The format names (AB CD, CD AB, etc.)
                  refer to byte positions in the 32-bit value, where A=MSB,
                  D=LSB. Each register still transmits its 16 bits in big-endian
                  order per Modbus spec—the variation is in which register comes
                  first and whether bytes within registers are swapped.
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800 font-medium mb-2">
                  Critical: Always consult device documentation for 32-bit value
                  encoding
                </p>
                <p className="text-yellow-800 text-sm">
                  Incorrect byte/word order interpretation will produce
                  completely wrong values. When in doubt, test with known values
                  to determine the encoding scheme.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Floating-Point Values
              </h3>
              <p className="text-gray-700 mb-4">
                IEEE 754 single-precision floats (32-bit) are commonly stored
                across two consecutive registers. The same word order ambiguity
                applies:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-2 font-semibold">
                  Example: Float value 123.456
                </p>
                <div className="font-mono text-sm space-y-2">
                  <p className="text-gray-700">
                    IEEE 754 representation:{" "}
                    <span className="text-blue-600">0x42F6E979</span>
                  </p>
                  <p className="text-gray-700">
                    Big-endian (AB CD):{" "}
                    <span className="text-green-600">42F6 E979</span>
                  </p>
                  <p className="text-gray-700">
                    Little-endian (CD AB):{" "}
                    <span className="text-orange-600">E979 42F6</span>
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Signed vs Unsigned Integers
              </h3>
              <p className="text-gray-700 mb-4">
                Modbus registers are inherently unsigned 16-bit values
                (0-65535). Signed interpretation uses two's complement:
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
                  <div>
                    <p className="text-gray-700 font-semibold mb-2">
                      Unsigned:
                    </p>
                    <p className="text-gray-700">0x0000 = 0</p>
                    <p className="text-gray-700">0x7FFF = 32767</p>
                    <p className="text-gray-700">0x8000 = 32768</p>
                    <p className="text-gray-700">0xFFFF = 65535</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-semibold mb-2">
                      Signed (Two's Complement):
                    </p>
                    <p className="text-gray-700">0x0000 = 0</p>
                    <p className="text-gray-700">0x7FFF = +32767</p>
                    <p className="text-gray-700">0x8000 = -32768</p>
                    <p className="text-gray-700">0xFFFF = -1</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Implementation Best Practices
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-primary-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Timeout Management
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Implement appropriate timeouts to handle non-responsive
                    slaves:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Serial: 1-5 seconds typical</li>
                    <li>• TCP: 1-3 seconds typical</li>
                    <li>
                      • Adjust based on network latency and slave processing
                      time
                    </li>
                    <li>• Implement exponential backoff for retries</li>
                  </ul>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-3">
                    <p className="text-yellow-800 font-medium text-sm mb-1">
                      Microcontroller-specific:
                    </p>
                    <ul className="space-y-1 text-sm text-yellow-800">
                      <li>
                        • UART buffer size matters: 8-byte buffer can't hold
                        25-byte response
                      </li>
                      <li>• DMA is your friend for RTU timing</li>
                      <li>
                        • Interrupt latency &gt; 1.5 char time = frame
                        corruption
                      </li>
                      <li>
                        • Test with: Continuous polling + high-priority
                        interrupts firing
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Transaction Sequencing
                  </h3>
                  <p className="text-gray-700 mb-2">
                    For serial Modbus, ensure strict request-response
                    sequencing:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Wait for response or timeout before next request</li>
                    <li>• Never pipeline requests on serial links</li>
                    <li>
                      • TCP allows pipelining with transaction ID tracking
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Error Handling Strategy
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Robust implementations handle multiple error scenarios:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>
                      • CRC/LRC validation failures: discard frame, log error
                    </li>
                    <li>
                      • Timeout: retry with backoff, mark device offline after N
                      failures
                    </li>
                    <li>
                      • Exception responses: log exception code, don't retry
                      immediately
                    </li>
                    <li>• Malformed frames: discard, resynchronize</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Polling Optimization
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Minimize network traffic and processing overhead:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>
                      • Read multiple consecutive registers in single request
                    </li>
                    <li>• Adjust polling rates based on data volatility</li>
                    <li>• Use write multiple for batch updates</li>
                    <li>
                      • Consider register grouping to reduce transaction count
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Thread Safety
                  </h3>
                  <p className="text-gray-700 mb-2">
                    For multi-threaded implementations:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Serialize access to each Modbus connection</li>
                    <li>
                      • Use separate connections for concurrent operations
                    </li>
                    <li>• Protect transaction ID generation (TCP)</li>
                    <li>
                      • Consider connection pooling for high-throughput
                      scenarios
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Security Considerations
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Modbus has no built-in security. Implement at other layers:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Use VPNs or firewalls to restrict network access</li>
                    <li>• Implement application-level authentication</li>
                    <li>• Validate all input data ranges</li>
                    <li>• Log all write operations for audit trails</li>
                    <li>
                      • Consider IEC 62351-3 (Modbus Security with TLS) for
                      critical systems
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Performance Characteristics
              </h2>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                RTU vs TCP: Performance Comparison
              </h3>
              <p className="text-gray-700 mb-4">
                Same request (read 10 registers) shows the dramatic difference:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-900 font-bold mb-3">
                    RTU @ 9600 baud:
                  </p>
                  <div className="font-mono text-sm space-y-1 text-gray-700">
                    <p>Request: 8 bytes × 11 bits = 88 bits</p>
                    <p>Response: 25 bytes × 11 bits = 275 bits</p>
                    <p>Silences: 77 bits equivalent time</p>
                    <p className="border-t border-gray-300 pt-2 mt-2">
                      Total: 440 bits = 45.8ms
                    </p>
                    <p className="text-blue-600 font-bold mt-2">
                      → 21.8 trans/sec
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-900 font-bold mb-3">
                    TCP @ 100Mbps LAN:
                  </p>
                  <div className="font-mono text-sm space-y-1 text-gray-700">
                    <p>Network latency: 2ms</p>
                    <p>Processing: 1ms</p>
                    <p className="border-t border-gray-300 pt-2 mt-2">
                      Total: ~3ms
                    </p>
                    <p className="text-green-600 font-bold mt-2">
                      → 333 trans/sec
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-blue-800 font-bold">
                  Order of magnitude difference: 15× faster with TCP
                </p>
                <p className="text-blue-800 text-sm mt-2">
                  This is why modern installations default to Modbus TCP. The
                  serial variants remain for legacy systems and long-distance
                  RS-485 runs where Ethernet isn't practical.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Additional Protocol Variants
              </h2>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Modbus RTU over TCP (Encapsulation)
              </h3>
              <p className="text-gray-700 mb-4">
                Common in cheap gateways. Causes confusion because it looks like
                TCP but has CRC instead of MBAP header. Usually uses port 502
                but non-standard—some vendors use different ports. If you're
                getting CRC errors on what should be TCP, check if it's actually
                RTU-over-TCP.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Modbus over UDP
              </h3>
              <p className="text-gray-700 mb-4">
                Lower overhead than TCP, but connectionless = you handle
                retries. The MBAP header structure remains the same. Rare except
                in embedded systems where every millisecond counts and you're
                willing to implement your own reliability layer.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Modbus Plus
              </h3>
              <p className="text-gray-700 mb-4">
                Proprietary high-speed token-passing network developed by
                Schneider Electric (formerly Modicon). Not compatible with
                standard Modbus RTU/ASCII/TCP—completely different protocol
                despite the name. Requires specialized hardware. Mostly legacy
                at this point, replaced by Modbus TCP in new installations.
              </p>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Summary</h2>

              <p className="text-gray-700 mb-4">
                Implementing Modbus correctly is less about following a spec and
                more about respecting its timing, byte order, and silence—the
                details that make industrial systems hum instead of hang.
              </p>

              <p className="text-gray-700 mb-4 font-semibold">
                The difference between code that "works on the bench" and code
                that survives a factory floor:
              </p>

              <ul className="space-y-2 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">•</span>
                  <span>
                    RTU timing discipline (no 1.6 char gaps mid-frame)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">•</span>
                  <span>Proper CRC byte order (LSB first, always)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">•</span>
                  <span>
                    Word order verification (test with known float values)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">•</span>
                  <span>
                    Exception handling (don't retry illegal address errors)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">•</span>
                  <span>Connection management (reuse, don't recreate)</span>
                </li>
              </ul>

              <p className="text-gray-700 mb-4">
                Master these, and you'll debug Modbus issues in minutes, not
                hours. For practical implementation guidance and monitoring
                tools, see{" "}
                <Link
                  href="/"
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Modbus Connect
                </Link>
                .
              </p>

              <p className="text-gray-600 text-sm">
                For official specifications, refer to{" "}
                <a
                  href="https://modbus.org/specs.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:text-primary-700 underline"
                >
                  Modbus.org
                </a>{" "}
                for the complete protocol documentation.
              </p>
            </div>
          </div>

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
                  Understanding Modbus TCP/IP: A Beginner's Guide
                </h4>
                <p className="text-sm text-gray-600">
                  Start with the basics of Modbus TCP/IP protocol and its
                  applications in industrial automation.
                </p>
              </Link>
              <Link
                href="/blog/getting-started-guide"
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  Getting Started with Modbus Connect
                </h4>
                <p className="text-sm text-gray-600">
                  Learn how to use Modbus Connect for monitoring and debugging
                  your Modbus devices.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
