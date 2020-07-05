/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { OwnerInfo as OwnerInfoComponent } from '../../../Components/UI/Atoms'

export default {
    title: 'Atoms/RepositoryInfo',
    component: OwnerInfoComponent,
}

const Owner = {
    avatar: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    nickName: 'Maks',
    link: 'https://vk.com/janetyarmola',
}

export const OwnerInfo = (): React.ReactElement => <OwnerInfoComponent {...Owner} />
