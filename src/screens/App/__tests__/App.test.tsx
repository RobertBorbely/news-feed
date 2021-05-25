import React from 'react'
import { fireEvent, render, waitFor } from '@testing-library/react-native'

import App from '../App'

describe('App screen', () => {
  it('should render the news list', () => {
    const { queryByTestId } = render(<App/>)
  })
})