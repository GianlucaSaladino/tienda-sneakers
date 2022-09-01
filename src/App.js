import "./App.css";
import { NavBar } from "./components/NavBar";
// import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <NavBar />
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
