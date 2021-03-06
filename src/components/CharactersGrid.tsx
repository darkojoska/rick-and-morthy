import { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link, useHistory, useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Card from "./Card";

interface ICharacter {
    id: number
    name: string
    image: string
}

interface ISelectedItem {
    selected: number
}

export default function CharactersGrid() {
    const history = useHistory();
    const location = useLocation();
    
    const searchParams = location.search;
    const paramsPage = Number(searchParams.substring(searchParams.indexOf('=') + 1));

    const baseUrl = 'https://rickandmortyapi.com/api/character/?page=';
    const url = `${baseUrl}${paramsPage}`;
    const { loading, error, data, totalPages } = useFetch<ICharacter[]>(url);

    const [currentPage, setCurrentPage] = useState(paramsPage || 1); // api has a bug to return same pages for 0 and 1 so we start from 1

    const handlePageClick = ({ selected }: ISelectedItem) => {
        const newPage = selected + 1;

        setCurrentPage(newPage);
        history.push(`?page=${newPage}`);
        window.scrollTo(0, 0); // scroll to top of the page
    }

    if (error) {
        return <div>Error occured during request</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="mb-24">
            <h2 className='my-16'>All characters</h2>
            <div data-testid='grid' className="grid gap-16 mb-24 md:grid-cols-2 lg:grid-cols-3">
                {
                    data?.map((item, i) =>
                        <Link data-testid={i.toString()} to={`/characters/${item.id}`} key={item.id} className="justify-self-center">
                            <Card name={item.name} image={item.image} />
                        </Link>
                    )
                }
            </div>
            <ReactPaginate
                breakLabel="..."
                nextLabel={currentPage !== totalPages ? "next >" : ""}
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={totalPages || 1}
                forcePage={currentPage - 1}
                previousLabel={currentPage > 1 ? "< previous" : ""}
                className="flex flex-row justify-center items-center"
                pageClassName="text-md px-1 mx-2 md:text-2xl md:px-2 md:mx-4 font-bold"
                activeClassName="border-2 rounded"
            />
        </div>
    )
}
