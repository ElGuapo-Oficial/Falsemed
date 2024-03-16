import styles from './category-grid.module.css';
import { MedData } from '@/types/allTypes';
import Product from '../product/product';

interface CategoryGridProps {
    categoryData: MedData;
}

const CategoryGrid: React.FC<CategoryGridProps> = ({ categoryData }) => {
    return (
        <div className={styles.grid}>
            { categoryData.pageProps.featured.map(item => 
                <Product key={item.slug} item={item}/>
            )}
        </div>
    );
}

export default CategoryGrid