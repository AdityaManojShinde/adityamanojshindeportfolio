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
  firebase: { name: "Firebase", color: "bg-yellow-600" },
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "PipelineAI : Modern AI SaaS Landing Page (Next.js + Tailwind CSS)",
    description: `PipelineAI is a clean, modern, and fully responsive landing page designed for AI SaaS platforms. Built using Next.js and Tailwind CSS, this project delivers a fast, lightweight frontend with a professional UI and smooth user experience. It leverages the power of Next.js for performance and scalability, and Tailwind CSS for rapid UI development with utility-first styling. The design is fully responsive, ensuring a great experience across all devices, and the codebase is clean and developer-friendly, making it easy to customize. This landing page is perfect for startups, AI tools, or any tech-based product looking to establish a sleek and effective online presence.`,
    image: "/projects/pipelineai.jpg",
    category: "Web Development",
    videoUrl: "https://www.youtube.com/watch?v=sKj8XtBegPY",
    technologies: [
      technologies.react,
      technologies.nextjs,
      technologies.node,
      technologies.tailwind,
    ],
    demoUrl: "https://piplineai.vercel.app/",
    codeUrl: "https://github.com/AdityaManojShinde/piplineai",
    featured: true,
  },
  {
    id: "project-2",
    title: "Financial Dashboard",
    description:
      "An interactive dashboard for visualizing financial data with customizable charts and real-time updates.",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Data Visualization",
    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.d3,
      technologies.express,
    ],
    demoUrl: "https://example.com/demo",
    codeUrl: "https://github.com/username/repo",
    featured: true,
  },
  {
    id: "project-3",
    title: "Fitness Tracking App",
    description:
      "A mobile app for tracking workouts, nutrition, and progress with personalized recommendations.",
    image:
      "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Mobile App",
    technologies: [
      technologies.flutter,
      technologies.firebase,
      technologies.node,
    ],
    demoUrl: "https://example.com/demo",
    codeUrl: "https://github.com/username/repo",
    featured: true,
  },
  {
    id: "project-4",
    title: "Travel Planner",
    description:
      "A web application for planning trips, discovering attractions, and sharing itineraries with friends.",
    image:
      "https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Web Development",
    technologies: [
      technologies.react,
      technologies.nextjs,
      technologies.postgres,
      technologies.graphql,
    ],
    demoUrl: "https://example.com/demo",
    codeUrl: "https://github.com/username/repo",
    featured: true,
  },
  {
    id: "project-5",
    title: "Healthcare Portal Redesign",
    description:
      "A comprehensive redesign of a healthcare provider's patient portal, focusing on accessibility and ease of use.",
    image:
      "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "UI/UX Design",
    technologies: [
      technologies.figma,
      technologies.react,
      technologies.tailwind,
    ],
    demoUrl: "https://example.com/demo",
    featured: false,
  },
  {
    id: "project-6",
    title: "Smart Home Control System",
    description:
      "An IoT-based system for controlling home devices with voice commands and automated routines.",
    image:
      "https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Web Development",
    technologies: [
      technologies.react,
      technologies.node,
      technologies.mongodb,
      technologies.aws,
    ],
    demoUrl: "https://example.com/demo",
    codeUrl: "https://github.com/username/repo",
    featured: false,
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "MIT ADT University",
    degree: "Bachelor of Technology",
    field: "Information Technology",
    startDate: "2024",
    endDate: "2028",
    description:
      "Specialized in Human-Computer Interaction and Artificial Intelligence. Participated in various hackathons and coding competitions.",
    logo: "/icon.svg",
  },
  {
    id: "edu-2",
    institution: "PKMH Jr. College Loni Kalbhor",
    degree: "HSC",
    field: "Science",
    startDate: "2022",
    endDate: "2023",
    description:
      "Completed HSC with a focus on Science and Mathematics. Achieved a score of 61% in the final exams.",
    logo: "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "edu-3",
    institution: "English Medium School Loni Kalbhor",
    degree: "SSC",
    field: "All Subjects",
    startDate: "2020",
    endDate: "2021",
    description:
      "Completed SSC with a focus on all subjects. Achieved a score of 82.40% in the final exams.",
    logo: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Using Python to Interact with the Operating System",
    issuer: "Google",
    issueDate: "Sep 2024",
    credentialUrl:
      "https://coursera.org/share/f6ba2aed229fbf2916b61c25b5e38614",
    logo: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "cert-2",
    title: "Introduction to Git and GitHub",
    issuer: "Google",
    issueDate: "Dec 2024",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/verify/F9FV6QGYEXCD",
    logo: "https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "cert-3",
    title: "Certificate for the Completion of  Python 3.4.3 Training",
    issuer: "Indian Institute of Technology, Bombay (IIT Bombay)",
    issueDate: "Dec 2024",
    credentialUrl:
      "https://spoken-tutorial.org/software-training/test/verify-test-certificate/",
    logo: "https://images.pexels.com/photos/11035386/pexels-photo-11035386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "cert-4",
    title: "Crash Course on Python by Google",
    issuer: "Google",
    issueDate: "August 2024",
    credentialUrl:
      "https://coursera.org/share/987d6f86315e0b2d8e9ffc2b9f5b242d",
    logo: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "cert-5",
    title: "React Essential Training",
    issuer: "LinkedIn",
    issueDate: "Dec 2024",
    credentialUrl:
      "https://www.linkedin.com/learning/certificates/0965bfd4369828b62ae5a83fccc851748b2a4c2567f19d198aff0215e58e45c0",
    logo: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "cert-5",
    title: "Flutter and dart - The Complete Guide[2023 Edition]",
    issuer: "Academind",
    issueDate: "Dec 2023",
    credentialUrl:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-381c86a2-94b1-4fb6-adf7-6e8baa4902e4.jpg",
    logo: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "cert-5",
    title: "The Complete Web Development Bootcamp",
    issuer: "Udemy",
    issueDate: "August 2024",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-196774d1-32a1-4f8f-9c87-3a50af23edd1/",
    logo: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
