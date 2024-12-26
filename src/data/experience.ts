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
      'Created interactive data visualizations for real-time tracking of traffic, air quality, and energy usage, enabling actionable insights for city officials using Chart.js. Reduced load times by 25% through tree-shaking and code-splitting.',
      'Developed a real-time alert system to instantly notify administrators of critical events like power outages using Websockets. Improved initial page load speed by 20% by implementing lazy loading for non-essential components.',
      'Designed role-specific dashboards that adapt features based on user roles using React.js. Optimized performance by 30% using code splitting to load only necessary components.',
      'Integrated APIs for smooth data flow between frontend and city systems. Decreased network traffic by 20% through debouncing API requests, enhancing overall performance.',
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
      'Assisted in building Pranaam Services for Adani Airports using Next.js, React.js, Sass, and Bootstrap.',
      'Simplified global state handling with React Context and useReducer, reducing prop drilling by 40%.',
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
      'Implemented real-time OpenAI API integration using Socket.io: Developed a real-time system to generate and display property advertisement prompts on the frontend by streaming OpenAI API results via Socket.io for a seamless user experience.',
      'Developed "Ask AI" UI component for property feature suggestions in Next.js and TypeScript, generating property-specific insights (e.g., location, selling points, top facilities) based on a Figma design, ensuring seamless integration across all pages.',
      'Created an efficient schema with Prisma for managing property data in PostgreSQL.',
    ],
  },
];