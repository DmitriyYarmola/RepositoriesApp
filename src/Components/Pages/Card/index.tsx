import React from 'react'
import { useSelector } from 'react-redux'
import { RepositoriesSelectors } from '../../Features/Repositories/Model'

export const Card = (): React.ReactElement => {
    const repositoryInfo = useSelector(RepositoriesSelectors.infoAboutActiveRepository)
    const contributors = useSelector(RepositoriesSelectors.contributors)
    console.log(contributors)
    console.log(repositoryInfo)
    return <div>....</div>
}
