import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/services/ServiceCard";
import { servicesData } from "@/data/services";

export default function Services() {
  return (
    <Section id="services" aria-labelledby="services-heading">
      <SectionHeading id="services-heading" prefix="My" accent="Services" />
      <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            featured={service.featured}
            href={service.href}
          />
        ))}
      </div>
    </Section>
  );
}
