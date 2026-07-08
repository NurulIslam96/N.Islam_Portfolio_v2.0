export const PROFILE = {
  name: "Md. Nurul Islam",
  role: "MERN Stack Developer",
  roles: [
    "MERN Stack Developer",
    "React Engineer",
    "Node.js Developer",
    "Frontend Craftsman",
  ],
  location: "Dhaka, Bangladesh",
  phone: "+880 1997-*****1",
  email: "nurul.islam96@aol.com",
  resume: "/resume.pdf",
  photo: "/profile.jpg",
  socials: {
    github: "https://github.com/NurulIslam96",
    linkedin: "https://www.linkedin.com/in/md-nurul-islam-29452a257/",
    facebook: "https://www.facebook.com/nurul.islam.3273/",
  },
};

export const SKILLS = [
  { name: "html5", ver: "^5.0.0" },
  { name: "css", ver: "^3.0.0" },
  { name: "tailwindcss", ver: "^3.3.0" },
  { name: "bootstrap", ver: "^5.3.0" },
  { name: "react", ver: "^18.2.0" },
  { name: "node", ver: "^18.16.0" },
  { name: "express", ver: "^4.18.0" },
  { name: "mongodb", ver: "^6.0.0" },
];

export const PROJECTS = [
  {
    slug: "buytop",
    file: "buytop.jsx",
    name: "BuyTop",
    glow: "#8b5cf6",
    gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
    thumbnail: "/projects/buytop/thumb.jpg",
    images: ["/projects/buytop/1.jpg", "/projects/buytop/2.jpg", "/projects/buytop/3.jpg"],
    tagline: "Marketplace with role-based dashboards and CRUD everywhere it matters.",
    description:
      "A full MERN marketplace where sellers list products, buyers browse and purchase, and admins keep the whole system honest. Sign-in works with Google, and every dashboard action maps to a real permission.",
    features: [
      "Mobile & tablet responsive layouts",
      "Role-based dashboards for admin, seller and buyer",
      "Sellers add and advertise products",
      "Buyers can purchase or report a listing",
      "Admin verifies and manages every user",
      "Stripe-powered checkout",
    ],
    tech: [
      "React",
      "Tailwind",
      "MongoDB",
      "Firebase Auth",
      "JWT",
      "Express",
      "Axios",
      "React Query",
      "Context API",
      "Stripe",
    ],
    live: "https://buy-top-client.web.app",
    client: "https://github.com/NurulIslam96/BuyTop-Client",
    server:
      "https://github.com/programming-hero-web-course-4/b612-used-products-resale-server-side-NurulIslam96",
  },
  {
    slug: "dentisia",
    file: "dentisia.jsx",
    name: "Dentisia",
    glow: "#22d3ee",
    gradient: "linear-gradient(135deg, #22d3ee, #6366f1)",
    thumbnail: "/projects/dentisia/thumb.jpg",
    images: ["/projects/dentisia/1.jpg", "/projects/dentisia/2.jpg", "/projects/dentisia/3.jpg"],
    tagline: "Service reviews for an independent dental practice.",
    description:
      "Built around a single dentist's services and the reviews patients leave for them. Any visitor can also add their own service listing, keeping the catalog community-driven rather than admin-only.",
    features: [
      "Firebase authentication",
      "Add, edit and delete your own reviews",
      "Reviews sorted by timestamp",
      "Image zoom on click",
      "Custom 404 page",
      "Scroll-triggered animation",
    ],
    tech: ["React", "Tailwind", "MongoDB", "Firebase", "JWT", "AOS", "React Router"],
    live: "https://dentisia-client-side.web.app/",
    client: "https://github.com/NurulIslam96/Dentisia-ServiceAdd-Client",
    server:
      "https://github.com/Porgramming-Hero-web-course/b6a11-service-review-server-side-NurulIslam96",
  },
  {
    slug: "learning-point",
    file: "learning-point.jsx",
    name: "Learning Point",
    glow: "#fbbf24",
    gradient: "linear-gradient(135deg, #fbbf24, #ec4899)",
    thumbnail: "/projects/learning-point/thumb.jpg",
    images: [
      "/projects/learning-point/1.jpg",
      "/projects/learning-point/2.jpg",
      "/projects/learning-point/3.jpg",
    ],
    tagline: "An e-learning platform built around enrollment, not just video.",
    description:
      "Learners browse courses, enroll in the ones that fit, and unlock premium material as they go. Course summaries can be exported to PDF for offline study.",
    features: [
      "Light / dark mode toggle",
      "Swiper-powered course carousels",
      "Firebase authentication",
      "PDF export for course summaries",
      "Custom 404 page",
      "Cross-platform, fully responsive",
    ],
    tech: ["React", "Tailwind", "MongoDB", "Firebase", "React-to-PDF", "Swiper"],
    live: "https://learning-point-client-26788.web.app/",
    client:
      "https://github.com/programming-hero-web-course1/b610-learning-platform-client-side-NurulIslam96",
    server:
      "https://github.com/programming-hero-web-course1/b610-lerning-platform-server-side-NurulIslam96",
  },
];
