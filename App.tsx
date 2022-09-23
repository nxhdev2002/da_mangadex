import React from "react";
import codePush from "react-native-code-push";
import store from "./src/features/store";
import { Provider } from 'react-redux'
import { Route } from "./src/navigators/main/navigation";
let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };


const App = () => (
  <Provider store={store} >
      <Route />
  </Provider>
)

export default codePush(codePushOptions)(App);