import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';
import myPhoto from '../../../assets/img/photo.jpg';
import { Container } from '../../../components/Container';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexContainer
          align='center'
          content='space-between'>
          <div>
            <SmallText>Hi there</SmallText>
            <MainTitle>
              I am <span>Andrei Bortnik</span>
            </MainTitle>
            <PageTitle>A Web Developer.</PageTitle>
          </div>
          <PhotoWrapper>
            <StyledPhoto src={myPhoto} />
          </PhotoWrapper>
        </FlexContainer>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
`;
const StyledPhoto = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const MainTitle = styled.h2`
  color: #fff;
  font-family: Josefin Sans;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 2.5px;
  span {
    position: relative;
    z-index: 0;
    &::before {
      content: '';
      position: absolute;
      display: inline-block;
      height: 20px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.accent};
      z-index: -1;
      bottom: 0;
    }
  }
`;
const PageTitle = styled.h1`
  font-size: 27px;
  font-weight: 400;
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  &::before {
    content: '';
    position: absolute;
    top: -24px;
    left: 24px;
    width: 360px;
    height: 470px;
    border: 5px solid ${({ theme }) => theme.colors.accent};
    z-index: -1;
  }
`;

export default Main;
