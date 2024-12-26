export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Certification {
  title: string;
  provider: string;
  year: string;
  credentials?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Technologies',
    skills: [
      'ReactJS',
      'NextJS',
      'TypeScript',
      'JavaScript',
      'Material UI',
      'SCSS',
      'Tailwind CSS',
      'Redux',
      'RTK',
      'Rest APIs',
      'Antd',
      'Bootstrap',
      'Figma'
    ]
  },
  {
    title: 'Languages',
    skills: [
      'C/C++',
      'Java',
      'JavaScript',
      'HTML',
      'CSS'
    ]
  },
  {
    title: 'Technical Skills and Tools',
    skills: [
      'Linux',
      'OOPS',
      'Algorithms',
      'Data Structures',
      'Git',
      'Jira',
      'Postman'
    ]
  }
];

export const certifications: Certification[] = [
  {
    title: 'Front End Web Development',
    provider: 'Coding Ninjas',
    year: '2021',
    credentials: 'https://certificate.codingninjas.com/verify/9ef776ca49675bda'
  },
  {
    title: 'Back End Web Development',
    provider: 'Coding Ninjas',
    year: '2021',
    credentials: 'https://certificate.codingninjas.com/verify/d6ac9a52f8cb15ba'
  },
  {
    title: 'JAVA(Data Structures and Algorithms)',
    provider: 'Coding Blocks',
    year: '2021',
    credentials: 'https://online.codingblocks.com/app/certificates/CBOL-183748-5cd2583e'
  },
  {
    title: 'MySQL',
    provider: 'Udemy',
    year: '2022',
    credentials: 'https://www.udemy.com/certificate/UC-e71ae658-a76e-47f2-b6cd-afd3c03a8d6c/'
  }
];