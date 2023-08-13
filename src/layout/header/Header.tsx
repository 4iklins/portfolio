import Logo from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexContainer } from '../../components/FlexContainer';
import HeaderMenu from './headerMenu/HeaderMenu';
import { S } from './header_styles';

const menu = [
  { title: 'home', id: 'main' },
  { title: 'skills', id: 'skills' },
  { title: 'works', id: 'work' },
  { title: 'testimony', id: 'testimony' },
  { title: 'contact', id: 'contact' },
];

export const Header = () => {
  return (
    <S.Header>
      <Container>
        <FlexContainer
          content='space-between'
          align='center'>
          <Logo />
          <HeaderMenu menu={menu} />
        </FlexContainer>
      </Container>
    </S.Header>
  );
};

export default Header;
