import React from 'react'
import styled from 'styled-components'

const ButtonS = styled.button`
    background: none;
    padding: 0 5px;
    margin: 0;
    border: 0;
    outline: none;
    color: black;
`

interface ButtonPropsType {
    children: React.ReactNode
    onClick: () => void
}

export const Button: React.FC<ButtonPropsType> = ({ children, onClick }) => {
    return <ButtonS onClick={onClick}>{children}</ButtonS>
}
