import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const Container = styled(LinearGradient).attrs({
  colors: ['#d90026', '#ff9300'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  flex: 1;
`;

export default Container;
