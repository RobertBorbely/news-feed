import axios from 'axios'

import json from '../data/apps_test_v1.json'
import { News } from '../../types'

export const getNews = async (): Promise<News[]> => {
  const result = await axios.get(
    'https://mb.appslab.services/hw/apps_test_v1.json'
  )
  return result.data.items
}

export const getNewsMock = (): Promise<News[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(json.items), 500)
  })
}
