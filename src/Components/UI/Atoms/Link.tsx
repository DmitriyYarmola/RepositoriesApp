import React from 'react'

interface LinkPropsType {
    children: React.ReactNode
    href: string
    target: string
    className?: string
}
export const Link: React.FC<LinkPropsType> = ({ children, href, target, className }) => {
    return (
        <a href={href} target={target} className={className}>
            {children}
        </a>
    )
}
