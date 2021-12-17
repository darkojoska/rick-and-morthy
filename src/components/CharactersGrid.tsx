import useFetch from "../hooks/useFetch"
import Card from "./Card";

interface IProps {
    id: number
    name: string
    image: string
}

export default function CharactersGrid() {
    const url = 'https://rickandmortyapi.com/api/character';
    const { loading, error, data } = useFetch<IProps[]>(url);

    if (error) {
        return <div>Error occured during request</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="grid gap-16 mb-24 justify-center md:grid-cols-2 lg:grid-cols-3">
            {
                data?.map(item =>
                    <Card id={item.id} name={item.name} image={item.image} />
                )
            }
        </div>

    )
}
