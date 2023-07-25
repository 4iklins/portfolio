import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';
import Photo from '../../../components/photo/Photo';
import myPhoto from '../../../assets/img/photo.jpg';

export const Main = () => {
  return (
    <StyledMain>
      <FlexContainer
        align='center'
        content='space-around'>
        <div>
          <span>Hi there</span>
          <h2>I am Andrei Bortnik</h2>
          <h1>A Web Developer. </h1>
        </div>
        <Photo src={myPhoto} />
      </FlexContainer>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: #deffff;
`;

export default Main;
