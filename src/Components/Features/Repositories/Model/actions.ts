import { InferActionsType } from '../../../lib/store'
import { RepositoryType } from '../../../API'
import { ContributeType } from '../../../API/api'
import * as types from './types'

export const Actions = {
    getRepositories: (payload: RepositoryType[]) =>
        ({
            type: types.GET_REPOSITORIES,
            payload,
        } as const),
    getRepositoriesThroughSearch: (payload: RepositoryType[]) =>
        ({
            type: types.GET_REPOSITORIES_THROUGH_SEARCH,
            payload,
        } as const),
    getTotalCountOfRepositories: (payload: number) =>
        ({
            type: types.GET_TOTAL_COUNT_REPOSITORIES,
            payload,
        } as const),
    getContributesOfActiveRepository: (payload: ContributeType[]) =>
        ({
            type: types.GET_CONTRIBUTES_OF_ACTIVE_REPOSITORY,
            payload,
        } as const),
    setActiveRepository: (payload: number) =>
        ({
            type: types.SET_ACTIVE_REPOSITORY,
            payload,
        } as const),
}

export type ActionsType = InferActionsType<typeof Actions>
