import React from 'react'
import { render } from '@testing-library/react-native'

import EmptyList from '../EmptyList'

describe('EmptyList component', () => {
  it('should render the emptylist', () => {
    const { queryByText } = render(<EmptyList />)

    const text = queryByText(/news/gi)
    expect(text).toBeTruthy()
  })

  it('should render the emptylist with the given text', () => {
    const props = { error: 'Something happened!' }
    const { queryByText } = render(<EmptyList {...props} />)

    const text = queryByText(/happened/gi)
    expect(text).toBeTruthy()
  })
})
