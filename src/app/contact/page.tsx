import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 bg-[#fdf8ee]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Have questions or want to know more about our services? Get in touch
            — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid gap-16 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Whether you're looking for professional pet training, boarding, or
              simply have a question, our team is here to help.
            </p>

            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:contact@petcare.com"
                  className="text-blue-600 hover:underline"
                >
                  contact@petcare.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +91 90000 00000
              </p>
              <p>
                <span className="font-semibold">Location:</span> Serving locally
                & remotely
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#fdf8ee] rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300
                           focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white rounded-lg
                           font-medium hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
