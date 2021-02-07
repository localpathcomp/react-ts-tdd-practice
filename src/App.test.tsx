import React from 'react'
import { render } from '@testing-library/react'
import App, { label } from './App'

test('renders Hello React', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/Hello React/i)
    expect(linkElement).toBeInTheDocument()
})
test('generates a label', () => {
    const result = label()
    expect(result).toEqual('Hello React')
})
