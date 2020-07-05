/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button as ButtonComponent } from '../../Components/UI/Atoms'

export default {
    title: 'Atoms',
    component: ButtonComponent,
}

export const Button = (): React.ReactElement => (
    <ButtonComponent onClick={action('clicked')}>Button</ButtonComponent>
)
