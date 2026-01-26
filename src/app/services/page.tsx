import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CTASection from "@/components/cta";
import ServiceCard from "@/components/cards/service-card";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 bg-[#fdf8ee]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            We offer a range of professional pet care and training services
            designed to support both pets and their owners.
          </p>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-3">
            <ServiceCard
              title="Dog Training"
              description="Customized obedience and behavior training programs designed to build trust, discipline, and confidence."
            />
            <ServiceCard
              title="Pet Boarding"
              description="Safe, comfortable, and supervised boarding services to ensure your pet feels at home."
            />
            <ServiceCard
              title="Pet Consultation"
              description="One-on-one consultations to address behavioral concerns, nutrition advice, and pet care guidance."
            />
            <ServiceCard
              title="Puppy Training"
              description="Early-stage training focused on socialization, basic commands, and positive behavior development."
            />
            <ServiceCard
              title="Day Care Services"
              description="Structured day care programs that provide social interaction, exercise, and supervision."
            />
            <ServiceCard
              title="Behavior Correction"
              description="Targeted training to help correct unwanted behaviors using humane and effective techniques."
            />
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-24 bg-[#fdf8ee]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold mb-3">1. Consultation</h3>
              <p className="text-gray-700">
                We start by understanding your pet’s needs, behavior, and goals.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                2. Personalized Plan
              </h3>
              <p className="text-gray-700">
                A customized training or care plan is created for best results.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">3. Ongoing Support</h3>
              <p className="text-gray-700">
                Continuous guidance and progress tracking throughout the
                process.
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
