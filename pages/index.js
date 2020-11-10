import {useState} from 'react'

function Home(){
    return (
        <div>
            <h1>Home</h1>
            <h1><Contador/></h1>
        </div>
    )
}
function Contador() {
    const [contador,setContador] = useState(1)

    function adicinarContador() {
        setContador(contador + 1)
    }
    return(
        <div>
            <div>{contador}</div>
            <button onClick = {adicinarContador}>Adicionar</button>
        </div>
    )
}

export default Home