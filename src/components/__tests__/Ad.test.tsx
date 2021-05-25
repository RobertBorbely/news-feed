import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'

import Ad from '../Ad'

describe('Ad component', () => {
  it('should render the ad', () => {
    const props = {
      id: '1',
      type: 'ad',
      title: 'Sonya news app',
      url: 'https://sonya.com',
      onPress: jest.fn()
    }
    const { queryByText } = render(<Ad {...props}/>)

    const title = queryByText(props.title)
    const ad = queryByText('Ad')

    expect(title).toBeTruthy()
    expect(ad).toBeTruthy()
  })

  it('should call onPress', () => {
    const props = {
      id: '1',
      type: 'ad',
      title: 'Sonya news app',
      url: 'https://sonya.com',
      onPress: jest.fn()
    }
    const { queryByTestId } = render(<Ad {...props}/>)
    const card = queryByTestId('ad-card-1')

    fireEvent.press(card)

    expect(props.onPress).toBeCalled()
    expect(props.onPress).toBeCalledTimes(1)
  })
})