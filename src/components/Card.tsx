
interface IProps {
    id: number
    name: string
    image: string
}

export default function Card({ id, name, image }: IProps) {

    return (
        <div key={id.toString()} className='w-80 bg-white p-3 flex flex-col justify-self-center rounded leading-normal text-gray-900'>
            <img src={image} alt="profile-img" className='rounded mb-4' />
            <h4>{name}</h4>
        </div>
    )
}
