import styled from 'styled-components';
import Icon from '../icon/Icon';
import { animateScroll } from 'react-scroll';
export const Logo = () => {
  return (
    <StyledLogo onClick={() => animateScroll.scrollToTop()}>
      <Icon
        id='code'
        width='50'
        heigth='50'
        viewBox='0 0 50 50'
        color='#7572D5'
      />
    </StyledLogo>
  );
};
const StyledLogo = styled.a`
  cursor: pointer;
  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }
`;

export default Logo;
