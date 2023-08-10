import styled from 'styled-components';
import { Link } from '../../../../components/Link';
import { Button } from '../../../../components/Button';

const Work = styled.div`
  min-height: 1vh;
  width: 330px;
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.bgSecondary};
  ${Link} {
    padding: 10px 0;
    & + ${Link} {
      margin-left: 20px;
    }
  }
  @media ${({ theme }) => theme.media.desktop} {
    max-width: 540px;
  }
`;
const Image = styled.img`
  height: 260px;
  width: 100%;
  object-fit: cover;
`;
const Description = styled.div`
  padding: 25px 20px;
`;
const Title = styled.h3``;
const P = styled.p`
  padding: 15px 0 20px;
`;
const ImageWrapper = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);
    opacity: 0;
  }
  &:hover {
    &:before,
    ${Button} {
      opacity: 1;
    }
  }

  ${Button} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    &::before {
      height: 100%;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
  @media ${({ theme }) => theme.media.tablet} {
    &:before,
    ${Button} {
      opacity: 1;
    }
  }
`;

export const S = {
  Work,
  ImageWrapper,
  P,
  Title,
  Description,
  Image,
};
