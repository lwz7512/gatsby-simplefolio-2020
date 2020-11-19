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
    img: 'reflexstudio-md.png',
    title: 'Reflex Studio v1.0',
    info: 'A Reflex theme based Gatsby site generator. Tech stack: ReactJS|Express.js|Nodejs and Shell scripts, no database dependency.',
    info2: 'Reflex(https://reflexjs.org/) is awesome, I really like it cause it includes rich and elegant building blocks like themes/plugins/components to kickstart Gatsby website. By introcduction of MDX/Block system, it greatly lower the threshold to develop gatsby website and reduce the time to compose a purpose specific web pages. My goals in this studio is to provide a more intuitive UI tool that facilitates the usage and the creation of Reflex themes further. ',
    url: 'http://reflexstudio.app',
    repo: 'https://github.com/lwz7512/reflex-studio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'smartscalereader-md.png',
    title: 'Smart Scale Reader',
    info: 'Using AI/tensorflow coco-ssd model to identify video stream, SSR help fishery workers to classify the lobster grade easily, and greatly improved the proficiency.',
    info2: 'Tech stack: Next.JS / tensorflow coco-ssd',
    url: '',
  },
  {
    id: nanoid(),
    img: 'marinethinking_all.png',
    title: 'Marine Thinking Official Website',
    info: 'A Gatsby based website which migrated from static bootstrap pages.',
    info2: 'Tech stack: GatsbyJS',
    url: 'https://www.marinethinking.com/',
  },
  {
    id: nanoid(),
    img: 'workxtation.png',
    title: 'Fishery Factory Workstation App',
    info: 'The first generation of inventory management application adopted in the Atlantic Area fishery indurstry.',
    info2: 'Tech stack: ReactJS & Material-UI/Cordova/Golang & gin/MongoDB',
  },
  {
    id: nanoid(),
    img: 'ue-mobile-screens-github.png',
    title: 'UltronEle',
    info: 'Ultronele elearning system purely based on GatsbyJS framework',
    info2: 'for more details click link below',
    url: 'http://ultronele.com/',
    repo: 'https://github.com/runbytech/ultron-ele'
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
      url: 'https://github.com/lwz7512/gatsby-simplefolio-2020',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
