'use client'

import { useEffect } from 'react';
import Search from '@/components/search/search';
import { useImageContext } from "@/contexts/ImageContext";
import styles from './page.module.css';

export default function Page() {
    const { setImageUrl } = useImageContext();

    useEffect(() => {
        setImageUrl('https://prod-public-truemed.s3.amazonaws.com/mlp/c/banners/food/852ae113-4318-49bb-9127-5489239ae20a.webp')
    }, [])

    return (
        <div className={styles.food}>
            <h1>Healthy Food</h1>
            <Search />
        </div>
    );
}