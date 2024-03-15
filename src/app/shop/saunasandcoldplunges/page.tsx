'use client'

import { useEffect } from 'react';
import Search from '@/components/search/search';
import { useImageContext } from "@/contexts/ImageContext";
import styles from './page.module.css';

export default function Page() {
    const { setImageUrl } = useImageContext();

    useEffect(() => {
        setImageUrl('https://prod-public-truemed.s3.amazonaws.com/mlp/c/banners/saunasandcoldplunge/764c9d77-3327-4118-9868-fc4cb125eacf.webp')
    }, [])

    return (
        <div className={styles.saunas}>
            <h1>Saunas & Cold Plunges</h1>
            <Search />
        </div>
    );
}