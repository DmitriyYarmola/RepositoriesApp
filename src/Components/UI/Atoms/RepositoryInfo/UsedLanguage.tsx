import React from 'react'
import styled from 'styled-components'

const Languages = styled.div``
const Span = styled.span`
    font-weight: 800;
    font-size: 16px;
`
interface ListUsedLanguagePropsType {
    language: string | null | string[]
}
export const UsedLanguage: React.FC<ListUsedLanguagePropsType> = ({ language }) => {
    return (
        <Languages>
            <Span>Language: </Span>
            {language ? language : 'Language isn`t use'}
        </Languages>
    )
}
