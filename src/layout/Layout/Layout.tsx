import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

export function Layout() {
  return (
    <div className={styles["layout"]}>
      <div>
        <Link to="/">Меню</Link>
        <Link to="/card">Корзина</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
