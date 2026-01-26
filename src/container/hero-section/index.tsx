import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-24 bg-[#fdf8ee]">
      <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Reliable Care & Training <br /> for Your Pets
          </h1>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            We help pet owners build stronger relationships with their pets
            through professional training, care, and guidance.
          </p>

          <div className="flex gap-4">
            <Link
              href="/services"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg
                         hover:bg-blue-700 transition"
            >
              Our Services
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 border border-blue-600 text-blue-600 rounded-lg
                         hover:bg-blue-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Visual (Placeholder) */}
        <div className="h-80 bg-blue-100 rounded-2xl flex items-center justify-center">
          <span className="text-blue-600 font-medium">
            Image / Illustration
          </span>
        </div>
      </div>
    </section>
  );
}
