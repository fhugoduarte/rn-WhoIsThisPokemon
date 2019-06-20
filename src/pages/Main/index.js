import React, { useState, useEffect, useRef } from "react";
import { shuffle, map } from "lodash";

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
  ButtonText
} from "./styles";

export default function main() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [pokemon, setPokemon] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [sortedPokemons, setSortedPokemons] = useState([]);
  const [score, setScore] = useState(0);

  async function sortPokemons(idSorted) {
    let pokeIds = [idSorted];
    while (pokeIds.length <= 3) {
      const randomPokeNumber = Math.round(Math.random() * (151 - 1) + 1);
      const exist = pokeIds.includes(randomPokeNumber);
      if (!exist) pokeIds.push(randomPokeNumber);
    }
    return shuffle(pokeIds);
  }

  async function getAllPokemons() {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=151",
      {
        method: "GET"
      }
    );
    const responseJSON = await response.json();
    await setPokemons(responseJSON.results);
    getPokemon();
  }

  async function getPokemon() {
    setAnswer(null);
    setLoading(true);
    const randomPokeNumber = Math.round(Math.random() * (151 - 1) + 1);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomPokeNumber}`,
      {
        method: "GET"
      }
    );
    const responseJSON = await response.json();
    const sortedPokemons = await sortPokemons(responseJSON.id);
    setSortedPokemons(sortedPokemons);
    setPokemon(responseJSON);
    setLoading(false);
  }

  function validateAnswer(pokeSelected) {
    setAnswer(pokeSelected);
    if (pokeSelected === pokemon.id) setScore(score + 10);
    else setScore(0);
    setTimeout(() => getPokemon(), 2000);
  }

  useEffect(() => {
    getAllPokemons();
  }, []);

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
            source={{ uri: pokemon.sprites.front_default }}
          />
        )}
      </PokemonContainer>
      <Footer>
        {map(sortedPokemons, pokemonId => {
          const correct = answer && pokemonId === pokemon.id;
          return (
            <Button
              key={pokemonId}
              correct={correct}
              disabled={!!answer && !loading}
              onPress={() => validateAnswer(pokemonId)}
            >
              <ButtonText correct={correct}>
                {pokemons[pokemonId - 1].name.toUpperCase()}
              </ButtonText>
            </Button>
          );
        })}
      </Footer>
    </Container>
  );
}
