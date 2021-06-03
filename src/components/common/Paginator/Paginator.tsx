import React from "react";
import s from "./Paginator.module.css"

type PaginatorProps = {
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

let Paginator = React.memo(({onPageChanged, pageSize, totalUsersCount, currentPage}: PaginatorProps) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span
                    key={p}
                    className={currentPage === p ? s.selectedPage : ''}
                    onClick={() => {
                        onPageChanged(p)
                    }}>{p} </span>
            })}
        </div>
    )
})

export default Paginator;