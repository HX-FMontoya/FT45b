export default function Animal({ id, name, specie, image }) {
  return (
      <div id={id} style={{display:"flex", flexDirection:"column"}}>
      <h5>{name}</h5>
      <img src={image} alt="Not Found" width="300px" />
      <span>{specie}</span>
    </div>
  );
}
