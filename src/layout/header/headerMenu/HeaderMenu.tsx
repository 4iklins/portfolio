import { S } from './HeaderMenu_Styles';

const HeaderMenu = ({ menu }: { menu: string[] }) => {
  return (
    <S.HeaderMenu isOpen={false}>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>
      <ul>
        {menu.map(item => {
          return (
            <S.MenuItem>
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
