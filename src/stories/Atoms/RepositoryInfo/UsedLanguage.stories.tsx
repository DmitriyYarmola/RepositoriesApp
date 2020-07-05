/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { UsedLanguage as UsedLanguageComponent } from '../../../Components/UI/Atoms'

export default {
    title: 'Atoms/RepositoryInfo',
    component: UsedLanguageComponent,
    decorators: [withKnobs],
}
const label = 'Language: '
const defaultValue = 'JavaScript'
const value = text(label, defaultValue)
export const UsedLanguage = (): React.ReactElement => (
    <UsedLanguageComponent language={value} />
)
