export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
}

export const educationData: Education[] = [
  {
    degree: 'B.Tech in Electronics and Communication Engineering',
    institution: 'Maharaja Surajmal Institute of Technology',
    location: 'New Delhi, India',
    period: '2019 - 2023',
    score: 'GPA: 8.8',
  },
  {
    degree: '12th Grade',
    institution: 'Himalaya Public Sr. Sec. School',
    location: 'New Delhi, India',
    period: '2018 - 2019',
    score: 'Percentage: 90',
  },
  {
    degree: '10th Grade',
    institution: 'St.Dominics Sr. Sec. School',
    location: 'Mathura, UP, India',
    period: '2016 - 2017',
    score: 'CGPA: 9.6',
  },
];