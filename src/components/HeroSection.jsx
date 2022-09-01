import React from 'react';
import styled from 'styled-components';
import HeroImage from '../assets/images/hero_image.png';
import PText from './PText';

const HeroStyles = styled.div`
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
        font-size: 5rem;
        margin-bottom: -4rem;
        position: relative;
        span {
            display: inline-block;
            width: 100%;
        }
        .hero__name {
            font-size: 5rem;
          
            color: var(--blue-3); 
            margin-bottom: 100px;
        }
    }
    .hero__image {
        max-width: 500px;
        width: 100%;
        height: 720px;
        margin: 0 auto;
        border: 10px solid var(--blue-2);
        border-radius: 20px;
    }
    .hero__info {
        margin-top: -10rem;
    }
`;

export default function HeroSection() {
    return (
        <HeroStyles>
            <div className="hero">
                <div className="container">
                    <h1 className='hero__heading'>
                        <span>Hi, I am Stella Ling</span>
                        <span className='hero__name'>Full Stack Web Developer</span>
                    </h1>
                    <div className="hero__image">
                        <img src={HeroImage} alt='me-chinatown' />
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
