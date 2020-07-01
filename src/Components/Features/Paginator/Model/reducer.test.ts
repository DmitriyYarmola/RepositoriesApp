/* eslint-disable @typescript-eslint/camelcase */
import { Reducer } from './reducer'
import * as types from './types'

test('Reducer Set Repositories', () => {
    const expectedReducer = {
        pageSize: 10,
        portionSize: 3,
        currentPage: 1,
    }
    expect(
        Reducer(undefined, {
            type: types.SET_CURRENT_PAGE,
            payload: 1,
        })
    ).toEqual(expectedReducer)
})
