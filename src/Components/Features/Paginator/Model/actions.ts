import { InferActionsType } from '../../../lib/store/store'
import * as types from './types'

export const Actions = {
    setCurrentPage: (payload: number) =>
        ({
            type: types.SET_CURRENT_PAGE,
            payload,
        } as const),
}

export type ActionsType = InferActionsType<typeof Actions>
