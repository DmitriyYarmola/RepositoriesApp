/* eslint-disable @typescript-eslint/camelcase */
import axios from 'axios'

export interface UserType {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
    contributions?: number
}

export interface RepositoryType {
    id: number
    node_id: string
    name: string
    full_name: string
    private: boolean
    owner: UserType
    description: string
    fork: false
    forks_url: string
    keys_url: string
    collaborators_url: string
    teams_url: string
    hooks_url: string
    issue_events_url: string
    assignees_url: string
    branches_url: string
    tags_url: string
    blobs_url: string
    git_tags_url: string
    git_refs_url: string
    trees_url: string
    statuses_url: string
    languages_url: string
    stargazers_url: string
    contributors_url: string
    subscribers_url: string
    subscription_url: string
    commits_url: string
    git_commits_url: string
    comments_url: string
    issue_comment_url: string
    contents_url: string
    compare_url: string
    merges_url: string
    archive_url: string
    downloads_url: string
    issues_url: string
    pulls_url: string
    milestones_url: string
    notifications_url: string
    labels_url: string
    releases_url: string
    deployments_url: string
    created_at: string
    updated_at: string
    pushed_at: string
    git_url: string
    ssh_url: string
    clone_url: string
    svn_url: string
    homepage: string
    size: number
    stargazers_count: number
    watchers_count: number
    language: string
    has_issues: boolean
    has_projects: boolean
    has_downloads: boolean
    has_wiki: boolean
    has_pages: boolean
    forks_count: number
    mirror_url: null
    archived: boolean
    disabled: boolean
    open_issues_count: number
    license: {
        key: string
        name: string
        spdx_id: string
        url: null
        node_id: string
    }
    forks: number
    open_issues: number
    default_branch: string
    score: number
    url: string
    watchers: number
    html_url: string
}

interface DataResponseType {
    items: RepositoryType[]
    total_count: number
    incomplete_results: boolean
}

export enum ResponseCode {
    OK = 200,
    NoFound = 404,
}

const instance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
})
export const RepositoriesAPI = {
    getRepositories: async () => {
        try {
            const response = await instance.get<DataResponseType>('search/repositories', {
                params: {
                    q: 'stars',
                    sort: 'stars',
                    order: 'desc',
                    page: 1,
                    per_page: 10,
                },
            })
            console.log(response)
            return response
        } catch (error) {
            return error
        }
    },
    searchRepositories: async (name: string, pageNumber: number) => {
        try {
            const response = await instance.get<DataResponseType>(
                `search/repositories?q=${name}+in:name`,
                {
                    params: {
                        sort: 'stars',
                        page: pageNumber,
                        per_page: 10,
                    },
                }
            )
            return response
        } catch (error) {
            return error
        }
    },
    getContributorsOfRepository: async (fullNameOfRepository: string) => {
        try {
            const response = await instance.get(
                `repos/${fullNameOfRepository}/contributors`,
                {
                    params: {
                        per_page: 10,
                    },
                }
            )
            return response
        } catch (error) {
            return error
        }
    },
}
