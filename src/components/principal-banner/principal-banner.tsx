import styles from "./principal-banner.module.css";
import Menu from "../menu/menu";

const PrincipalBanner = ({ children, backgroundImage }: { children: React.ReactNode, backgroundImage?: string }) => {
    let localStyles = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};

    return (
        <div className={styles["principal-banner"]} style={localStyles}>
            <div className={styles["principal-banner-content"]}>
                <Menu />
                <div className={styles["principal-banner-children"]}>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default PrincipalBanner;