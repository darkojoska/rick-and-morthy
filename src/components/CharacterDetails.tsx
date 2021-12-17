import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";

interface ICharacter {
    name: string
    status: string
    species: string
    gender: string
    origin: {
        name: string
    }
    location: {
        name: string
    }
    image: string
    episode: string[]
}

function CharacterDetails() {
    const params = useParams();
    const url = `https://rickandmortyapi.com/api/character/${params.id}`;
    const { loading, error, data } = useFetch<ICharacter>(url);

    if (error) {
        return <div>Error occured during request</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <h2 className="my-16">Character details for data</h2>
            <div className="flex flex-col mb-20 justify-center md:flex-row">
                <img src={data?.image} alt="character-image" className="md:mr-12" />
                <div className="flex flex-col justify-center md:items-start">
                    <div className="text-start text-xl my-2 flex flex-col md:flex-row"><b className="mr-3">Name:</b>{data?.name}</div>
                    <div className="text-start text-xl my-2 flex flex-col md:flex-row"><b className="mr-3">Status:</b>{data?.status}</div>
                    <div className="text-start text-xl my-2 flex flex-col md:flex-row"><b className="mr-3">Species:</b>{data?.species}</div>
                    <div className="text-start text-xl my-2 flex flex-col md:flex-row"><b className="mr-3">Gender:</b>{data?.gender}</div>
                    <div className="text-start text-xl my-2 flex flex-col md:flex-row"><b className="mr-3">Origin:</b>{data?.origin.name}</div>
                    <div className="text-start text-xl my-2 flex flex-col md:flex-row"><b className="mr-3">Last Known Location:</b>{data?.location.name}</div>
                    <div className="text-start text-xl my-2 flex flex-col md:flex-row"><b className="mr-3">Number of Episodes:</b>{data?.episode.length}</div>
                </div>
            </div>
        </>
    )
}

export default CharacterDetails
