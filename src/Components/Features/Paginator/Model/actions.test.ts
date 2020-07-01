/* eslint-disable @typescript-eslint/camelcase */
import { Actions } from './actions'
import * as types from './types'

test('Set current Page', () => {
    const payload = 2
    const expectedAction = {
        type: types.SET_CURRENT_PAGE,
        payload,
    }
    expect(Actions.setCurrentPage(2)).toEqual(expectedAction)
})
