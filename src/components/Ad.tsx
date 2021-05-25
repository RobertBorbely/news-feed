import React from 'react'
import styled from 'styled-components'
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native'

import { News as NewsType } from '../types'
import { adFontColor, mutedFontColor } from '../constant'
import CardContainer from './CardContainer'

const StyledTouchableOpacity = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`
const Title = styled(Text)`
  font-size: 28px;
  font-weight: 300;
  color: ${adFontColor};
  line-height: 30px;
`
const MutedText = styled(Text)`
  font-size: 16px;
  font-weight: 300;
  margin-right: 20px;
  color: ${mutedFontColor};
  line-height: 30px;
`
interface Ad extends NewsType {
  highlighted?: string,
  onPress: (event: GestureResponderEvent) => void
}

const Ad = ({ id, title, onPress }: Ad) => (
  <CardContainer>
    <StyledTouchableOpacity testID={`ad-card-${id}`} onPress={onPress}>
      <MutedText>Ad</MutedText>
      {title && <Title>{title}</Title>}
    </StyledTouchableOpacity>
  </CardContainer>
)

export default Ad
