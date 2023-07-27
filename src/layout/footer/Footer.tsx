import styled from 'styled-components';
import Icon from '../../components/icon/Icon';
import { FlexContainer } from '../../components/FlexContainer';

const Footer = () => {
  return (
    <StiledFooter>
      <FlexContainer
        direction='column'
        align='center'
        gap='20px'>
        <Name>Andrei</Name>
        <SocialList>
          <SocialItem>
            <SocialLink href='#'>
              <Icon
                id='telegram'
                width='21'
                heigth='21'
                viewBox='0 0 21 21'
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href='#'>
              <Icon
                id='linkedin'
                width='21'
                heigth='21'
                viewBox='0 0 21 21'
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink href='#'>
              <Icon
                id='github'
                width='21'
                heigth='21'
                viewBox='0 0 100 100'
              />
            </SocialLink>
          </SocialItem>
        </SocialList>
        <Copyright>© 2023 Andrei Bortnik, All Rights Reserved.</Copyright>
      </FlexContainer>
    </StiledFooter>
  );
};

const StiledFooter = styled.footer`
  background-color: #deffff;
  min-height: 15vh;
`;
const Name = styled.span`
  display: block;
  text-align: center;
`;
const SocialList = styled.ul`
  margin: 0 auto;
  display: flex;
  gap: 10px;
`;
const SocialItem = styled.li``;
const SocialLink = styled.a``;
const Copyright = styled.small``;

export default Footer;
