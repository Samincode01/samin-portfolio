export type Project = {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  challenges: string[];
  futureImprovements: string[];
  image: string;
  banner: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubClientUrl: string;
};

export const projectsData: Project[] = [
  {
    id: "portfolio-website",
    name: "Personal Portfolio Website",
    description:
      "A dark-themed personal portfolio with smooth scrolling, reusable sections, and a pixel-perfect Figma-based layout.",
    detailedDescription:
      "This personal portfolio website was built to present professional identity, skills, and selected work in a clean single-page experience. The interface follows a dark visual system with cyan accents, reusable section components, and carefully matched spacing from the source design. Navigation supports smooth scrolling and active-state highlighting, while project cards connect to dedicated detail pages for deeper context.",
    challenges: [
      "Matching Figma spacing, typography, and accent colors with pixel-level consistency across breakpoints.",
      "Keeping components small and reusable without overengineering the page structure.",
      "Balancing sticky navigation behavior with section scroll-spy accuracy on different screen sizes.",
    ],
    futureImprovements: [
      "Add subtle entrance animations for section content and project cards.",
      "Integrate a lightweight CMS for project updates without code changes.",
      "Expand accessibility audits and keyboard-first navigation refinements.",
    ],
    image: "/images/projects/project-1.png",
    banner: "/images/projects/project-1.png",
    category: "Web Design",
    technologies: ["Next.js", "Tailwind CSS", "DaisyUI", "React Icons"],
    liveUrl: "https://example.com",
    githubClientUrl: "https://github.com/",
  },
  {
    id: "ecommerce-storefront",
    name: "E-Commerce Storefront",
    description:
      "A responsive product browsing experience with clean cards, category filters, and a modern checkout-ready UI structure.",
    detailedDescription:
      "The e-commerce storefront focuses on product discovery and conversion-friendly layout patterns. It includes product cards, category grouping, and a responsive grid that adapts from mobile to desktop. The UI emphasizes clarity, fast scanning, and consistent visual hierarchy so shoppers can evaluate products quickly.",
    challenges: [
      "Designing product cards that remain readable with variable title lengths and badge combinations.",
      "Maintaining filter and category UI clarity without crowding the mobile viewport.",
      "Structuring local product data so the UI can scale to additional categories later.",
    ],
    futureImprovements: [
      "Add cart state, wishlist interactions, and product quick-view modals.",
      "Introduce search and sorting controls for larger catalogs.",
      "Connect checkout flow placeholders to a real payment provider.",
    ],
    image: "/images/projects/project-2.png",
    banner: "/images/projects/project-2.png",
    category: "Web Development",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubClientUrl: "https://github.com/",
  },
  {
    id: "admin-dashboard",
    name: "Analytics Admin Dashboard",
    description:
      "An admin dashboard concept featuring charts-ready panels, summary cards, and a structured sidebar navigation layout.",
    detailedDescription:
      "This analytics dashboard concept organizes operational insights into summary cards, chart panels, and a clear navigation shell. The layout prioritizes scannable metrics and modular panel composition so teams can monitor performance at a glance while keeping the interface calm and structured.",
    challenges: [
      "Creating a dense information layout that still feels breathable and readable.",
      "Aligning panel proportions so charts and KPI cards feel balanced across breakpoints.",
      "Defining reusable panel patterns for future metric modules.",
    ],
    futureImprovements: [
      "Wire live chart libraries with real-time data refresh.",
      "Add role-based views for admin and analyst users.",
      "Include export actions for reports and filtered datasets.",
    ],
    image: "/images/projects/project-3.png",
    banner: "/images/projects/project-3.png",
    category: "Web Development",
    technologies: ["Next.js", "React", "Recharts"],
    liveUrl: "https://example.com",
    githubClientUrl: "https://github.com/",
  },
  {
    id: "task-manager",
    name: "Task Manager App",
    description:
      "A productivity interface for organizing tasks with status groups, priority tags, and a mobile-friendly workspace design.",
    detailedDescription:
      "The task manager app UI helps users organize work by status and priority. Cards, tags, and grouped lists make daily planning intuitive, while the responsive layout keeps the workspace usable on phones and desktops. Local data structures support quick iteration without backend complexity.",
    challenges: [
      "Representing task status and priority clearly without visual clutter.",
      "Preserving usability for create/edit flows on smaller screens.",
      "Designing empty and filled states that still feel intentional.",
    ],
    futureImprovements: [
      "Add drag-and-drop board interactions between status columns.",
      "Support reminders, due dates, and recurring tasks.",
      "Introduce collaborative task sharing and activity history.",
    ],
    image: "/images/projects/project-4.png",
    banner: "/images/projects/project-4.png",
    category: "App UI",
    technologies: ["React", "Local Storage", "CSS"],
    liveUrl: "https://example.com",
    githubClientUrl: "https://github.com/",
  },
  {
    id: "startup-landing",
    name: "Startup Landing Page",
    description:
      "A high-converting landing page layout with hero CTA, feature highlights, and polished section rhythm for product launches.",
    detailedDescription:
      "This startup landing page is structured for product storytelling and conversion. It includes a strong hero CTA, feature sections, and a visual rhythm designed to guide visitors from value proposition to action. The implementation focuses on responsive composition and crisp visual hierarchy.",
    challenges: [
      "Keeping the first viewport focused while still communicating product value quickly.",
      "Balancing marketing copy length with clean section spacing.",
      "Ensuring CTA contrast and hierarchy remain consistent in dark theme.",
    ],
    futureImprovements: [
      "Add social proof modules such as testimonials and logos.",
      "Introduce A/B-ready CTA variants for conversion testing.",
      "Integrate newsletter capture with validation and toast feedback.",
    ],
    image: "/images/projects/project-5.png",
    banner: "/images/projects/project-5.png",
    category: "Web Design",
    technologies: ["HTML", "Tailwind CSS", "JavaScript"],
    liveUrl: "https://example.com",
    githubClientUrl: "https://github.com/",
  },
  {
    id: "blog-cms",
    name: "Blog CMS Frontend",
    description:
      "A content-focused frontend for blog publishing with article cards, category badges, and readable typography hierarchy.",
    detailedDescription:
      "The blog CMS frontend emphasizes readability and content discovery. Article cards, category badges, and typographic hierarchy help readers browse posts efficiently. The UI is prepared for markdown-driven content and modular page sections that can grow with additional editorial features.",
    challenges: [
      "Designing article cards that remain elegant with uneven excerpt lengths.",
      "Maintaining strong reading contrast while preserving the dark portfolio aesthetic.",
      "Organizing category and metadata presentation without visual noise.",
    ],
    futureImprovements: [
      "Add article detail templates with related posts and share actions.",
      "Support author profiles and estimated reading time.",
      "Introduce search and tag filtering for larger content libraries.",
    ],
    image: "/images/projects/project-6.png",
    banner: "/images/projects/project-6.png",
    category: "Web Development",
    technologies: ["Next.js", "Markdown", "DaisyUI"],
    liveUrl: "https://example.com",
    githubClientUrl: "https://github.com/",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projectsData.find((project) => project.id === id);
}
