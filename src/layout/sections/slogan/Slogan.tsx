import SectionTitle from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { FlexContainer } from '../../../components/FlexContainer';
import { S } from './slogan_styles';

const Slogan = () => {
  return (
    <S.Slogan id='slogan'>
      <Container>
        <FlexContainer
          direction='column'
          align='center'>
          <SectionTitle>I Am Available For Freelance</SectionTitle>
          <Button>Hire me</Button>
        </FlexContainer>
      </Container>
    </S.Slogan>
  );
};

export default Slogan;
