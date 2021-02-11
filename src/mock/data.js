import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Sam Stark - Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hey! I\'m',
  name: 'Sam Stark',
  subtitle: 'and I\'m a Web Developer',
  cta: 'Check Out My Work!',
};

// ABOUT DATA
export const aboutData = {
  img: 'Stark-Profile-Pic.jpg',
  paragraphOne: 'I\'m a Software Developer with experience developing full-stack applications leveraging a multitude of tools including JavaScript, Python, CSS, SCSS, HTML, React / Redux, and Express and Flask backend servers.',
  paragraphTwo: 'I have roots in live events and theater, both producing experiential events for major companies as well as designing sets and props for theater. I\'m looking to take my knowledge of how people interact, problem solving on the fly, and the flow of human nature into the work of software! ',
  paragraphThree: ' ',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'booth-it-pic.png',
    title: 'Booth It',
    info: 'January 2021',
    info2: 'Booth It is a web app for hosting conference events online. Events are split into individual "booths" to encourage more meaningful conversations.',
    url: 'https://booth-it.herokuapp.com/',
    repo: 'https://github.com/sjstark/booth-it', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'sup-dog-pic.png',
    title: '\'Sup Dog',
    info: 'November 2020',
    info2: '\'SupDog is an events forum designed to help schedule and spread knowledge of events. \'SupDog is a clone that uses Eventbrite as content inpiration and Popdog as style inspiration.',
    url: 'https://supdog-app.herokuapp.com/',
    repo: 'https://github.com/sjstark/supdog', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'never-forget-pic.png',
    title: 'Never Forget',
    info: 'November 2020',
    info2: 'Never Forget, a Remember the Milk clone, is an app designed to sort and organize your to-do tasks.',
    url: 'https://app-never-forget.herokuapp.com/',
    repo: 'https://github.com/sjstark/Never-Forget', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'scare-bnb-pic.jpg',
    title: 'ScareBnB',
    info: 'January 2021',
    info2: 'Scarebnb is a web service that allows users to get their spook on by booking stays at known haunted properties.',
    url: 'https://scarebnb-app.herokuapp.com',
    repo: 'https://github.com/maxwelljmckee/scare_bnb', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work together?',
  btn: 'Let\'s Chat!',
  email: 'hello@samstark.me',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/samueljamesstark/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/sjstark',
    },
    {
      id: nanoid(),
      name: 'angellist',
      url: 'https://angel.co/u/sjstark',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
