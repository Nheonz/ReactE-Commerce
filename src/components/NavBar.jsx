import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <h1>Power Shop</h1>
      <ul>
        <li>
          <a href="#">Creatina</a>
        </li>
        <li>
          <a href="#">Proteina</a>
        </li>
        <li>
          <a href="#">Vitaminas</a>
        </li>
      </ul>
      <CartWidget />
    </>
  );
};
