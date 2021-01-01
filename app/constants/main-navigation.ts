export interface NavItem {
  title: string;
  iconName: string;
  route: string;
}

const mainNavigation: Array<NavItem> = [
  {
    title: 'Orders List',
    iconName: 'Home',
    route: '/',
  },
  {
    title: 'Add new pizza',
    iconName: 'StockDown',
    route: '/add-pizza',
  },
  {
    title: 'Add new sauce',
    iconName: 'Drop',
    route: '/add-sauce',
  },
  {
    title: 'Upload pizza image',
    iconName: 'CloudUpload',
    route: '/pizza-upload',
  },
  {
    title: 'Upload sauce image',
    iconName: 'CloudUpload',
    route: '/sauce-upload',
  },
];

export default mainNavigation;
