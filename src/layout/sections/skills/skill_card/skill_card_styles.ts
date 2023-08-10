import styled from 'styled-components';

const SkillCard = styled.div`
  width: calc(100% / 3);
  min-width: 300px;
  padding: 50px 20px 52px;
  flex-grow: 1;
`;

const SkillHeading = styled.h3`
  margin: 65px 0 15px;
  text-transform: uppercase;
`;

const SkillDescription = styled.p`
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

export const S = {
  SkillCard,
  IconWrapper,
  SkillDescription,
  SkillHeading,
};
