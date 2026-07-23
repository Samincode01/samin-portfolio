import Logo from "@/components/Logo";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import AccentText from "@/components/ui/AccentText";
import SocialIconList from "@/components/ui/SocialIconList";
import ContactCard from "@/components/contact/ContactCard";
import { contactData } from "@/data/contactData";

export default function Contact() {
  return (
    <Section id="contact" aria-labelledby="contact-heading">
      <SectionHeading id="contact-heading" prefix="Contact" accent="Me" />

      <div className="grid grid-cols-1 items-start gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="min-w-0">
          <Logo />

          <p className="mt-5 max-w-md text-sm leading-7 text-[#9ca3af] sm:mt-6 sm:text-base sm:leading-8">
            {contactData.message}
          </p>

          <div className="mt-7 sm:mt-8">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Social Profiles
            </p>
            <SocialIconList
              socials={contactData.socials}
              itemClassName="h-11 w-11 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(0,238,255,0.45)]"
            />
          </div>
        </div>

        <div className="min-w-0 space-y-6 sm:space-y-7">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white sm:text-xl">
              Direct <AccentText>Contact</AccentText>
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {contactData.methods.map((method) => (
                <ContactCard
                  key={method.id}
                  label={method.label}
                  value={method.value}
                  href={method.href}
                  icon={method.icon}
                  external={method.external}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
