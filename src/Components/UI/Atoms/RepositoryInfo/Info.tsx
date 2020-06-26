import React from 'react'
import styled from 'styled-components'

const Repository = styled.div`
    display: grid;
`
const Span = styled.span`
    font-weight: 800;
    font-size: 16px;
`
const RepositoryName = styled.div``
const RepositoryStars = styled.div``
const RepositoryDateLastCommit = styled.div``

interface RepositoryInfoPropsType {
    repoName: string
    countStars: number
    dateLastCommit: string
}
export const Info: React.FC<RepositoryInfoPropsType> = ({
    repoName,
    countStars,
    dateLastCommit,
}) => {
    return (
        <Repository>
            <RepositoryName>
                <Span>Name:</Span> {repoName}
            </RepositoryName>
            <RepositoryStars>
                <Span>Stars:</Span> {countStars}
            </RepositoryStars>
            <RepositoryDateLastCommit>
                <Span>Update:</Span> {dateLastCommit}
            </RepositoryDateLastCommit>
        </Repository>
    )
}
