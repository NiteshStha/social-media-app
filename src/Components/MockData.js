import ImageDemo1 from '../assets/images/img.jpg';
import ImageDemo2 from '../assets/images/img1.jpg';
import ImageDemo3 from '../assets/images/img2.jpg';
import ImageDemo4 from '../assets/images/img3.jpg';
import ImageDemo5 from '../assets/images/img4.jpg';
import ImageDemo6 from '../assets/images/img5.jpg';

export const postData = {
	_id: 1,
	username: 'stha__nitesh',
	uploadTime: 'January 22, 2020',
	title: 'Hello Everyone',
	image: ImageDemo1,
};

export const userData = {
	username: 'stha__nitesh',
	firstName: 'Nitesh',
	lastName: ' Shrestha',
};

export const postDatas = [
	{
		_id: 1,
		username: 'stha__nitesh',
		uploadTime: 'January 22, 2020',
		title: 'Hello Everyone',
		image: ImageDemo1,
	},
	{
		_id: 2,
		username: 'aayush_male',
		uploadTime: 'January 22, 2020',
		title: 'Hi I am Aayush',
		image: ImageDemo2,
	},
	{
		_id: 3,
		username: 'crashpian_Khanada',
		uploadTime: 'January 22, 2020',
		title: 'I have RTX',
		image: ImageDemo3,
	},
	{
		_id: 4,
		username: 'sumit_bahubali',
		uploadTime: 'January 22, 2020',
		title: 'Hey Hey Hey, This is Library',
		image: ImageDemo4,
	},
	{
		_id: 5,
		username: 'prabin_dhunge',
		uploadTime: 'January 22, 2020',
		title: 'I am a Complan BOIIIIIIIIIIIIII..... I am studying MASTERRRRRRRSSS...',
		image: ImageDemo5,
	},
	{
		_id: 6,
		username: 'babu_moh',
		uploadTime: 'January 22, 2020',
		title: 'Vai aba ta ma MASTERS in MMA garne ho',
		image: ImageDemo6,
	},
];

const children = [
	{
		_id: 6,
		username: 'stha__nitesh',
		text: 'Hello',
		childern: '',
	},
	{
		_id: 7,
		username: 'aayush_male',
		text: 'Hi',
	},
	{
		_id: 8,
		username: 'crashpian_Khanada',
		text: 'Yooo',
	},
];

export const commentsData = [
	{
		_id: 1,
		username: 'stha__nitesh',
		text: 'Heyy',
		children,
	},
	{
		_id: 2,
		username: 'aayush_male',
		text: 'Heyy',
	},
	{
		_id: 3,
		username: 'crashpian_Khanada',
		text: 'Heyy',
	},
	{
		_id: 4,
		username: 'anjali_ko_babu_moh',
		text: 'This is',
	},
	{
		_id: 5,
		username: 'prabin_dhunge',
		text: 'Library',
		children,
	},
];
