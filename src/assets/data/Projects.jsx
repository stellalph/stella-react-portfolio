import { v4 as uuidv4 } from 'uuid';
import IMG1 from '../images/portfolio1.png';
import IMG2 from '../images/portfolio2.jpg';
import IMG3 from '../images/portfolio3.jpg';
import IMG4 from '../images/portfolio4.png';
import IMG5 from '../images/portfolio5.jpg';
import IMG6 from '../images/portfolio6.jpg';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IoRocket } from 'react-icons/io5';
import IconLink from '../../components/IconLink';


const projects = [
  {
    id: uuidv4(),
    name: 'Travel Planner',
    desc:'Group Project 1 built using HTML, CSS Materialise, JQuery, Moment.js and the Fetch API',
    img: IMG1,
    hyperGit: <IconLink href="https://github.com/stellalph/Travel-planner.git" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://chardige.github.io/Travel-planner/" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: 'SKLHub',
    desc:'Group Project 2 built using Node.js, Express.js, Handlebars, MySQL, Sequelize ORM and npm packages' ,
    img: IMG2,
    hyperGit: <IconLink href="https://github.com/stellalph/sklhub.git" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://warm-citadel-17427.herokuapp.com/" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: 'MERN Ski Resort',
    desc:'An application built using React.js as the front end, GraphQL with Node.js and Express.js as the server and MongoDB and Mongoose ODM for the database (Model)',
    img: IMG3,
    hyperGit: <IconLink href="https://github.com/stellalph/MERN-Ski-Resort.git" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://still-harbor-63486.herokuapp.com/" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: "Note Taker",
    desc:'A fully functioning Google Books API search engine using RESTful API refactored to be a GraphQL API built with Apollo Server',
    img: IMG4,
    hyperGit: <IconLink href="https://github.com/Pattiqus/6Week-6-Weather-Dashboard" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://pattiqus.github.io/6Week-6-Weather-Dashboard/" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: 'MERN Book Search Engine',
    desc:'A fully functioning Google Books API search engine using RESTful API refactored to be a GraphQL API built with Apollo Server ',
    img: IMG5,
    hyperGit: <IconLink href="https://github.com/stellalph/21-MERN-Book-Search-Engine.git" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://protected-brushlands-99995.herokuapp.com/" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: 'PWA Text Editor',
    desc:'A Web text editor where the user can create notes or code snippets with or without an internet connection ',
    img: IMG6,
    hyperGit: <IconLink href="https://github.com/stellalph/19-PWA-Text-Editor.git" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://mighty-waters-80466.herokuapp.com/" icon={IoRocket} />
  },
];

export default projects;