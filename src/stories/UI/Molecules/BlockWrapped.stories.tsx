/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { BlockWrapped as BlockWrappedComponent } from '../../../Components/UI/Atoms'

export default {
    title: 'Atoms',
    component: BlockWrappedComponent,
}

export const BlockWrapped = (): React.ReactElement => (
    <BlockWrappedComponent>Children</BlockWrappedComponent>
)
