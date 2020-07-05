/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Contributors as ContributorsComponent } from '../../../Components/UI/Atoms/RepositoryInfo/Contributors'
import { contributorsArray } from '../../../../.storybook/store'

export default {
    title: 'Atoms/RepositoryInfo',
    component: ContributorsComponent,
    parameters: {
        assets: [
            'https://i.pinimg.com/originals/c9/ee/19/c9ee19d7395aa955fd03e6b12335d78b.jpg',
        ],
    },
}

export const Contributors = (): React.ReactElement => (
    <ContributorsComponent activeContibutes={contributorsArray} />
)
