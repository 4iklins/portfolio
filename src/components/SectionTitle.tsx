import styled from 'styled-components';
import { font } from '../styles/common';

export const SectionTitle = styled.h2`
  position: relative;
  text-align: center;
  ${font({ family: 'Josefin Sans', weigth: 600, Fmax: 36, Fmin: 30 })}
  letter-spacing: 5px;
  margin-bottom: 85px;
  &::after {
    content: '';
    position: absolute;
    width: 55px;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.accent};
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);
    @media ${({ theme }) => theme.media.tablet} {
      bottom: -20px;
    }
  }
  @media ${({ theme }) => theme.media.tablet} {
    margin-bottom: 75px;
  }
`;

export default SectionTitle;
