import React, { useState } from 'react'

export default function Pagination(props) {

    const { data, RenderComponent, perPage, total } = props;

    const pageLimit = Math.round(total / perPage);

    const pages = Math.round(data.length / perPage);

    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        if(currentPage < pages) {
            setCurrentPage((page) => page + 1);
        }
    }

    function goToPreviousPage() {
        if(currentPage > 1) {
            setCurrentPage((page) => page - 1);
        }
    }

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * perPage - perPage;
        const endIndex = startIndex + perPage;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    return (
        <div>
            <div> <RenderComponent data={getPaginatedData()} /> </div>
            <nav className="d-flex justify-content-end mt-3">
                <ul className="pagination">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} onClick={goToPreviousPage}><a className="page-link" href="#">Previous</a></li>
                    {
                        getPaginationGroup().map((item, key) => {
                            return <li className={`page-item ${currentPage === item ? 'active' : ''}`} key={key} onClick={changePage}>
                                <a className="page-link" href="#">{item}</a>
                            </li>
                        })
                    }
                    <li className={`page-item ${currentPage === pages ? 'disabled' : ''}`} onClick={goToNextPage}><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
        </div>
    )
}
