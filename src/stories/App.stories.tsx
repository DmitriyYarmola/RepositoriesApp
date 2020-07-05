/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { App as AppComponent } from '../App'

export default {
    title: 'App',
    component: AppComponent,
}

export const App = () => <AppComponent />
