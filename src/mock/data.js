import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Wenzhi | Senior Fullstack Dev', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to give a glimpse my works', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Wenzhi',
  subtitle: 'I\'m a Senior Fullstack Developer',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'wenzhi.jpeg',
  paragraphOne: 'Hi, My name is Wenzhi Li, I am a senior web developer with 10 years experience in IT consulting industry in China and 2 years fullstack dev experience in Canada.',
  paragraphTwo: 'I help my clients or my development team to make the right decision in technical stack choice, drafting milestones, setting up project infrastructure, as well as guiding team members on the new track.',
  paragraphThree: 'So, if you want to upgrade your digital brand or to land your idea, let’s talk for details.',
  resume: 'https://my.indeed.com/p/wenzhil-o8b6f5l', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'lwz7512@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/lwz75121',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '#',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lwz7512/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lwz7512',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
