import styled, { css } from 'styled-components';

export const Link = styled.a<{ active?: boolean }>`
  position: relative;
  padding: 10px;
  z-index: 0;
  color: ${({ theme }) => theme.colors.font};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 1.2;
  text-transform: uppercase;
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    height: 0;
    bottom: 5px;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.accent};
    z-index: -1;
    transition: ${({ theme }) => theme.animation.transition};
  }
  &:hover {
    &::before {
      height: 10px;
    }
  }

  ${props =>
    props.active &&
    css`
      &::before {
        height: 10px;
      }
    `}
`;
