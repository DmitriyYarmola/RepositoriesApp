import React, { useEffect, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Preloader } from '../../UI/Molecules/Preloader'
import { RepositoriesSelectors } from '../../Features/RepositoriesTable'
import { Input, BlockWrapped } from '../../UI/Atoms'
import { Paginator, PaginatorSelectors, PaginatorActions } from '../../Features/Paginator'
import { Table } from '../../Features/RepositoriesTable/Organisms'
import { RepositoriesTypes } from '../../Features/RepositoriesTable/Model'

export const MainPage = (): React.ReactElement => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch()
    const repositories = useSelector(RepositoriesSelectors.repositories)
    const currentPage = useSelector(PaginatorSelectors.currentPage)

    useEffect(() => {
        if (currentPage) localStorage.setItem('currentPage', JSON.stringify(currentPage))
    }, [currentPage])

    useEffect(() => {
        if (repositories)
            localStorage.setItem('repositories', JSON.stringify(repositories))
    }, [repositories])

    useEffect(() => {
        const getCurrentPage = localStorage.getItem('currentPage')
        if (getCurrentPage) {
            dispatch(PaginatorActions.setCurrentPage(JSON.parse(getCurrentPage)))
            const getValueInput = localStorage.getItem('valueInput')
            if (getValueInput) {
                dispatch({
                    type: RepositoriesTypes.SEARCH_REPOSITORIES,
                    payload: {
                        name: getValueInput,
                        numberPage: JSON.parse(getCurrentPage),
                    },
                })
                setValue(getValueInput)
            } else {
                dispatch({ type: RepositoriesTypes.GET_REPOSITORIES })
            }
        } else {
            dispatch(PaginatorActions.setCurrentPage(1))
            dispatch({ type: RepositoriesTypes.GET_REPOSITORIES })
        }
    }, [dispatch])

    const onSearchRepository = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }, [])

    const onSendNameOfRepository = useCallback(
        (e: React.KeyboardEvent): void => {
            if (e.key === 'Enter') {
                dispatch({
                    type: RepositoriesTypes.SEARCH_REPOSITORIES,
                    payload: { name: value, numberPage: 1 },
                })
                localStorage.setItem('valueInput', value)
            }
        },
        [dispatch, value]
    )

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
                            <Paginator value={value}/>
                        </BlockWrapped>
                    </>
                ) : (
                    'Repositories did`t find'
                )}
            </BlockWrapped>
        </div>
    )
}
