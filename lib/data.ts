import { Project, Education, Certification, Technology } from "@/types";

export const technologies: Record<string, Technology> = {
  react: { name: "React", color: "bg-cyan-500" },
  typescript: { name: "TypeScript", color: "bg-blue-500" },
  nextjs: { name: "Next.js", color: "bg-black" },
  node: { name: "Node.js", color: "bg-green-600" },
  express: { name: "Express", color: "bg-gray-600" },
  mongodb: { name: "MongoDB", color: "bg-green-500" },
  postgres: { name: "PostgreSQL", color: "bg-blue-600" },
  graphql: { name: "GraphQL", color: "bg-pink-600" },
  tailwind: { name: "Tailwind CSS", color: "bg-cyan-400" },
  figma: { name: "Figma", color: "bg-purple-500" },
  docker: { name: "Docker", color: "bg-blue-500" },
  aws: { name: "AWS", color: "bg-yellow-500" },
  flutter: { name: "Flutter", color: "bg-blue-400" },
  d3: { name: "D3.js", color: "bg-orange-500" },
  firebase: { name: "Firebase", color: "bg-yellow-600" }
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
    image: "https://images.pexels.com/photos/5698853/pexels-photo-5698853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Web Development",
    technologies: [
      technologies.react,
      technologies.nextjs,
      technologies.node,
      technologies.mongodb
    ],
    demoUrl: "https://example.com/demo",
    codeUrl: "https://github.com/username/repo",
    featured: true
  },
  {
    id: "project-2",
    title: "Financial Dashboard",
    description: "An interactive dashboard for visualizing financial data with customizable charts and real-time updates.",
    image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Data Visualization",
    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.d3,
      technologies.express
    ],
    demoUrl: "https://example.com/demo",
    codeUrl: "https://github.com/username/repo",
    featured: true
  },
  {
    id: "project-3",
    title: "Fitness Tracking App",
    description: "A mobile app for tracking workouts, nutrition, and progress with personalized recommendations.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Mobile App",
    technologies: [
      technologies.flutter,
      technologies.firebase,
      technologies.node
    ],
    demoUrl: "https://example.com/demo",
    codeUrl: "https://github.com/username/repo",
    featured: true
  },
  {
    id: "project-4",
    title: "Travel Planner",
    description: "A web application for planning trips, discovering attractions, and sharing itineraries with friends.",
    image: "https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Web Development",
    technologies: [
      technologies.react,
      technologies.nextjs,
      technologies.postgres,
      technologies.graphql
    ],
    demoUrl: "https://example.com/demo",
    codeUrl: "https://github.com/username/repo",
    featured: true
  },
  {
    id: "project-5",
    title: "Healthcare Portal Redesign",
    description: "A comprehensive redesign of a healthcare provider's patient portal, focusing on accessibility and ease of use.",
    image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "UI/UX Design",
    technologies: [
      technologies.figma,
      technologies.react,
      technologies.tailwind
    ],
    demoUrl: "https://example.com/demo",
    featured: false
  },
  {
    id: "project-6",
    title: "Smart Home Control System",
    description: "An IoT-based system for controlling home devices with voice commands and automated routines.",
    image: "https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Web Development",
    technologies: [
      technologies.react,
      technologies.node,
      technologies.mongodb,
      technologies.aws
    ],
    demoUrl: "https://example.com/demo",
    codeUrl: "https://github.com/username/repo",
    featured: false
  }
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Stanford University",
    degree: "Master of Science",
    field: "Computer Science",
    startDate: "2021",
    endDate: "2023",
    description: "Specialized in Human-Computer Interaction and Artificial Intelligence. Completed thesis on adaptive user interfaces.",
    logo: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "edu-2",
    institution: "MIT",
    degree: "Bachelor of Science",
    field: "Computer Science and Engineering",
    startDate: "2017",
    endDate: "2021",
    description: "Dean's List for all semesters. Active member of the Robotics Club and Web Development Association.",
    logo: "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "edu-3",
    institution: "Design Thinking Bootcamp",
    degree: "Certificate",
    field: "UI/UX Design",
    startDate: "2020",
    endDate: "2020",
    description: "Intensive 12-week program focused on user-centered design principles and methodologies.",
    logo: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    issueDate: "June 2024",
    expirationDate: "June 2027",
    credentialUrl: "https://example.com/credential",
    logo: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "cert-2",
    title: "Google UX Design Professional Certificate",
    issuer: "Google",
    issueDate: "March 2024",
    credentialUrl: "https://example.com/credential",
    logo: "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "cert-3",
    title: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    issueDate: "January 2024",
    expirationDate: "January 2027",
    credentialUrl: "https://example.com/credential",
    logo: "https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "cert-4",
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    issueDate: "November 2023",
    expirationDate: "November 2025",
    credentialUrl: "https://example.com/credential",
    logo: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: "cert-5",
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    issueDate: "August 2023",
    expirationDate: "August 2026",
    credentialUrl: "https://example.com/credential",
    logo: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];