import styles from "./CategoriesBanner.module.css";

const CategoriesBanner = () => {
    return (
        <div className={styles["categories-banner"]}>
            <div className={styles["categories-banner-content"]}>
            <div className={styles["categories-banner-text"]}>
                <p className={styles["greeny-text"]}>FOR CONSUMERS</p>
                <p className={styles["boldy-text"]}>See if You're Qualified</p>
                <p className={styles["blacky-text"]}>Qualified Customers can put their pre-tax HSA/FSA dollars to work</p>
                <div className={styles.search}>
                    <div className={styles["inside-search"]}> 
                        <p className={styles["greeny-text"]}>Search Brands</p>
                        <input type="text" placeholder="Where are you shopping?" />
                    </div>
                </div>
                <p className={styles["boldy-text"]}>Browse Categories</p>
                <img src="Truemed_Logo_Full_White.png" alt="Truemed logo"/>
            </div>
            </div>
        </div>
    )
}

export default CategoriesBanner;