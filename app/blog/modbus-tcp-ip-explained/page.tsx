import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Understanding Modbus TCP/IP Protocol: Complete Beginner's Guide | Modbus Connect",
  description:
    "Comprehensive guide to Modbus TCP/IP protocol for industrial automation. Learn how Modbus works, register types, function codes, and practical applications with examples.",
  keywords:
    "Modbus TCP/IP explained, Modbus protocol tutorial, industrial communication protocol, Modbus register types, Modbus function codes, SCADA protocol guide",
  alternates: {
    canonical: "https://modbusconnect.com/blog/modbus-tcp-ip-explained",
  },
  openGraph: {
    title: "Understanding Modbus TCP/IP Protocol: Complete Beginner's Guide",
    description:
      "Learn everything about Modbus TCP/IP protocol - how it works, register types, function codes, and practical applications.",
    url: "https://modbusconnect.com/blog/modbus-tcp-ip-explained",
    type: "article",
    publishedTime: "2025-11-08T00:00:00Z",
    authors: ["Crabby"],
  },
};

export default function ModbusTcpIpExplained() {
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
              <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                Technical
              </span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                November 8, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />8 min read
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Understanding Modbus TCP/IP: A Complete Guide for Beginners
            </h1>
            <p className="text-xl text-gray-600">
              Everything you need to know about the Modbus TCP/IP protocol, from
              basic concepts to practical applications in industrial automation.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                Are you working with industrial automation systems and keep
                hearing about "Modbus TCP/IP"? Maybe you're an engineer tasked
                with monitoring PLC data, or a technician trying to troubleshoot
                communication issues. Understanding Modbus TCP/IP is essential
                for anyone working in industrial automation.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In this comprehensive guide, we'll demystify Modbus TCP/IP,
                explain how it works, and show you practical applications. By
                the end, you'll have a solid understanding of this fundamental
                industrial protocol.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What is Modbus TCP/IP?
              </h2>

              <p className="text-gray-700 mb-4">
                Modbus TCP/IP is an industrial communication protocol that
                allows devices to exchange data over Ethernet networks. Think of
                it as a common language that lets PLCs, sensors, HMIs, and other
                industrial equipment talk to each other.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                A Brief History
              </h3>
              <p className="text-gray-700 mb-4">
                Originally developed by Modicon (now Schneider Electric) in 1979
                for serial communication (Modbus RTU), the protocol was adapted
                for TCP/IP networks in 1999. This evolution made Modbus
                compatible with modern Ethernet infrastructure while maintaining
                its simplicity and reliability.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Why Modbus TCP/IP is Popular
              </h3>
              <ul className="space-y-2 mb-4 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">•</span>
                  <span>
                    <strong>Open Standard:</strong> Free to use, no licensing
                    fees or proprietary restrictions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">•</span>
                  <span>
                    <strong>Simple Architecture:</strong> Easy to implement and
                    troubleshoot
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">•</span>
                  <span>
                    <strong>Wide Compatibility:</strong> Supported by thousands
                    of devices from hundreds of manufacturers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">•</span>
                  <span>
                    <strong>Ethernet-Based:</strong> Uses standard TCP/IP
                    networking - no special hardware required
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 font-bold mr-2">•</span>
                  <span>
                    <strong>Proven Reliability:</strong> Decades of use in
                    mission-critical applications
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How Modbus TCP/IP Works
              </h2>

              <p className="text-gray-700 mb-4">
                Modbus TCP/IP uses a client-server (also called master-slave)
                architecture. Here's how communication flows:
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  The Communication Process
                </h3>
                <ol className="space-y-3 text-gray-700">
                  <li>
                    <strong>1. Client Sends Request</strong> → The client
                    (master) initiates communication by sending a request
                  </li>
                  <li>
                    <strong>2. Server Receives Request</strong> → The server
                    (slave) receives and validates the request
                  </li>
                  <li>
                    <strong>3. Server Processes Request</strong> → The server
                    reads or writes the requested data
                  </li>
                  <li>
                    <strong>4. Server Sends Response</strong> → The server sends
                    back the data or confirmation
                  </li>
                  <li>
                    <strong>5. Client Receives Response</strong> → The client
                    processes the response
                  </li>
                </ol>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Key Components
              </h3>
              <div className="space-y-4 mb-6">
                <div className="border-l-4 border-primary-600 pl-4">
                  <p className="font-semibold text-gray-900">Client (Master)</p>
                  <p className="text-gray-600">
                    Initiates requests for data. Examples: SCADA systems, HMIs,
                    monitoring software like{" "}
                    <Link
                      href="/"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      Modbus Connect
                    </Link>
                  </p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <p className="font-semibold text-gray-900">Server (Slave)</p>
                  <p className="text-gray-600">
                    Responds to requests with data. Examples: PLCs, sensors,
                    actuators, variable frequency drives
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-4">
                  <p className="font-semibold text-gray-900">TCP/IP Network</p>
                  <p className="text-gray-600">
                    Standard Ethernet infrastructure. Uses port 502 by default
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800 font-medium">
                  💡 Fun Fact: Modbus TCP/IP can support up to 247 devices on a
                  single network, each with a unique device ID (1-247).
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Modbus Function Codes
              </h2>

              <p className="text-gray-700 mb-4">
                Function codes tell the server what operation to perform. Here
                are the most commonly used ones:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Code
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Function
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-700">
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">01 (0x01)</td>
                      <td className="px-4 py-3">Read Coils</td>
                      <td className="px-4 py-3">
                        Read 1-2000 coils (digital outputs)
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">02 (0x02)</td>
                      <td className="px-4 py-3">Read Discrete Inputs</td>
                      <td className="px-4 py-3">Read 1-2000 discrete inputs</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">03 (0x03)</td>
                      <td className="px-4 py-3">Read Holding Registers</td>
                      <td className="px-4 py-3">
                        Read 1-125 holding registers
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">04 (0x04)</td>
                      <td className="px-4 py-3">Read Input Registers</td>
                      <td className="px-4 py-3">Read 1-125 input registers</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">05 (0x05)</td>
                      <td className="px-4 py-3">Write Single Coil</td>
                      <td className="px-4 py-3">Write one coil (ON/OFF)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">06 (0x06)</td>
                      <td className="px-4 py-3">Write Single Register</td>
                      <td className="px-4 py-3">Write one holding register</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono">15 (0x0F)</td>
                      <td className="px-4 py-3">Write Multiple Coils</td>
                      <td className="px-4 py-3">Write 1-1968 coils</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-mono">16 (0x10)</td>
                      <td className="px-4 py-3">Write Multiple Registers</td>
                      <td className="px-4 py-3">
                        Write 1-123 holding registers
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-yellow-800 font-medium">
                  ⚠️ Note: Not all devices support all function codes. Always
                  check your device's documentation to see which functions are
                  available.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Understanding Modbus Register Types
              </h2>

              <p className="text-gray-700 mb-4">
                Modbus organizes data into four types of registers.
                Understanding these is crucial for working with Modbus devices.
              </p>

              <div className="space-y-6">
                <div className="border-2 border-primary-200 rounded-lg p-6 bg-primary-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    1. Coils (00001-09999)
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Type:</strong> Boolean (ON/OFF, True/False, 1/0)
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Access:</strong> Read/Write
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Use Cases:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Control motors (start/stop)</li>
                    <li>Control valves (open/close)</li>
                    <li>Control lights or indicators</li>
                    <li>Any digital output control</li>
                  </ul>
                </div>

                <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    2. Discrete Inputs (10001-19999)
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Type:</strong> Boolean (ON/OFF, True/False, 1/0)
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Access:</strong> Read-Only
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Use Cases:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Read limit switch states</li>
                    <li>Read push button states</li>
                    <li>Read proximity sensor states</li>
                    <li>Any digital input monitoring</li>
                  </ul>
                </div>

                <div className="border-2 border-green-200 rounded-lg p-6 bg-green-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    3. Input Registers (30001-39999)
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Type:</strong> 16-bit integer (0-65535)
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Access:</strong> Read-Only
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Use Cases:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Read temperature sensor values</li>
                    <li>Read pressure sensor values</li>
                    <li>Read flow meter readings</li>
                    <li>Any analog input monitoring</li>
                  </ul>
                </div>

                <div className="border-2 border-yellow-200 rounded-lg p-6 bg-yellow-50">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    4. Holding Registers (40001-49999)
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Type:</strong> 16-bit integer (0-65535)
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Access:</strong> Read/Write
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Use Cases:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Configuration parameters</li>
                    <li>Setpoints (temperature, speed, etc.)</li>
                    <li>Control values</li>
                    <li>Any read/write numeric data</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 font-medium mb-2">
                  📝 Important Note About Addressing:
                </p>
                <p className="text-gray-700 text-sm">
                  The address ranges shown above (00001-09999, etc.) are the
                  "Modbus address" format. Many devices use "register address"
                  format which starts at 0. For example, Modbus address 40001 =
                  register address 0. Always check your device documentation!
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Practical Example: Reading Temperature Data
              </h2>

              <p className="text-gray-700 mb-4">
                Let's walk through a real-world example of reading temperature
                data from a sensor.
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Scenario
              </h3>
              <p className="text-gray-700 mb-4">
                You have a temperature sensor at IP address 192.168.1.100,
                device ID 1. According to the manual, temperature data is stored
                in input register 30001 (register address 0).
              </p>

              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Using Modbus Connect
              </h3>
              <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700">
                <li>
                  Open{" "}
                  <Link
                    href="/download"
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Modbus Connect
                  </Link>
                </li>
                <li>Add device: IP 192.168.1.100, Device ID 1</li>
                <li>
                  Create monitoring session:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Register Type: Input Registers</li>
                    <li>
                      Starting Address: 30001 (or 0 if using register
                      addressing)
                    </li>
                    <li>Number of Registers: 1</li>
                    <li>Polling Interval: 1000ms (1 second)</li>
                  </ul>
                </li>
                <li>Click "Start Monitoring"</li>
                <li>View real-time temperature data in the table and chart</li>
              </ol>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 font-medium">
                  ✨ Pro Tip: If the value seems wrong, check if your device
                  uses scaling. For example, a value of 235 might represent
                  23.5°C (divide by 10).
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Common Modbus TCP/IP Issues and Solutions
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Issue 1: Connection Timeout
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-red-600">Symptoms:</strong> Client
                    can't connect to server, timeout errors
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-blue-600">Common Causes:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
                    <li>Wrong IP address or subnet</li>
                    <li>Device is offline or powered off</li>
                    <li>Firewall blocking port 502</li>
                    <li>Network cable disconnected</li>
                  </ul>
                  <p className="text-gray-700">
                    <strong className="text-green-600">Solutions:</strong>{" "}
                    Verify IP address with ping, check device power, ensure
                    firewall allows TCP port 502, verify physical connections
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Issue 2: Illegal Data Address Error
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-red-600">Symptoms:</strong>{" "}
                    Exception code 02 returned
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-blue-600">Common Causes:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
                    <li>Trying to read a register that doesn't exist</li>
                    <li>Wrong register type selected</li>
                    <li>Address out of device's supported range</li>
                  </ul>
                  <p className="text-gray-700">
                    <strong className="text-green-600">Solutions:</strong> Check
                    device's register map documentation, verify register type
                    (coil vs register), ensure address is within valid range
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Issue 3: Illegal Function Error
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-red-600">Symptoms:</strong>{" "}
                    Exception code 01 returned
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-blue-600">Common Causes:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
                    <li>Device doesn't support the requested function code</li>
                    <li>Trying to write to read-only registers</li>
                  </ul>
                  <p className="text-gray-700">
                    <strong className="text-green-600">Solutions:</strong> Check
                    device documentation for supported function codes, use
                    read-only functions for input registers and discrete inputs
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Issue 4: Data Looks Wrong
                  </h3>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-red-600">Symptoms:</strong> Values
                    are present but don't make sense
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong className="text-blue-600">Common Causes:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-2 ml-4">
                    <li>Wrong data type interpretation</li>
                    <li>Scaling factor not applied</li>
                    <li>Byte order (endianness) mismatch</li>
                    <li>Reading wrong register</li>
                  </ul>
                  <p className="text-gray-700">
                    <strong className="text-green-600">Solutions:</strong> Check
                    if value needs scaling (e.g., divide by 10), verify byte
                    order settings, confirm you're reading the correct register
                    address
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Best Practices for Modbus TCP/IP
              </h2>

              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3">1️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Document Everything
                    </h3>
                    <p className="text-gray-700">
                      Keep a register map for each device. Note addresses, data
                      types, scaling factors, and descriptions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-3">2️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Use Appropriate Polling Intervals
                    </h3>
                    <p className="text-gray-700">
                      Don't poll faster than necessary. Fast-changing data might
                      need 100ms, but configuration values can be read every few
                      seconds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-3">3️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Implement Error Handling
                    </h3>
                    <p className="text-gray-700">
                      Always check for exception responses and handle timeouts
                      gracefully. Log errors for troubleshooting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-3">4️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Use Descriptive Names
                    </h3>
                    <p className="text-gray-700">
                      Label devices and registers with meaningful names. "Tank 3
                      Level Sensor" beats "Device 7 Register 30005".
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-3">5️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Test Before Deployment
                    </h3>
                    <p className="text-gray-700">
                      Use tools like{" "}
                      <Link
                        href="/"
                        className="text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Modbus Connect
                      </Link>{" "}
                      to test communication before integrating into your SCADA
                      system.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-3">6️⃣</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      Secure Your Network
                    </h3>
                    <p className="text-gray-700">
                      Modbus TCP/IP has no built-in security. Use VLANs,
                      firewalls, and VPNs to protect your industrial network.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 border border-primary-200 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Conclusion
              </h2>

              <p className="text-gray-700 mb-4">
                Modbus TCP/IP is a fundamental protocol in industrial
                automation, and understanding it opens doors to effectively
                working with countless industrial devices. From its simple
                client-server architecture to its four register types and
                various function codes, Modbus provides a reliable way to
                exchange data in industrial environments.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Key Takeaways
              </h3>
              <ul className="space-y-2 mb-6 text-gray-700">
                <li>
                  • Modbus TCP/IP uses client-server architecture over standard
                  Ethernet
                </li>
                <li>
                  • Four register types: Coils, Discrete Inputs, Input
                  Registers, Holding Registers
                </li>
                <li>
                  • Function codes specify operations (read, write, single,
                  multiple)
                </li>
                <li>
                  • Always check device documentation for supported features and
                  register maps
                </li>
                <li>• Use proper tools for testing and monitoring</li>
              </ul>

              <div className="bg-white rounded-lg p-6">
                <p className="text-gray-900 font-semibold mb-2">
                  Ready to start working with Modbus devices?
                </p>
                <Link
                  href="/download"
                  className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-medium"
                >
                  Download Modbus Connect Free
                </Link>
                <p className="text-gray-600 text-sm mt-3">
                  Professional Modbus monitoring with device discovery,
                  real-time charting, and protocol logging.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Related Articles
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/blog/getting-started-guide"
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  Getting Started with Modbus Connect
                </h4>
                <p className="text-sm text-gray-600">
                  Step-by-step guide to setting up and using Modbus Connect for
                  device monitoring.
                </p>
              </Link>
              <Link
                href="/blog/v0-2-0-release"
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
              >
                <h4 className="font-semibold text-gray-900 mb-2">
                  Modbus Connect v0.2.0 Release
                </h4>
                <p className="text-sm text-gray-600">
                  Discover the latest features and improvements in the newest
                  version.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
