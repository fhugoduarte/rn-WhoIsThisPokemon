import styled from 'styled-components/native';
import Modal from 'react-native-modal';

import PokemonLogo from '../../images/pokemon-logo.png';
import TitleImage from '../../images/title.png';

export const Container = styled.View`
  flex: 1;
`;

export const RecordModal = styled(Modal)`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const ModalContainer = styled.View`
  align-self: stretch;
  background: #ffcb05;
  border: 2px solid #2a75bb;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const ModalTitle = styled.Text`
  font-size: 22px;
  color: #2a75bb;
  font-weight: bold;
`;

export const PlayerNameInput = styled.TextInput.attrs({
  placeholderTextColor: '#ccc',
})`
  border: 2px solid #2a75bb;
  border-radius: 4px;
  align-self: stretch;
  background: #fff;
  margin: 20px 0px;
  padding: 15px;
  color: #2a75bb;
  font-size: 18px;d
`;

export const SubmitButton = styled.TouchableOpacity`
  background: #2a75bb;
  border-radius: 4px;
  padding: 10px 25px;
`;

export const SubmitButtonText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const HeaderContainer = styled.View`
  align-items: center;
  flex: 0.2;
`;

export const Title = styled.Image.attrs({
  source: TitleImage,
  resizeMethod: 'resize',
  resizeMode: 'contain',
})`
  height: 50%;
`;

export const Logo = styled.Image.attrs({
  source: PokemonLogo,
  resizeMethod: 'resize',
  resizeMode: 'contain',
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
  resizeMethod: 'resize',
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
  ${props => !props.showPokemon && {'tint-color': '#222'}};
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: space-around;
  margin: 20px;
  flex: 0.4;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props => (props.correct ? 'green' : '#ffcb05')};
  width: 100%;
  align-items: center;
  padding: 10px 20px;
  margin: 5px 0px 0px 0px;
  border-radius: 15px;
  border: 2px solid;
  border-color: ${props => (props.correct ? '#fff' : '#2a75bb')};
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${props => (props.correct ? '#fff' : '#2a75bb')};
  font-weight: bold;
`;
