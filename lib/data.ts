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
  docker: { name: "Docker", color: "bg-blue-500" }, // already correct
  aws: { name: "AWS", color: "bg-yellow-500" },
  flutter: { name: "Flutter", color: "bg-blue-400" },
  dart: { name: "Dart", color: "bg-blue-400" },
  d3: { name: "D3.js", color: "bg-orange-500" },
  firebase: { name: "Firebase", color: "bg-yellow-600" },
  python: { name: "Python", color: "bg-yellow-500" },
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
    title:
      "Indian Startup Business : Frontend Development with Next.js & Tailwind CSS",
    description:
      "Built the complete frontend for IndianStartupBusiness.com using Next.js and Tailwind CSS. The project features a responsive, modern UI with fast-loading pages and smooth navigation. Emphasized clean design and scalability to reflect the company's IT consulting and service offerings. Ensured SEO-friendly structure and optimal performance across all devices.",
    image: "/projects/isb.jpg",
    category: "Web Development",
    technologies: [
      technologies.react,
      technologies.typescript,
      technologies.nextjs,
      technologies.tailwind,
    ],
    demoUrl: "https://indianstartupbusiness.com/",
    codeUrl: "https://github.com/AdityaManojShinde/isb_website",
    featured: true,
  },
  {
    id: "project-3",
    title: "Dino News",
    description: `The Riverpod-powered News App is designed to provide users with a clean and efficient user interface, built using Flutter for a smooth and visually appealing experience across various devices. It utilizes Riverpod for state management, ensuring the app remains well-organized and highly responsive to changes in data. By integrating with NewsAPI.org, the app delivers a vast array of news articles from multiple sources, keeping users informed with fresh and diverse content. Additionally, the app features regularly updated news feeds and supports both custom light and dark themes, offering a personalized and dynamic reading experience.`,
    image: "/projects/dinonews.jpg",
    category: "Mobile App",
    videoUrl: "https://www.youtube.com/watch?v=6lxMS9laKAk",
    technologies: [technologies.flutter, technologies.firebase],
    codeUrl: "https://github.com/AdityaManojShinde/newsapp",
    featured: true,
  },
  {
    id: "project-4",
    title: "Instagram Reel Downloader",
    description:
      "Instagram Reel Downloader is a Python application that allows you to download Instagram Reels using their URLs. The application provides a graphical user interface (GUI) built with Tkinter and uses the Instaloader library to handle the downloading process.",
    image: "/projects/reeldownloder.jpg",
    category: "Python",
    technologies: [technologies.python],
    codeUrl: "https://github.com/AdityaManojShinde/Instagram-Reels-Downloader",
    featured: true,
  },
  {
    id: "project-5",
    title: "Tic Tac Toe Lite",
    description:
      "Classic Tic Tac Toe game built with Flutter for a smooth and responsive user experience and Riverpod for state management.",
    image: "/projects/tictactoelite.jpg",
    category: "Mobile App",
    technologies: [technologies.flutter, technologies.dart],
    codeUrl: "https://github.com/AdityaManojShinde/tictactoe_lite",
    featured: false,
  },
  {
    id: "project-6",
    title: "Python QR Code Generator",
    description:
      "This Python application, built using Tkinter and the QRcode library, enables users to generate customized QR codes with ease. It offers several key features designed for flexibility and usability. Users can personalize their QR codes by selecting custom foreground and background colors, ensuring the design aligns with their preferences. The application also allows for adjustable sizing, including border and box dimensions, to optimize the appearance of the QR code. With a responsive user interface, it ensures a smooth experience across different screen sizes. Additionally, users can conveniently choose the location and filename for saving their generated QR codes, making storage and access straightforward.",
    image: "/projects/qrcodegen.jpg",
    category: "Python",
    technologies: [technologies.python],

    codeUrl: "https://github.com/AdityaManojShinde/QR-Code-Generator",
    featured: false,
  },
  {
    id: "project-7",
    title: "🎮 Build Fruit Ninja in Python with Pygame!",
    description:
      "This is a Python implementation of a Fruit Ninja-style game built using the Pygame library. The game allows players to slice fruits that appear on screen while avoiding bombs. The game features multiple backgrounds, progressive difficulty, and a high score system.",
    image: "/projects/fruitslicer.png",
    category: "Python",
    technologies: [technologies.python],
    videoUrl: "https://www.youtube.com/watch?v=HENWtTgxZP8",
    codeUrl: "https://github.com/AdityaManojShinde/FruitSlicer",
    featured: true,
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
      "Specialized in Core IT. Participated in various hackathons and coding competitions.",
    logo: "/icon.svg",
  },
  {
    id: "edu-2",
    institution: "PKMH Jr. College Loni Kalbhor",
    degree: "12th",
    field: "Science",
    startDate: "2022",
    endDate: "2023",
    description:
      "Completed HSC with a focus on Science and Information Technology. Achieved a score of 61% in the final exams.",
    logo: "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: "edu-3",
    institution: "English Medium School Loni Kalbhor",
    degree: "10th",
    field: "SSC",
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
