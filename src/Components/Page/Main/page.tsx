import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AppStateType } from '../../store/store'
import { Preloader } from '../../UI/Molecules/Preloader/Preloader'
import { getRepositories } from '../../Features/Repositories/Model'

export const Main = () => {
    const dispatch = useDispatch()
    const repositories = useSelector(
        (state: AppStateType) => state.RepositoriesReducer.repositories
    )

    console.log(repositories)

    useEffect(() => {
        dispatch(getRepositories())
    }, [dispatch])

    if (!repositories) return <Preloader />

    return <div>...</div>
}
