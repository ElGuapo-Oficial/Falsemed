'use client'

import { useEffect } from 'react';
import { useImageContext } from "@/contexts/ImageContext";

export default function Page() {
    const { setImageUrl } = useImageContext();

    useEffect(() => {
        setImageUrl('https://prod-public-truemed.s3.amazonaws.com/mlp/c/banners/fitness/8a488169-3d4f-4d29-aa70-75e777b77e1e.webp')
    }, [])


    return (
        <div>Fitness Page</div>
    );
}