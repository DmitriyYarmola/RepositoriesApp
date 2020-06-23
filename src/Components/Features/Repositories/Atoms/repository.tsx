import React, { useCallback } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { RepositoriesActions, RepositoriesThunks } from '../Model'

const RepositoryItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background: #f2f3f4;
    color: black;
    padding: 10px 10px;
    text-align: center;
    &:hover {
        background: white;
    }
    border-right: 1px solid black;
    border-left: 1px solid black;
    border: 1px solid black;
`
const Name = styled.div`
    cursor: pointer;
`
const CountStars = styled.span`
    border-right: 1px solid black;
    border-left: 1px solid black;
`
const DateLastCommit = styled.span`
    border-right: 1px solid black;
`
const Link = ({ ...props }): React.ReactElement => <a {...props}>Link</a>

const LinkOnGithub = styled(Link)`
    text-decoration: none;
    text-transform: none;
    color: inherit;
`

interface RepositoriesPropsType {
    name: string
    countOfStars: number
    dateLastCommit: string
    linkOnGithub: string
    repoID: number
    fullName: string
}

export const Repository: React.FC<RepositoriesPropsType> = ({
    name,
    countOfStars,
    dateLastCommit,
    linkOnGithub,
    repoID,
    fullName,
}) => {
    const dispatch = useDispatch()
    const onGetInfoOfRepository = useCallback(() => {
        dispatch(RepositoriesActions.setActiveRepository(repoID))
        dispatch(RepositoriesThunks.getContributesRepository(fullName))
    }, [dispatch, repoID, fullName])

    return (
        <RepositoryItem>
            <Name onClick={onGetInfoOfRepository}>
                <NavLink to={'/repos/' + repoID}>{name}</NavLink>
            </Name>
            <CountStars>{countOfStars}</CountStars>
            <DateLastCommit>{dateLastCommit}</DateLastCommit>
            <LinkOnGithub href={linkOnGithub} target="_blank" />
        </RepositoryItem>
    )
}
