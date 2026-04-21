import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  name: 'Hassan Raza',
  title: 'Full-Stack Developer & Creative Technologist',
  bio: 'I build dynamic, animated web experiences that engage and inspire. Specializing in React, Next.js, and creative scroll animations.',
  email: 'hassan@example.com',
  socials: [
    { name: 'GitHub', url: 'https://github.com', icon: 'github' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
    { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  ],
  projects: [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and animated product showcase.',
      image: '/images/project1.jpg',
      tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'GSAP'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      id: '2',
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard with real-time charts, animated transitions, and scroll-driven analytics.',
      image: '/images/project2.jpg',
      tags: ['React', 'D3.js', 'Recharts', 'GSAP ScrollTrigger'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
    },
    {
      id: '3',
      title: 'Motion Design System',
      description: 'Comprehensive design system with animated components, accessibility-first approach, and Storybook integration.',
      image: '/images/project3.jpg',
      tags: ['React', 'Tailwind', 'Framer Motion', 'Storybook'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com',
      featured: true,
    },
  ],
  skills: [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Firebase', 'REST APIs'],
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Docker', 'AWS'],
    },
    {
      category: 'Design & Animation',
      items: ['Figma', 'Adobe XD', 'GSAP', 'CSS Animations', 'Web Animations API'],
    },
  ],
  experience: [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Startup Inc',
      period: '2022 - Present',
      description: 'Led frontend architecture and implementation of customer-facing features.',
      highlights: [
        'Architected component library reducing development time by 40%',
        'Implemented scroll-driven animations improving user engagement by 35%',
        'Led team of 3 engineers on major product redesign',
      ],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Developed full-stack web applications for various clients.',
      highlights: [
        'Built 15+ client projects from concept to deployment',
        'Integrated payment systems and authentication solutions',
        'Optimized performance resulting in 50% faster load times',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Web Studio',
      period: '2019 - 2020',
      description: 'Created responsive and animated user interfaces.',
      highlights: [
        'Developed interactive features using vanilla JS and jQuery',
        'Collaborated with designers on UX implementation',
        'Maintained code quality with unit and integration tests',
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor's in Computer Science",
      school: 'University of Technology',
      year: '2019',
      field: 'Computer Science',
    },
    {
      degree: 'Full-Stack Web Development Bootcamp',
      school: 'Code Academy',
      year: '2019',
      field: 'Web Development',
    },
  ],
  certifications: [
    {
      name: 'Advanced React Patterns',
      issuer: 'Egghead.io',
      date: '2022',
      url: 'https://example.com',
    },
    {
      name: 'Google Cloud Associate',
      issuer: 'Google Cloud',
      date: '2021',
      url: 'https://example.com',
    },
    {
      name: 'Web Performance Specialist',
      issuer: 'Frontend Masters',
      date: '2021',
      url: 'https://example.com',
    },
  ],
};
