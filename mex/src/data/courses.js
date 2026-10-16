const img = (seed) => `https://picsum.photos/seed/${seed}/640/360`;

export const CATEGORIES = ["frontend", "backend", "design", "devops", "mobile"];

export const courses = [
  { id: "react-developer-2024", title: "Complete React Developer Course 2024", description: "Master React.js from scratch with hands-on projects.", category: "frontend", level: "Beginner", lessons: 42, duration: "32h", price: 89, instructor: "Sarah Wilson", thumbnail: img("react-dev"), status: "Published" },
  { id: "nodejs-microservices", title: "Advanced Node.js & Microservices", description: "Build scalable backend systems with Node.js and Kubernetes.", category: "backend", level: "Advanced", lessons: 35, duration: "28h", price: 99, instructor: "Mike Chen", thumbnail: img("node-micro"), status: "Published" },
  { id: "uiux-masterclass", title: "UI/UX Design Masterclass", description: "Design beautiful interfaces and user experiences.", category: "design", level: "Intermediate", lessons: 28, duration: "22h", price: 79, instructor: "Jessica Lee", thumbnail: img("uiux-design"), status: "Published" },
  { id: "devops-zero-to-hero", title: "DevOps Zero to Hero", description: "Master CI/CD, Docker, Kubernetes, and AWS.", category: "devops", level: "Intermediate", lessons: 50, duration: "40h", price: 129, instructor: "David Miller", thumbnail: img("devops-hero"), status: "Published" },
  { id: "swiftui-masterclass", title: "SwiftUI Masterclass", description: "Build beautiful iOS apps with Apple's latest framework.", category: "mobile", level: "Intermediate", lessons: 38, duration: "30h", price: 89, instructor: "Sarah Wilson", thumbnail: img("swiftui"), status: "Published" },
  { id: "docker-kubernetes", title: "Docker & Kubernetes Practical Guide", description: "Containerization and orchestration for developers.", category: "devops", level: "Advanced", lessons: 40, duration: "34h", price: 119, instructor: "David Miller", thumbnail: img("docker-k8s"), status: "Published" },
  { id: "figma-to-react", title: "Figma to React", description: "Convert Figma designs into pixel-perfect React code.", category: "frontend", level: "Intermediate", lessons: 18, duration: "14h", price: 59, instructor: "Jessica Lee", thumbnail: img("figma-react"), status: "Published" },
  { id: "cybersecurity-fundamentals", title: "Cybersecurity Fundamentals", description: "Learn the basics of network security and ethical hacking.", category: "devops", level: "Beginner", lessons: 30, duration: "24h", price: 89, instructor: "Alan Turing", thumbnail: img("cyber-sec"), status: "Published" },
  { id: "flutter-dart", title: "Flutter & Dart: The Complete Guide", description: "Build iOS and Android apps with a single codebase.", category: "mobile", level: "Beginner", lessons: 60, duration: "48h", price: 94, instructor: "Alex Johnson", thumbnail: img("flutter-dart"), status: "Published" },
  { id: "graphql-apollo", title: "GraphQL with Apollo Server", description: "Build efficient APIs with GraphQL and Node.js.", category: "backend", level: "Advanced", lessons: 22, duration: "18h", price: 69, instructor: "Mike Chen", thumbnail: img("graphql"), status: "Published" },
  { id: "modern-css-sass", title: "Modern CSS & Sass", description: "Master Flexbox, Grid, Animations and responsive design.", category: "frontend", level: "Beginner", lessons: 25, duration: "20h", price: 49, instructor: "Emma Davis", thumbnail: img("css-sass"), status: "Published" },
];

