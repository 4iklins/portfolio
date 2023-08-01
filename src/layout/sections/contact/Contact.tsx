import styled from 'styled-components';
import SectionTitle from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';

export const Contact = () => {
  return (
    <StyledContact>
      <SectionTitle>Contact</SectionTitle>
      <Form>
        <Input placeholder='Name' />
        <Input placeholder='Subject' />
        <Input
          placeholder='Text'
          as='textarea'
        />
        <Button>Send</Button>
      </Form>
    </StyledContact>
  );
};
const StyledContact = styled.section`
  min-height: 50vh;
  background-color: #eafcab;
`;
const Form = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 10px;
  ${Button} {
    align-self: center;
  }
`;
const Input = styled.input``;

export default Contact;
