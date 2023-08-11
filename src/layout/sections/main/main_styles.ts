import styled from 'styled-components';
import { FlexContainer } from '../../../components/FlexContainer';
import { font } from '../../../styles/common';

const Main = styled.section`
  display: flex;
  min-height: 100vh;
  @media ${({ theme }) => theme.media.tablet} {
    ${FlexContainer} {
      flex-direction: column;
    }
  }
`;
const StyledPhoto = styled.img`
  width: 350px;
  height: 430px;
  object-fit: cover;
  margin-right: 20px;
  @media ${({ theme }) => theme.media.tablet} {
    width: 310px;
    height: 380px;
  }
`;

const SmallText = styled.span`
  font-size: 14px;
  font-weight: 400;
`;

const MainTitle = styled.h2`
  margin: 10px 0;
  ${font({ family: 'Josefin Sans, sans-serif', weigth: 700, Fmax: 50, Fmin: 36 })}
  letter-spacing: 2.5px;
  span {
    position: relative;
    z-index: 0;
    white-space: nowrap;
    &::before {
      content: '';
      position: absolute;
      display: inline-block;
      height: 20px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.accent};
      z-index: -1;
      bottom: 0;
    }
  }
  @media ${({ theme }) => theme.media.tablet} {
    margin: 15px 0 22px;
  }
`;
const PageTitle = styled.h1`
  ${font({ Fmax: 27, Fmin: 20 })}

  p {
    display: none;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  &::before {
    content: '';
    position: absolute;
    top: -24px;
    left: 24px;
    width: 360px;
    height: 470px;
    border: 5px solid ${({ theme }) => theme.colors.accent};
    z-index: -1;
  }
  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 65px;
    &::before {
      width: 314px;
      height: 414px;
      top: -20px;
      left: 20px;
    }
  }
`;

export const S = {
  Main,
  StyledPhoto,
  MainTitle,
  PageTitle,
  PhotoWrapper,
  SmallText,
};
