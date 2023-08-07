import styled from 'styled-components';
import { Link } from '../../../../components/Link';

export const WorkMenu = ({ menu }: { menu: string[] }) => {
  return (
    <StyledMenu>
      <ul>
        {menu.map(item => {
          return (
            <ListItem>
              <Link href='#'>{item}</Link>
            </ListItem>
          );
        })}
      </ul>
    </StyledMenu>
  );
};
const StyledMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 330px;
    margin: 0 auto 40px;
  }
`;

const ListItem = styled.li``;

export default WorkMenu;
