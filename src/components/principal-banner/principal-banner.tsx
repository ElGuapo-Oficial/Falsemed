'use client'

import { useState } from 'react';
import styles from "./principal-banner.module.css";
import Link from "next/link";

const PrincipalBanner: React.FC = () => {
    const [showShopMenu, setShoShopMenu] =  useState<boolean>(false);

    const onShowShopMenu = () => {
        setShoShopMenu(showShopMenu => !showShopMenu)
    }

    return (
        <div className={styles["principal-banner"]}>
            <div className={styles["principal-banner-content"]}>
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
                <div className={styles["principal-banner-text"]}>
                    <h1>Food is Medicine.</h1>
                    <h1>Exercise is Medicine.</h1>
                    <h1>Supplements are Medicine.</h1>
                    <p>Truemed connects you to an independent licensed provider to assess whether food, exercise, or supplement interventions can prevent or reverse disease. In some cases, this can unlock HSA/FSA spending on these items.</p>
                    <button>Do I Qualify?</button>
                </div>
            </div>
        </div>
    )
}

export default PrincipalBanner;