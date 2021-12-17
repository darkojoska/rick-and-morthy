import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch"
import Card from "./Card";

interface ICharacter {
    id: number
    name: string
    image: string
}

export default function CharactersGrid() {
    const url = 'https://rickandmortyapi.com/api/character';
    const { loading, error, data } = useFetch<ICharacter[]>(url);

    if (error) {
        return <div>Error occured during request</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <h2 className='my-16'>Rick and Marthy</h2>
            <div className="grid gap-16 mb-24 justify-center md:grid-cols-2 lg:grid-cols-3">
                {
                    data?.map(item =>
                        <Link to={`characters/${item.id}`} key={item.id}>
                            <Card id={item.id} name={item.name} image={item.image} />
                        </Link>
                    )
                }
            </div>
        </>
    )
}
