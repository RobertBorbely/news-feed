import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native'

import { News as NewsType } from '../types'
import { mainFontColor, mutedFontColor } from '../constant'
import CardContainer from './CardContainer'

const Title = styled(Text)<{ highlighted?: string }>`
  font-size: 28px;
  margin-bottom: 15px;
  ${(props) =>
    props.highlighted
      ? `color: #fff; text-align: center; font-weight: 700;`
      : `color: ${mainFontColor}; font-weight: 300;`};
`

const Content = styled(Text)<{ lastModified?: string; highlighted?: string }>`
  font-size: 16px;
  font-weight: 300;
  ${(props) =>
    props.lastModified ? `margin-bottom: 15px` : `margin-bottom: 0`};
  ${(props) =>
    props.highlighted
      ? `color: #fff; text-align: center;`
      : `color: ${mainFontColor};`};
`

const LastModified = styled(Text)<{ highlighted?: string }>`
  font-size: 12px;
  text-align: right;
  ${(props) =>
    props.highlighted
      ? `color: #fcd5b5; text-align: center;`
      : `color: ${mutedFontColor};`};
`

interface NewsComponent extends NewsType {
  highlighted?: string,
  onPress: (event: GestureResponderEvent) => void,
}

/**
 * This component represents an article in the list. It will display a title, a
 * subtitle or a modification date if these are provided. It can handle the 
 * onPress event.
 *
 * @param {NewsComponent} {
 *   id: string,
 *   highlighted?: string,
 *   title?: string,
 *   subtitle?: string,
 *   lastModified?: string,
 *   onPress: (event: GestureResponderEvent) => void,
 * }
 */
const News = ({
  id,
  highlighted,
  title,
  subtitle,
  lastModified,
  onPress,
}: NewsComponent) => (
  <CardContainer testID={`news-card-container-${id}`} highlighted={highlighted}>
    <TouchableOpacity testID={`news-card-${id}`} onPress={onPress}>
      {title && <Title highlighted={highlighted}>{title}</Title>}
      {subtitle && (
        <Content highlighted={highlighted} lastModified={lastModified}>
          {subtitle}
        </Content>
      )}
      {lastModified && (
        <LastModified testID={'news-lastModified'} highlighted={highlighted}>
          {moment(lastModified).fromNow()}
        </LastModified>
      )}
    </TouchableOpacity>
  </CardContainer>
)

export default News
