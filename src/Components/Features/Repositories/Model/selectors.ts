import { createSelector } from 'reselect'
import { AppStateType } from '../../../lib/store'
import { RepositoryType } from '../../../API/api'

export const repositories = (state: AppStateType): RepositoryType[] | null =>
    state.RepositoriesReducer.repositories

export const totalCount = (state: AppStateType): number =>
    state.RepositoriesReducer.totalCount

export const contributors = (state: AppStateType): any =>
    state.RepositoriesReducer.contributorsOfActiveRepository
    
export const activeRepositoryId = (state: AppStateType): number | null =>
    state.RepositoriesReducer.activeRepositoryId

export const infoAboutActiveRepository = createSelector(
    [activeRepositoryId, repositories],
    (activeRepositoryId, repositories) =>
        repositories?.filter((repositoriy) => repositoriy.id === activeRepositoryId)
)
