import { INTERNAL_ROUTES } from '../constants';
import { Category, Demo, Element } from '../interfaces';

export const CATEGORIES_DATA_ITEMS: Category[] = [
	{
		id: 'daily-oferts',
		name: 'Daily offers',
		isItemLead: true,
	},
	{
		id: 'gift-ideas',
		name: 'Gift Ideas',
		isItemLead: true,
	},
	{
		id: 'beds',
		name: 'Beds',
		isItemLead: false,
	},
	{
		id: 'lighting',
		name: 'Lighting',
		isItemLead: false,
	},
	{
		id: 'sofas-sleeper-sofas',
		name: 'Sofas & Sleeper sofas',
		isItemLead: false,
	},
	{
		id: 'storage',
		name: 'Storage',
		isItemLead: false,
	},
	{
		id: 'armchairs-chaises',
		name: 'Armchairs & Chaises',
		isItemLead: false,
	},
	{
		id: 'decoration',
		name: 'Decoration',
		isItemLead: false,
	},
	{
		id: 'kitchen-cabinets',
		name: 'Kitchen Cabinets',
		isItemLead: false,
	},
	{
		id: 'coffee-tables',
		name: 'Coffee & Tables',
		isItemLead: false,
	},
	{
		id: 'outdoor-furniture',
		name: 'Outdoor Furniture',
		isItemLead: false,
	},
];

export const DEMOS_DATA_ITEMS: Demo[] = [
	{
		id: 'furniture-store',
		backgroundImage: 'assets/images/menu/demos/1.jpg',
		title: '01 - furniture store',
		isHidden: false,
	},
	{
		id: '02-furniture-store',
		backgroundImage: 'assets/images/menu/demos/2.jpg',
		title: '02 - furniture store',
		isHidden: false,
	},
	{
		id: '03-electronic-store',
		backgroundImage: 'assets/images/menu/demos/3.jpg',
		title: '03 - electronic store',
		isHidden: false,
	},
	{
		id: '04-electronic-store',
		backgroundImage: 'assets/images/menu/demos/4.jpg',
		title: '04 - electronic store',
		isHidden: false,
	},
	{
		id: '05-fashion-store',
		backgroundImage: 'assets/images/menu/demos/5.jpg',
		title: '05 - fashion store',
		isHidden: false,
	},
	{
		id: '06-fashion-store',
		backgroundImage: 'assets/images/menu/demos/6.jpg',
		title: '06 - fashion store',
		isHidden: false,
	},
	{
		id: '07-fashion-store',
		backgroundImage: 'assets/images/menu/demos/7.jpg',
		title: '07 - fashion store',
		isHidden: false,
	},
	{
		id: '08-fashion-store',
		backgroundImage: 'assets/images/menu/demos/8.jpg',
		title: '08 - fashion store',
		isHidden: false,
	},
	{
		id: '09-fashion-store',
		backgroundImage: 'assets/images/menu/demos/9.jpg',
		title: '09 - fashion store',
		isHidden: false,
	},
	{
		id: '10-shoes-store',
		backgroundImage: 'assets/images/menu/demos/10.jpg',
		title: '10 - shoes store',
		isHidden: false,
	},
	{
		id: '11-furniture-simple-store',
		backgroundImage: 'assets/images/menu/demos/11.jpg',
		title: '11 - furniture simple store',
		isHidden: true,
	},
	{
		id: '12-fashion-simple-store',
		backgroundImage: 'assets/images/menu/demos/12.jpg',
		title: '12 - fashion simple store',
		isHidden: true,
	},
	{
		id: '13-market',
		backgroundImage: 'assets/images/menu/demos/13.jpg',
		title: '13 - market',
		isHidden: true,
	},
	{
		id: '14-market-fullwidth',
		backgroundImage: 'assets/images/menu/demos/14.jpg',
		title: '14 - market fullwidth',
		isHidden: true,
	},
	{
		id: '15-lookbook-1',
		backgroundImage: 'assets/images/menu/demos/15.jpg',
		title: '15 - lookbook 1',
		isHidden: true,
	},
	{
		id: '16-lookbook-2',
		backgroundImage: 'assets/images/menu/demos/16.jpg',
		title: '16 - lookbook 2',
		isHidden: true,
	},
	{
		id: '17-fashion-store',
		backgroundImage: 'assets/images/menu/demos/17.jpg',
		title: '17 - fashion store',
		isHidden: true,
	},
	{
		id: '18-fashion-store',
		backgroundImage: 'assets/images/menu/demos/18.jpg',
		title: '18 - fashion store (with sidebar)',
		isHidden: true,
	},
	{
		id: '19-games-store',
		backgroundImage: 'assets/images/menu/demos/19.jpg',
		title: '19 - games store',
		isHidden: true,
	},
	{
		id: '20-book-store',
		backgroundImage: 'assets/images/menu/demos/20.jpg',
		title: '20 - book store',
		isHidden: true,
	},
	{
		id: '21-sport-store',
		backgroundImage: 'assets/images/menu/demos/21.jpg',
		title: '21 - sport store',
		isHidden: true,
	},
	{
		id: '22-tools-store',
		backgroundImage: 'assets/images/menu/demos/22.jpg',
		title: '22 - tools store',
		isHidden: true,
	},
	{
		id: '23-fashion-left-navigation-store',
		backgroundImage: 'assets/images/menu/demos/23.jpg',
		title: '23 - fashion left navigation store',
		isHidden: true,
	},
	{
		id: '24-extreme-sport-store',
		backgroundImage: 'assets/images/menu/demos/24.jpg',
		title: '24 - extreme sport store',
		isHidden: true,
	},
];

export const ELEMENTS_DATA_ITEMS: Element[] = [
	{
		id: 'products',
		name: 'Products',
		link: INTERNAL_ROUTES.ECOMMERCE_ELEMENTS_BUTTONS,
	},
	{
		id: 'typography',
		name: 'Typography',
		link: INTERNAL_ROUTES.ECOMMERCE_ELEMENTS_BUTTONS,
	},
	{
		id: 'titles',
		name: 'Titles',
		link: INTERNAL_ROUTES.ECOMMERCE_ELEMENTS_BUTTONS,
	},
	{
		id: 'banners',
		name: 'Banners',
		link: INTERNAL_ROUTES.ECOMMERCE_ELEMENTS_BUTTONS,
	},
	{
		id: 'product-category',
		name: 'Product Category',
		link: INTERNAL_ROUTES.ECOMMERCE_ELEMENTS_BUTTONS,
	},
	{
		id: 'video-banners',
		name: 'Video Banners',
		link: INTERNAL_ROUTES.ECOMMERCE_ELEMENTS_BUTTONS,
	},
	{
		id: 'buttons',
		name: 'Buttons',
		link: INTERNAL_ROUTES.ECOMMERCE_ELEMENTS_BUTTONS,
	},
	{
		id: 'accordions',
		name: 'Accordions',
		link: INTERNAL_ROUTES.ECOMMERCE_ELEMENTS_BUTTONS,
	},
	{
		id: 'tabs',
		name: 'Tabs',
		link: INTERNAL_ROUTES.ECOMMERCE_ELEMENTS_BUTTONS,
	},
	{
		id: 'testimonials',
		name: 'Testimonials',
		link: INTERNAL_ROUTES.ECOMMERCE_ELEMENTS_BUTTONS,
	},
	{
		id: 'blog-posts',
		name: 'Blog Posts',
		link: INTERNAL_ROUTES.ECOMMERCE_ELEMENTS_BUTTONS,
	},
	{
		id: 'portfolio',
		name: 'Portfolio',
		link: INTERNAL_ROUTES.ECOMMERCE_ELEMENTS_BUTTONS,
	},
	{
		id: 'call-to-action',
		name: 'Call to Action',
		link: INTERNAL_ROUTES.ECOMMERCE_ELEMENTS_BUTTONS,
	},
	{
		id: 'icon-boxes',
		name: 'Icon Boxes',
		link: INTERNAL_ROUTES.ECOMMERCE_ELEMENTS_BUTTONS,
	},
];
