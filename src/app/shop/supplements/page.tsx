import styles from './page.module.css';
import { getSuplementsData } from '@/data/category-data';
import { MedData } from '@/types/allTypes';
import CategoryGrid from '@/components/category-grid/category-grid';

export default async function Page() {
    const supplementsData: MedData = await getSuplementsData();

    return (
        <div className={styles.suppments}>
            <h1>Featured Brands</h1>
            <CategoryGrid categoryData={supplementsData} />
        </div>
    );
}