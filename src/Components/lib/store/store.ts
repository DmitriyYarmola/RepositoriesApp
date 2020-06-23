/* eslint-disable @typescript-eslint/ban-ts-ignore */
import { createStore, applyMiddleware } from 'redux'
import Thanka from 'redux-thunk'
import { rootReducer } from './root-reducer'

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(Thanka)))

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsType<
    T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>
