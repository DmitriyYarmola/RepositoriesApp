import React, { useState } from 'react'
import styled from 'styled-components'
import './style.sass'
import { Button } from '../../UI/Atoms'

const PageNumber = styled.span`
    color: black;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
    cursor: pointer;
    &:hover:not(.selectedPage) {
        background: #f2f2f2;
    }
`
const NumberList = styled.div`
    display: inline-block;
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
    console.log(pagesCount)
    const pages: number[] = []

    for (let i = 1; i <= pagesCount; i++) {
        if (i <= 10) pages.push(i)
    }

    console.log(pages)
    const portionCount = Math.ceil(pagesCount < 10 ? pagesCount : 10 / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)

    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <NumberList>
            {portionNumber > 1 && (
                <>
                    <Button
                        onClick={() => {
                            setPortionNumber(1)
                        }}
                    >
                        ««
                    </Button>
                    <Button
                        onClick={() => {
                            setPortionNumber(1)
                            setPortionNumber(portionNumber - 1)
                        }}
                    >
                        «
                    </Button>
                </>
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
                <>
                    <Button
                        onClick={() => {
                            setPortionNumber(portionNumber + 1)
                        }}
                    >
                        »
                    </Button>
                    <Button
                        onClick={() => {
                            setPortionNumber(portionCount)
                        }}
                    >
                        »»
                    </Button>
                </>
            )}
            {}
        </NumberList>
    )
}
