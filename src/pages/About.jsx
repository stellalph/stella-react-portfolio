import React from 'react';
import PText from '../components/PText';
import AboutImage from '../assets/images/about_image.jpg'
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';
// import {FaHandPointer} from 'react-icons/fa';

// const openInNewTab = url => {
//   window.open(url, '_blank', 'noopener,noreferrer');
// };

const AboutPageStyles = styled.div`

    padding: 15rem 0 10rem 0;
   .top-section {
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 2rem;
   }
  .left {
     flex: 3;
   }
   .right {
     flex: 2;
  }
   .about__subheading {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    span {
       background-color: var(--dark-green);
       padding: 0.5rem;
       border-radius: 10px;
     }
   }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 1rem;
    .para {
    max-width: 100%;
     }
   }
  .right {
    img {
      border: 8px solid var(--gray-green);
      border-radius: 25px;
      height: 520px;
    }
   }
  .about__info__items {
    margin-top: 10rem;
   
   }
   .about__info__item {
     margin-bottom: 15rem;
    
   }
   .about__info__heading {
     font-size: 3.0rem;
     text-transform: uppercase;
  }

   @media only screen and (max-width: 768px) {
     padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
   .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
   .about__info__heading {
      font-size: 2.0rem;
     }        
     margin-top: 1rem;
     .Button {
       font-size: 25px;
    
       padding: 0.7em 2em;    
       border-radius: 10px;
       display: inline-block;
  
     }
     @media only screen and (max-width: 768px) {
       .Button {
         font-size: 2rem;
         padding: 0.7em 2em;
         background-color: transparent;
  
       }
     }
`;

export default function About() {
  return (
    <AboutPageStyles>
      <div>
        <div className='container'>
          <div className='top-section'>
            <div className='left'>
              <p className='about__subheading'>
                {/* Hi! I am <span>Stella Ling!</span> */}
              </p>
              <h2 className='about__heading'>WHO AM I</h2>
              <div className='about__info'>
                <PText>
                  Full stack web developer leveraging background in finance and taxation to provide unique perspectives on how the end-users could interact with the websites and software platforms. I have earned a professional certification in Full Stack Web Development from The University of Adelaide Coding Bootcamp.  I also have a Bachelor of Commerce (majoring in Accounting) from The University of New South Wales, Australia and worked for many years as an Accountant.
                  <br /><br />
                  Web Development and Information Systems always inspired me and I am very passionate about developing applications with a focus on mobile-first design and development.  My strengths lie in creativity, teamwork, and building projects from ideation to execution.
                  <br /><br />
                  {/* <div className="Button">
                        <a href={CV} download className='Button' target="_blank" rel="noreferrer noopener" style={{ color: "light-blue", fontSize: "30px" }}>Resume</a>
                    </div> */}
                  <br></br>
                  <br></br>
                  <div></div>
                  <div>
                    <h1>👇️</h1>
                    <br></br>
                    {/* 👇️ open link in new tab */}
                    <a href="https://drive.google.com/file/d/19RCJpbDxtrL2J_ha5aWfQik3IZLznY0-/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ fontSize: "25px" }}>
                    🔗 Click Here To Download CV</a>
                  {/* <p><FaHandPointer style={{fontSize:"10px"}}/></p> */}
                    <br></br>
                    <br></br>
                    <hr />
                    {/* < div className="Button"> */}
                    {/* 👇️ open link in new tab using a button */}
                    {/* <button onClick={() => openInNewTab("https://drive.google.com/file/d/19RCJpbDxtrL2J_ha5aWfQik3IZLznY0-/view?usp=sharing")}>
                        Click Here to download CV
                      </button> */}
                    {/* </div> */}
                  </div>
                </PText>
              </div>
            </div>
            <div className="right">
              <img src={AboutImage} alt="Stella Ling" />

            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title='The University of New South Wales, Australia'
                items={['Bachelor of Commerce majoring in Accounting']}
              />
              <AboutInfoItem
                title='The University of Adelaide, South Australia'
                items={['Full-Stack Coding Bootcamp']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Skills</h1>
              <AboutInfoItem
                title='Front End'
                items={['HTML', 'CSS  ', 'Bootstrap', 'JavaScript', 'React.js']}
              />
              <AboutInfoItem
                title='Back End'
                items={['Node.js', 'Express', 'MongoDB', 'mySQL', 'Mongoose']}
              />
              <AboutInfoItem
                title='Tools'
                items={['Insomnia', 'GraphQL', 'MySQL WorkBench', 'Heroku', 'GiT']}
              />
            </div>
          </div>
        </div>
      </div>
    </AboutPageStyles>
  )
}
