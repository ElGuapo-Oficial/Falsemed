'use client'

import { useEffect } from 'react';
import Search from '@/components/search/search';
import { useImageContext } from "@/contexts/ImageContext";
import styles from './page.module.css';

export default function Page() {
    const { setImageUrl } = useImageContext();

    useEffect(() => {
        setImageUrl('https://prod-public-truemed.s3.amazonaws.com/mlp/c/banners/fitness/8a488169-3d4f-4d29-aa70-75e777b77e1e.webp')
    }, [])

    return (
        <div className={styles.fitness}>
            <h1>Fitness</h1>
            <Search />
        </div>
    );
}