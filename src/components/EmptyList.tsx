import React from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components'

const EmptyListContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`

interface Props {
  error?: string
}

/**
 * Represent the and empty list or can display a load error for example if
 * **error** props is provided.
 *
 * @param {Props} { error?: string }
 */
const EmptyList = ({ error }: Props) => (
  <EmptyListContainer>
    {error ? (
      <Text>{error}</Text>
    ) : (
      <Text>There is no news right now! Try to refresh the page later.</Text>
    )}
  </EmptyListContainer>
)

export default EmptyList
