import React from 'react'
import styled from 'styled-components'

const DescriptionItem = styled.div``
const Span = styled.span`
    font-weight: 800;
    font-size: 16px;
`
interface DescriptionRepositoryPropsType {
    description: string
}
export const Description: React.FC<DescriptionRepositoryPropsType> = ({
    description,
}) => {
    return (
        <DescriptionItem>
            <Span>Description: </Span>
            {description}
        </DescriptionItem>
    )
}
