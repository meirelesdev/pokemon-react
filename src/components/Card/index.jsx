import './styles.css';

const Card = ({image, pokemon}) => {
  const {name, base} = pokemon
  return (
    <div className="card">
      <h2 className="title">{name.english} {pokemon.id}</h2>
      <img src={image ? image : 'img/notFound.jpg'} alt={name.english} />
      <div className="content">
        <ul>
          <li>HP: {base["HP"]}</li>
          <li>Attack: {base["Attack"]}</li>
          <li>Defense: {base["Defense"]}</li>
          <li>Sp. Attack: {base["Sp. Attack"]}</li>
          <li>Sp. Defense{base["Sp. Defense"]}</li>
          <li>Speed: {base["Speed"]}</li>
        </ul>
      </div>
    </div>
  )
}
export default Card