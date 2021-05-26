import React from 'react'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { render, waitFor } from '@testing-library/react-native'

import App from '../App'
import { flushAllPromises } from '../../../utils'

const mock = new MockAdapter(axios)

describe('App screen', () => {
  afterEach(() => mock.reset())

  it('should render the news list', async () => {
    mock.onGet('https://mb.appslab.services/hw/apps_test_v1.json').reply(200, {
      items: [
        {
          id: '9JUVKZBsGXUWL3uZ7UXm',
          type: 'news',
          style: 'breaking',
          title: 'Sonya Enterprise',
          subtitle:
            'Vi utvikler et sett med nyttige og robuste spesial-applikasjoner for bruk internt i bedriften',
          lastModified: '2021-03-08T05:25:20Z',
          url: 'http://sonya.com',
        },
        {
          id: '9JUVKZBsGXUWL3uZ7UXx',
          type: 'ad',
          title: 'Sonya Enterprise',
          url: 'http://sonya.com',
        },
        { 
          "id": "nlCmqNZBsG4bm3A9i8dmlE",
          "type": "image",
          "url": "https://apps.no/static/bba51bd7c754a3139727c67b9e815dbc/187c5/iphonex-large.png"
        },
        { 
          "id": "nlCmqNZBsG4bm3A9i8dmlY",
          "type": "product",
          "url": "https://apps.no/static/bba51bd7c754a3139727c67b9e815dbc/187c5/iphonex-large_none.png"
        }
      ],
    })
    const { getAllByText, queryByTestId } = render(<App />)

    await flushAllPromises()

    expect(getAllByText(/sonya/gi).length).toBe(2)
    expect(queryByTestId('image-card-nlCmqNZBsG4bm3A9i8dmlE')).toBeTruthy()
  })

  it('should render error on timeout', async () => {
    mock.onGet('https://mb.appslab.services/hw/apps_test_v1.json').timeout()
    const { queryByText } = render(<App />)

    await waitFor(() =>
      expect(queryByText('Something went wrong! :(')).toBeTruthy()
    )
  })

  it('should render empty list text when list is empty', async () => {
    mock.onGet('https://mb.appslab.services/hw/apps_test_v1.json').reply(200, {})
    const { queryByText } = render(<App />)

    await flushAllPromises()
    expect(queryByText('There is no news right now! Try to refresh the page later.')).toBeTruthy()
  })
})
