import { Reducer } from './reducer'
/* eslint-disable @typescript-eslint/camelcase */
import * as types from './types'

const contributor = {
    login: 'user',
    id: 323,
    node_id: 'user',
    avatar_url: 'user',
    gravatar_id: 'user',
    url: 'user',
    html_url: 'user',
    followers_url: 'user',
    following_url: 'user',
    gists_url: 'user',
    starred_url: 'user',
    subscriptions_url: 'user',
    organizations_url: 'user',
    repos_url: 'user',
    events_url: 'user',
    received_events_url: 'user',
    type: 'user',
    site_admin: false,
    contributions: 323,
}
const Repositories = {
    id: 323,
    node_id: 'aada',
    name: 'aada',
    full_name: 'aada',
    private: false,
    owner: {
        login: 'aada',
        id: 323,
        node_id: 'aada',
        avatar_url: 'aada',
        gravatar_id: 'aada',
        url: 'aada',
        html_url: 'aada',
        followers_url: 'aada',
        following_url: 'aada',
        gists_url: 'aada',
        starred_url: 'aada',
        subscriptions_url: 'aada',
        organizations_url: 'aada',
        repos_url: 'aada',
        events_url: 'aada',
        received_events_url: 'aada',
        type: 'aada',
        site_admin: false,
        contributions: 323,
    },
    description: 'aada',
    fork: false,
    forks_url: 'aada',
    keys_url: 'aada',
    collaborators_url: 'aada',
    teams_url: 'aada',
    hooks_url: 'aada',
    issue_events_url: 'aada',
    assignees_url: 'aada',
    branches_url: 'aada',
    tags_url: 'aada',
    blobs_url: 'aada',
    git_tags_url: 'aada',
    git_refs_url: 'aada',
    trees_url: 'aada',
    statuses_url: 'aada',
    languages_url: 'aada',
    stargazers_url: 'aada',
    contributors_url: 'aada',
    subscribers_url: 'aada',
    subscription_url: 'aada',
    commits_url: 'aada',
    git_commits_url: 'aada',
    comments_url: 'aada',
    issue_comment_url: 'aada',
    contents_url: 'aada',
    compare_url: 'aada',
    merges_url: 'aada',
    archive_url: 'aada',
    downloads_url: 'aada',
    issues_url: 'aada',
    pulls_url: 'aada',
    milestones_url: 'aada',
    notifications_url: 'aada',
    labels_url: 'aada',
    releases_url: 'aada',
    deployments_url: 'aada',
    created_at: 'aada',
    updated_at: 'aada',
    pushed_at: 'aada',
    git_url: 'aada',
    ssh_url: 'aada',
    clone_url: 'aada',
    svn_url: 'aada',
    homepage: 'aada',
    size: 323,
    stargazers_count: 323,
    watchers_count: 323,
    language: 'aada',
    has_issues: false,
    has_projects: false,
    has_downloads: false,
    has_wiki: false,
    has_pages: false,
    forks_count: 323,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 323,
    license: {
        key: 'aada',
        name: 'aada',
        spdx_id: 'aada',
        url: null,
        node_id: 'aada',
    },
    forks: 323,
    open_issues: 323,
    default_branch: 'aada',
    score: 323,
    url: 'aada',
    watchers: 323,
    html_url: 'aada',
}

test('Reducer Set Repositories', () => {
    const expectedReducer = {
        repositories: [Repositories],
        totalCount: 10,
        contributorsOfActiveRepository: null,
        activeRepositoryId: null,
    }
    expect(
        Reducer(undefined, {
            type: types.SET_REPOSITORIES,
            payload: [Repositories],
        })
    ).toEqual(expectedReducer)
})

test('Reducer Total Count', () => {
    const expectedReducer = {
        repositories: null,
        totalCount: 30,
        contributorsOfActiveRepository: null,
        activeRepositoryId: null,
    }
    expect(
        Reducer(undefined, { type: types.SET_TOTAL_COUNT_REPOSITORIES, payload: 30 })
    ).toEqual(expectedReducer)
})

test('Reducer Set Active Repositories (id)', () => {
    const expectedReducer = {
        repositories: null,
        totalCount: 10,
        contributorsOfActiveRepository: null,
        activeRepositoryId: 304040,
    }
    expect(
        Reducer(undefined, { type: types.SET_ACTIVE_REPOSITORY, payload: 304040 })
    ).toEqual(expectedReducer)
})

test('Reducer Set Contributors of active Repository', () => {
    const expectedReducer = {
        repositories: null,
        totalCount: 10,
        contributorsOfActiveRepository: [contributor],
        activeRepositoryId: null,
    }
    expect(
        Reducer(undefined, {
            type: types.SET_CONTRIBUTES_OF_ACTIVE_REPOSITORY,
            payload: [contributor],
        })
    ).toEqual(expectedReducer)
})
