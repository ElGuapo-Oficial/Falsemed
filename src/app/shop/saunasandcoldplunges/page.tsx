import styles from './page.module.css';
import { getSaunaData } from '@/data/category-data';
import { MedData } from '@/types/allTypes';
import CategoryGrid from '@/components/category-grid/category-grid';

export default async function Page() {
    const SaunaData: MedData = await getSaunaData();

    return (
        <div className={styles.sauna}>
            <h1>Featured Brands</h1>
            <CategoryGrid categoryData={SaunaData} />
        </div>
    );
}