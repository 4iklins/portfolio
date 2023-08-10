import SectionTitle from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/Container';
import { S } from './contact_styles';

export const Contact = () => {
  return (
    <S.Contact>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <S.Form>
          <S.Input placeholder='Name' />
          <S.Input placeholder='Subject' />
          <S.Input
            placeholder='Text'
            as='textarea'
          />
          <Button>Send</Button>
        </S.Form>
      </Container>
    </S.Contact>
  );
};

export default Contact;
