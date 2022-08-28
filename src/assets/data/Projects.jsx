import { v4 as uuidv4 } from 'uuid';
import IMG1 from '../images/portfolio1.png';
import IMG2 from '../images/portfolio2.jpg';
import IMG3 from '../images/portfolio3.jpg';
import IMG4 from '../images/portfolio4.png';
import IMG5 from '../images/portfolio5.jpg';
import IMG6 from '../images/portfolio6.png';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { IoRocket } from 'react-icons/io5';
import IconLink from '../../components/IconLink';


const projects = [
  {
    id: uuidv4(),
    name: 'Group Project 1 - Travel Planner',
    desc: 'Technologies Used: HTML, CSS Materialise, JQuery, Moment.js and the Fetch API',
    img: IMG1,
    hyperGit: <IconLink href="https://github.com/stellalph/Travel-planner.git" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://chardige.github.io/Travel-planner/" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: 'Group Project 2 - SKLHub',
    desc: 'Technologies Used: Node.js, Express.js, Handlebars, MySQL, Sequelize ORM and npm packages',
    img: IMG2,
    hyperGit: <IconLink href="https://github.com/stellalph/sklhub.git" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://warm-citadel-17427.herokuapp.com/" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: 'Final Project 3 - MERN Ski Resort',
    desc: 'Technologies Used: React.js, GraphQL, Node.js, Express.js, MongoDB, Mongoose ODM, JWT, & Stripe',
    img: IMG3,
    hyperGit: <IconLink href="https://github.com/stellalph/MERN-Ski-Resort.git" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://still-harbor-63486.herokuapp.com/" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: "Note Taker",
    desc: 'Technologies Used: Node.js and its dependencies, Insomnia, Express.js, Heroku ',
    img: IMG4,
    hyperGit: <IconLink href="https://github.com/stellalph/EJS-NOTE-TAKER.git" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://note-taker-app-stella.herokuapp.com/" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: 'MERN Book Search Engine',
    desc: 'React.js, MongoDB, Node.js, Express.js, API, Apollo Server, GraphQL ',
    img: IMG5,
    hyperGit: <IconLink href="https://github.com/stellalph/21-MERN-Book-Search-Engine.git" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://protected-brushlands-99995.herokuapp.com/" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: 'Weather Dashboard',
    desc: 'Technologies Used: HTML, CSS Bootstrap, jQuery, Moment.js, Open Weather API',
    img: IMG6,
    hyperGit: <IconLink href="https://github.com/stellalph/WEATHER-DASHBOARD.git" icon={faGithub} fontAwesome />,
    hyperDeployed: <IconLink href="https://stellalph.github.io/WEATHER-DASHBOARD/" icon={IoRocket} />
  },
];

export default projects;

