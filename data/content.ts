export type NavLink = {
  href: string
  label: string
}

export type ExperienceRole = {
  company: string
  location: string
  role: string
  period: string
  bullets: string[]
}

export type Certification = {
  name: string
  issuer: string
  href: string
}

export type Course = {
  title: string
  description: string
}

export const profile = {
  name: 'Valentine Efagene',
  title: 'Senior Software Engineer',
  location: 'Lagos, Nigeria',
  email: 'efagenevalentine@gmail.com',
  phone: '+234 903 436 0573',
  summary:
    'Senior Software Engineer specializing in scalable backend systems, APIs, and cloud infrastructure. 5+ years of experience with TypeScript, AWS, system architecture, and building reliable production software.',
  social: {
    linkedin: 'https://www.linkedin.com/in/valentine-efagene/',
    github: 'https://github.com/Valentine-Efagene',
    youtube: 'https://www.youtube.com/channel/UCOp4pUKPXy7Nsz7XE-ttBWQ',
    email: 'mailto:efagenevalentine@gmail.com',
    whatsapp: 'https://wa.me/+2349034360573',
    twitter: 'https://twitter.com/Valentyne_VEE',
  },
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/education', label: 'Education' },
]

export const experience: ExperienceRole[] = [
  {
    company: 'Turing',
    location: 'USA',
    role: 'Software Engineer',
    period: 'March 2025 — Present',
    bullets: [
      'Implement full-stack TypeScript features and evaluations that improve quality and reliability of AI product outputs.',
      'Ship production-ready solutions quickly, with a strong focus on correctness, edge cases, and maintainable design.',
      'Collaborate across distributed teams to unblock delivery and iterate based on feedback.',
    ],
  },
  {
    company: 'QShelter',
    location: 'Nigeria',
    role: 'Senior Full Stack Developer',
    period: 'November 2023 — Present',
    bullets: [
      'Built web admin experiences and backend APIs for QShelter and federal housing initiatives (MREIF, Renewed Hope), improving operational execution across mortgage and property workflows.',
      'Designed role-based product flows with a granular RBAC authorization system for page and component access, reducing inter-departmental access conflicts by 80%.',
      'Built and maintained microservice-based APIs serving 112,000+ users, with a focus on reliability, clear API contracts, and scalable architecture.',
      'Implemented dashboard analytics used by sales and operations teams to monitor KPIs, contributing to performance improvements of over 70%.',
      'Delivered automated tests and technical documentation (OpenAPI/Swagger, Postman flows, ERDs, sequence diagrams) to speed handoffs and reduce release risk.',
      'Deployed cloud infrastructure with AWS CDK and supported iterative delivery of product and process improvements.',
    ],
  },
  {
    company: 'Jatado',
    location: 'Nigeria',
    role: 'Full Stack Developer',
    period: 'June 2022 — October 2023',
    bullets: [
      'Revamped the Jatado blog with engagement-focused features (sharing, likes, comments, saved libraries) to improve user interaction and retention.',
      'Built frontend and backend modules for a contact management system in a multi-module operations platform.',
      'Developed APIs for a diet application and maintained tests plus technical artifacts (ERDs, sequence diagrams, API docs).',
    ],
  },
  {
    company: 'WIDOX',
    location: 'Remote',
    role: 'Front End Developer',
    period: 'February 2022 — April 2022',
    bullets: [
      'Built the front end for a crypto website.',
      'Wrote both component and end-to-end tests.',
    ],
  },
  {
    company: 'Freelance',
    location: 'Remote',
    role: 'Full Stack Developer',
    period: 'February 2019 — Present',
    bullets: [
      'Built customer-facing websites and product flows for multiple businesses, including Java Energies.',
      'Delivered an account-opening application for Homebase Bank and integrated queue-based processing to improve user experience under load.',
      'Built the frontend for Traffic Pilot, a CMS for social traffic monetization and ad delivery workflows.',
      'Developed and launched the GDS Micro Credit Platform with a React frontend, backend services, scalable data models, and automated accounting processes.',
    ],
  },
]

export const education = {
  degree: 'Bachelor of Engineering (BEng)',
  field: 'Computer Engineering',
  school: 'Federal University of Benin (UNIBEN)',
  location: 'Edo, Nigeria',
}

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    href: 'https://www.credly.com/badges/b78944b0-4b57-4856-8783-8fe53692a82c/public_url',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    href: 'https://www.credly.com/badges/bb22933f-1463-4bbc-bd78-c9e379c06cd5/public_url',
  },
  {
    name: 'AWS Academy Graduate — Cloud Architecting',
    issuer: 'Amazon Web Services · January 2025',
    href: 'https://www.credly.com/badges/a438f34d-3190-423c-82bf-bed79b252be5/public_url',
  },
]

export const courses: Course[] = [
  {
    title: 'Robotics and Control Systems',
    description:
      'Kinematics, feedback, and real-time control. Useful later for hardware projects and for reasoning about motion in interactive 3D work.',
  },
  {
    title: 'Computer Graphics',
    description:
      'Transforms, rendering, and spatial reasoning that still show up in Three.js scenes and visual interfaces.',
  },
  {
    title: 'Engineering Mathematics',
    description:
      'A systematic way to reduce messy problems to models, constraints, and measurable outcomes instead of trial and error.',
  },
  {
    title: 'Machine Learning',
    description:
      'Foundations in data, models, and evaluation — relevant to current AI product work at Turing.',
  },
  {
    title: 'Image Processing and Computer Vision',
    description:
      'Core of the final-year project: OpenCV, an Arduino car, and an ESP8266 module for vision-driven control.',
  },
  {
    title: 'Computer Architecture',
    description:
      'Digital electronics, memory, and microcontrollers — the hardware context behind a lot of later software and maker work.',
  },
  {
    title: 'Logic',
    description:
      'Boolean algebra and discrete reasoning that sit underneath control flow, APIs, and authorization rules.',
  },
  {
    title: 'Low-Level Programming',
    description:
      'Assembly and bytecode as a way to understand memory, instruction flow, and what higher-level runtimes are doing.',
  },
]
