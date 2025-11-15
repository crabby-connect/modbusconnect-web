import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/icon.png"
                alt="Modbus Connect"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-white font-bold">Modbus Connect</span>
            </div>
            <p className="text-sm">
              Modern Modbus monitoring tool by Crabby, indie developer.
            </p>
          </div>
          <div>
            <div className="text-white font-semibold mb-4">Product</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/features" className="hover:text-white transition">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-white transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/download" className="hover:text-white transition">
                  Download
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-4">Resources</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-white transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="hover:text-white transition">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-white font-semibold mb-4">Legal</div>
            <p className="text-sm">
              Software provided as-is without warranty of any kind. Use at your
              own risk.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2025 Modbus Connect by Crabby. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
