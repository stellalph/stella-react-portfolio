import { v4 as uuidv4 } from 'uuid';
import IMG1 from '../images/portfolio1.jpg';
import IMG2 from '../images/portfolio2.jpg';
import IMG3 from '../images/portfolio3.jpg';
import IMG4 from '../images/portfolio4.jpg';
import IMG5 from '../images/portfolio5.jpg';
import IMG6 from '../images/portfolio6.jpg';
import { FaGithub } from 'react-icons/fa';
import { IoRocket } from 'react-icons/io5';
import IconLink from '../../components/IconLink';



const projects = [
  {
    id: uuidv4(),
    name: 'Group Project 1 - Travel Planner',
    desc: 'A travel planner for travellers to plan activities. Technologies used are HTML, CSS Materialise, JQuery, Moment.js and the Fetch API',
    img: IMG1,
    hyperGit: <IconLink href="https://github.com/stellalph/Travel-planner.git" target="_blank" rel="noreferrer noopener" icon={FaGithub} />,
    hyperDeployed: <IconLink href="https://chardige.github.io/Travel-planner" target="_blank"rel="noreferrer noopener" icon={IoRocket}/>
  },
  {
    id: uuidv4(),
    name: 'Group Project 2 - SKLHub',
    desc: 'A skill bartering money-free application. Technologies used are Node.js and its dependencies, Express.js, Handlebars, MySQL Sequelize ORM',
    img: IMG2,
    hyperGit: <IconLink href='https://github.com/stellalph/sklhub.git' target ="_blank" rel="noreferrer noopener" icon={FaGithub}/>,
    hyperDeployed: <IconLink href='https://warm-citadel-17427.herokuapp.com/'target="_blank" rel="noreferrer noopener" icon={IoRocket}/>
  },
  {
    id: uuidv4(),
    name: 'Final Project 3 - MERN Ski Resort',
    desc: 'A MERN single page application encouraging the users to stay active. Technologies are React, GraphQL, Node.js, and MongoDB',
    img: IMG3,
    hyperGit: <IconLink href="https://github.com/stellalph/MERN-Ski-Resort.git" target="_blank" rel="noreferrer noopener" icon={FaGithub}/>,
    hyperDeployed: <IconLink href="https://still-harbor-63486.herokuapp.com/" target="_blank" rel="noreferrer noopener" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: "Note Taker",
    desc: 'A note taker application used to write and save notes allowing the users to better organize their thoughts.  Technologies are Node.js and its dependencies, Insomnia and Express.js',
    img: IMG4,
    hyperGit: <IconLink href="https://github.com/stellalph/EJS-NOTE-TAKER.git" target="_blank" rel="noreferrer noopener" icon={FaGithub} />,
    hyperDeployed: <IconLink href='https://note-taker-app-stella.herokuapp.com/'target="_blank" rel="noreferrer noopener" icon={IoRocket}/>
  },
  {
    id: uuidv4(),
    name: 'Google Book Search Engine',
    desc: 'A Google Books API search engine built with RESTful API and refactor it to be a GraphQL API built with Apollo Server and using the MERN technologies - MongoDB, Express, React and Node',
    img: IMG5,
    hyperGit: <IconLink href="https://github.com/stellalph/21-MERN-Book-Search-Engine.git" target="_blank" rel="noreferrer noopener" icon={FaGithub}/>,
    hyperDeployed: <IconLink href="https://protected-brushlands-99995.herokuapp.com/" target="_blank" rel="noreferrer noopener" icon={IoRocket} />
  },
  {
    id: uuidv4(),
    name: 'Weather Dashboard',
    desc: 'A weather dashboard so that the user would be able to see the weather forecast for multiple cities. Technologies are HTML, CSS Bootstrap, jQuery, Moment.js and Open Weather API',
    img: IMG6,
    hyperGit: <IconLink href="https://github.com/stellalph/WEATHER-DASHBOARD.git" target="_blank" rel="noreferrer noopener" icon={FaGithub}/>,
    hyperDeployed: <IconLink href="https://stellalph.github.io/WEATHER-DASHBOARD/" target="_blank" rel="noreferrer noopener" icon={IoRocket} />
  },
];

export default projects;

