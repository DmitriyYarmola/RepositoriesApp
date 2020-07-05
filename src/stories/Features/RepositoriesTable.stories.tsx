import React from 'react'
import { Table as RepositoriesTableComponent } from '../../Components/Features/RepositoriesTable'
import { repository } from '../../../.storybook/store'

export default {
    title: 'Features',
    component: RepositoriesTableComponent,
}

export const RepostioriesTable = ():React.ReactElement => (
    <RepositoriesTableComponent
        repositories={[repository, repository, repository, repository, repository]}
    />
)
