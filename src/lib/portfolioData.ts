import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  name: 'Hassan Raza',
  title: 'Builder | Learner | Problem Solver',
  bio: 'I build practical solutions driven by curiosity. I continuously learn, apply new skills in real projects, and focus on delivering meaningful results.',
  email: 'hassan.raza.shaikh.hrs@gmail.com',
  socials: [
    { name: 'GitHub', url: 'https://github.com/Hassan-Raza-Shaikh', icon: 'github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hassan-shaikh-36a744284/', icon: 'linkedin' },
  ],
  projects: [
    {
      id: '1',
      title: 'Plant Growth & Harvesting Monitoring System',
      description: 'A full-stack app for plant tracking, data management, and harvesting decisions with auth, APIs, and file uploads.',
      image: '/images/project1.jpg',
      tags: ['React', 'Node.js', 'Express', 'JWT', 'Firebase', 'Multer', 'REST API', 'Full Stack'],
      githubUrl: 'https://github.com/ZainJ5/Plant-Growth-and-Harvesting-Monitoring-System',
      featured: true,
    },
    {
      id: '2',
      title: 'EquiLearn: Video to ASL Accessibility Tool',
      description: 'An AI tool that transcribes videos, simplifies content with LLMs, and generates ASL gloss and sign-video outputs for accessibility.',
      image: '/images/project2.jpg',
      tags: ['Python', 'Streamlit', 'Whisper', 'Google Gemini', 'NLP', 'Accessibility', 'MoviePy', 'AI'],
      liveUrl: 'https://www.linkedin.com/posts/hassan-shaikh-36a744284_im-happy-to-share-this-equi-learn-project-activity-7432462084530991105-LAWr',
      githubUrl: 'https://github.com/Hassan-Raza-Shaikh/HackGitV2',
      featured: true,
    },
    {
      id: '3',
      title: 'WorldlinesDEV: Educational Content Platform',
      description: 'A Quarto-based platform for structured courses and guides, combining notebooks and docs for scalable learning content.',
      image: '/images/project3.jpg',
      tags: ['Quarto', 'Static Site', 'Documentation', 'Education', 'Jupyter Notebooks', 'GitHub Pages'],
      liveUrl: 'https://www.linkedin.com/posts/hassan-shaikh-36a744284_ive-been-working-on-this-course-hub-for-activity-7416027364142436352-4B-R',
      githubUrl: 'https://github.com/Walser52/WorldlinesDEV',
      featured: true,
    },
  ],
  skills: [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Responsive Design'],
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express.js', 'REST API Design', 'Authentication (JWT, Sessions)'],
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'GitHub', 'Firebase', 'Streamlit', 'Quarto', 'ffmpeg', 'VS Code'],
    },
    {
      category: 'Design & Animation',
      items: ['UI/UX Fundamentals', 'Layout Design', 'Basic Prototyping'],
    },
  ],
  experience: [
    {
      title: 'Software Developer (Independent)',
      company: 'Self-Driven',
      period: '2024 - Present',
      description: 'Building real-world apps while strengthening full-stack skills and exploring AI-driven solutions.',
      highlights: [
        'Developed and deployed multiple web applications',
        'Integrated AI tools into practical use cases',
        'Continuously improving through hands-on learning',
      ],
    },
    {
      title: 'Collaborative Developer',
      company: 'Team Projects',
      period: '2025',
      description: 'Contributed in team coding environments focused on Git workflows, collaboration, and feature development.',
      highlights: [
        'Contributed using Git workflows',
        'Participated in debugging and feature building',
        'Gained experience in structured development practices',
      ],
    },
  ],
  education: [
    {
      degree: 'Bachelor of Science',
      school: 'Ghulam Ishaq Khan Institute of Science and Technology',
      year: '2028',
      field: 'Artificial Intelligence',
    },
  ],
  certifications: [
    {
      name: 'Mathematics for Machine Learning',
      issuer: 'Imperial College London',
      date: 'July 2025',
      url: 'https://coursera.org/share/b940725db9e839ff0a21bc3a49ad7bd4',
    },
    {
      name: 'Linear Algebra from Elementary to Advanced',
      issuer: 'Johns Hopkins University',
      date: 'September 2025',
      url: 'https://coursera.org/share/d662b633213610e726a243ba47f2a589',
    },
    {
      name: 'AWS Generative AI Applications',
      issuer: 'Amazon Web Services',
      date: 'October 2025',
      url: 'https://coursera.org/share/3165079f9af01c1d2cc90040fc4791de',
    },
    {
      name: 'Google AI Essentials',
      issuer: 'Google',
      date: 'June 2025',
      url: 'https://coursera.org/share/c8a1caa69f3dedb00a117a0470872baa',
    },
    {
      name: 'Introduction to Generative AI Learning Path',
      issuer: 'Google Cloud',
      date: 'November 2025',
      url: 'https://coursera.org/share/bbe66764a86c8b794047aafb55fdfb0d',
    },
    {
      name: 'Google Prompting Essentials',
      issuer: 'Google',
      date: 'August 2025',
      url: 'https://coursera.org/share/0e3cbe4b785ef525b8e94819d4dc9d77',
    },
  ],
};
