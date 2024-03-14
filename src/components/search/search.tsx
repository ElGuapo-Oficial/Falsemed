import styles from './search.module.css';
const Search = () => {
    return (
        <div className={styles.search}>
            <div className={styles["inside-search"]}> 
                <div className={styles["greeny-text"]}>Search Brands</div>
                <input type="text" placeholder="Where are you shopping?" />
            </div>
        </div>
    )
}

export default Search;