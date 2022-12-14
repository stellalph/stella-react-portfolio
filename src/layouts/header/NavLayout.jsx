import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { MdMenu, MdClose } from 'react-icons/md';

const NavBarStyle = styled.nav`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 0;
    background: var(--dark-green);
    ul {
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        text-align: center;
        li{
            display: inline-block;
            border-radius: 8px;
            transition: 0.3s ease background-color;
            &:hover {
                background-color: var(--deep-dark);
            }
        }
    }
    a {
        display: inline-block;
        font-family: 'Montserrat SemiBold';
        padding: 1rem 2rem;
        font-size: 2.0rem;
        color: var(--light-blue);
        outline: none;
    }
    .active {
        color: var(--gray-green);
        border: solid;
        border-radius: 8px;
        border-color: var(--gray-green);
    }
    .mobile-menu-icon {
        position: absolute;
        right: 1rem;
        top: 1rem;
        width: 4rem;
        cursor: pointer;
        display: none;
        outline: none;
        * {
            pointer-events: none;
        }
    }
    .navItems .closeNavIcon {
        display: none;
    }
    @media only screen and (max-width: 768px) {
        padding: 0;
        .hide-item {
            transform: translateY(calc(-100% - var(--top)));
        }
        .mobile-menu-icon {
            display: block;
        }
        .navItems {
            --top: 1rem;
            transition: 0.3s ease transform;
            background-color: var(--deep-dark);
            padding: 2rem;
            width: 90%;
            max-width: 300px;
            border-radius: 12px;
            position: absolute;
            right: 1rem;
            top: var(--top);
            .closeNavIcon {
                display: block;
                width: 3rem;
                margin: 0 0 0 auto;
                cursor: pointer;
                * {
                    pointer-events: none;
                }
            } 
            li {
                display: block;
                margin-bottom: 1rem;
            }
        }
    }
`;
export default function NavLayout() {

    const navItems = [
        {
            title: 'Home',
            link: '/stella-react-portfolio',
        },
        {
            title: 'About',
            link: '/about',
        },
        
         {
             title: 'Work',
             link: '/work',
        },
        {
            title: 'Contact',
            link: '/contact',
        },

        
    ];
    const [showNav, SetShowNav] = useState(false);

    return (

        <div>
            <NavBarStyle>
                <div
                    className='mobile-menu-icon'
                    onClick={() => SetShowNav(!showNav)}
                    role='button'
                    onKeyDown={() => SetShowNav(!showNav)}
                    tabIndex={0}
                >
                    <MdMenu />
                </div>
                <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
                    <div className='closeNavIcon'
                        onClick={() => SetShowNav(!showNav)}
                        role='button'
                        onKeyDown={() => SetShowNav(!showNav)}
                        tabIndex={0}
                    >
                        <MdClose />
                    </div>
                    {navItems.map((item) => (
                        <li key={item.link}>
                            <NavLink to={item.link}
                                exact='true'
                                onClick={() => SetShowNav(!showNav)}
                                role='button'
                                onKeyDown={() => SetShowNav(!showNav)}
                            >
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </NavBarStyle>
        </div>
    )
}