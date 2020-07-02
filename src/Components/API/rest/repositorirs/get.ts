/* eslint-disable @typescript-eslint/camelcase */
import { instance } from '../../config'
import { RepositoriesResponseType } from './types'

export const getRepositories = async () => {
    try {
        const response = await instance.get<RepositoriesResponseType>(
            'search/repositories',
            {
                params: {
                    q: 'stars',
                    sort: 'stars',
                    order: 'desc',
                    page: 1,
                    per_page: 10,
                },
            }
        )
        return response
    } catch (error) {
        return error
    }
}
