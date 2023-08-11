import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Link } from '../../../../components/Link';
import { Button } from '../../../../components/Button';
import { S } from './work_styles';

interface WorkProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imgSrc: string;
  title: string;
  description: string;
  linkDemo: string;
  linkCode: string;
  type?: string;
}

const Work = ({ imgSrc, title, description, linkDemo, linkCode }: WorkProps) => {
  return (
    <S.Work>
      <S.ImageWrapper>
        <S.Image src={imgSrc} />
        <Button>view project</Button>
      </S.ImageWrapper>

      <S.Description>
        <S.Title>{title}</S.Title>
        <S.P>{description}</S.P>
        <Link href={linkDemo}>Demo</Link>
        <Link href={linkCode}>Code</Link>
      </S.Description>
    </S.Work>
  );
};

export default Work;
