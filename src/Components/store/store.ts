import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({})

export const store = createStore(rootReducer, applyMiddleware(thunk))

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsType<
    T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>
