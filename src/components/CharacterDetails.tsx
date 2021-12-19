import { RouteComponentProps, useParams } from "react-router-dom"
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

interface MatchParams {
    id: string
}

function CharacterDetails({ match }: RouteComponentProps<MatchParams>) {
    const characterId = match?.params?.id
    const url = `https://rickandmortyapi.com/api/character/${characterId}`;
    const { loading, error, data } = useFetch<ICharacter>(url);

    if (error) {
        return <div>Error occured during request</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <h2 className="my-16">Character details</h2>
            <div className="flex flex-col mb-20 justify-center md:flex-row">
                <img src={data?.image} alt="character-image" className="rounded md:mr-12" />
                <div className="flex flex-col mt-8 justify-center md:mt-0 md:items-start">
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
