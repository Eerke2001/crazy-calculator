import { NavLink } from "react-router-dom";
import { ROUTES } from "../consts";

import styles from "./nav.module.css";

const Nav = () => {
    return (
        <div className={styles.routenav}>
            <nav>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <NavLink className={styles.toplink} exact to={ROUTES.HOME}>
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.li}>
                        <NavLink className={styles.toplink} to={ROUTES.GALLERY}>
                            Art Gallery
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;