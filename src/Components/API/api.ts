/* eslint-disable @typescript-eslint/camelcase */
import { RepositoryType, UserType } from './global-types'
import { instance } from './config'

interface RepositoriesResponseType {
    items: RepositoryType[]
    total_count: number
    incomplete_results: boolean
}

interface ContributorsResponseType {
    items: UserType[]
}
export enum ResponseCode {
    OK = 200,
    NoFound = 404,
}
export const RepositoriesAPI = {
    getRepositories: async () => {
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
    },
    searchRepositories: async (name: string, pageNumber: number) => {
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
    },
    getContributorsOfRepository: async (fullNameOfRepository: string) => {
        try {
            const response = await instance.get<ContributorsResponseType>(
                `repos/${fullNameOfRepository}/contributors`,
                {
                    params: {
                        per_page: 10,
                    },
                }
            )
            return response
        } catch (error) {
            return error
        }
    },
}
