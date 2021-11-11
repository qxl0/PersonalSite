import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a full stack developer with a passion for creating beautiful and
        intuitive user experiences. I have a background in business and
        marketing, and I am currently working as a full stack developer at
        <a href="https://www.allscripts.com/"> Allscripts</a>.
      </SectionText>
      <Button onClick={()=>window.location = "https://linkedin.com/"}>Learn More</Button>
    </LeftSection>
  </Section> 
);

export default Hero;