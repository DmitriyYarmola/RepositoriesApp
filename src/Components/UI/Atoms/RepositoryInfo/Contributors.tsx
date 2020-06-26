import React from 'react'
import styled from 'styled-components'
import { UserType } from '../../../API'

const Contributor = styled.div``
const Span = styled.span`
    font-weight: 800;
    font-size: 16px;
`
interface ActiveContributesPropsType {
    activeContibutes: UserType[]
}
export const Contributors: React.FC<ActiveContributesPropsType> = ({
    activeContibutes,
}) => {
    const contributorsArray: string[] = []
    activeContibutes.forEach((contribute) => contributorsArray.push(contribute.login))

    return (
        <Contributor>
            <Span>Active Contributors: </Span>
            {contributorsArray.length > 0
                ? contributorsArray.join(', ')
                : 'This repository haven`t contributors'}
        </Contributor>
    )
}
