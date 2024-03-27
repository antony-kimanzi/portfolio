'use client'
import {
    RiLinkedinFill, 
    RiGithubFill, 
    RiFacebookFill, 
    RiInstagramFill,
    RiWhatsappFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
    {
        path: '/',
        name: <RiLinkedinFill />
    },
    {
        path: '/',
        name: <RiGithubFill />
    },
    {
        path: '/',
        name: <RiFacebookFill />
    },
    {
        path: '/',
        name: <RiInstagramFill />
    },
    {
        path: '/',
        name: <RiWhatsappFill />
    },
    
];

const Socials = ({containerStyles, iconsStyles}) => {
    return (
        <div clasName={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index}>
                        <div className={`${iconsStyles}`}>{icon.name}</div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;