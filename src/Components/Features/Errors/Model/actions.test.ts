import * as types from './types'
import { Actions } from './actions'

test('Set Error', () => {
    const payload = { error: true, textError: 'Error' }
    const expectedAction = {
        type: types.SET_ERROR,
        payload,
    }

    expect(Actions.setError(payload)).toEqual(expectedAction)
})
