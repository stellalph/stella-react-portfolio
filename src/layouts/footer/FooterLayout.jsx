import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';

const FooterStyles = styled.div`
.footer__container {
    display: flex;
    flex-direction: column;
    bottom: 0;
    position: fixed;
    justify-content: center;
    width: 100%;
    background: var(--dark-green);
  
}
.footerLinksList {
    display: flex;
    list-style: none;
    bottom: 0;
    justify-content: center;
    &:hover {
        color: var(--light-gray);
    }
}
.footerButtons {
    margin: 5px 10px 5px 5px;
    font-size: 2.5rem;
}
.trademark {
    display: flex;
    justify-content: center;
    font-size: 2.5rem;
}
`;

export default function footerLayout(props) {
  
    const socialLinks = [
        {
            title: <FontAwesomeIcon icon={faGithub} />,
            link: 'https://github.com/stellalph'
        },
        {
            title: <FontAwesomeIcon icon={faLinkedin}/>,
            link: 'https://www.linkedin.com/in/stella-ling-46246476/'
        },
        {
            title: <FontAwesomeIcon icon={faTwitter} />,
            link: 'https://twitter.com/Stellal29'
        },
       
    ]
  
    return (
    <div>
        <FooterStyles>
        <div className="footer__container">
            <ul className='footerLinksList'>
            {socialLinks.map((item, index) => (
                    <li key={index} className='footerButtons'>
                        <a href={item.link} target="_blank" rel="noreferrer noopener">
                        {item.title}
                        </a>
                    </li>
                ))} 
            </ul>
            <span className='trademark'>@ 2022 Stella Ling </span>
        </div>
        </FooterStyles>
        {props.children}

    </div>
  )
}