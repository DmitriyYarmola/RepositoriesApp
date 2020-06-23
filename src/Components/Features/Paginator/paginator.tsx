import React, { useState } from 'react'
import styled from 'styled-components'
import './style.sass'

const Button = styled.button``
const PageNumber = styled.span`
    color: black;
    border: 1px solid black;
    border-radius: 50%;
    margin: 2px;
    padding: 0px 6px;
    cursor: pointer;
    &:hover {
        background: #f2f2f2;
    }
`
const NumberList = styled.div`
    margin-top: 10px;
`

export interface PropsType {
    totalItemsCount: number
    pageSize: number
    currentPage: number | null
    onSetCurrentPage: (pageNumber: number) => void
    portionSize: number
}

export const Paginator: React.FC<PropsType> = ({
    totalItemsCount,
    pageSize,
    currentPage,
    onSetCurrentPage,
    portionSize,
}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages: number[] = []

    for (let i = 1; i <= pagesCount; i++) {
        if (i <= 10) pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount < 10 ? pagesCount : 10 / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)

    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <NumberList>
            {portionNumber > 1 && (
                <Button
                    onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}
                >
                    Prev
                </Button>
            )}
            {portionNumber > 1 && (
                <Button
                    onClick={() => {
                        setPortionNumber(1)
                    }}
                >
                    Boost
                </Button>
            )}
            {pages
                .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return (
                        <PageNumber
                            key={p}
                            className={`${currentPage === p ? 'selectedPage' : ''}`}
                            onClick={(e) => {
                                onSetCurrentPage(p)
                            }}
                        >
                            {p}
                        </PageNumber>
                    )
                })}
            {portionNumber < portionCount && (
                <Button
                    onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}
                >
                    Next
                </Button>
            )}
            {portionNumber < portionCount && (
                <Button
                    onClick={() => {
                        setPortionNumber(portionCount)
                    }}
                >
                    Boost
                </Button>
            )}
            {}
        </NumberList>
    )
}
