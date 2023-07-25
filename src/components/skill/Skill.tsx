import styled from 'styled-components';
import Icon from '../icon/Icon';

interface SkillProps {
  title: string;
  iconId: string;
  description: string;
}
const Skill = ({ title, iconId, description }: SkillProps) => {
  return (
    <div>
      <StyledSkillHeading>{title}</StyledSkillHeading>
      <Icon id={iconId} />
      <StyledSkillDescription>{description}</StyledSkillDescription>
    </div>
  );
};

const StyledSkillHeading = styled.h3``;

const StyledSkillDescription = styled.p``;

export default Skill;
