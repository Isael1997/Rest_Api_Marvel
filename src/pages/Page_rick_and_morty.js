import { useEffect, useState } from "react";

function NavPage({ page, setPage }) {
    const Apage = () => {
        if (page === 1) {
            setPage(1);
            alert("No hay mas paginas");
            console.log("Pagina: ", { page })
        }
        else {
            setPage(page - 1);
        }
    }

    return (
        <header className="d-flex justify-content-between align-items-center">

            <button
                className="btn btn-primary btn-sm"
                onClick={Apage}
            >
                Page {page - 1}
            </button>

            <p>Page: {page}</p>
            <button
                className="btn btn-primary btn-sm"
                onClick={() => setPage(page + 1)}
            >
                Page {page + 1}
            </button>
        </header >
    );
}

export default function Page() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState([true]);
    const [page, setPage] = useState(1);
    useEffect(() => {

        async function conexion() {
            const url = `https://rickandmortyapi.com/api/character?page=${page}`;
            const res = await fetch(url);
            const data = await res.json();
            const { results } = await data;
            setCharacters(results);
            setLoading(false);

            console.log(data)

        }

        conexion();
    }, [page]);

    return (
        <div>
            <h1>Rick and Morty</h1>
            <div className="container">
                <NavPage page={page} setPage={setPage} />

                {loading ? (
                    <div>Loading .....</div>
                ) : (
                    < div className="row">
                        {characters.map(char => {
                            return (
                                <div className="col-md-4" key={char.id}>
                                    <h3>{char.name}</h3>
                                    <img src={char.image} alt={char.name} className="img-fluid rounded-pill" />
                                    <p>{`Origin: ${char.origin && char.origin.name}`}</p>
                                </div>
                            )
                        })}
                    </div>
                )}
                <NavPage page={page} setPage={setPage} />
            </div>


        </div >
    )
}