import React, {useState} from "react";
import s from "./Paginator.module.css"

type PaginatorProps = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    portionSize: number
    currentPage: number
}

let Paginator = React.memo(({onPageChanged, pageSize, portionSize, totalUsersCount, currentPage}: PaginatorProps) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <div>
            <button
                disabled={portionNumber < 2}
                onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>Previous</button>
            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span
                        key={p}
                        className={currentPage === p ? s.selectedPage : ''}
                        onClick={() => {
                            onPageChanged(p)
                        }}>{p} </span>
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>Next</button>
            }
        </div>
    )
})

export default Paginator;