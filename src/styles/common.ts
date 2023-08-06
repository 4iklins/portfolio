import { theme } from './theme';

interface FontType {
  family?: string;
  color?: string;
  weigth?: number;
  lineHeight?: number;
  Fmin?: number;
  Fmax?: number;
}

export const font = ({ family, weigth, color, lineHeight, Fmax, Fmin }: FontType) => `
	font-family:${family || 'Poppins'};
	font-weight:${weigth || 400};
	color:${color || theme.colors.font};
	line-height:${lineHeight || 1.2};
	font-size:calc((100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;
