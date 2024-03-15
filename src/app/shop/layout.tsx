import styles from "../page.module.css";
import PrincipalBanner from "../../components/principal-banner/principal-banner";
import CategoryBanner from "../../components/category-banner/category-banner";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
        <PrincipalBanner>
            <div>{ children }</div>
        </PrincipalBanner>
        <CategoryBanner>
            <div>{ children }</div>
        </CategoryBanner>
    </main>
  );
}