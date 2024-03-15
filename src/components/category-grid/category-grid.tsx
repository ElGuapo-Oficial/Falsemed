import styles from './category-grid.module.css';
import { MedData } from '@/types/allTypes';

interface CategoryGridProps {
    categoryData: MedData;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categoryData }) => {
    return (
        <div className={styles.grid}>
            { categoryData.pageProps.featured.map(item => 
                <div key={item.slug} className={styles.item}>
                    <img src={item.image_banner_url} className={styles.image} alt={item.name}/>
                    <p className={styles.description}>{item.name}</p>
                </div>
            )}
        </div>
    );
}

export default CategoryGrid