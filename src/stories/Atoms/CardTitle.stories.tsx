/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { CardTitle as CardTitleComponent } from '../../Components/UI/Atoms'

export default {
    title: 'Atoms',
    component: CardTitleComponent,
}

export const CardTitle = (): React.ReactElement => (
    <CardTitleComponent title="Title of card" />
)
