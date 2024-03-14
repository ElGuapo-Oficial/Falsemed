import styles from "./category-banner.module.css";

const CategoryBanner = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles["category-banner"]}>
            { children }
        </div>
    )
}

export default CategoryBanner;