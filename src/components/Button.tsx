import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  max-width: 170px;
  padding: 10px;
  color: ${({ theme }) => theme.colors.font};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 0;
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    height: 10px;
    left: 10px;
    right: 10px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.colors.accent};
    z-index: -1;
  }
  &:hover {
    &::before {
      height: 100%;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
`;
