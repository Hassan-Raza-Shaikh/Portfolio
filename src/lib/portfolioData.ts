import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  name: 'Hassan Raza Shaikh',
  title: 'Computer Science & AI Undergrad | Full-Stack Builder',
  bio: 'Computer Science undergraduate specializing in Artificial Intelligence with strong foundations in Full-Stack Development and Backend Systems. Experienced in React, Node.js, Python, and Generative AI workflows. Passionate about building scalable software solutions and solving algorithmic problems.',
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
      tags: ['React.js', 'Firebase', 'Data Architecture', 'Collaborative Dev'],
      githubUrl: 'https://github.com/Hassan-Raza-Shaikh',
      featured: true,
    },
    {
      id: 'equilearn',
      title: 'EquiLearn: ASL Accessibility Tool',
      description: 'An AI accessibility tool that transcribes educational videos, simplifies content using Google Gemini, and generates American Sign Language (ASL) gloss and sign outputs.',
      image: '/images/project3.jpg',
      tags: ['Python', 'Streamlit', 'Google Gemini', 'NLP', 'Whisper'],
      githubUrl: 'https://github.com/Hassan-Raza-Shaikh/HackGitV2',
      liveUrl: 'https://www.linkedin.com/posts/hassan-shaikh-36a744284_im-happy-to-share-this-equi-learn-project-activity-7432462084530991105-LAWr',
      featured: true,
    },
    {
      id: 'plant-growth',
      title: 'Plant Growth Analytics Hub',
      description: 'A data analytics dashboard featuring custom Node.js API endpoints, automated processing pipelines, and responsive React charting components.',
      image: '/images/project2.jpg',
      tags: ['React.js', 'Node.js', 'Express', 'API Optimization', 'Full-Stack'],
      githubUrl: 'https://github.com/Hassan-Raza-Shaikh',
      featured: true,
    },
    {
      id: 'worldlines',
      title: 'WorldlinesDEV Course Platform',
      description: 'A Quarto-based structured educational platform designed to compile Jupyter notebooks and markdown documents into scalable course hubs.',
      image: '/images/project4.jpg',
      tags: ['Quarto', 'Markdown', 'Education', 'GitHub Pages'],
      githubUrl: 'https://github.com/Walser52/WorldlinesDEV',
      liveUrl: 'https://www.linkedin.com/posts/hassan-shaikh-36a744284_ive-been-working-on-this-course-hub-for-activity-7416027364142436352-4B-R',
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
      items: ['Git', 'GitHub', 'Firebase', 'VS Code', 'PostgreSQL'],
    },
    {
      category: 'Core Concepts',
      items: ['Data Structures', 'Algorithms', 'Database Design', 'Generative AI Prompting', 'SDLC'],
    },
  ],
  experience: [
    {
      title: 'Full Stack Developer',
      company: 'Google Developers Group on Campus',
      period: 'Nov 2025 - Jan 2026',
      description: 'Built backend server infrastructure, REST APIs, and database schemas for an agricultural data analytics platform.',
      highlights: [
        'Designed and implemented Node.js backend API routes',
        'Built a React dashboard for real-time data visualization',
        'Optimized API performance and database schema reliability',
        'Collaborated with developers to integrate backend API endpoints with frontend views',
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
      issuer: 'Google',
      date: 'Aug 2025',
      url: 'https://coursera.org',
      highlights: [
        'Applied advanced prompting techniques for Generative AI workflows.',
        'Designed prompts for data extraction, automation, and summarization.',
      ],
    },
    {
      name: 'AWS Generative AI Applications',
      issuer: 'Amazon Web Services',
      date: 'Oct 2025',
      url: 'https://coursera.org',
      highlights: [
        'Developed application workflows using Amazon Bedrock models.',
        'Learned context window management and token optimization principles.',
      ],
    },
    {
      name: 'Google AI Essentials',
      issuer: 'Google',
      date: 'Jun 2025',
      url: 'https://coursera.org',
      highlights: [
        'Mastered foundational neural network and deep learning concepts.',
        'Studied AI ethics, dataset bias identification, and mitigation.',
      ],
    },
    {
      name: 'Mathematics for Machine Learning',
      issuer: 'Imperial College London',
      date: 'Jul 2025',
      url: 'https://coursera.org',
      highlights: [
        'Practiced multi-variable calculus, vector calculations, and linear regressions.',
        'Applied optimization methods (gradient descent) for objective functions.',
      ],
    },
    {
      name: 'Linear Algebra from Elementary to Advanced',
      issuer: 'Johns Hopkins University',
      date: 'Sep 2025',
      url: 'https://coursera.org',
      highlights: [
        'Learned vector spaces, matrix transformations, eigenvalues, and eigenvectors.',
        'Implemented singular value decomposition (SVD) for dimensionality reduction.',
      ],
    },
    {
      name: 'Introduction to Generative AI Learning Path',
      issuer: 'Google Cloud',
      date: 'Nov 2025',
      url: 'https://coursera.org',
      highlights: [
        'Explored encoder-decoder models, transformers, and image generation architectures.',
        'Investigated parameter-efficient tuning and context retrieval techniques.',
      ],
    },
  ],
};
