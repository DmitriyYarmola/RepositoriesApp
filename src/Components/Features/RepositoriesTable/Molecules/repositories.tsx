import React from 'react'
import styled from 'styled-components'
import { Repository } from '../Atoms'
import { RepositoryType } from '../../../API'

const RepositoriesList = styled.div``
interface RepositoriesPropsType {
    repositories: RepositoryType[]
}
export const Repositories: React.FC<RepositoriesPropsType> = ({ repositories }) => {
    const repositoriesItems = repositories.map((repository) => {
        return (
            <Repository
                key={repository.id}
                name={repository.name}
                countOfStars={repository.stargazers_count}
                dateLastCommit={repository.updated_at}
                linkOnGithub={repository.html_url}
                repoID={repository.id}
                fullName={repository.full_name}
            />
        )
    })
    return <RepositoriesList>{repositoriesItems}</RepositoriesList>
}
