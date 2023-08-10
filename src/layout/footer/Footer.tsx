import Icon from '../../components/icon/Icon';
import { FlexContainer } from '../../components/FlexContainer';
import { S } from './footer_styles';
import { social } from './footerData';

const Footer = () => {
  return (
    <S.Footer>
      <FlexContainer
        direction='column'
        align='center'
        gap='30px'>
        <S.Name>Andrei</S.Name>
        <S.SocialList>
          {social.map(item => {
            return (
              <S.SocialItem>
                <S.SocialLink href='#'>
                  <Icon
                    id={item.id}
                    width={item.width}
                    heigth={item.heigth}
                    viewBox={item.viewBox}
                  />
                </S.SocialLink>
              </S.SocialItem>
            );
          })}
        </S.SocialList>
        <S.Copyright>© 2023 Andrei Bortnik, All Rights Reserved.</S.Copyright>
      </FlexContainer>
    </S.Footer>
  );
};

export default Footer;
