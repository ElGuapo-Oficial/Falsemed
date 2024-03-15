'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "./menu.module.css";

const shopMenuOptions = [
    {
        name: 'Fitness',
        path: '/shop/fitness'
    },
    {
        name: 'Supplements',
        path: '/shop/supplements'
    },
    {
        name: 'Healthy Food',
        path: '/shop/food'
    },
    {
        name: 'Saunas & Cold Plunges',
        path: '/shop/saunasandcoldplunges'
    },
]

const ShopMenu = () => {
    return (
        <div className={styles["shop-menu"]}>
            <p className={styles["greeny-text"]}>Shop by category</p>
            <div className={styles["options"]}>
                {shopMenuOptions.map(item => <Link key={item.name} href={item.path}><p>{item.name}</p></Link>)}
            </div>
        </div>
    )
}

const Menu = () => {
    const [showShopMenu, setShoShopMenu] =  useState<boolean>(false);
    const pathName = usePathname();

    const isActive = (path: string): boolean => path === pathName;

    const onShowShopMenu = () => {
        setShoShopMenu(showShopMenu => !showShopMenu)
    }

    return (
        <div className={styles.menu}>
            <Link href='/'><img src="/Truemed_Logo_Full_White.png" alt="Truemed logo"/></Link>
            <div className={styles["options"]}>
                <Link href='/'><p className={isActive('/') ? styles.active : ''}>Home</p></Link>
                <Link href='/shop/fitness'><p className={isActive('/shop/fitness') ? styles.active : ''}>About</p></Link>
                <button className={showShopMenu ? styles['show-shop-menu'] : ''} onClick={onShowShopMenu}>Where to Shop</button>
                {showShopMenu && <ShopMenu />}
                <hr aria-orientation="vertical"/>
                <Link href='/login'><p className={isActive('/login') ? styles.active : ''}>Login</p></Link>
            </div>
        </div>
    )
}

export default Menu;

