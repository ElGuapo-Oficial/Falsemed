import styles from "./PrincipalBanner.module.css";

const PrincipalBanner = () => {
    return (
        <div className={styles["principal-banner"]}>
            <div className={styles["principal-banner-content"]}>
                <div className={styles["principal-banner-menu"]}>
                    <img src="Truemed_Logo_Full_White.png" alt="Truemed logo"/>
                    <div className={styles["menu-options"]}>
                        <div>Home</div>
                        <div>About</div>
                        <div>Where to shop</div>
                        <hr aria-orientation="vertical"/>
                        <div>Login</div>
                    </div>
                </div>
                <div className={styles["principal-banner-text"]}>
                    <h1>Food is Medicine.</h1>
                    <h1>Exercise is Medicine.</h1>
                    <h1>Supplements are Medicine.</h1>
                    <p>Truemed connects you to an independent licensed provider to assess whether food, exercise, or supplement interventions can prevent or reverse disease. In some cases, this can unlock HSA/FSA spending on these items.</p>
                    <button>Do I qualify?</button>
                </div>
            </div>
        </div>
    )
}

export default PrincipalBanner;