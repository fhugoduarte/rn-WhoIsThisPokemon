import React, { Fragment } from "react";
import { StatusBar } from "react-native";

import { Container } from "./styles/global";
import Player from "./components/Player";
import Main from "./pages/Main";

export default function app() {
  return (
    <Fragment>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#d90026"
      />
      <Container>
        <Player />
        <Main />
      </Container>
    </Fragment>
  );
}
