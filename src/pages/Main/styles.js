import styled from "styled-components/native";
import LinearGradient from "react-native-linear-gradient";
import {
  getStatusBarHeight,
  isIphoneX,
  getBottomSpace
} from "react-native-iphone-x-helper";

import PokemonLogo from "../../images/pokemon-logo.png";
import TitleImage from "../../images/title.png";

export const Container = styled(LinearGradient).attrs({
  colors: ["#d90026", "#ff9300"],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 }
})`
  flex: 1;
  padding-top: ${isIphoneX ? getStatusBarHeight() + 25 : 25};
  padding-bottom: ${isIphoneX ? getBottomSpace() + 25 : 25};
  padding-left: 20px;
  padding-right: 20px;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  flex: 0.2;
`;

export const Title = styled.Image.attrs({
  source: TitleImage,
  resizeMethod: "resize",
  resizeMode: "contain"
})`
  height: 50%;
`;

export const Logo = styled.Image.attrs({
  source: PokemonLogo,
  resizeMethod: "resize",
  resizeMode: "contain"
})`
  height: 50%;
`;

export const PokemonContainer = styled.View`
  flex: 0.4;
`;

export const Score = styled.Text`
  padding-top: 20px;
  font-weight: bold;
  font-size: 20px;
  color: yellow;
  align-self: center;
`;

export const Pokemon = styled.Image.attrs({
  resizeMethod: "resize",
  resizeMode: "contain"
})`
  width: 100%;
  height: 100%;
  ${props => !props.showPokemon && { "tint-color": "#222" }};
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: space-around;
  margin: 20px;
  flex: 0.4;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props => (props.correct ? "green" : "white")};
  width: 100%;
  align-items: center;
  padding: 10px 20px;
  margin: 5px 0px 0px 0px;
  border-radius: 15px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${props => (props.correct ? "white" : "red")};
  font-weight: bold;
`;
