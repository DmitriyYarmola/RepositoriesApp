import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-weight: bold;
    background: #f2f3f4;
    color: black;
    padding: 0 10px;
    margin-top: 15px;
    text-align: center;
    border: 1px solid black;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
const Name = styled.div``
const Span = styled.span`
    padding: 10px;
    display: block;
`
const CountStars = styled.div`
    border-right: 1px solid black;
    border-left: 1px solid black;
`
const DateLastCommit = styled.div`
    border-right: 1px solid black;
`

const LinkGitHub = styled.div``
export const RepositoriesHeader = () => {
    return (
        <Header>
            <Name>
                <Span>Name</Span>
            </Name>
            <CountStars>
                <Span>Stars Count</Span>
            </CountStars>
            <DateLastCommit>
                <Span>Date last Commit</Span>
            </DateLastCommit>
            <LinkGitHub>
                <Span>Link on Github</Span>
            </LinkGitHub>
        </Header>
    )
}
