export interface IMenuItem {
  menu: ITabMenu[];
  handleClick: (type: tabType) => void;
  tabState: tabType;
}
export type tabType = 'all' | 'landing' | 'react' | 'spa';
export interface ITabMenu {
  title: string;
  type: tabType;
}
