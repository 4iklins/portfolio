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
  margin-bottom: 40px;
  ul {
    display: flex;
    gap: 20px;
    justify-content: center;
  }
`;

const ListItem = styled.li``;

export default WorkMenu;
