
interface IProps {
    name: string
    image: string
}

export default function Card({ name, image }: IProps) {
    return (
        <div data-testid='card' className='w-80 bg-white p-3 flex flex-col rounded leading-normal text-gray-900 hover:scale-105 duration-200'>
            <img data-testid='card-img' src={image} alt="profile-img" className='rounded mb-4' />
            <h4 data-testid='card-name'>{name}</h4>
        </div>
    )
}
