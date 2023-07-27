import styled from 'styled-components';
import Icon from '../../../../components/icon/Icon';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface SkillProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  iconId: string;
  description: string;
}
const SkillCard = ({ title, iconId, description, ...props }: SkillProps) => {
  return (
    <StyledSkillCard>
      <StyledSkillHeading>{title}</StyledSkillHeading>
      <Icon
        id={iconId}
        color='#7572D5'
      />
      <StyledSkillDescription>{description}</StyledSkillDescription>
    </StyledSkillCard>
  );
};

const StyledSkillCard = styled.div`
  background-color: #dfe7e389;
  width: 30%;
`;

const StyledSkillHeading = styled.h3``;

const StyledSkillDescription = styled.p``;

export default SkillCard;
