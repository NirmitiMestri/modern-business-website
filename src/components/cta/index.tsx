import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-blue-600 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Ready to Get Started?
      </h2>

      <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
        Reach out today and let’s discuss how we can help you and your pet.
      </p>

      <Link
        href="/contact"
        className="inline-block px-10 py-4 bg-white text-blue-600 rounded-lg
                   font-medium hover:bg-blue-100 transition"
      >
        Contact Us
      </Link>
    </section>
  );
}
