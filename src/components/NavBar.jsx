import "./NavBar.css";
import CartWidget from "./CartWidget";

export default function NavBar() {
    return (
        <>
            <nav className="nav">
                <a href="/" className="site-title">GS Sneakers</a>
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/products">Products</a></li>
                </ul>
                <CartWidget />
            </nav>
        </>
    );
}
