export interface BannerContent {
    title: string,
    backgroundImage?: string
}

export const bannerDefaultValue: BannerContent = {title: '', backgroundImage: ''}

export const contentMap: { [key: string]: BannerContent }  = {
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
    },
    '/cart': {
      title: 'Cart', 
      backgroundImage: '/image.webp'
    }
}