import React from 'react'
import { render, waitFor } from '@testing-library/react-native'

import NewsImage from '../NewsImage'

describe('NewsImage component', () => {
  it('should render the image', async () => {
    const props ={ id: '1', type: 'image', url: "https://apps.no/static/bba51bd7c754a3139727c67b9e815dbc/187c5/iphonex-large.png"}
    const { queryByTestId } = render(<NewsImage { ...props }/>)

    await waitFor(() => expect(queryByTestId(`image-card-1`)).toBeTruthy());
  })
})
