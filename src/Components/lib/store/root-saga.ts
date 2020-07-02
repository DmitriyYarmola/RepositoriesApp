import { all, AllEffect, ForkEffect } from 'redux-saga/effects'
import { RootSagaRepo } from '../../Features/RepositoriesTable'

export function* rootSaga(): Generator<
    AllEffect<Generator<AllEffect<ForkEffect<never>>, void, unknown>>,
    void,
    unknown
> {
    yield all([RootSagaRepo()])
}
