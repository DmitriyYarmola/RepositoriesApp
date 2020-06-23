import React from 'react'
import styled from 'styled-components'

const ActiveContributes = styled.div``

interface ListActiveContributesPropsType {
    activeContibutes: any
}
export const ListActiveContributes: React.FC<ListActiveContributesPropsType> = ({
    activeContibutes,
}) => {
    return <ActiveContributes>{activeContibutes}</ActiveContributes>
}
