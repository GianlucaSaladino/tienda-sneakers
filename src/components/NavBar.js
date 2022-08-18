import "./NavBar.css";

export default function NavBar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">GS Sneakers</a>
            <ul>   
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    );
    }
