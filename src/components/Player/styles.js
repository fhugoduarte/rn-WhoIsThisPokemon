import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

export const Container = styled.SafeAreaView`
  margin-right: 20px;
  align-items: flex-end;
`;

export const SoundIcon = styled(Icon).attrs(props => ({
  name: props.active ? 'md-volume-high' : 'md-volume-off',
  size: 30,
  color: 'white',
}))``;
