import React from 'react'
import styled from 'styled-components'
import AvatarImg from '../../Img/User/user.svg'
import { Link } from '../Link'

const Owner = styled.div`
    display: grid;
    grid-template-columns: max-content max-content max-content;
    align-items: center;
`
const WrappedImg = styled.div``
const OwnerAvatar = styled.img`
    border-radius: 10px;
    width: 40px;
    height: 40px;
`
const OwnerNickName = styled(Link)`
    display: block;
    text-transform: none;
    text-decoration: none;
    margin-left: 10px;
    color: inherit;
`
const Span = styled.span`
    font-weight: 800;
    font-size: 16px;
    margin-right: 5px;
`
interface OwnerInfoPropsType {
    avatar: string
    nickName: string
    link: string
}
export const OwnerInfo: React.FC<OwnerInfoPropsType> = ({ avatar, nickName, link }) => {
    return (
        <Owner>
            <Span>Owner: </Span>
            <WrappedImg>
                <OwnerAvatar src={avatar ? avatar : AvatarImg} />
            </WrappedImg>
            <OwnerNickName href={link} target="_blank">
                {nickName}
            </OwnerNickName>
        </Owner>
    )
}
