import { NotFound } from './Not Found/index'
import { CardPage } from './Card/index'
import { MainPage } from './Main'

export const routers = [
    { path: '/', exact: true, Component: MainPage },
    { path: '/user/:repoID', exact: false, Component: CardPage },
    { path: '*', exact: false, Component: NotFound },
]
