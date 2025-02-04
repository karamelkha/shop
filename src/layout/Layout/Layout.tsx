import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <div>
        <Link to="/">Меню</Link>
        <Link to="/card">Корзина</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
