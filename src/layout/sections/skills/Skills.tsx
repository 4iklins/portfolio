import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';
import SectionTitle from '../../../components/section-title/SectionTitle';
import Skill from '../../../components/skill/Skill';

export const Skills = () => {
  return (
    <StyledSkills>
      <SectionTitle>Title</SectionTitle>
      <FlexContainer>
        <Skill
          title='HTML5'
          iconId='code'
          description='somthig'
        />
      </FlexContainer>
    </StyledSkills>
  );
};

const StyledSkills = styled.section``;

export default Skills;
