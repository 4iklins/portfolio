import { useState } from 'react';
import { S } from './HeaderMenu_Styles';

const HeaderMenu = ({ menu }: { menu: string[] }) => {
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
            <S.MenuItem key={item}>
              <S.Link href='#'>
                {item}
                <S.Mask>
                  <span>{item}</span>
                </S.Mask>
                <S.Mask>
                  <span>{item}</span>
                </S.Mask>
              </S.Link>
            </S.MenuItem>
          );
        })}
      </ul>
    </S.HeaderMenu>
  );
};

export default HeaderMenu;
