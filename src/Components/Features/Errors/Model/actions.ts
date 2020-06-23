import { InferActionsType } from '../../../lib/store'
import * as types from './types'

interface SetErrorPayloadType {
    error: boolean
    textError: string
}
export const Actions = {
    setError: (payload: SetErrorPayloadType) =>
        ({
            type: types.SET_ERROR,
            payload,
        } as const),
}

export type ActionsType = InferActionsType<typeof Actions>
