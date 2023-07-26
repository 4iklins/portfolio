import styled from 'styled-components';

export const Menu = ({ menu }: { menu: string[] }) => {
  return (
    <StyledMenu>
      <ul>
        {menu.map(item => {
          return (
            <li>
              <a href='#'>{item}</a>
            </li>
          );
        })}
      </ul>
    </StyledMenu>
  );
};
const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;

export default Menu;
