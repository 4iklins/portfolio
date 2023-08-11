import { Link } from '../../../../components/Link';
import { S } from './work_menu_styles';
import { IMenuItem } from '../../../../interfaces/workMenu';

export const WorkMenu = ({ menu, handleClick, tabState }: IMenuItem) => {
  return (
    <S.WorkMenu>
      <ul>
        {menu.map(item => {
          return (
            <S.MenuItem
              onClick={() => handleClick(item.type)}
              key={item.type}>
              <Link
                active={item.type === tabState}
                as={'button'}>
                {item.title}
              </Link>
            </S.MenuItem>
          );
        })}
      </ul>
    </S.WorkMenu>
  );
};

export default WorkMenu;
