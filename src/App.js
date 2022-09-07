import "./App.css";
import { NavBar } from "./components/NavBar";
// import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
    
      <NavBar />
      <h1>Hola</h1>
      {/* <ItemListContainer /> */}
      <ItemDetailContainer />
    </>
  );
}

export default App;
