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
`;

export const Content = styled.View`
  align-items: center;
`;

export const Title = styled.Image.attrs({
  source: TitleImage,
  resizeMethod: "resize",
  resizeMode: "contain"
})`
  width: 100%;
  min-height: 60px;
`;

export const Logo = styled.Image.attrs({
  source: PokemonLogo,
  resizeMethod: "resize",
  resizeMode: "contain"
})`
  width: 60%;
`;

export const Pokemon = styled.Image.attrs({
  resizeMethod: "resize",
  resizeMode: "contain"
})`
  width: 100%;
  height: 300px;
  ${props => !props.showPokemon && { "tint-color": "#222" }};
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: space-around;
  flex: 1;
`;

export const Input = styled.TextInput.attrs({
  placeholder: "Nome do Pokémon",
  autoCorrect: false
})`
  font-size: 20px;
  padding: 20px;
  border-radius: 15px;
  width: 80%;
  background-color: white;
`;

export const ButtonContainer = styled.View`
  margin: 20px 0px;
  width: 100%;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: white;
  width: 80%;
  align-items: center;
  padding: 15px 20px;
  margin: 5px 0px 0px 0px;
  border-radius: 15px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
  color: red;
  font-weight: bold;
`;
