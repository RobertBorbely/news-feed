import json from '../data/apps_test_v1.json'
import { News } from '../../types'

export const getNews = (): Promise<News[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(json.items), 500)
  })
}