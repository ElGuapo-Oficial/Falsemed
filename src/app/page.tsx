import styles from "./page.module.css";
import PrincipalBanner from "../components/principal-banner/principal-banner";
import CategoriesBanner from "../components/categories-banner/categories-banner";

export default function Home() {
  return (
    <main className={styles.main}>
      <PrincipalBanner />
      <CategoriesBanner />
    </main>
  );
}
