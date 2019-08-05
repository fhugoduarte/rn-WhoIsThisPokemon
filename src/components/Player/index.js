import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { Player } from "@react-native-community/audio-toolkit";

import { Container, SoundIcon } from "./styles";

const player = new Player(
  "http://23.237.126.42/soundfiles/gameboy-gbs/pokemon-red/02%20Opening%20%28part%202%29.mp3"
).play();

export default function CustomPlayer() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    player.playPause();
  }, [active]);

  return (
    <Container>
      <TouchableOpacity onPress={() => setActive(!active)}>
        <SoundIcon active={active} />
      </TouchableOpacity>
    </Container>
  );
}
