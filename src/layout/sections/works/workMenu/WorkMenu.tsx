import { Link } from '../../../../components/Link';
import { S } from './work_menu_styles';

export const WorkMenu = ({ menu }: { menu: string[] }) => {
  return (
    <S.WorkMenu>
      <ul>
        {menu.map(item => {
          return (
            <S.MenuItem>
              <Link href='#'>{item}</Link>
            </S.MenuItem>
          );
        })}
      </ul>
    </S.WorkMenu>
  );
};

export default WorkMenu;
