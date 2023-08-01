import styled from 'styled-components';
import SectionTitle from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';

const Slogan = () => {
  return (
    <StyledSlogan>
      <SectionTitle>I Am Available For Freelance</SectionTitle>
      <Button>Hire me</Button>
    </StyledSlogan>
  );
};
const StyledSlogan = styled.section`
  ${Button} {
    margin: 0 auto;
  }
`;
export default Slogan;
