import React from 'react'
import './Work.css'
import IMG1 from '../assets/images/portfolio1.jpg'
import IMG2 from '../assets/images/portfolio2.jpg'
import IMG3 from '../assets/images/portfolio3.jpg'
import IMG4 from '../assets/images/portfolio4.jpg'
import IMG5 from '../assets/images/portfolio5.jpg'
import IMG6 from '../assets/images/portfolio6.jpg'
import { FaGithub } from 'react-icons/fa'
import { IoRocket } from 'react-icons/io5';

// SIX OF MY PROJECTS.....

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Weather Dashboard',
    desc: 'A weather dashboard so that the user would be able to see the weather forecast for multiple cities. Technologies: HTML, CSS Bootstrap, jQuery, Moment.js and Open Weather API',
    github: 'https://github.com/stellalph/WEATHER-DASHBOARD.git',
    demo: 'https://stellalph.github.io/WEATHER-DASHBOARD/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Group Project 2 -SKLHub',
    desc: 'A skill bartering money-free application the users to revert to the old way of doing things.  Technologies: Node.js and its dependencies, Express.js, Handlebars, MySQL Sequielize ORM',
    github: 'https://github.com/stellalph/sklhub.git',
    demo: 'https://warm-citadel-17427.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Group Project 1 - Travel Planner',
    desc: 'A travel planner for travellers to plan activities and manage their budget. Technologies: HTML, CSS Materialise, JQuery, Moment.js and the Fetch API',
    github: 'https://chardige.github.io/Travel-planner/',
    demo: 'https://github.com/CharDige/Travel-planner.git'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Project 3 - MERN Ski Resort',
    desc: 'A MERN single page application encouraging the users to stay active and healthy and foster friendships.  Technologies: React, GraphQL, Node.js and MongoDB',
    github: 'https://github.com/stellalph/MERN-Ski-Resort.git',
    demo: 'https://still-harbor-63486.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Note Taker',
    desc: 'A note taker application used to write and save notes allowing the users to better organize their thoughts. Technologies: Node.js and its dependencies, Insomnia and Express.js',
    github: 'https://github.com/stellalph/EJS-NOTE-TAKER',
    demo: 'https://note-taker-app-stella.herokuapp.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'MERN Book Search Engine',
    desc: 'A Google Books API search engine built with RESTful API and refactor it to be a GraphQL API built with Apollo Server and using the MERN technologies - MongoDB, Express, React and Node',
    github: 'https://github.com/stellalph/21-MERN-Book-Search-Engine.git',
    demo: 'https://protected-brushlands-99995.herokuapp.com/'
  },


]


const Work = () => {
  return (
    <section id='portfolio'>
      <br></br>
      <br></br>
      <br></br>
   
        <br></br>
        <br></br>
        <br></br>
        <p style={{textAlign: "center", fontSize:"30px"}}>Some of my recent works</p>
        <br></br>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, desc, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <h4>{desc}</h4>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noopener noreferrer" ><FaGithub />Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer"><IoRocket style={{fontSize:"4px"}}/>Deployed Link</a>
                </div>
              </article>
             
            )
          })
        }
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </section>
  
  )
}
<br>
</br>
export default Work