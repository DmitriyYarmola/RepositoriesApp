/* eslint-disable @typescript-eslint/camelcase */
import { Actions } from './actions'
import * as types from './types'

test('Total Count Action ', () => {
    const payload = 2
    const expectedAction = {
        type: types.SET_TOTAL_COUNT_REPOSITORIES,
        payload,
    }
    expect(Actions.setTotalCountOfRepositories(2)).toEqual(expectedAction)
})
test('Active Repositories ', () => {
    const payload = 2
    const expectedAction = {
        type: types.SET_ACTIVE_REPOSITORY,
        payload,
    }
    expect(Actions.setActiveRepository(payload)).toEqual(expectedAction)
})
