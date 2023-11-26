
function CoreConcept({image, title, description}) {
    return (
      <li>
        <img src={image} alt={props.titile} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }





export default function CoreConcept ({image, title, description}){
    return(
        <li>
            <img src= {Image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}