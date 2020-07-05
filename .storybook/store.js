import { action } from '@storybook/addon-actions'

export const repository = {
    id: 323,
    node_id: 'aada',
    name: 'aada',
    full_name: 'aada',
    private: false,
    owner: {
        login: 'aada', 
        id: 323,
        node_id: 'aada',
        avatar_url:
            'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
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
    description: 'default description text',
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
    updated_at: '20-11-2020',
    pushed_at: 'aada',
    git_url: 'aada',
    ssh_url: 'aada',
    clone_url: 'aada',
    svn_url: 'aada',
    homepage: 'aada',
    size: 323,
    stargazers_count: 323,
    watchers_count: 323,
    language: 'JavaScript',
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

export const Contributor = {
    login: 'Dima',
    id: 132321,
    node_id: '3123123',
    avatar_url: 'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png',
    gravatar_id: '312312',
    url: './fdgdfgdf',
    html_url: '/dfgdfg',
    followers_url: './dfgdfgdgdfg',
    following_url: './dfgdfgdgdfg',
    gists_url: './dfgdfgdgdfg',
    starred_url: '/fdgdfgdf',
    subscriptions_url: '/fdgdfgdf',
    organizations_url: '/fdgdfgdf',
    repos_url: '/fdgdfgdf',
    events_url: '/fdgdfgdf',
    received_events_url: '/fdgdfgdf',
    type: '/fdgdfgdf',
    site_admin: false,
    contributions: 1003,
}

export const contributorsArray = [
    Contributor,
    { ...Contributor, id: 331231, login: 'Max' },
    { ...Contributor, id: 512515, login: 'Nike' },
]

export const store = {
    getState: () => {
        return {
            RepositoriesReducer: {
                repositories: [
                    repository,
                    { ...repository, id: 131313, name: 'aada1', stargazers_count: 303, updated_at: '11-03-2019' },
                    { ...repository, id: 312322, name: 'aada2', stargazers_count: 300, updated_at: '11-03-2019' },
                    { ...repository, id: 654645, name: 'aada3', stargazers_count: 298, updated_at: '11-03-2019' },
                    { ...repository, id: 565644, name: 'aada4', stargazers_count: 288, updated_at: '11-03-2019' },
                    { ...repository, id: 876676, name: 'aada5', stargazers_count: 269, updated_at: '11-03-2019' },
                    { ...repository, id: 656445, name: 'aada6', stargazers_count: 260, updated_at: '11-03-2019' },
                    { ...repository, id: 555544, name: 'aada7', stargazers_count: 240, updated_at: '11-03-2019' },
                    { ...repository, id: 654645, name: 'aada8', stargazers_count: 237, updated_at: '11-03-2019' },
                    { ...repository, id: 132223, name: 'aada9', stargazers_count: 228, updated_at: '11-03-2019' },
                ],
                contributorsOfActiverepository: contributorsArray,
                totalCount: 10,
                activerepositoryId: 131313,
            },
            PaginatorReducer: {
                pageSize: 10,
                portionSize: 3,
                currentPage: 1,
            },
            ErrorsReducer: {
                error: false,
                textError: ''
            }
        }
    },
    subscribe: () => 0,
    dispatch: action('dispatch'),
}
