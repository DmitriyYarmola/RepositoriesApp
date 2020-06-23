import React, { useEffect, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Preloader } from '../../UI/Molecules/Preloader/Preloader'
import {
    Repositories,
    RepositoriesSelectors,
    RepositoriesThunks,
} from '../../Features/Repositories'
import { RepositoriesHeader } from '../../UI/Atoms/RepositoriesHeader'
import { Input, BlockWrapped } from '../../UI/Atoms'
import { Paginator } from '../../Features/Paginator'

import { PaginatorSelectors, PaginatorActions } from '../../Features/Paginator/Model'

export const Main = (): React.ReactElement => {
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

    const onSearchRepository = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }, [])
    

    const onSendNameOfRepository = (e: React.KeyboardEvent): void => {
        if (e.key === 'Enter') dispatch(RepositoriesThunks.searchRepository(value, 1))
    }

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
                        <RepositoriesHeader />
                        <Repositories repositories={repositories} />
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
                    'Repositories did`t found'
                )}
            </BlockWrapped>
        </div>
    )
}
