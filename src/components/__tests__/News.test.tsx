import React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import moment from 'moment'

import News from '../News'

describe('News component', () => {
  it('should render the news with everything', () => {
    const props = {
      id: "1",
      type: "news",
      title: "Sonya Enterprise",
      subtitle: "Vi utvikler et sett med nyttige og robuste spesial-applikasjoner for bruk internt i bedriften",
      lastModified: "2021-03-08T05:25:20Z",
      url: "http://sonya.com",
      onPress: jest.fn()
    }
    const { queryByText, queryByTestId } = render(<News {...props}/>)

    const title = queryByText(props.title)
    const subtitle = queryByText(props.subtitle)
    const lastModified = queryByTestId('news-lastModified')

    expect(title).toBeTruthy()
    expect(subtitle).toBeTruthy()
    expect(lastModified.children[0]).toBe(moment(props.lastModified).fromNow())
  })

  it('should not render the title', () => {
    const props = {
      id: "1",
      type: "news",
      title: "",
      subtitle: "Vi utvikler et sett med nyttige og robuste spesial-applikasjoner for bruk internt i bedriften",
      lastModified: "2021-03-08T05:25:20Z",
      url: "http://sonya.com",
      onPress: jest.fn()
    }
    const { queryByText, queryByTestId } = render(<News {...props}/>)

    const title = queryByText(props.title)
    const subtitle = queryByText(props.subtitle)
    const lastModified = queryByTestId('news-lastModified')

    expect(title).toBeFalsy()
    expect(subtitle).toBeTruthy()
    expect(lastModified.children[0]).toBe(moment(props.lastModified).fromNow())
  })

  it('should not render the title & subtitle', () => {
    const props = {
      id: "1",
      type: "news",
      title: "",
      subtitle: "",
      lastModified: "2021-03-08T05:25:20Z",
      url: "http://sonya.com",
      onPress: jest.fn()
    }
    const { queryByText, queryByTestId } = render(<News {...props}/>)

    const title = queryByText(props.title)
    const subtitle = queryByText(props.subtitle)
    const lastModified = queryByTestId('news-lastModified')

    expect(title).toBeFalsy()
    expect(subtitle).toBeFalsy()
    expect(lastModified.children[0]).toBe(moment(props.lastModified).fromNow())
  })

  it('should not render the title & lastModified', () => {
    const props = {
      id: "1",
      type: "news",
      title: "",
      subtitle: "Vi utvikler et sett med nyttige og robuste spesial-applikasjoner for bruk internt i bedriften",
      lastModified: "",
      url: "http://sonya.com",
      onPress: jest.fn()
    }
    const { queryByText, queryByTestId } = render(<News {...props}/>)

    const title = queryByText(props.title)
    const subtitle = queryByText(props.subtitle)
    const lastModified = queryByTestId('news-lastModified')

    expect(title).toBeFalsy()
    expect(subtitle).toBeTruthy()
    expect(lastModified).toBeFalsy()
  })

  it('should call onPress', () => {
    const props = {
      id: '1',
      type: 'news',
      title: 'Sonya news app',
      url: 'https://sonya.com',
      onPress: jest.fn()
    }
    const { queryByTestId } = render(<News {...props}/>)
    const card = queryByTestId('news-card-1')

    fireEvent.press(card)

    expect(props.onPress).toBeCalled()
    expect(props.onPress).toBeCalledTimes(1)
  })
})