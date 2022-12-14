import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <p href="/" className="site-title">
          GS Sneakers
        </p>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
        </ul>
      <CartWidget />
      </nav>
    </>
  );
};
