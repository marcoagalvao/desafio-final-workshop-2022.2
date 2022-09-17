import { useEffect, useState } from "react";

function Animal() {
  const [animal, setAnimal] = useState("animal");

  useEffect(() => {
    getAnimal();
  }, []);

async function getAnimal() {
    const consultaAnimal = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand");
    const consultaAnimalConvertida = await consultaAnimal.json();
    setAnimal(consultaAnimalConvertida);
};

  return (
    <div className="container">
      <h1>Animals Cards</h1>
      <article className="animal__info">
        <img className="animal__imagem" src={animal.image_link} alt={animal.name}></img>
        <div className="animal__info-type">
          <h2>Name: {animal.name}</h2>
          <p>Latin Name: {animal.latin_name}</p>
          <p>Habitat: {animal.habitat}</p>
          <p>Diet: {animal.diet}</p>
          <p>Location: {animal.geo_range}</p>
        </div>
      </article>
      <button className="btn__animalpage" onClick={getAnimal}>Generate new animal</button>
    </div>
  );
}
export default Animal;