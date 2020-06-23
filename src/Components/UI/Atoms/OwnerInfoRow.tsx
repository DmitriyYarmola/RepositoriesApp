import React from 'react'
import styled from 'styled-components'

const OwnerInfo = styled.div``
const WrappedImg = styled.div``
const OwnerAvatar = styled.img``
const OwnerNickName = styled.span``
interface OwnerInfoPropsType {
    avatar: string
    nickName: string
}
export const OwnerInfoRow: React.FC<OwnerInfoPropsType> = ({ avatar, nickName }) => {
    return (
        <OwnerInfo>
            <WrappedImg>
                <OwnerAvatar src={avatar} />
            </WrappedImg>
            <OwnerNickName>{nickName}</OwnerNickName>
        </OwnerInfo>
    )
}
