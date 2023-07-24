import icon from '../../assets/img/icon-sprite.svg';

interface IconProps {
  id: string;
  width: string;
  heigth: string;
  viewBox: string;
  color: string;
}

const Icon = ({ id, width, heigth, viewBox, color }: IconProps) => {
  // "#7572D5"
  return (
    <svg
      width={width}
      height={heigth}
      viewBox={viewBox}
      fill={color}
      xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${icon}#${id}`}></use>
    </svg>
  );
};

export default Icon;
