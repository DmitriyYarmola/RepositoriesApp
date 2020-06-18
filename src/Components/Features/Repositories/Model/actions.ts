import { InferActionsType } from '../../../store/store'
import { RepositoryType } from '../../../API'

export const GET_REPOSITORIES = 'GET_REPOSITORIES'

export const Actions = {
    getRepositories: (payload: RepositoryType[]) =>
        ({
            type: GET_REPOSITORIES,
            payload,
        } as const),
}

export type ActionsType = InferActionsType<typeof Actions>
