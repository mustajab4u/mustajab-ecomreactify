import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const siteName = 'ECOM REACTIFY';
export const links = [
    {
        id: 1,
        text: 'home',
        url: '/',
    },
    {
        id: 2,
        text: 'about',
        url: '/about',
    },
    {
        id: 3,
        text: 'products',
        url: '/products',
    },
];
export const menuIcon = Array(3)
    .fill(<div className='w-6 h-1 rounded-full gradBg my-1'></div>)
    .map((line, index) => <span key={index}>{line}</span>);
export const services = [
    {
        id: 1,
        icon: <GiCompass className='h-8 w-8' />,
        title: 'mission',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
    {
        id: 2,
        icon: <GiDiamondHard className='h-8 w-8' />,
        title: 'vision',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
    {
        id: 3,
        icon: <GiStabbedNote className='h-8 w-8' />,
        title: 'history',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi',
    },
];
function getColorScheme(name) {
    const colors = {
        html: { backgroundColor: 'rgba(255,165,0,0.8)', color: 'white' },
        css: { backgroundColor: 'rgba(0,0,255,0.3)', color: 'white' },
        bootstrap: { backgroundColor: 'rgba(0,0,255,0.3)', color: 'white' },
        tailwindcss: { backgroundColor: 'rgba(0,0,255,0.3)', color: 'white' },
        javascript: { backgroundColor: 'rgba(255,255,0,0.9)', color: 'black' },
        react: { backgroundColor: 'rgba(0,0,255,0.3)', color: 'white' },
        next: { backgroundColor: 'rgba(128,128,128,0.1)', color: 'black' },
        node: { backgroundColor: 'rgba(0,128,0,0.5)', color: 'white' },
        express: { backgroundColor: 'rgba(128,128,128,0.1)', color: 'black' },
        mongodb: { backgroundColor: 'rgba(0,100,0,0.5)', color: 'white' },
        mongoose: { backgroundColor: 'rgba(250,100,63,0.6)', color: 'white' },
    };

    const skillName = name.toLowerCase();
    const colorScheme = colors[skillName];

    if (!colorScheme) {
        console.warn(`No color scheme found for skill "${name}"`);
        return { backgroundColor: 'gray', color: 'black' };
    }

    return colorScheme;
}

export const team = [
    {
        id: 1,
        name: 'Muhammad Mustajab',
        age: 14.8,
        picture: 'mustajab',
        skills: [
            { name: 'html', ...getColorScheme('html') },
            { name: 'css', ...getColorScheme('css') },
            { name: 'bootstrap', ...getColorScheme('bootstrap') },
            { name: 'tailwindcss', ...getColorScheme('tailwindcss') },
            { name: 'javascript', ...getColorScheme('javascript') },
            { name: 'react.js', ...getColorScheme('react') },
            { name: 'next.js', ...getColorScheme('next') },
            { name: 'node.js', ...getColorScheme('node') },
            { name: 'express.js', ...getColorScheme('express') },
            { name: 'mongodb', ...getColorScheme('mongodb') },
            { name: 'mongoose', ...getColorScheme('mongoose') },
        ],
    },
    {
        id: 2,
        name: 'Mustaqeem Ahmad',
        age: 30,
        picture: 'mustaqeem',
        skills: [{ name: 'html', ...getColorScheme('html') }],
    },
];
export const myProcess = [
    {
        title: 'Hello1',
        description: 'hellow my name is mudsafjkalsdjfl;askljks',
    },
    {
        title: 'Hello1',
        description: 'hellow my name is mudsafjkalsdjfl;askljks',
    },
    {
        title: 'Hello1',
        description: 'hellow my name is mudsafjkalsdjfl;askljks',
    },
    {
        title: 'Hello1',
        description: 'hellow my name is mudsafjkalsdjfl;askljks',
    },
];
export const products_url = 'https://course-api.com/react-store-products';

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;
