import React from 'react'
import styled from 'styled-components'
import { dateParser } from '../../../lib/dateParser'

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
    const date = dateParser(dateLastCommit)
    return (
        <Repository>
            <RepositoryName>
                <Span>Name:</Span> {repoName}
            </RepositoryName>
            <RepositoryStars>
                <Span>Stars:</Span> {countStars}
            </RepositoryStars>
            <RepositoryDateLastCommit>
                <Span>Update:</Span> {date}
            </RepositoryDateLastCommit>
        </Repository>
    )
}
