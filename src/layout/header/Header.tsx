import styled from 'styled-components';
import Menu from '../../components/menu/Menu';
import Logo from '../../components/logo/Logo';

const menu = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Menu menu={menu} />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  background-color: lightgreen;
`;

export default Header;
