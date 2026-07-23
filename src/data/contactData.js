import { socialsData } from "@/data/socials";

export const contactData = {
  message:
    "Feel free to reach out for collaborations, freelance opportunities, or just to say hello. I’m always open to discussing new ideas and meaningful projects.",
  methods: [
    {
      id: "email",
      label: "Email Address",
      value: "SAMIN.mia@example.com",
      href: "mailto:SAMIN.mia@example.com",
      icon: "email",
      external: false,
    },
    {
      id: "phone",
      label: "Phone Number",
      value: "+880 1700-000000",
      href: "tel:+8801700000000",
      icon: "phone",
      external: false,
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      value: "+880 1700-000000",
      href: "https://wa.me/8801700000000",
      icon: "whatsapp",
      external: true,
    },
  ],
  socials: socialsData,
};
