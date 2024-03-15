'use client'

import { useState } from 'react';
import styles from "./principal-banner.module.css";
import Menu from "../menu/menu";
import ImageContext  from "@/contexts/ImageContext";

const PrincipalBanner = ({ children }: { children: React.ReactNode }) => {
    const [imageUrl, setImageUrl] = useState<string>('');

    let localStyles = {
        backgroundImage: `url(${imageUrl})`
    }

    return (
        <ImageContext.Provider value={{ imageUrl, setImageUrl }}>
            <div className={styles["principal-banner"]} style={localStyles}>
                <div className={styles["principal-banner-content"]}>
                    <Menu />
                    <div className={styles["principal-banner-children"]}>
                        { children }
                    </div>
                </div>
            </div>
        </ImageContext.Provider>
    )
}

export default PrincipalBanner;