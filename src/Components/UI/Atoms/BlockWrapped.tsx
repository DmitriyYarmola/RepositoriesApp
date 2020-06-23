import React from 'react'
import styled from 'styled-components'

const Wrapped = styled.div`
    text-align: center;
`
interface PaginatorWrappedProps {
    children: React.ReactNode
}
export const BlockWrapped: React.FC<PaginatorWrappedProps> = ({ children }) => (
    <Wrapped>{children}</Wrapped>
)
