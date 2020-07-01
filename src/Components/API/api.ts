import axios from 'axios'
import { RepositoryType } from './global-types'
/* eslint-disable @typescript-eslint/camelcase */

interface DataResponseType {
    items: RepositoryType[]
    total_count: number
    incomplete_results: boolean
}

export enum ResponseCode {
    OK = 200,
    NoFound = 404,
}

const instance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
})
export const RepositoriesAPI = {
    getRepositories: async () => {
        try {
            const response = await instance.get<DataResponseType>('search/repositories', {
                params: {
                    q: 'stars',
                    sort: 'stars',
                    order: 'desc',
                    page: 1,
                    per_page: 10,
                },
            })
            return response
        } catch (error) {
            return error
        }
    },
    searchRepositories: async (name: string, pageNumber: number) => {
        try {
            const response = await instance.get<DataResponseType>(
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
            const response = await instance.get(
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
