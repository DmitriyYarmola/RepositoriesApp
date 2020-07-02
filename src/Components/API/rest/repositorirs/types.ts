/* eslint-disable @typescript-eslint/camelcase */
import { RepositoryType } from '../../global-types'

export interface RepositoriesResponseType {
    items: RepositoryType[]
    total_count: number
    incomplete_results: boolean
}
