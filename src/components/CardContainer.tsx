import { View } from "react-native";
import styled from "styled-components";

import { accentColor, cardBackgroundColor } from "../constant";

const CardContainer = styled(View)<{ highlighted?: string }>`
  padding: 25px 20px;
  border-radius: 20px;
  margin-bottom: 10px;
  ${(props) =>
    props.highlighted
      ? `background-color: ${accentColor};`
      : `background-color: ${cardBackgroundColor};`};
`

export default CardContainer