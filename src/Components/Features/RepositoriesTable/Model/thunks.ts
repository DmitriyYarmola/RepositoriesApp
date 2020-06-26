import { ThunkAction } from 'redux-thunk'
import { RepositoriesAPI, ResponseCode } from '../../../API'
import { AppStateType } from '../../../lib/store'

import { ErrorsActions, ErrorsActionsType } from '../../Errors'
import { Actions, ActionsType } from './actions'

type ThunkType = ThunkAction<
    Promise<void>,
    AppStateType,
    unknown,
    ActionsType | ErrorsActionsType
>

export const getRepositories = (): ThunkType => {
    return async (dispatch) => {
        const response = await RepositoriesAPI.getRepositories()
        if (response.status === ResponseCode.OK)
            dispatch(Actions.setRepositories(response.data.items))
        else
            dispatch(
                ErrorsActions.setError({
                    error: true,
                    textError: 'Please, refresh the page.',
                })
            )
    }
}

export const searchRepository = (name: string, numberPage: number): ThunkType => {
    return async (dispatch) => {
        const response = await RepositoriesAPI.searchRepositories(name, numberPage)

        if (response.status === ResponseCode.OK) {
            dispatch(Actions.setRepositories(response.data.items))
            dispatch(Actions.setTotalCountOfRepositories(response.data.total_count))
        } else
            dispatch(
                ErrorsActions.setError({
                    error: true,
                    textError: 'Please, refresh the page.',
                })
            )
    }
}

export const getContributesRepository = (fullName: string): ThunkType => {
    return async (dispatch) => {
        const response = await RepositoriesAPI.getContributorsOfRepository(fullName)
        console.log(response)
        if (response.status === ResponseCode.OK) {
            dispatch(Actions.setContributesOfActiveRepository(response.data))
        } else
            dispatch(
                ErrorsActions.setError({
                    error: true,
                    textError: 'Happend error. Refresh the page.',
                })
            )
    }
}
