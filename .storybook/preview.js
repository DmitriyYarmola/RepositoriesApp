import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { DocsPage } from '@storybook/addon-docs/blocks'
import { MemoryRouter } from 'react-router'
import { withKnobs } from '@storybook/addon-knobs'
import { withConsole } from '@storybook/addon-console'
import { withInfo } from '@storybook/addon-info'
import { Provider } from 'react-redux'
import { store } from './store'

addDecorator(withKnobs)
addDecorator(withInfo)
addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
addDecorator((story) => <Provider store={store}>{story()}</Provider>)
addDecorator((storyFn, context) => withConsole()(storyFn)(context))
addParameters({
    docs: {
        inlineStories: false,
    },
})
