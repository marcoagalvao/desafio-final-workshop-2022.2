import AnimalG from "./AnimalG";

const ListaAnimais = (props) => {
  const animal = props.animal;

  return (
    <>
      {animal.map((objeto) => {
        return <AnimalG key={objeto.id} animalUnico={objeto} />;
      })}
    </>
  );
};

export default ListaAnimais;