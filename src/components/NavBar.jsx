import CartWidget from "./CartWidget";
import styled from "styled-components";

export const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <nav className="nav">
          <a href="/" className="site-title">
            GS Sneakers
          </a>
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
        </nav>
      </NavBarContainer>
    </>
  );
};

const NavBarContainer = styled.div`
  .site-title {
    font-size: 1.5rem;
  }

  .nav {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    padding: 1rem 1rem;
  }

  .nav ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav a {
    color: #fff;
    text-decoration: none;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
