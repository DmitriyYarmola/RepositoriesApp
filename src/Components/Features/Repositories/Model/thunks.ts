import { RepositoriesAPI } from '../../../API/api'
import { RepositoriesActions } from '.'

export const getRepositories = () => {
    return async (dispatch: any) => {
        const data = await RepositoriesAPI.getRepositories()
        dispatch(RepositoriesActions.getRepositories(data))
    }
}
