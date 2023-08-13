import { useState } from 'react';
import { S } from './HeaderMenu_Styles';

const HeaderMenu = ({ menu }: { menu: { title: string; id: string }[] }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <S.HeaderMenu isOpen={showMenu}>
      <S.BurgerButton
        isOpen={showMenu}
        onClick={handleClick}>
        <span></span>
      </S.BurgerButton>
      <ul>
        {menu.map(item => {
          return (
            <S.MenuItem key={item.id}>
              <S.NavLink
                activeClass='active'
                to={`${item.id}`}
                smooth
                spy>
                {item.title}
                <S.Mask>
                  <span>{item.title}</span>
                </S.Mask>
                <S.Mask>
                  <span>{item.title}</span>
                </S.Mask>
              </S.NavLink>
            </S.MenuItem>
          );
        })}
      </ul>
    </S.HeaderMenu>
  );
};

export default HeaderMenu;
