/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Info as InfoComponent } from '../../../Components/UI/Atoms'

export default {
    title: 'Atoms/RepositoryInfo',
    component: InfoComponent,
}

const repoInfo = {
    repoName: 'sixOneThree',
    countStars: 3133,
    dateLastCommit: '30-02-2019',
}
export const Info = (): React.ReactElement => <InfoComponent {...repoInfo} />
