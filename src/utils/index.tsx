import { act } from '@testing-library/react-native'

// This function will flush all Promise, basicly it will allow use to wait
// for the axios mock
export const flushAllPromises = async () =>
  act(() => new Promise((resolve) => setImmediate(resolve)))
