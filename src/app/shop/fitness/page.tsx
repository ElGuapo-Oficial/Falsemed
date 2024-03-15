import styles from './page.module.css';
import { getFitnessData } from '@/data/category-data';
import { MedData } from '@/types/allTypes';
import CategoryGrid from '@/components/category-grid/category-grid';

export default async function Page() {
    const fitnessData: MedData = await getFitnessData();

    return (
        <div className={styles.fitness}>
            <h1>Featured Brands</h1>
            <CategoryGrid categoryData={fitnessData} />
        </div>
    );
}