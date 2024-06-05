import React from 'react';
import Link from "next/link";
import s from './header.module.scss'
import {useRouter} from "next/router";

const Header = () => {

    const {pathname} = useRouter();

    return (
        <header className={s.header}>
            <Link href={'/'} className={pathname === '/' ?  s.active : ''} >Home</Link>
            <Link href={'/about-us'} className={pathname === '/about-us' ?  s.active : ''}>About</Link>
        </header>
    );
};

export default Header;