import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styled from 'styled-components';

interface WorkProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imgSrc: string;
  title: string;
  description: string;
  linkDemo: string;
  linkCode: string;
}

const Work = ({ imgSrc, title, description, linkDemo, linkCode }: WorkProps) => {
  return (
    <StyledWork>
      <Image src={imgSrc} />
      <Title>{title}</Title>
      <P>{description}</P>
      <Link href={linkDemo}>Demo</Link>
      <Link href={linkCode}>Code</Link>
    </StyledWork>
  );
};

const StyledWork = styled.div``;
const Image = styled.img``;
const Title = styled.h3``;
const P = styled.p``;
const Link = styled.a``;

export default Work;
