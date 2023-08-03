import styled from 'styled-components';
import SectionTitle from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { FlexContainer } from '../../../components/FlexContainer';

const Slogan = () => {
  return (
    <StyledSlogan>
      <Container>
        <FlexContainer
          direction='column'
          align='center'>
          <SectionTitle>I Am Available For Freelance</SectionTitle>
          <Button>Hire me</Button>
        </FlexContainer>
      </Container>
    </StyledSlogan>
  );
};
const StyledSlogan = styled.section`
  ${Button} {
    margin: 0 auto;
  }
`;
export default Slogan;
