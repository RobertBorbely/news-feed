import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { SafeAreaView, FlatList } from 'react-native'
import { openBrowserAsync } from 'expo-web-browser'

import { backgroundColor } from '../../constant'
import { getNews } from '../../services/api'
import News from '../../components/News'
import { News as NewsType } from '../../types'
import Ad from '../../components/Ad'
import NewsImage from '../../components/NewsImage'
import EmptyList from '../../components/EmptyList'

const Container = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight || 0};
  background-color: ${backgroundColor};
`

const App = () => {
  const [news, setNews] = useState<NewsType[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchNews()
  }, [])

  const fetchNews = async () => {
    try {
      setLoading(true)
      const result = await getNews()
      setNews(result)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      setError('Something went wrong! :(')
    }
  }

  const onItemPress = (url?: string) => async () =>
    url && (await openBrowserAsync(encodeURI(url)))

  const renderItem = ({ item }: { item: NewsType }) => {
    switch (item.type) {
      case 'news':
        return (
          <News
            onPress={onItemPress(item.url)}
            {...{ ...item, highlighted: item.style }}
          />
        )
      case 'ad':
        return (
          <Ad
            onPress={onItemPress(item.url)}
            {...{ ...item, highlighted: item.style }}
          />
        )
      case 'image':
        return <NewsImage {...{ ...item, highlighted: item.style }} />
      default:
        return null
    }
  }

  return (
    <Container>
      <StatusBar style="auto" />
      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item: NewsType) => item.id}
        onRefresh={fetchNews}
        refreshing={loading}
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ padding: 10 }}
        ListEmptyComponent={<EmptyList error={error} />}
      />
    </Container>
  )
}

export default App
