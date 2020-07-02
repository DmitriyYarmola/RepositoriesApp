import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { ErrorsSelectors } from './Components/Features/Errors/Model'
import { Error } from './Components/Features/Errors'
import { routers } from './Components/Pages/router'
import { GlobalStyles } from './global-styles'

const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`

export const App = (): React.ReactElement => {
    const error = useSelector(ErrorsSelectors.error)

    return (
        <Wrapper>
            {error && <Error />}
            <GlobalStyles />
            <Switch>
                {routers.map(({ path, exact, Component }) => {
                    return (
                        <Route
                            key={path}
                            path={path}
                            exact={exact}
                            render={() => <Component />}
                        />
                    )
                })}
            </Switch>
        </Wrapper>
    )
}
