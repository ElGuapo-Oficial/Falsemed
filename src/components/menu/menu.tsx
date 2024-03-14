'use client'

import { useState } from 'react';
import Link from 'next/link';
import styles from "./menu.module.css";

const Menu = () => {
    const [showShopMenu, setShoShopMenu] =  useState<boolean>(false);

    const onShowShopMenu = () => {
        setShoShopMenu(showShopMenu => !showShopMenu)
    }

    return (
        <div className={styles.menu}>
            <img src="/Truemed_Logo_Full_White.png" alt="Truemed logo"/>
            <div className={styles["options"]}>
                <Link href='/'><p>Home</p></Link>
                <Link href='/shop'><p>About</p></Link>
                <button onClick={onShowShopMenu}>Where to Shop</button>
                { showShopMenu && 
                    <div className={styles["shop-menu"]}>
                        <p className={styles["greeny-text"]}>Hello</p>
                    </div> }
                <hr aria-orientation="vertical"/>
                <Link href='/shop'><p>Login</p></Link>
            </div>
        </div>
    )
}

export default Menu;

