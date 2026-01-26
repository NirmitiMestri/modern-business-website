import ServiceCard from "@/components/cards/service-card";

export function ServicesPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Services</h2>

        <div className="grid gap-8 md:grid-cols-3">
          <ServiceCard
            title="Dog Training"
            description="Professional obedience and behavior training tailored to each dog."
          />
          <ServiceCard
            title="Pet Boarding"
            description="Safe and comfortable boarding facilities with dedicated care."
          />
          <ServiceCard
            title="Pet Consultation"
            description="Expert guidance for new and existing pet parents."
          />
        </div>
      </div>
    </section>
  );
}
