import { FlexContainer } from '../../../components/FlexContainer';
import myPhoto from '../../../assets/img/photo.jpg';
import { Container } from '../../../components/Container';
import { S } from './main_styles';

export const Main = () => {
  return (
    <S.Main>
      <Container>
        <FlexContainer
          align='center'
          content='space-between'
          wrap='wrap'>
          <div>
            <S.SmallText>Hi there</S.SmallText>
            <S.MainTitle>
              I am <span>Andrei Bortnik</span>
            </S.MainTitle>
            <S.PageTitle>A Web Developer.</S.PageTitle>
          </div>
          <S.PhotoWrapper>
            <S.StyledPhoto src={myPhoto} />
          </S.PhotoWrapper>
        </FlexContainer>
      </Container>
    </S.Main>
  );
};

export default Main;
