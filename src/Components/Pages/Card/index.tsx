/* eslint-disable @typescript-eslint/camelcase */
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    RepositoriesSelectors,
    RepositoriesActions,
} from '../../Features/RepositoriesTable'
import { RepositoryCard } from '../../UI/Molecules/RepositoryCard'
import { Preloader } from '../../UI/Molecules/Preloader'

export const CardPage = (): React.ReactElement => {
    const dispatch = useDispatch()
    const contributors = useSelector(RepositoriesSelectors.contributors)
    const repositoryInfo = useSelector(RepositoriesSelectors.infoAboutActiveRepository)
    const activeRepositoryId = useSelector(RepositoriesSelectors.activeRepositoryId)

    useEffect(() => {
        if (contributors)
            localStorage.setItem('contributors', JSON.stringify(contributors))
    }, [contributors])

    useEffect(() => {
        if (activeRepositoryId)
            localStorage.setItem('activeRepository', JSON.stringify(activeRepositoryId))
    }, [activeRepositoryId])

    useEffect(() => {
        const getContributors = localStorage.getItem('contributors')
        if (getContributors)
            dispatch(
                RepositoriesActions.setContributesOfActiveRepository(
                    JSON.parse(getContributors)
                )
            )
        const getActiveRepositoryId = localStorage.getItem('activeRepository')
        if (getActiveRepositoryId)
            dispatch(
                RepositoriesActions.setActiveRepository(JSON.parse(getActiveRepositoryId))
            )
        const getRepositories = localStorage.getItem('repositories')
        if (getRepositories)
            dispatch(RepositoriesActions.setRepositories(JSON.parse(getRepositories)))
    }, [dispatch])

    if (!repositoryInfo || !contributors) return <Preloader />

    const {
        name,
        stargazers_count,
        updated_at,
        owner: { login, avatar_url, html_url },
        language,
        description,
    } = repositoryInfo[0]
    return (
        <RepositoryCard
            repoName={name}
            countStars={stargazers_count}
            dateLastCommit={updated_at}
            avatar={avatar_url}
            nickName={login}
            language={language}
            description={description}
            activeContributes={contributors}
            link={html_url}
        />
    )
}
