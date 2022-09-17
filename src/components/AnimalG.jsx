const AnimalG = (props) => {
    const {image_link, name, latin_name, habitat, diet, geo_range } = props.animalUnico;
  
    return (
        <article className="gallery__container">
        <img className="gallery__image" src={image_link} alt={name}></img>
        <div className="gallery__info">
          <h2>Nome: {name}</h2>
          <p>Latin: {latin_name}</p>
          <p>Habitat: {habitat}</p>
          <p>Diet: {diet}</p>
          <p>Location: {geo_range}</p>
        </div>
      </article>
    );
  };
  
  export default AnimalG;