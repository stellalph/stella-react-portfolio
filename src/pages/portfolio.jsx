import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/Projects';


const PortfolioStyles = styled.div`
  padding: 10rem 0;
  .project__allitems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 4rem;
    margin-top: 5rem;
  }
`;

export default function Portfolio() {
  const [projectData] = useState(ProjectInfo);

  return (
    <PortfolioStyles>
         <div className="container">
           <SectionTitle heading='Projects' subheading=''/>
           <div className="project__allitems">
              {projectData.map((item) => (
              <ProjectItem
              key={item.id}
              title={item.name}
              desc={item.desc}
              img={item.img}
              hyperGit={item.hyperGit}
              hyperDeployed={item.hyperDeployed}
              />
              ))}
           </div>
         </div>
    </PortfolioStyles>
  )
}