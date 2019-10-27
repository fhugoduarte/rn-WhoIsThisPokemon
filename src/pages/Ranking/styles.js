import styled from 'styled-components/native';
import {FlatList} from 'react-native';

import ranking from '../../images/ranking.png';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  flex: 0.1;
`;

export const Title = styled.Image.attrs({
  source: ranking,
  resizeMethod: 'resize',
  resizeMode: 'contain',
})`
  height: 100%;
`;

export const Content = styled.View`
  flex: 0.9;
`;

export const RankingList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 0px 20px;
`;

export const Card = styled.View`
  align-self: stretch;
  padding: 10px 15px;
  background: #ffcb05;
  border-radius: 15px;
  border: 2px solid;
  border-color: #2a75bb;
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  border-width: 2px;
  border-color: #2a75bb;
`;

export const InfoContainer = styled.View`
  padding: 0px 20px;
`;

export const Name = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #2a75bb;
`;

export const Score = styled(Name)`
  font-size: 18px;
`;
