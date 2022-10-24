import { useEffect, useState } from 'react';

export default function Page_pokemeon() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        async function conexion() {
            const url = 'https://pokeapi.co/api/v2/pokemon';
            const res = await fetch(url);
            console.log(await res.json());
            
            setCharacters(res.results);            
        }
        conexion();
    }, []);

    return (
        <div>
            <h1>Pokemon</h1>
            <div className='container'>
                <div className='row'>
                    {characters.map(char => {
                        return (
                            <div className='col-md' key={char.id}>
                                <h1>char.name </h1>                                
                            </div>

                        )
                    })}
                </div>

            </div>
        </div>
    )
}