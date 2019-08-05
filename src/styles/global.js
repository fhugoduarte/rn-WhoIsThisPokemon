import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";
import {
  getStatusBarHeight,
  isIphoneX,
  getBottomSpace
} from "react-native-iphone-x-helper";

export const Container = styled(LinearGradient).attrs({
  colors: ["#d90026", "#ff9300"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 }
})`
  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: ${isIphoneX ? getStatusBarHeight() + 25 : 25};
  padding-bottom: ${isIphoneX ? getBottomSpace() + 25 : 25};
`;
