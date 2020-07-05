import React from 'react'
import { object } from '@storybook/addon-knobs'
import { withInfo } from '@storybook/addon-info'
import { RepositoryCard as RepositoryCardComponent } from '../../../Components/UI/Molecules/RepositoryCard/RepositoryCard'
import { Contributor } from '../../../../.storybook/store'

export default {
    title: 'Molecules',
    decorators: [withInfo],
    component: RepositoryCardComponent,
}

const repoCard = {
    repoName: 'AlaxRepo',
    countStars: 3232,
    dateLastCommit: '22-11-2019',
    nickName: 'Dmitriy',
    avatar: 'https://imagekit.io/static/img/newPages/homepage-wave-bg.svg',
    language: 'JavaScript',
    description: 'Something',
    activeContributes: [Contributor, { ...Contributor, login: 'Max' }],
    link: 'https://github.com/EnemyDeaD',
}

const value = object('Repository Info', repoCard)

export const RepositoryCard = (): React.ReactElement => (
    <RepositoryCardComponent {...value} />
)

RepositoryCard.story = {
    parameters: {
        info: {
            inline: false,
            text: 'This is info about repository',
        },
    },
}
