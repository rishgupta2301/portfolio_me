import { Project } from '../components/projects/types';

export const projects: Project[] = [
  {
    id: 'stackoverflow-clone',
    title: 'StackOverflow Clone',
    description: 'A full-stack web application replicating the core functionalities of StackOverflow, built with the MERN stack.',
    longDescription: 'A comprehensive clone of StackOverflow that allows users to post questions, provide answers, and vote on content. The application features secure user authentication, real-time updates, and a robust backend architecture.',
    image: 'src/assets/stackoverflow.png',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'JWT'],
    github: 'https://github.com/rishgupta2301/stackoverflow-clone',
    live: 'https://stackoverflow-clone-byrishabh.netlify.app/',
    duration: '2 months',
    teamSize: 1,
    role: 'Full Stack Developer',
    features: [
      'Secure user authentication with JWT tokens',
      'Question posting and answering functionality',
      'Voting system for questions and answers',
      'Advanced state management with Redux',
      'RESTful API architecture',
      'Responsive design for all devices'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with Stripe integration and Sanity CMS for content management.',
    longDescription: 'A feature-rich e-commerce solution that provides a seamless shopping experience. Built with modern technologies and best practices, it includes real-time cart updates, secure payments, and an intuitive admin interface.',
    image: 'src/assets/e-commerce.png',
    technologies: ['React', 'Next.js', 'Sanity CMS', 'Stripe', 'React Hooks'],
    github: 'https://github.com/rishgupta2301/ecommerce_sanity_stripe',
    live: 'https://ecommerce-sanity-stripe-git-main-rishgupta2301.vercel.app/',
    duration: '1.5 months',
    teamSize: 1,
    role: 'Frontend Developer',
    features: [
      'Product browsing and filtering',
      'Shopping cart functionality',
      'Secure payment processing with Stripe',
      'Content management with Sanity',
      'Real-time cart updates',
      'Responsive design and animations'
    ]
  },
  {
    id: 'ipod-clone',
    title: 'iPod Classic Clone',
    description: 'A nostalgic recreation of the iconic iPod Classic interface with a modern twist using React.',
    longDescription: 'Experience the magic of the classic iPod with this interactive web clone. Featuring the iconic click wheel navigation system, this project brings back the beloved interface with smooth animations and intuitive controls. Built with React and modern web technologies, it demonstrates advanced DOM manipulation and state management.',
    image: 'src/assets/i-pod.png',
    technologies: ['React', 'CSS3', 'JavaScript', 'ZingTouch', 'State Management'],
    github: 'https://github.com/rishgupta2301/iPodClone',
    live: 'https://ipodclone-rishabh.netlify.app/',
    duration: '2 weeks',
    teamSize: 1,
    role: 'Frontend Developer',
    features: [
      'Circular click wheel navigation using ZingTouch',
      'Interactive menu system with smooth transitions',
      'Realistic iPod Classic UI recreation',
      'Responsive design that works on all devices',
      'Intuitive gesture controls',
      'Dynamic menu navigation system'
    ]
  }
];