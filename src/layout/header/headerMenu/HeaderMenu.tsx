import styled from 'styled-components';

const HeaderMenu = ({ menu }: { menu: string[] }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {menu.map(item => {
          return (
            <ListItem>
              <Link href='#'>
                {item}
                <Mask>
                  <span>{item}</span>
                </Mask>
                <Mask>
                  <span>{item}</span>
                </Mask>
              </Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledHeaderMenu>
  );
};
const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`;

const Link = styled.a`
  position: relative;
  font-family: Josefin Sans;
  font-size: 30px;
  font-weight: 400;
  color: transparent;
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.accent};
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const ListItem = styled.li`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    top: 50%;
    transform: scale(0);
    left: -10px;
    right: -10px;
    z-index: 1;
  }
  &:hover {
    &::before {
      transform: scale(1);
    }
    ${Mask} {
      transform: skewX(10deg) translateX(3px);
      color: ${({ theme }) => theme.colors.font};
      & + ${Mask} {
        transform: skewX(10deg) translateX(-3px);
      }
    }
  }
`;
export default HeaderMenu;
