import React from 'react'
import styled from 'styled-components'
import {
    RepositoryInfoRow,
    OwnerInfoRow,
    ListUsedLanguage,
    RepositoryDescription,
    ListActiveContributes,
} from '../../Atoms'

const Card = styled.div``

interface RepositoryCardPropsType {
    repoName: string
    countStars: number
    dateLastCommit: number
    avatar: string
    nickName: string
    listLanguage: any
    description: string
    activeContributes: any
}
export const RepositoryCard: React.FC<RepositoryCardPropsType> = ({
    repoName,
    countStars,
    dateLastCommit,
    avatar,
    nickName,
    listLanguage,
    description,
    activeContributes,
}) => {
    return (
        <Card>
            <RepositoryInfoRow
                repoName={repoName}
                countStars={countStars}
                dateLastCommit={dateLastCommit}
            />
            <OwnerInfoRow avatar={avatar} nickName={nickName} />
            <ListUsedLanguage listLanguage={listLanguage} />
            <RepositoryDescription description={description} />
            <ListActiveContributes activeContibutes={activeContributes} />
        </Card>
    )
}
