import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';

const HeaderMenu = styled.nav<{ isOpen: boolean }>`
  ul {
    display: flex;
    gap: 30px;
  }

  @media ${({ theme }) => theme.media.tablet} {
    ul {
      ${props => !props.isOpen && `display:none;`}
      position: fixed;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-color: rgb(31, 31, 32, 0.9);
    }
  }
`;

const Mask = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.accent};
  & + & {
    top: 50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`;

const MenuItem = styled.li`
  position: relative;
`;
const NavLink = styled(Link)`
  position: relative;
  font-family: Josefin Sans;
  font-size: 30px;
  font-weight: 400;
  color: transparent;
  text-transform: capitalize;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.accent};
    top: 50%;
    transform: scale(0);
    left: -10px;
    right: -10px;
    z-index: 1;
  }
  &:hover,
  &.active {
    &::before {
      transform: scale(1);
    }
    ${Mask} {
      transform: skewX(10deg) translateX(3px);
      color: ${({ theme }) => theme.colors.font};
      & + ${Mask} {
        transform: skewX(10deg) translateX(-3px);
      }
    }
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  display: none;
  @media ${({ theme }) => theme.media.tablet} {
    position: fixed;
    height: 100px;
    width: 100px;
    top: 0;
    right: 0;
    display: block;
    z-index: 1000;
    span {
      display: inline-block;
      position: absolute;
      width: 36px;
      height: 2px;
      top: 49px;
      right: 32px;

      background-color: ${({ theme }) => theme.colors.font};
    }
    &::before {
      content: '';
      display: inline-block;
      position: absolute;
      width: 36px;
      height: 2px;
      top: 38px;
      right: 32px;
      background-color: ${({ theme }) => theme.colors.font};
    }

    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      width: 24px;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.font};
      bottom: 38px;
      right: 32px;
    }

    ${props =>
      props.isOpen &&
      css`
        span {
          background-color: rgb(255, 255, 255, 0);
        }
        &::before {
          top: 49px;
          transform: rotate(-45deg);
        }

        &::after {
          width: 36px;
          bottom: 49px;
          transform: rotate(45deg);
        }
      `}
  }
`;

export const S = {
  BurgerButton,
  Mask,
  MenuItem,
  NavLink,
  HeaderMenu,
};
