import React, { useState } from "react"
import styled from "styled-components"
import { Image } from "react-native"

import { News as NewsType } from "../types"

const ImageContainer = styled(Image)`
  border-radius: 20px;
  margin-bottom: 10px;
  width: 100%;
  height: 300px;
`
/**
 * This component represent an image in the list. It will show the image if the 
 * provided url is valid.
 *
 * @param {NewsType} { id, url }
 */
const NewsImage = ({ id, url }: NewsType) => {
  const [error, setError] = useState(false)

  return !error ? (
    <ImageContainer
      testID={`image-card-${id}`}
      resizeMethod="resize"
      resizeMode="contain"
      onError={() => setError(true)}
      source={{
        uri: url,
      }}
    />
  ) : null
}

export default NewsImage
