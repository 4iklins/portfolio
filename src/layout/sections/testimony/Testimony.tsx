import styled from 'styled-components';
import SectionTitle from '../../../components/section-title/SectionTitle';
import Icon from '../../../components/icon/Icon';
import Slider from '../../../components/slider/Slider';
import { FlexContainer } from '../../../components/FlexContainer';

const Testimony = () => {
  return (
    <StyledTestimony>
      <FlexContainer
        direction='column'
        align='center'>
        <SectionTitle>Testimony</SectionTitle>
        <Icon
          id='quote'
          heigth='50'
          width='50'
          color='#7572D5'
        />
        <Slider />
      </FlexContainer>
    </StyledTestimony>
  );
};
const StyledTestimony = styled.section`
  background-color: #b1c1f5;
`;

export default Testimony;
