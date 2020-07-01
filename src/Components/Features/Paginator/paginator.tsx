import React, { useState } from 'react'
import styled from 'styled-components'
import './style.sass'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from '../../UI/Atoms'
import { RepositoriesSelectors } from '../RepositoriesTable'
import { PaginatorSelectors, PaginatorActions } from './Model'
import { RepositoriesTypes } from '../RepositoriesTable/Model'

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
    value: string
}

export const Paginator: React.FC<PropsType> = ({value}) => {
    const dispatch = useDispatch()
    const totalCount = useSelector(RepositoriesSelectors.totalCount)
    const pageSize = useSelector(PaginatorSelectors.pageSize)
    const currentPage = useSelector(PaginatorSelectors.currentPage)
    const portionSize = useSelector(PaginatorSelectors.portionSize)

    const pagesCount = Math.ceil(totalCount / pageSize)
    const pages: number[] = []

    for (let i = 1; i <= pagesCount; i++) {
        if (i <= 10) pages.push(i)
    }

    const onSetCurrentPage = (page: number): void => {
        if (Math.ceil(totalCount / pageSize) !== 1) {
            dispatch(PaginatorActions.setCurrentPage(page))
            dispatch({
                type: RepositoriesTypes.SEARCH_REPOSITORIES,
                payload: { name: value, numberPage: page },
            })
        }
    }

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
