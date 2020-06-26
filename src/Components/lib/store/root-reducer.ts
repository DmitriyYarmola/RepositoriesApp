import { combineReducers } from 'redux'
import { RepositoriesReducer } from '../../Features/RepositoriesTable'
import { PaginatorReducer } from '../../Features/Paginator'
import { ErrorsReducer } from '../../Features/Errors'

export const rootReducer = combineReducers({
    RepositoriesReducer,
    PaginatorReducer,
    ErrorsReducer,
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>
