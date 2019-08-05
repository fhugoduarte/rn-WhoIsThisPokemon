import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import { Container, SoundIcon } from "./styles";

export default function Player() {
  const [active, setActive] = useState(true);

  return (
    <Container>
      <TouchableOpacity onPress={() => setActive(!active)}>
        <SoundIcon active={active} />
      </TouchableOpacity>
    </Container>
  );
}
