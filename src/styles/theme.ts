import { ITheme } from '../interfaces/styled';

export const theme: ITheme = {
  colors: {
    bgPrimary: '#1F1F20',
    bgSecondary: '#252527',
    accent: '#7572D5',
    font: '#FFFFFF',
    border: '#4A4A4A',
    paceholder: '#495057',
  },
  media: {
    tablet: 'screen and (max-width: 768px)',
    mobile: 'screen and (max-width: 576px)',
    desktop: 'screen and (min-width: 1140px)',
  },
  animation: {
    transition: '0.2s ease-in-out',
  },
};
