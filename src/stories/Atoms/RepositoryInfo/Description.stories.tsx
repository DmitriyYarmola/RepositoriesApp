/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Description as DescriptionComponent } from '../../../Components/UI/Atoms'

export default {
    title: 'Atoms/RepositoryInfo',
    component: DescriptionComponent,
}

export const Description = (): React.ReactElement => (
    <DescriptionComponent description="Description of story" />
)
