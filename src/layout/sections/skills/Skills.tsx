import { FlexContainer } from '../../../components/FlexContainer';
import SectionTitle from '../../../components/SectionTitle';
import SkillCard from './skill_card/SkillCard';
import { skillsArray } from './skillsData';
import { Container } from '../../../components/Container';
import { S } from './skills_styles';

export const Skills = () => {
  return (
    <S.Skills id='skills'>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexContainer
          wrap='wrap'
          content='center'>
          {skillsArray.map(skill => {
            return (
              <SkillCard
                key={skill.title}
                title={skill.title}
                iconId={skill.iconId}
                description={skill.description}
              />
            );
          })}
        </FlexContainer>
      </Container>
    </S.Skills>
  );
};

export default Skills;
