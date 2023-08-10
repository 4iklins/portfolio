import styled from 'styled-components';
import { font } from '../../styles/common';

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  padding: 40px 0;
`;
const Name = styled.span`
  display: block;
  text-align: center;
  ${font({ family: 'Josefin Sans, sans-serif', weigth: 700, Fmax: 22, Fmin: 16 })}
  font-weight: 700;
  letter-spacing: 3px;
`;
const SocialList = styled.ul`
  margin: 0 auto;
  display: flex;
  gap: 20px;
`;
const SocialItem = styled.li``;
const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);

  svg {
    fill: ${({ theme }) => theme.colors.accent};
  }
  &:hover {
    background: ${({ theme }) => theme.colors.accent};
    transform: translateY(-4px);
    svg {
      fill: ${({ theme }) => theme.colors.bgPrimary};
    }
  }
`;
const Copyright = styled.small`
  opacity: 0.4;
  font-size: 12px;
  font-weight: 400;
`;

export const S = {
  Footer,
  Name,
  SocialList,
  SocialItem,
  SocialLink,
  Copyright,
};
