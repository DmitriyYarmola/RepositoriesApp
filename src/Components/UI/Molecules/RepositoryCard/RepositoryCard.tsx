import React from 'react'
import styled from 'styled-components'
import {
    Info,
    OwnerInfo,
    UsedLanguage,
    Description,
    Contributors,
    CardTitle,
} from '../../Atoms'
import { UserType } from '../../../API'

const Card = styled.div`
    background: #f2f3f4;
    padding: 15px;
`
interface RepositoryCardPropsType {
    repoName: string
    countStars: number
    dateLastCommit: string
    avatar: string
    nickName: string
    language: null | string | string[]
    description: string
    activeContributes: UserType[]
    link: string
}
export const RepositoryCard: React.FC<RepositoryCardPropsType> = ({
    repoName,
    countStars,
    dateLastCommit,
    nickName,
    avatar,
    language,
    description,
    activeContributes,
    link,
}) => {
    return (
        <Card>
            <CardTitle title="Repository Info" />
            <OwnerInfo avatar={avatar} nickName={nickName} link={link} />
            <Info
                repoName={repoName}
                countStars={countStars}
                dateLastCommit={dateLastCommit}
            />
            <UsedLanguage language={language} />
            <Description description={description} />
            <Contributors activeContibutes={activeContributes} />
        </Card>
    )
}
