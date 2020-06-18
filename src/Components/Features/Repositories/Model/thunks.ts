import { ThunkAction } from 'redux-thunk'
import { RepositoriesAPI } from '../../../API/index'
import { AppStateType } from '../../../store/store'
import { Actions, ActionsType } from './actions'

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const getRepositories = (): ThunkType => {
    return async (dispatch) => {
        const data = await RepositoriesAPI.getRepositories()
        dispatch(Actions.getRepositories(data.items))
    }
} 
