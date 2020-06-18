import React, { useEffect } from 'react'
import { RepositoriesAPI } from '../../API/api'

export const Main = () => {
    useEffect(() => {
        RepositoriesAPI.getRepositories().then((data) => console.log(data))
    }, [])
    return <div>...</div>
}
