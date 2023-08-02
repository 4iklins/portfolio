import styled from 'styled-components';
import Icon from '../../../../components/icon/Icon';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { FlexContainer } from '../../../../components/FlexContainer';

interface SkillProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  iconId: string;
  description: string;
}
const SkillCard = ({ title, iconId, description, ...props }: SkillProps) => {
  return (
    <StyledSkillCard>
      <FlexContainer
        direction='column'
        align='center'>
        <IconWrapper>
          <Icon
            id={iconId}
            color='#7572D5'
          />
        </IconWrapper>
        <StyledSkillHeading>{title}</StyledSkillHeading>
        <StyledSkillDescription>{description}</StyledSkillDescription>
      </FlexContainer>
    </StyledSkillCard>
  );
};

const StyledSkillCard = styled.div`
  width: calc(100% / 3);
  padding: 60px 20px 40px;
`;

const StyledSkillHeading = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`;

const StyledSkillDescription = styled.p`
  text-align: center;
`;

export const IconWrapper = styled.div`
  position: relative;
  z-index: 0;
  &::before {
    content: '';
    position: absolute;
    width: 80px;
    height: 80px;
    top: -15px;
    left: -15px;
    transform: rotate(45deg);
    z-index: -1;
    background: rgba(255, 255, 255, 0.1);
  }
`;

export default SkillCard;
