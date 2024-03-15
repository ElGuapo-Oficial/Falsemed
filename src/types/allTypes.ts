export interface MedData {
    pageProps: PageProps;
    __N_SSG:   boolean;
}

export interface PageProps {
    name:             string;
    slug:             string;
    featured:         Featured[];
    new:              Featured[];
    all:              All[];
    image_banner_url: string;
}

export interface All {
    name: string;
    link: string;
}

export interface Featured {
    slug:             string;
    name:             string;
    link:             string;
    image_logo_url:   string;
    image_banner_url: string;
    category:         Category;
    hsa_spend_method: string;
}

export interface Category {
    name: string;
    slug: string;
}