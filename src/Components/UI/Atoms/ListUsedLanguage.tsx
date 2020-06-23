import React from 'react'
import styled from 'styled-components'

const List = styled.div``
interface ListUsedLanguagePropsType {
    listLanguage: any
}
export const ListUsedLanguage: React.FC<ListUsedLanguagePropsType> = ({ listLanguage }) => {
    return <List>{listLanguage}</List>
}
