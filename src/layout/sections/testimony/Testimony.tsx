import SectionTitle from '../../../components/SectionTitle';
import Icon from '../../../components/icon/Icon';
import Slider from '../../../components/slider/Slider';
import { FlexContainer } from '../../../components/FlexContainer';
import { IconWrapper } from '../skills/skill_card/skill_card_styles';
import { Container } from '../../../components/Container';
import { S } from './testimony-styles';

const Testimony = () => {
  return (
    <S.Testimony id='testimony'>
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
    </S.Testimony>
  );
};

export default Testimony;
