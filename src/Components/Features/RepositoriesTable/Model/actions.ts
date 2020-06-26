import { InferActionsType } from '../../../lib/store'
import { RepositoryType } from '../../../API'
import { UserType } from '../../../API/api'
import * as types from './types'

export const Actions = {
    setRepositories: (payload: RepositoryType[]) =>
        ({
            type: types.SET_REPOSITORIES,
            payload,
        } as const),
    setTotalCountOfRepositories: (payload: number) =>
        ({
            type: types.SET_TOTAL_COUNT_REPOSITORIES,
            payload,
        } as const),
    setContributesOfActiveRepository: (payload: UserType[]) =>
        ({
            type: types.SET_CONTRIBUTES_OF_ACTIVE_REPOSITORY,
            payload,
        } as const),
    setActiveRepository: (payload: number) =>
        ({
            type: types.SET_ACTIVE_REPOSITORY,
            payload,
        } as const),
}

export type ActionsType = InferActionsType<typeof Actions>
