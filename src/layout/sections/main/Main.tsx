import { FlexContainer } from '../../../components/FlexContainer';
import myPhoto from '../../../assets/img/photo.jpg';
import { Container } from '../../../components/Container';
import { S } from './main_styles';
import Typewriter from 'typewriter-effect';

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
            <S.PageTitle>
              <Typewriter
                onInit={typewriter => {
                  typewriter.pauseFor(2000).typeString('A Web Developer.').start();
                }}
              />
              <p>A Web Developer.</p>
            </S.PageTitle>
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
