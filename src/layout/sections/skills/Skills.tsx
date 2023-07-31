import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';
import SectionTitle from '../../../components/SectionTitle';
import SkillCard from './skill-card/SkillCard';
import { skillsArray } from './skillsData';
import { Container } from '../../../components/Container';

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My skills</SectionTitle>
        <FlexContainer
          wrap='wrap'
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
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;

export default Skills;
