import React from 'react';
import styled from 'styled-components';
import CV from '../assets/images/cv.pdf';
import HeroImage from '../assets/images/hero_image.png';
import PText from './PText';


const HeroStyles = styled.div`
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
      
   
        
    }
    .hero {
        height: 90vh;
        min-height: 850px;
        width: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .hero__heading {
        font-size: 3.0rem;
        margin-bottom: -4rem;
        position: relative;
        span {
            display: inline-block;
            width: 100%;
        }
        .hero__name {
            font-size: 3.5rem;
          
            color: var(--gray-green); 
            margin-bottom: 100px;
        }
    }
    .hero__image {
        max-width: 350px;
        width: 100%;
        height: 460px;
        margin: 0 auto;
        border: 10px solid var(--gray-green);
        border-radius: 30px;
    }
    .hero__info {
        margin-top: -10rem;
    }
    @media only screen and (max-width: 768px) {
  
        align-items: flex-start;
        gap: 1rem;
        .items {
          position: initial;
          gap: 1rem;
        }
        .title {
          font-size: 2rem;
        }
      }
    
`;

export default function HeroSection() {
    return (
        <HeroStyles>
            <div className="hero">
                <div className="container">
                    <h1 className="hero__heading">
                        <span>Hi, I am Stella Ling</span>
                        <span className='hero__name'>Full Stack Web Developer</span>
                    </h1>
                    {/* <br></br>
                    <div className='cta'>
                        <a href={CV} download className='btn' target="_blank" rel="noopener noreferrer" style={{ color: "light-blue", fontSize: "25px" }}>Resume</a>
                    </div>
                    <br></br>
                    <br></br> */}
                    <div className="hero__image">
                        <img src={HeroImage} alt='me-adelaide' />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='cta'>
                        <a href={CV} download className='btn' target="_blank" rel="noopener noreferrer" style={{ color: "light-blue", fontSize: "30px" }}>View Resume</a>
                    </div>
                    <div className="hero__info">
                        <PText>
                        </PText>
                    </div>
                </div>
            </div>
        </HeroStyles>
    )
}
