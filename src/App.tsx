import React, { Suspense } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { Main } from './Components/Pages/Main/page'
import { ErrorsSelectors } from './Components/Features/Errors/Model'
import { Error } from './Components/Features/Errors'
import { Preloader } from './Components/UI/Molecules/Preloader/Preloader'
import { Card } from './Components/Pages/Card'

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
            <Suspense fallback={<Preloader />}>
                <Switch>
                    <Route path="/repos" exact>
                        <Main />
                    </Route>
                    <Route path="/repos/:repoID?">
                        <Card />
                    </Route>
                </Switch>
            </Suspense>
        </Wrapper>
    )
}
