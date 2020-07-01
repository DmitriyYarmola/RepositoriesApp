/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { put, takeEvery, all, call } from 'redux-saga/effects'
import { RepositoriesAPI, ResponseCode } from '../../../API'

import { ErrorsActions } from '../../Errors'
import {
    GET_REPOSITORIES,
    SEARCH_REPOSITORIES,
    CONTRIBUTES_OF_ACTIVE_REPOSITORY,
} from './types'
import { Actions } from './actions'

export function* getRepositories() {
    const response = yield call(RepositoriesAPI.getRepositories)
    if (response.status === ResponseCode.OK)
        yield put(Actions.setRepositories(response.data.items))
    else
        yield put(
            ErrorsActions.setError({
                error: true,
                textError: 'Please, refresh the page.',
            })
        )
}

interface SearchRepositoryPayloadType {
    type: string
    payload: { name: string; numberPage: number }
}
export function* searchRepository({ payload }: SearchRepositoryPayloadType) {
    const { name, numberPage } = payload
    const response = yield call(RepositoriesAPI.searchRepositories, name, numberPage)
    if (response.status === ResponseCode.OK) {
        yield put(Actions.setRepositories(response.data.items))
        yield put(Actions.setTotalCountOfRepositories(response.data.total_count))
    } else
        yield put(
            ErrorsActions.setError({
                error: true,
                textError: 'Please, refresh the page.',
            })
        )
}

interface GetContributesRepositoryPayloadType {
    type: string
    payload: { fullName: string }
}
export function* getContributesRepository({
    payload,
}: GetContributesRepositoryPayloadType) {
    const { fullName } = payload
    const response = yield call(RepositoriesAPI.getContributorsOfRepository, fullName)
    if (response.status === ResponseCode.OK) {
        yield put(Actions.setContributesOfActiveRepository(response.data))
    } else
        yield put(
            ErrorsActions.setError({
                error: true,
                textError: 'Happend error. Refresh the page.',
            })
        )
}

export function* rootSagaRepo() {
    yield all([
        takeEvery(GET_REPOSITORIES, getRepositories),
        takeEvery(SEARCH_REPOSITORIES, searchRepository),
        takeEvery(CONTRIBUTES_OF_ACTIVE_REPOSITORY, getContributesRepository),
    ])
}
