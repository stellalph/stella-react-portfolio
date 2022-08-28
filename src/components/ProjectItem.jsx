import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import placeholderImg from '../assets/images/placeholderImg.png'

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 500px;
    border-radius: 20px;
    overflow: hidden;
    display: inline-block;
    border: 10px solid var(--gray-2);
    img {
      height: 100%
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 20px;
  }
  .projectItem__title {
    font-size: 2.0rem;
    .icon {
      font-size: 3.2rem;
    }
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .hyperlinks {
    display: flex;
    justify-content: space-around;
  }
  .icon {
    display: block;
    width: fit-content;
    margin: auto;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 450px;
    }
  }
`;

export default function ProjectItem({
  img = placeholderImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  hyperGit ='#',
  hyperDeployed = '#'
}) {
  return (
    <ProjectItemStyles>

      {/* <IoRocket style={{
        width: '50px',
      }}/> */}

      <Link to="#" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
      <div className="projectItem__info">
        <div className="hyperlinks">
          <h3 className="projectItem__title"><div className="icon">{hyperGit}</div>GitHub</h3>
          <h3 className="projectItem__title"><div className="icon">{hyperDeployed}</div> Deployed</h3>
        </div>
      </div>
    </ProjectItemStyles>
  );
}