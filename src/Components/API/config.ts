import axios from 'axios'

export enum ResponseCode {
    OK = 200,
    NoFound = 404,
}

export const instance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
})
