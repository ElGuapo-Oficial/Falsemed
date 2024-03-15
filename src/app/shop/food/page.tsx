import styles from './page.module.css';
import { getFoodData } from '@/data/category-data';
import { MedData } from '@/types/allTypes';
import CategoryGrid from '@/components/category-grid/category-grid';

export default async function Page() {
    const foodData: MedData = await getFoodData();

    return (
        <div className={styles.food}>
            <h1>Featured Brands</h1>
            <CategoryGrid categoryData={foodData} />
        </div>
    );
}