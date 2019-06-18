import React, { useState, useEffect, useRef } from "react";

import {
  Container,
  Logo,
  Title,
  Pokemon,
  Content,
  Footer,
  ButtonContainer,
  Button,
  ButtonText,
  Input
} from "./styles";

export default function main() {
  const [pokemon, setPokemon] = useState(null);
  const [pokeName, setPokeName] = useState("");
  const [showPokemon, setShowPokemon] = useState(false);
  const pokeImage = useRef(null);

  async function getPokemon() {
    setShowPokemon(false);
    const randomPokeNumber = Math.round(Math.random() * (151 - 1) + 1);
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randomPokeNumber}`,
      {
        method: "GET"
      }
    );
    const responseJSON = await response.json();
    console.log(responseJSON);
    setPokemon(responseJSON);
  }

  function validatePokeName() {
    if (pokeName.toUpperCase() == pokemon.name.toUpperCase())
      console.warn(`ACERTOU`);
    else console.warn(`ERROU`, pokemon.name.toUpperCase());
    setShowPokemon(true);
  }

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <Container>
      <Content>
        <Title />
        <Logo />
        <Pokemon
          showPokemon={showPokemon}
          source={{ uri: !!pokemon ? pokemon.sprites.front_default : "" }}
        />
      </Content>
      <Footer>
        <Input onChangeText={setPokeName} />
        <ButtonContainer>
          <Button onPress={validatePokeName}>
            <ButtonText>ENVIAR</ButtonText>
          </Button>
          <Button onPress={getPokemon}>
            <ButtonText>PULAR</ButtonText>
          </Button>
        </ButtonContainer>
      </Footer>
    </Container>
  );
}
