import styled from 'styled-components';

interface PhotoProps {
  src: string;
}

const Photo = ({ src }: PhotoProps) => {
  return <StyledPhoto src={src} />;
};

const StyledPhoto = styled.img<PhotoProps>`
  width: 350px;
  height: 430px;
  object-fit: cover;
`;

export default Photo;
