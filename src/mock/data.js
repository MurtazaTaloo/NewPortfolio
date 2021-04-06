import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Murtza Taloo', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Murtaza Taloo',
  subtitle: 'I am a Full Stack Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'I am a Full Stack developer with a passion for e-Commerce. I have hands on experience with Ruby on Rails and MERN.',
  paragraphTwo: 'Please download the resume below to learn more about my skills and experience.',
  paragraphThree: '',
  resume: 'MurtazaTaloo_Resume.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Retail App',
    info: 'Retail store for a Chinese Medicine business using MERN stack',
    info2: '',
    url: 'https://medicinepower.netlify.com/',
    repo: 'https://github.com/MurtazaTaloo/Mern_Project_PART_A', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Marketplace App',
    info: 'Two way marketplace app using Ruby on Rails',
    info2: '',
    url: 'https://lit-bastion-54112.herokuapp.com/',
    repo: 'https://github.com/MurtazaTaloo/rails_marketplace', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'murtaza_taloo@hotmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/murtazataloo',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MurtazaTaloo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
