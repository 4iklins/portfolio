import styled, { css } from 'styled-components';

export const Link = styled.a<{ active?: boolean }>`
  position: relative;
  padding: 10px;
  z-index: 0;
  color: ${({ theme }) => theme.colors.font};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    height: 10px;
    bottom: 7px;
    left: 0;
    background-color: ${({ theme }) => theme.colors.accent};
    z-index: -1;
  }
  &:hover {
    &::before {
      right: 0;
    }
  }

  ${props =>
    props.active &&
    css`
      &::before {
        right: 0;
      }
    `}
`;
