import ItemCount from "./ItemCount";

export const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <h1>{greeting}</h1>
      <ItemCount />
    </>
  );
};
