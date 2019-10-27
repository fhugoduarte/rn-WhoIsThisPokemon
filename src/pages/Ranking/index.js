import React from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Container,
  HeaderContainer,
  Title,
  Content,
  RankingList,
  Card,
  Avatar,
  InfoContainer,
  Name,
  Score,
} from './styles';

function Ranking() {
  const ranking = useSelector(store => store.ranking.data);

  return (
    <Container>
      <HeaderContainer>
        <Title />
      </HeaderContainer>

      <Content>
        <RankingList
          data={ranking}
          extraData={ranking}
          keyExtractor={item => `ranking-${item.name}-${item.score}`}
          renderItem={({item, index}) => (
            <Card>
              <Avatar
                source={{uri: `https://api.adorable.io/avatars/${index}`}}
              />

              <InfoContainer>
                <Name>{item.name}</Name>

                <Score>{`Pontos: ${item.score}`}</Score>
              </InfoContainer>
            </Card>
          )}
        />
      </Content>
    </Container>
  );
}

Ranking.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name="md-stats" size={30} color={tintColor} />
  ),
};

export default Ranking;
