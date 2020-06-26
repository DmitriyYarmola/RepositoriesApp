import React from 'react'
import styled from 'styled-components'
import { Criterions } from '../../../UI/Atoms'
import { Repositories } from '../Molecules'
import { RepositoryType } from '../../../API'

const RepositoriesTable = styled.div``

interface RepositoriesTablePropsType {
    repositories: RepositoryType[]
}
export const Table: React.FC<RepositoriesTablePropsType> = ({ repositories }) => {
    return (
        <RepositoriesTable>
            <Criterions />
            <Repositories repositories={repositories} />
        </RepositoriesTable>
    )
}
