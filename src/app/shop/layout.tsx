'use client'

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from "../page.module.css";
import PrincipalBanner from "../../components/principal-banner/principal-banner";
import CategoryBanner from "../../components/category-banner/category-banner";
import CategoryGrid from '@/components/category-grid/category-grid';
import Search from "@/components/search/search";

interface BannerContent {
  title: string,
  backgroundImage?: string
}

const bannerDefaultValue: BannerContent = {title: '', backgroundImage: ''}

const contentMap: { [key: string]: BannerContent }  = {
  '/shop/fitness': {
      title: 'Fitness',
      backgroundImage: 'https://prod-public-truemed.s3.amazonaws.com/mlp/c/banners/fitness/8a488169-3d4f-4d29-aa70-75e777b77e1e.webp'
  },
  '/shop/supplements': {
      title: 'Supplements',
      backgroundImage: 'https://prod-public-truemed.s3.amazonaws.com/mlp/c/banners/supplements/e79dc301-0e4e-42d3-8d2c-4b888c9dea23.webp'
  },
  '/shop/food': {
      title: 'Healthy Food', 
      backgroundImage: 'https://prod-public-truemed.s3.amazonaws.com/mlp/c/banners/food/852ae113-4318-49bb-9127-5489239ae20a.webp'
  },
  '/shop/saunasandcoldplunges': {
      title: 'Saunas & Cold Plunges', 
      backgroundImage: 'https://prod-public-truemed.s3.amazonaws.com/mlp/c/banners/saunasandcoldplunge/764c9d77-3327-4118-9868-fc4cb125eacf.webp'
  }
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const [content, setContent] = useState<BannerContent>(bannerDefaultValue)

  useEffect(() => {
    setContent(contentMap[pathName] || bannerDefaultValue)
  }, [pathName, contentMap]);

  return (
    <main className={styles.main}>
        <PrincipalBanner backgroundImage={content.backgroundImage}>
            <div className={styles["principal-banner-content"]}>
                <h1>{content.title}</h1>
                <Search />
            </div>
        </PrincipalBanner>
        <CategoryBanner>
            { children }
        </CategoryBanner>
    </main>
  );
}

