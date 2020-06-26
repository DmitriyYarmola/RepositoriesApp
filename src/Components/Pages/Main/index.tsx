import React, { useEffect, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Preloader } from '../../UI/Molecules/Preloader'
import {
    RepositoriesSelectors,
    RepositoriesThunks,
} from '../../Features/RepositoriesTable'
import { Input, BlockWrapped } from '../../UI/Atoms'
import { Paginator, PaginatorSelectors, PaginatorActions } from '../../Features/Paginator'
import { Table } from '../../Features/RepositoriesTable/Organisms'

export const MainPage = (): React.ReactElement => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch()
    const repositories = useSelector(RepositoriesSelectors.repositories)
    const totalCount = useSelector(RepositoriesSelectors.totalCount)
    const pageSize = useSelector(PaginatorSelectors.pageSize)
    const currentPage = useSelector(PaginatorSelectors.currentPage)
    const portionSize = useSelector(PaginatorSelectors.portionSize)

    useEffect(() => {
        dispatch(RepositoriesThunks.getRepositories())
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem('repositories', JSON.stringify(repositories))
    }, [repositories])

    const onSearchRepository = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }, [])

    const onSendNameOfRepository = useCallback(
        (e: React.KeyboardEvent): void => {
            if (e.key === 'Enter') dispatch(RepositoriesThunks.searchRepository(value, 1))
        },
        [dispatch, value]
    )

    const onSetCurrentPage = (page: number): void => {
        if (Math.ceil(totalCount / pageSize) !== 1) {
            dispatch(PaginatorActions.setCurrentPage(page))
            dispatch(RepositoriesThunks.searchRepository(value, page))
        }
    }

    if (!repositories) return <Preloader />

    return (
        <div>
            <Input
                type="text"
                plHolder="Search repository"
                onChange={onSearchRepository}
                onKeyPress={onSendNameOfRepository}
                value={value}
            />
            <BlockWrapped>
                {repositories.length > 0 ? (
                    <>
                        <Table repositories={repositories} />
                        <BlockWrapped>
                            {' '}
                            <Paginator
                                totalItemsCount={totalCount}
                                pageSize={pageSize}
                                currentPage={currentPage}
                                onSetCurrentPage={onSetCurrentPage}
                                portionSize={portionSize}
                            />
                        </BlockWrapped>
                    </>
                ) : (
                    'Repositories did`t find'
                )}
            </BlockWrapped>
        </div>
    )
}
