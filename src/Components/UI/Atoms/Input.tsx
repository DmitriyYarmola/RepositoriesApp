import React from 'react'
import styled from 'styled-components'

const TextField = styled.input`
    border: 1px solid black;
    background: white;
    margin: 0;
    padding: 10px;
    max-width: 275px;
    width: 100%;
`

interface InputPropsType {
    type: string
    plHolder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    onKeyPress: (e: React.KeyboardEvent) => void
    value: string
}
export const Input: React.FC<InputPropsType> = ({
    type,
    plHolder,
    onChange,
    value,
    onKeyPress,
}) => {
    return (
        <TextField
            type={type}
            placeholder={plHolder}
            onChange={onChange}
            value={value}
            onKeyPress={onKeyPress}
        />
    )
}
