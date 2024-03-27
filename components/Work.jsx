'use client';
import Link from "next/link";
import { Button } from "./ui/button";

import 'swiper/css'
import 'swiper/css/pagination'


import {Pagination} from 'swiper/modules'


import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
        image: '/work/3.png',
        category: 'react.js',
        name: 'Nexa Website',
        description : 'This is the Nexa website which is used for the purchase of products.',
        link: '/',
        github: '/',
    },
];

const Work = () => {
    return <div>Work</div>
};

export default Work;