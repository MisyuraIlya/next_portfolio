'use client'
import React, {FC} from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type NavLink = {
    label: string;
    href: string;
}

type props ={ 
    navLinks: NavLink[]
}
const Navigation:FC<props> = ({navLinks}) => {
    const pathname = usePathname();
    return (
        <div className='navbar'>
            {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                    <Link key={link.label} href={link.href} className={isActive ? 'active' : ''}>
                        {link.label}
                    </Link>
                )
            })}  
        </div>
    );
};

export default Navigation;