import styles from "./page.module.css";
import PrincipalBanner from "../components/principal-banner/principal-banner";
import CategoryBanner from "../components/category-banner/category-banner";
import Search from "@/components/search/search";

const PrincipalContent = () => {
    return (
        <>
            <h1>Food is Medicine.</h1>
            <h1>Exercise is Medicine.</h1>
            <h1>Supplements are Medicine.</h1>
            <p>Truemed connects you to an independent licensed provider to assess whether food, exercise, or supplement interventions can prevent or reverse disease. In some cases, this can unlock HSA/FSA spending on these items.</p>
            <button>Do I Qualify?</button>
        </>
    )
}

const CategoryContent = () => {
    return (
      <div className={styles["categories-banner-content"]}>
          <div className={styles["categories-banner-children"]}>
              <p className={styles["greeny-text"]}>FOR CONSUMERS</p>
              <p className={styles["boldy-text"]}>{"See if You're Qualified"}</p>
              <p className={styles["blacky-text"]}>Qualified Customers can put their pre-tax HSA/FSA dollars to work</p>
              <Search />
              <p className={styles["boldy-text"]}>Browse Categories</p>
          </div>
      </div>
    )
}

export default function Home() {
  return (
    <main className={styles.main}>
      <PrincipalBanner>
        <PrincipalContent />
      </PrincipalBanner>
      <CategoryBanner>
        <CategoryContent />
      </CategoryBanner>
    </main>
  );
}