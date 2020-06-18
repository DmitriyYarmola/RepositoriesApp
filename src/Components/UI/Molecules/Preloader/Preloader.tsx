import React from 'react'
import './style.sass'

export const Preloader = () => {
    return (
        <div className="loader-layout">
            <div className="lds-spinner">
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    )
}
