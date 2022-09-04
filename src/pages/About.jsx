import React from 'react';
import PText from '../components/PText';
import AboutImage from '../assets/images/about_image.jpg'
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';
import CV from '../assets/images/cv.pdf';   

const AboutPageStyles = styled.div`
padding: 15rem 0 10rem 0;
.top-section {
display: flex;
align-items: center;
justify-content: center;
    gap: 2.0rem;
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
      padding: 1.5rem;
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
  .cta {
    margin-top: 2.5rem;
    display: flex;
    border: 5px solid var(--gray-green);
    border-radius: 20px;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-bottom: 40px;
    font-size: 20px;
    max-width: 350px;
    width: 100%;
    margin: auto;
  background-color: var(--dark-green);




   @media only screen and (max-width: 768px) {
     padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
   .about__subheading {
      font-size: 0.5rem;
    }
    .about__heading {
      font-size: 2.5rem;
    }
   .about__info__heading {
      font-size: 2.0rem;
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
                  Full stack developer leveraging background in finance and taxation to provide unique perspectives on how the end-users could interact with the websites and software platforms. I have earned a professional certification in Full Stack Web Development from The University of Adelaide Coding Bootcamp.  I also have a Bachelor of Commerce (majoring in Accounting) from The University of New South Wales, Australia and worked for many years as an Accountant.            
                   <br/><br/>
                 Web Development and Information Systems always inspired me and I am very passionate about developing applications with a focus on mobile-first design and development.  My strengths lie in creativity, teamwork, and building projects from ideation to execution.            
                  <br/><br/> 
                  <div className='cta'>
                        <a href={CV} download className='btn' target="_blank" rel="noreferrer noopener" style={{ color: "light-blue", fontSize: "30px" }}>View Resume</a>
                    </div>
                    <div className="hero__info"></div>      
               </PText>
             </div>
            </div>
            <div className="right">
              <img src={AboutImage} alt="Stella Ling"/>
           </div>
           </div>
          <div className="about__info__items">
           <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
               <AboutInfoItem
             title='The University of New South Wales, Australia'
               items={[ 'Bachelor of Commerce majoring in Accounting']}
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