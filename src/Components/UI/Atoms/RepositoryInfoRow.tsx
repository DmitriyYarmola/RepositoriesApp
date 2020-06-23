import React from 'react'
import styled from 'styled-components'

const RepositoryInfo = styled.div``

const RepositoryName = styled.div``
const RepositoryStars = styled.div``
const RepositoryDateLastCommit = styled.div``

interface RepositoryInfoPropsType {
    repoName: string
    countStars: number
    dateLastCommit: number
}
export const RepositoryInfoRow: React.FC<RepositoryInfoPropsType> = ({
    repoName,
    countStars,
    dateLastCommit,
}) => {
    return (
        <RepositoryInfo>
            <RepositoryName>{repoName}</RepositoryName>
            <RepositoryStars>{countStars}</RepositoryStars>
            <RepositoryDateLastCommit>{dateLastCommit}</RepositoryDateLastCommit>
        </RepositoryInfo>
    )
}
