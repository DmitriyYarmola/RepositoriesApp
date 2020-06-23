import React from 'react'
import styled from 'styled-components'

const Description = styled.div``
interface DescriptionRepositoryPropsType {
    description: string
}
export const RepositoryDescription: React.FC<DescriptionRepositoryPropsType> = ({
    description,
}) => {
    return <Description>{description}</Description>
}
