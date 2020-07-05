import React from 'react'
import { action } from '@storybook/addon-actions'
import { Input as InpuComponent } from '../../Components/UI/Atoms'

export default {
    title: 'Atoms',
    component: InpuComponent,
}

const inputData = {
    type: 'text',
    plHolder: 'placeholder',
    value: '',
}
const actionsData = {
    onChange: action('change'),
    onKeyPress: action('KeyPress'),
}

export const Input = (): React.ReactElement => (
    <InpuComponent {...inputData} {...actionsData} />
)
