import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import ErrorImg from '../../UI/Img/Erorrs/error.svg'
import { ErrorsSelectors, ErrorsActions } from './Model'

const opacity = keyframes`
    0% {
        opacity: 0;
    }
    5% {
        opacity: .5
    }
    10% {
        opacity: 1;
    }
    30% {
        opacity: 1;
    }
    50% {
        opacity: 1;
    }
    70% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    95% {
        opacity: .5;
    }
    100% {
        opacity: 0;
    }
`
const ErrorItem = styled.div`
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 0);
    width: auto;
    height: 50px;
    background: white;
    color: black;
    border: 1px solid black;
    display: grid;  
    grid-template-columns: max-content max-content;
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
    animation: ${opacity} 8s linear;
`

const Img = styled.img`
    width: 20px;
    height: 20px;
`
const Content = styled.div`
    margin-left: 10px;
`
const ImgWrapped = styled.div``

export const Error = (): React.ReactElement => {
    const textError = useSelector(ErrorsSelectors.textErorr)
    const dispatch = useDispatch()
    setTimeout(() => {
        dispatch(ErrorsActions.setError({ error: false, textError: '' }))
    }, 8000)
    return (
        <ErrorItem>
            <ImgWrapped>
                <Img src={ErrorImg} />
            </ImgWrapped>
            <Content>{textError}</Content>
        </ErrorItem>
    )
}
