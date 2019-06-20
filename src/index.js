import React, { Fragment } from "react";
import { StatusBar } from "react-native";

import Main from "./pages/Main";

export default function app() {
  return (
    <Fragment>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#d90026"
      />
      <Main />
    </Fragment>
  );
}
