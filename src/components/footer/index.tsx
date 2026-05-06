import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-bold text-blue-600">PetCare</h3>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            Providing professional pet care and training services with a focus
            on trust, compassion, and results.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-800">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-sm font-semibold mb-4 text-gray-800">Contact</h4>
          <p className="text-sm text-gray-600">
            Email:{" "}
            <a
              href="mailto:contact@petcare.com"
              className="text-blue-600 hover:underline"
            >
              contact@petcare.com
            </a>
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Serving locally & remotely
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} PetCare. All rights reserved.
      </div>
    </footer>
  );
}
