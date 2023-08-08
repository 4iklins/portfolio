import styled from 'styled-components';
import SectionTitle from '../../../components/SectionTitle';
import Icon from '../../../components/icon/Icon';
import Slider from '../../../components/slider/Slider';
import { FlexContainer } from '../../../components/FlexContainer';
import { IconWrapper } from '../skills/skill-card/SkillCard';
import { Container } from '../../../components/Container';

const Testimony = () => {
  return (
    <StyledTestimony>
      <SectionTitle>Testimony</SectionTitle>
      <Container>
        <FlexContainer
          direction='column'
          align='center'>
          <IconWrapper>
            <Icon
              id='quote'
              heigth='50'
              width='50'
              color='#7572D5'
            />
          </IconWrapper>
          <Slider />
        </FlexContainer>
      </Container>
    </StyledTestimony>
  );
};
const StyledTestimony = styled.section`
  ${IconWrapper} {
    margin: 35px 0 70px;
  }
`;

export default Testimony;
