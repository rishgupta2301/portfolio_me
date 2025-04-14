export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
  techStack?: string[];
}

export const experienceData: Experience[] = [
  {
    title: 'Associate Software Engineer (ReactJS Developer)',
    company: 'Accenture',
    location: 'Gurugram, Haryana',
    period: 'Nov 2023 - Present',
    techStack: ['React', 'TypeScript', 'Chart.js', 'WebSocket', 'Material UI'],
    achievements: [
      'Engineered interactive data visualizations for real-time tracking of traffic, air quality, and energy usage using Chart.js, empowering city officials with actionable insights. Achieved reduction of load times by 25% through tree-shaking and code-splitting.',
      'Launched innovative notification framework using Websockets that provided immediate alerts on key operational disruptions; findings led to fixing the three biggest causes of service interruptions over two months.',
      'Designed and implemented role-specific dashboards in React.js, customizing features based on user roles. Boosted performance by 30% through code splitting to load only essential components.',
      'Integrated and optimized APIs for seamless data exchange between frontend and city systems utilizing MS SQL Server for efficient data storage and retrieval. Reduced network traffic by 20% by implementing debounced API requests, enhancing efficiency.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Adani Digital Labs',
    location: 'Gurugram, Haryana',
    period: 'Jan 2023 - Oct 2023',
    techStack: ['Next.js', 'React', 'Sass', 'Bootstrap'],
    achievements: [
      'Used React Lazy and Suspense to load components only when accessed, reducing initial load time by 30%.',
      'Built Pranaam Services for Adani Airports with React.js, Sass, and Bootstrap, boosting performance by 40% and engagement by 25%.',
      'Refactored global state management using React Context and useReducer, reducing prop drilling by 40%.',
      'Loaded large, infrequent components dynamically, improving load time by 25% and reducing bundle size.',
      'Used React.memo to avoid unnecessary re-renders, cutting CPU usage by 15% during heavy interactions.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Gorin Systems',
    location: 'Remote',
    period: 'June 2022 - Oct 2022',
    techStack: ['Next.js', 'TypeScript', 'Socket.io', 'Prisma', 'PostgreSQL'],
    achievements: [
      'Processed real-time OpenAI API integration using Socket.io to stream and display property ad prompts, reducing latency by 35% and enhancing user engagement.',
      'Developed ”Ask AI” UI component for property feature suggestions in Next.js and TypeScript, generating property- specific insights (e.g., location, selling points) based on a Figma design, ensuring seamless integration across all pages.',
      'Structured and optimized Prisma schema for PostgreSQL and MS SQL Server, improving query performance by 30%.',
    ],
  },
];