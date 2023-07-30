import styled from 'styled-components';
import Logo from '../../components/logo/Logo';
import { Container } from '../../components/Container';
import { FlexContainer } from '../../components/FlexContainer';
import HeaderMenu from './headerMenu/HeaderMenu';

const menu = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexContainer
          content='space-between'
          align='center'>
          <Logo />
          <HeaderMenu menu={menu} />
        </FlexContainer>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: rgb(31, 31, 32, 0.9);
  position: fixed;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10000;
`;

export default Header;
