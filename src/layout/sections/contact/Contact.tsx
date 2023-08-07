import styled from 'styled-components';
import SectionTitle from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';

export const Contact = () => {
  return (
    <StyledContact>
      <Container>
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
      </Container>
    </StyledContact>
  );
};
const StyledContact = styled.section`
  min-height: 50vh;
  background-color: #eafcab;
`;
const Form = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 16px;
  textarea {
    resize: none;
    height: 155px;
  }
`;
const Input = styled.input`
  width: 100%;
  padding: 7px 15px;
  font-family: Poppins, sans-serif;
  font-size: 12px;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.font};
  &::placeholder {
    color: ${({ theme }) => theme.colors.paceholder};
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export default Contact;
