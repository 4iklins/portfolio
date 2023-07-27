import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';
import SectionTitle from '../../../components/SectionTitle';
import SkillCard from './skill-card/SkillCard';
import { skillsArray } from './skillsData';

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Title</SectionTitle>
      <FlexContainer
        wrap='wrap'
        gap='10px'
        content='center'>
        {skillsArray.map(skill => {
          return (
            <SkillCard
              title={skill.title}
              iconId={skill.iconId}
              description={skill.description}
            />
          );
        })}
      </FlexContainer>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 100vh;
  text-align: center;
  background-color: #9ffcc6;
`;

export default Skills;
