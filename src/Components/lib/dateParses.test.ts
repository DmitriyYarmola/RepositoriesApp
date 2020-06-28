import React from 'react'
import { dateParser } from './dateParser'

test('function date Parser', () => {
    const date = '2020-06-28T08:19:46Z'
    expect(dateParser(date)).toBe('2020-06-28')
})
