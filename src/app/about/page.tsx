import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 bg-[#fdf8ee]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are dedicated to providing reliable, compassionate, and
            professional care for pets and their owners.
          </p>
        </div>
      </section>
      {/* Who We Are */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid gap-12 md:grid-cols-2 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              PetCare is a team of experienced professionals passionate about
              helping pets live healthier, happier, and more balanced lives.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We work closely with pet owners to understand their needs and
              provide practical solutions that support long-term well-being.
            </p>
          </div>

          {/* Visual Placeholder */}
          <div className="h-72 bg-blue-100 rounded-2xl flex items-center justify-center">
            <span className="text-blue-600 font-medium">Team / Pet Image</span>
          </div>
        </div>
      </section>
      {/* Our Approach */}
      <section className="py-24 bg-[#fdf8ee]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Our Approach</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold mb-3">Compassion First</h3>
              <p className="text-gray-700">
                Every pet is treated with patience, care, and respect.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Personalized Care</h3>
              <p className="text-gray-700">
                We tailor our services to match each pet’s unique needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Proven Methods</h3>
              <p className="text-gray-700">
                Our techniques are based on experience and positive practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTASection />

      <Footer />
    </>
  );
}
