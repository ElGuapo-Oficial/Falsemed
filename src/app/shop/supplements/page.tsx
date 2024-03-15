'use client'

import { useEffect } from 'react';
import Search from '@/components/search/search';
import { useImageContext } from "@/contexts/ImageContext";
import styles from './page.module.css';

export default function Page() {
    const { setImageUrl } = useImageContext();

    useEffect(() => {
        setImageUrl('https://prod-public-truemed.s3.amazonaws.com/mlp/c/banners/supplements/e79dc301-0e4e-42d3-8d2c-4b888c9dea23.webp')
    }, [])

    return (
        <div className={styles.supplements}>
            <h1>Supplements</h1>
            <Search />
        </div>
    );
}