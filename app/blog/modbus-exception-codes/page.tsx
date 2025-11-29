import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Modbus Exception Codes — A Practical Engineer's Guide | Modbus Connect",
  description:
    "Complete guide to Modbus exception codes (0x01-0x0B). Learn why each code occurs, what it means electrically or logically, and the most effective ways to resolve issues in the field.",
  keywords:
    "Modbus exception codes, Modbus error codes, illegal function, illegal data address, slave device failure, Modbus troubleshooting, Modbus TCP errors, industrial automation debugging",
  alternates: {
    canonical: "https://modbusconnect.com/blog/modbus-exception-codes",
  },
  openGraph: {
    title: "Modbus Exception Codes — A Practical Engineer's Guide",
    description:
      "When a device returns a Modbus exception, it's telling you exactly why it rejected your request. Learn to interpret these codes and pinpoint root causes in seconds.",
    url: "https://modbusconnect.com/blog/modbus-exception-codes",
    type: "article",
    publishedTime: "2025-11-29T00:00:00Z",
    authors: ["Crabby"],
  },
};

export default function ModbusExceptionCodes() {
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
              <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium">
                Technical Reference
              </span>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                November 29, 2025
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                12 min read
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Modbus Exception Codes — A Practical Engineer's Guide
            </h1>
            <p className="text-xl text-gray-600">
              When a device returns a Modbus exception, it's not a communication
              failure—it's the device telling you exactly why it rejected your
              request. Interpret these codes correctly and pinpoint root causes
              in seconds.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            {/* Quick Navigation Index */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Quick Navigation
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <a
                  href="#code-0x01"
                  className="text-primary-600 hover:underline"
                >
                  0x01 — Illegal Function
                </a>
                <a
                  href="#code-0x02"
                  className="text-primary-600 hover:underline"
                >
                  0x02 — Illegal Data Address
                </a>
                <a
                  href="#code-0x03"
                  className="text-primary-600 hover:underline"
                >
                  0x03 — Illegal Data Value
                </a>
                <a
                  href="#code-0x04"
                  className="text-primary-600 hover:underline"
                >
                  0x04 — Slave Device Failure
                </a>
                <a
                  href="#code-0x05"
                  className="text-primary-600 hover:underline"
                >
                  0x05 — Acknowledge
                </a>
                <a
                  href="#code-0x06"
                  className="text-primary-600 hover:underline"
                >
                  0x06 — Slave Device Busy
                </a>
                <a
                  href="#code-0x07"
                  className="text-primary-600 hover:underline"
                >
                  0x07 — Negative Acknowledge
                </a>
                <a
                  href="#code-0x08"
                  className="text-primary-600 hover:underline"
                >
                  0x08 — Memory Parity Error
                </a>
                <a
                  href="#code-0x0A"
                  className="text-primary-600 hover:underline"
                >
                  0x0A — Gateway Path Unavailable
                </a>
                <a
                  href="#code-0x0B"
                  className="text-primary-600 hover:underline"
                >
                  0x0B — Gateway Target Failed
                </a>
                <a
                  href="#root-causes"
                  className="text-primary-600 hover:underline"
                >
                  Common Root Causes
                </a>
                <a
                  href="#cheat-sheet"
                  className="text-primary-600 hover:underline"
                >
                  Cheat Sheet
                </a>
              </div>
            </div>

            {/* Introduction */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
              <p className="text-gray-700">
                This guide focuses on what matters in the field: why each code
                occurs, what it means electrically or logically, and the most
                effective ways to resolve it.
              </p>
            </div>

            {/* Standard Exception Codes */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Standard Exception Codes (0x01–0x0B)
              </h2>

              {/* 0x01 */}
              <div
                id="code-0x01"
                className="mb-6 pb-6 border-b border-gray-200 scroll-mt-20"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  0x01 — Illegal Function
                </h3>
                <p className="text-gray-700 mb-3">
                  The device received a valid Modbus frame, but the function
                  code is unsupported or disabled.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-semibold">Typical Causes:</span> Using a
                  write function on a read-only register set • Device firmware
                  does not implement the requested function • Function is
                  restricted in certain operating modes
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Fix:</span> Verify the device
                  supports that function. Confirm you're addressing the correct
                  register type (Input, Holding, Coil, Discrete Input).
                </p>
              </div>

              {/* 0x02 */}
              <div
                id="code-0x02"
                className="mb-6 pb-6 border-b border-gray-200 scroll-mt-20"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  0x02 — Illegal Data Address
                </h3>
                <p className="text-gray-700 mb-3">
                  You asked for a register that does not exist or falls outside
                  the valid block boundary.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-semibold">Typical Causes:</span>{" "}
                  Requesting an address beyond the available map • Off-by-one
                  mismatch between software and documentation • Requesting a
                  length that extends past the end of a block • Vendor-specific
                  segmentation
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Fix:</span> Validate the
                  address against the device's actual register map. Adjust for
                  zero-based vs. one-based documentation. Reduce the quantity
                  field if the range spills over.
                </p>
              </div>

              {/* 0x03 */}
              <div
                id="code-0x03"
                className="mb-6 pb-6 border-b border-gray-200 scroll-mt-20"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  0x03 — Illegal Data Value
                </h3>
                <p className="text-gray-700 mb-3">
                  The value is formatted correctly but violates a constraint
                  inside the device.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-semibold">Typical Causes:</span> Writing
                  outside the allowable range • Incorrectly formatted multi-word
                  values (float, DINT) • Endianness/byte-swapping mismatches •
                  Parameter locked by mode or state
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Fix:</span> Confirm valid
                  ranges and data types. Check byte/word order settings ("ABCD,"
                  "CDAB," etc.). Ensure the device is in the correct mode.
                </p>
              </div>

              {/* 0x04 */}
              <div
                id="code-0x04"
                className="mb-6 pb-6 border-b border-gray-200 scroll-mt-20"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  0x04 — Slave Device Failure
                </h3>
                <p className="text-gray-700 mb-3">
                  The device hit an internal fault while attempting to execute
                  the request.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-semibold">Typical Causes:</span>{" "}
                  Corrupted internal memory • Hardware failure • Firmware hang
                  or watchdog event
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Fix:</span> Power-cycle and
                  re-test. Inspect onboard diagnostics or error logs. Replace
                  hardware if the fault repeats.
                </p>
              </div>

              {/* 0x05 */}
              <div
                id="code-0x05"
                className="mb-6 pb-6 border-b border-gray-200 scroll-mt-20"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  0x05 — Acknowledge
                </h3>
                <p className="text-gray-700 mb-3">
                  The device accepted the request but needs extended time to
                  complete it.
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Fix:</span> Increase response
                  timeout in the master. Avoid polling the same device
                  aggressively during long operations (EEPROM writes,
                  calibration routines, etc.).
                </p>
              </div>

              {/* 0x06 */}
              <div
                id="code-0x06"
                className="mb-6 pb-6 border-b border-gray-200 scroll-mt-20"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  0x06 — Slave Device Busy
                </h3>
                <p className="text-gray-700 mb-3">
                  The device is processing a command and cannot accept a new
                  one.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-semibold">Typical Causes:</span>{" "}
                  Excessive poll rate • Slow EEPROM operations • Gateways
                  juggling multiple serial slaves
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Fix:</span> Extend the polling
                  interval. Implement retry logic with a meaningful delay (≥100
                  ms).
                </p>
              </div>

              {/* 0x07 */}
              <div
                id="code-0x07"
                className="mb-6 pb-6 border-b border-gray-200 scroll-mt-20"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  0x07 — Negative Acknowledge
                </h3>
                <p className="text-gray-700 mb-3">
                  The device refuses the command due to its current operating
                  state.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-semibold">Typical Causes:</span> Device
                  in programming/maintenance mode • Safety interlock or
                  permissive blocking remote changes • Parameter write attempts
                  during lockout
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Fix:</span> Check mode/state
                  conditions. Unlock or exit programming states as required.
                </p>
              </div>

              {/* 0x08 */}
              <div
                id="code-0x08"
                className="mb-6 pb-6 border-b border-gray-200 scroll-mt-20"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  0x08 — Memory Parity Error
                </h3>
                <p className="text-gray-700 mb-3">
                  Internal memory parity or CRC failed during a read.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-semibold">Typical Causes:</span>{" "}
                  Electrical noise corrupting memory regions • Actual failing
                  memory devices
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Fix:</span> Inspect grounding,
                  shielding, routing near VFDs or HF noise sources. Expect
                  hardware replacement if errors persist.
                </p>
              </div>

              {/* 0x0A */}
              <div
                id="code-0x0A"
                className="mb-6 pb-6 border-b border-gray-200 scroll-mt-20"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  0x0A — Gateway Path Unavailable (Modbus TCP)
                </h3>
                <p className="text-gray-700 mb-3">
                  The gateway cannot reach the target slave.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-semibold">Typical Causes:</span>{" "}
                  Incorrect routing/mapping configuration • Downstream device
                  unpowered or disconnected
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Fix:</span> Validate the
                  gateway's register map and slave routing table. Confirm
                  downstream devices have power and clean wiring.
                </p>
              </div>

              {/* 0x0B */}
              <div id="code-0x0B" className="mb-6 scroll-mt-20">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  0x0B — Gateway Target Device Failed to Respond (Modbus TCP)
                </h3>
                <p className="text-gray-700 mb-3">
                  The gateway reached the slave but received no response.
                </p>
                <p className="text-gray-600 text-sm mb-2">
                  <span className="font-semibold">Typical Causes:</span> Faulty
                  RS-485 wiring or termination • Serial format mismatch (baud,
                  parity, stop bits) • Slave is overloaded or non-responsive
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">Fix:</span> Check physical
                  wiring, A/B polarity, biasing, and termination. Confirm
                  identical serial settings across gateway and slave.
                </p>
              </div>
            </div>

            {/* Common Root Causes */}
            <div
              id="root-causes"
              className="bg-white rounded-xl p-6 shadow-sm mb-8 scroll-mt-20"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Common Root Causes in Real Installations
              </h2>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  1. Addressing Off-By-One Errors{" "}
                  <span className="text-gray-500 font-normal">
                    (Usually behind 0x02)
                  </span>
                </h3>
                <p className="text-gray-700 mb-2">
                  Documentation often shows 1-based addressing; Modbus frames
                  use 0-based. If the device's manual says a register lives at
                  40001, the protocol expects 0 or 1 depending on the vendor's
                  convention.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Always test adjacent offsets when mappings don't align.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  2. Timing Mismatches{" "}
                  <span className="text-gray-500 font-normal">
                    (Behind 0x06 and 0x05)
                  </span>
                </h3>
                <p className="text-gray-700 mb-2">
                  Many devices—older drives, serial gateways, embedded
                  sensors—cannot handle aggressive polling.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Rule of Thumb: Take the device's processing time and add real
                  margin. 10 ms cycles on gear engineered in the 1990s will
                  absolutely trigger busy codes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  3. Incorrect Byte/Word Ordering{" "}
                  <span className="text-gray-500 font-normal">
                    (Often causes 0x03)
                  </span>
                </h3>
                <p className="text-gray-700 mb-2">
                  Multi-word values (floats, 32-bit integers) must match the
                  device's expected order. A value like 100.0 may be interpreted
                  as an out-of-range integer if the byte order is wrong.
                </p>
                <p className="text-gray-600 text-sm italic">
                  Validate settings: Word swap, Byte swap, Full byte-word
                  permutations (ABCD, CDAB, BADC, etc.)
                </p>
              </div>
            </div>

            {/* Final Notes */}
            <div className="bg-gray-900 rounded-xl p-6 mb-8">
              <h2 className="text-xl font-bold text-white mb-3">Final Notes</h2>
              <p className="text-gray-300">
                These exception codes exist for one reason: the device is
                communicating well enough to complain. That alone tells you the
                wiring and physical layer are mostly intact. Use the code as a
                pointer, not a guess, and you can isolate Modbus issues with far
                less trial-and-error.
              </p>
            </div>

            {/* Cheat Sheet Table */}
            <div
              id="cheat-sheet"
              className="bg-white rounded-xl p-6 shadow-sm mb-8 scroll-mt-20"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Exception Code Cheat Sheet
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                        Code
                      </th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                        Name
                      </th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                        What it Means
                      </th>
                      <th className="border border-gray-300 px-3 py-2 text-left font-semibold">
                        How to Fix It
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-mono">
                        0x01
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        Illegal Function
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        The Master sent a command (Function Code) that the Slave
                        does not support. (e.g., Trying to Write (FC06) to a
                        Read-Only Input Register).
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        1. Check the Manual: Verify the device supports the
                        Function Code you are using.
                        <br />
                        2. Check Register Type: You cannot "Write" to Input
                        Registers (3xxxx) or Discrete Inputs (1xxxx).
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono">
                        0x02
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        Illegal Data Address
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        You requested a register address that does not exist in
                        the Slave device.
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        1. Check the Range: If the device has 100 registers and
                        you ask for Register 101, you get this error.
                        <br />
                        2. The "Offset" Issue: Try subtracting or adding 1 to
                        your address.
                        <br />
                        3. Length: If you read Address 99 with a length of 5,
                        you are trying to read past the end. Reduce the length.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-mono">
                        0x03
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        Illegal Data Value
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        The data sent is technically valid, but not allowed for
                        this specific register.
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        1. Check Data Range: Are you writing 100Hz to a VFD with
                        a max limit of 60Hz?
                        <br />
                        2. Check Data Type: Ensure you aren't writing a 32-bit
                        Float into a 16-bit Integer slot without proper
                        formatting.
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono">
                        0x04
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        Slave Device Failure
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        The Slave received the request but an unrecoverable
                        error occurred while trying to execute it.
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        1. Hard Reset: Power cycle the Slave device.
                        <br />
                        2. Check Internal Faults: Look at the device's physical
                        screen or error logs; the sensor or memory might be
                        damaged.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-mono">
                        0x05
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        Acknowledge
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        "I received your command, but it will take a long time
                        to process. Don't wait for me."
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        Adjust Timeout: Increase the response timeout setting in
                        your Master/Scanner software to prevent a timeout error
                        while the device works.
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono">
                        0x06
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        Slave Device Busy
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        The Slave is currently processing a long-duration
                        command and cannot accept a new one yet.
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        1. Slow Down: Your polling rate is faster than the
                        device's processing speed. Reduce the scan rate.
                        <br />
                        2. Retry Logic: Configure your Master to wait 100ms and
                        retry automatically.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-mono">
                        0x07
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        Negative Acknowledge
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        The Slave cannot perform the program function received.
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        Check State: The device might be in a "Program Mode" or
                        "Maintenance Mode" that locks out remote communication.
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono">
                        0x08
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        Memory Parity Error
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        The Slave detected a parity error in its internal memory
                        while reading the extended file area.
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        1. Interference: Check for high-voltage noise (VFDs)
                        near the comms wiring.
                        <br />
                        2. Hardware: This often indicates corrupted memory in
                        the Slave. The device may need replacement.
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-mono">
                        0x0A
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        Gateway Path Unavailable
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        (Modbus TCP) The Gateway is misconfigured or cannot find
                        the target Slave on its sub-network.
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        1. Check Gateway Config: Ensure the Gateway has the
                        correct mapping for the Slave ID.
                        <br />
                        2. Check Slave Power: The Gateway is alive, but the
                        Slave behind it is likely powered down or disconnected.
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-3 py-2 font-mono">
                        0x0B
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        Gateway Target Device Failed to Respond
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        (Modbus TCP) The Gateway found the Slave, but the Slave
                        isn't replying.
                      </td>
                      <td className="border border-gray-300 px-3 py-2">
                        1. Check Wiring: The connection between the Gateway and
                        the final device is broken.
                        <br />
                        2. Check Baud/Parity: The Gateway and the Slave likely
                        have mismatched Serial settings (e.g., 9600 vs 19200).
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Debug Faster with Modbus Connect
              </h2>
              <p className="text-gray-700 mb-4">
                Modbus Connect shows you exception codes in real-time with
                detailed protocol logging. See exactly what your devices are
                telling you.
              </p>
              <Link
                href="/download"
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition"
              >
                Download Free Beta →
              </Link>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
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
                  href="/blog/getting-started-guide"
                  className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                >
                  <h3 className="font-semibold text-primary-600 mb-1">
                    Getting Started with Modbus Connect: A Complete Guide
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Step-by-step tutorial for setting up and using Modbus
                    Connect for device monitoring.
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
