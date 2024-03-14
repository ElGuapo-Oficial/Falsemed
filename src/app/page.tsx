import styles from "./page.module.css";
import PrincipalBanner from "./components/principal-banner/PrincipalBanner";
import CategoriesBanner from "./components/categories-banner/CategoriesBanner";

export default function Home() {
  return (
    <main className={styles.main}>
      <PrincipalBanner />
      <CategoriesBanner />
    </main>
  );
}
