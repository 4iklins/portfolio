import { S } from './slider_styles';

interface ISlide {
  text: string;
  name: string;
}

const Slide = ({ text, name }: ISlide) => {
  return (
    <S.Slide>
      <S.Text>{text}</S.Text>
      <S.Name>@{name}</S.Name>
    </S.Slide>
  );
};

export default Slide;
