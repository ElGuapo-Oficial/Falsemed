'use client'

import { useEffect } from 'react';
import { useImageContext } from "@/contexts/ImageContext";

export default function Page() {
    const { setImageUrl } = useImageContext();

    useEffect(() => {
        setImageUrl('https://prod-public-truemed.s3.amazonaws.com/mlp/c/banners/supplements/e79dc301-0e4e-42d3-8d2c-4b888c9dea23.webp')
    }, [])

    return (
        <div>Suplements Page</div>
    );
}