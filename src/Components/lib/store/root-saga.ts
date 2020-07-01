import { all, AllEffect, ForkEffect } from 'redux-saga/effects'
import { rootSagaRepo } from '../../Features/RepositoriesTable/Model/sagas'

export function* rootSaga(): Generator<
    AllEffect<Generator<AllEffect<ForkEffect<never>>, void, unknown>>,
    void,
    unknown
> {
    yield all([rootSagaRepo()])
}
