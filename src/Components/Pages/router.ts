import { NotFound } from './Not Found/index'
import { CardPage } from './Card/index'
import { MainPage } from './Main'

export const routers = [
    { path: '/', exact: true, Component: MainPage },
    { path: '/:repoID', exact: false, Component: CardPage },
    { Component: NotFound },
]
