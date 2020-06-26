import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { MainPage } from './Components/Pages/Main'
import { ErrorsSelectors } from './Components/Features/Errors/Model'
import { Error } from './Components/Features/Errors'
import { CardPage } from './Components/Pages/Card'

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
            <Switch>
                <Route path="/" exact component={() => <MainPage />} />
                <Route path="/:repoID?" component={() => <CardPage />} />
            </Switch>
        </Wrapper>
    )
}
