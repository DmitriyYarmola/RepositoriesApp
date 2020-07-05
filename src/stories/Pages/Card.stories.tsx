/* eslint-disable no-use-before-define */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { CardPage as CardComponent } from '../../Components/Pages/Card'

export default {
    title: 'Pages',
    component: CardComponent,
}

export const Card = (): React.ReactElement => <CardComponent />
