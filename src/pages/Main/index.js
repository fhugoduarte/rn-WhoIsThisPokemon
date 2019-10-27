import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {shuffle, map} from 'lodash';

import {addNewRanking} from '../../store/modules/ranking/actions';

import {
  Container,
  Logo,
  Title,
  PokemonContainer,
  Score,
  Pokemon,
  HeaderContainer,
  Footer,
  Button,
  ButtonText,
  RecordModal,
  ModalContainer,
  ModalTitle,
  PlayerNameInput,
  SubmitButton,
  SubmitButtonText,
} from './styles';

function Main() {
  const dispatch = useDispatch();
  const ranking = useSelector(store => store.ranking.data);

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [sortedPokemons, setSortedPokemons] = useState([]);
  const [score, setScore] = useState(0);
  const [record, setRecord] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [showModal, setShowModal] = useState(false);

  async function sortPokemons(idSorted) {
    let pokeIds = [idSorted];
    while (pokeIds.length <= 3) {
      const randomPokeNumber = Math.round(Math.random() * (151 - 1) + 1);
      const exist = pokeIds.includes(randomPokeNumber);
      if (!exist) {
        pokeIds.push(randomPokeNumber);
      }
    }
    return shuffle(pokeIds);
  }

  async function getPokemon() {
    setAnswer(null);
    setLoading(true);
    const randomPokeNumber = Math.round(Math.random() * (151 - 1) + 1);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomPokeNumber}`,
      {
        method: 'GET',
      },
    );
    const responseJSON = await response.json();
    const shuffled = await sortPokemons(responseJSON.id);

    setSortedPokemons(shuffled);
    setPokemon(responseJSON);
    setLoading(false);
  }

  function validateAnswer(pokeSelected) {
    setAnswer(pokeSelected);
    if (pokeSelected === pokemon.id) {
      setScore(score + 10);
    } else {
      if (record) {
        setShowModal(true);
      } else {
        setScore(0);
      }
    }
    setTimeout(() => getPokemon(), 2000);
  }

  useEffect(() => {
    async function getAllPokemons() {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=151',
        {
          method: 'GET',
        },
      );
      const responseJSON = await response.json();
      await setPokemons(responseJSON.results);
      getPokemon();
    }

    getAllPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fullRanking = ranking.length < 10;
    const lastScore = ranking[ranking.length - 1].score;

    const isRecord = (fullRanking && score > 0) || score > lastScore;

    if (isRecord && !record) {
      setRecord(true);
    }
  }, [score, ranking, record]);

  function onSubmit() {
    if (!playerName.length) {
      return;
    } else {
      dispatch(addNewRanking({name: playerName, score}));
      setRecord(false);
      setScore(0);
      setShowModal(false);
      setPlayerName('');
    }
  }

  return (
    <Container>
      <HeaderContainer>
        <Title />

        <Logo />
      </HeaderContainer>

      <PokemonContainer>
        <Score>Pontos: {score}</Score>

        {!loading && pokemon && (
          <Pokemon
            showPokemon={!!answer}
            source={{uri: pokemon.sprites.front_default}}
          />
        )}
      </PokemonContainer>

      <Score>{record ? 'Parabéns isso é um recorde!' : ''}</Score>

      <Footer>
        {map(sortedPokemons, pokemonId => {
          const correct = answer && pokemonId === pokemon.id;
          return (
            <Button
              key={pokemonId}
              correct={correct}
              disabled={!!answer && !loading}
              onPress={() => validateAnswer(pokemonId)}>
              <ButtonText correct={correct}>
                {pokemons[pokemonId - 1].name.toUpperCase()}
              </ButtonText>
            </Button>
          );
        })}
      </Footer>

      <RecordModal isVisible={showModal}>
        <ModalContainer>
          <ModalTitle>NOVO RECORD!</ModalTitle>

          <PlayerNameInput
            placeholder="Digite seu nome..."
            maxLength={10}
            autoCorrect={false}
            value={playerName}
            onChangeText={setPlayerName}
            autoFocus
            onEndEditing={onSubmit}
          />

          <SubmitButton onPress={onSubmit}>
            <SubmitButtonText>ENVIAR</SubmitButtonText>
          </SubmitButton>
        </ModalContainer>
      </RecordModal>
    </Container>
  );
}

Main.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name="md-home" size={30} color={tintColor} />
  ),
};

export default Main;
