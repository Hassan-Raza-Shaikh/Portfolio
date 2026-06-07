import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  name: 'Hassan Raza Shaikh',
  title: 'Computer Science & AI Undergrad | Full-Stack Builder',
  bio: 'Computer Science undergraduate specializing in Artificial Intelligence with strong foundations in Full-Stack Development and IoT. Experienced in React, Node.js, Python, and Generative AI workflows. Passionate about building scalable software solutions and solving algorithmic problems.',
  email: 'hassan.raza.shaikh.hrs@gmail.com',
  socials: [
    { name: 'GitHub', url: 'https://github.com/Hassan-Raza-Shaikh', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/hassan-shaikh', icon: 'linkedin' },
  ],
  projects: [
    {
      id: 'study-portal',
      title: 'GIKI Standardized Study Portal',
      description: 'A centralized academic portal hosting over 50 resources, cutting down resource retrieval times by 60% with a secure database architecture.',
      image: '/images/project1.jpg',
      tags: ['React.js', 'Firebase', 'Data Architecture', 'Git', 'Collaborative Dev'],
      githubUrl: 'https://github.com/Hassan-Raza-Shaikh',
      featured: true,
    },
    {
      id: 'iot-plant',
      title: 'IoT Plant Monitoring System',
      description: 'An IoT system using Arduino sensors to monitor soil and plant data, coupled with a React dashboard for real-time visualization and a Node.js backend.',
      image: '/images/project2.jpg',
      tags: ['Arduino IDE', 'React.js', 'Node.js', 'IoT Integration', 'API Optimization'],
      githubUrl: 'https://github.com/Hassan-Raza-Shaikh',
      featured: true,
    },
  ],
  skills: [
    {
      category: 'Languages',
      items: ['Python', 'C/C++', 'JavaScript', 'SQL', 'LaTeX'],
    },
    {
      category: 'Frameworks',
      items: ['React.js', 'Node.js', 'TensorFlow', 'NumPy', 'Pandas', 'Matplotlib'],
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'Firebase', 'VS Code', 'Arduino IDE'],
    },
    {
      category: 'Core Concepts',
      items: ['Data Structures', 'Algorithms', 'IoT Integration', 'Generative AI Prompting', 'SDLC'],
    },
  ],
  experience: [
    {
      title: 'Full Stack IoT Developer',
      company: 'Google Developers Group on Campus',
      period: 'Nov 2025 - Jan 2026',
      description: 'Developed an IoT Plant Monitoring System using Arduino sensors and integrated real-time visualization dashboards.',
      highlights: [
        'Developed an IoT Plant Monitoring System using Arduino sensors',
        'Built a React dashboard for real-time visualization',
        'Implemented Node.js backend for data processing',
        'Optimized API performance and improved reliability',
      ],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science in Artificial Intelligence',
      school: 'Ghulam Ishaq Khan Institute (GIKI)',
      year: '2024 - 2028',
      field: 'Computer Science & Artificial Intelligence',
    },
  ],
  certifications: [
    {
      name: 'Google Prompting Essentials Specialization',
      issuer: 'Google (via Coursera)',
      date: 'Dec 2025',
      url: 'https://coursera.org',
    },
  ],
};
