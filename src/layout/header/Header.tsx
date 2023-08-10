import Logo from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexContainer } from '../../components/FlexContainer';
import HeaderMenu from './headerMenu/HeaderMenu';
import { S } from './header_styles';

const menu = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];

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
