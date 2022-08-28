import React from 'react';
import PText from '../components/PText';
import AboutImage from '../assets/images/about_image.jpg'
import styled from 'styled-components';
import AboutInfoItem from '../components/AboutInfoItem';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;
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
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
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
      font-size: 3rem;
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
                Hi! I am <span>Stella Ling!</span>
              </p>
              <h2 className='about__heading'>Full Stack Web Developer</h2>
              <div className='about__info'>
                <PText>
                  Thank you for visiting my page!. I am from Adelaide, South Australia.
                 
                  <br/><br/>
                 
                  <br/><br/>
                
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
              title='The University of New South Wales, Sydney, Australia'
              items={['', 'Bachelor of Commerce majoring in Accounting']}
              />
              <AboutInfoItem
              title='The University of Adelaide, South Australia'
              items={['Full-Stack Coding Bootcamp']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skill Set</h1>
              <AboutInfoItem
              title='Front End'
              items={['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React.js']}
              />
              <AboutInfoItem
              title='Back End'
              items={['Node.js', 'Express', 'MongoDB', 'mySQL', 'GraphQL']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experience</h1>
              <AboutInfoItem
              title=''
              items={['']}
              />
              <AboutInfoItem
              title=''
              items={['']}
              />
            </div>
          </div>
        </div>
    </div>
    </AboutPageStyles>
  )
}