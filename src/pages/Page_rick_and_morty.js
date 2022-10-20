import { useEffect, useState } from "react";

export default function Page() {

    useEffect(() => {
        const [characters, setCharacters] = useState([]);
        async function conexion() {
            const url = "https://rickandmortyapi.com/api/character";
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            console.log(data.results)
            setCharacters(data.results);
        }

        conexion();
    },[]);

    return (
        <div>
            <h1>Rick and Morty</h1>
        </div>
    )
}