import Persona from "./Persona"
function Personas(props) {
    console.log(props)
    // props -> {amigos=[]}
    return (
        <div>
            <h1>Estos son mis amigos: </h1>
            {props.amigos.map(amigo => (<Persona name={amigo.name} age={amigo.age} email={ amigo.email} />))}
        </div>
    )
}

export default Personas