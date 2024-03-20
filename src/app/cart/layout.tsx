import styles from "../page.module.css";
import PrincipalBanner from "../../components/principal-banner/principal-banner";
import CategoryBanner from "../../components/category-banner/category-banner";
import Search from "@/components/search/search";
import { contentMap } from "@/lib/banner-content";

export default function Layout({ children }: { children: React.ReactNode }) {
    const content = contentMap["/cart"];
    return (
        <main className={styles.main}>
          <PrincipalBanner backgroundImage={content.backgroundImage}>
              <div className={styles["principal-banner-content"]}>
                  <h1>{content.title}</h1>
                  <Search />
              </div>
          </PrincipalBanner>
          <CategoryBanner>
              { children }
          </CategoryBanner>
      </main>
     );
  }