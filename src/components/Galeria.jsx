import { useEffect, useState } from "react";
import ListaAnimais from "../components/ListaAnimais";

  function Galeria() {
    const [animal, setAnimal] = useState([]);
  
    useEffect(() => {
      getAnimal();
    }, []);
  
  async function getAnimal() {
      const consultaAnimal = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand/6");
      const consultaAnimalConvertida = await consultaAnimal.json();
      setAnimal(consultaAnimalConvertida);

  };

  return(
    <div>
      <h1>Animals Gallery</h1>

      <ListaAnimais animal={animal} />

      
    </div>

  )
}

export default Galeria;
