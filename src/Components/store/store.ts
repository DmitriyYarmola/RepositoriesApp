import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { RepositoriesReducer } from '../Features/Repositories'

const rootReducer = combineReducers({
    RepositoriesReducer,
})

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsType<
    T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>
