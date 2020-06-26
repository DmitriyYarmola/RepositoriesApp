import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
    text-align: center;
    font-weight: 800;
    font-size: 20px;
`

interface CardTitlePropsType {
    title: string
}
export const CardTitle: React.FC<CardTitlePropsType> = ({ title }) => {
    return <Title>{title}</Title>
}
