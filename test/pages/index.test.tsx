import React from 'react'
import { render, fireEvent } from '../testUtils'
import { Home } from '../../pages'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })
})
