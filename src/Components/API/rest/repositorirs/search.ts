/* eslint-disable @typescript-eslint/camelcase */
import { instance } from '../../config'
import { RepositoriesResponseType } from './types'

export const searchRepositories = async (name: string, pageNumber: number) => {
    try {
        const response = await instance.get<RepositoriesResponseType>(
            `search/repositories?q=${name}+in:name`,
            {
                params: {
                    sort: 'stars',
                    page: pageNumber,
                    per_page: 10,
                },
            }
        )
        return response
    } catch (error) {
        return error
    }
}
