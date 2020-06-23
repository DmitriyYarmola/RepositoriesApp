import { AppStateType } from '../../../lib/store'

export const error = (state: AppStateType): boolean => state.ErrorsReducer.error
export const textErorr = (state: AppStateType): string => state.ErrorsReducer.textError
