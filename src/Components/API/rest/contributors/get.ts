/* eslint-disable @typescript-eslint/camelcase */
import { instance } from '../../config'
import { ContributorsResponseType } from './types'

export const getContributors = async (fullNameOfRepository: string) => {
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
}
