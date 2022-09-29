import React from "react";
import codePush from "react-native-code-push";
import store from "./src/features/store";
import { Provider } from 'react-redux'
import { Route } from "./src/navigators/main/navigation";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };


const App = () => (
  <Provider store={store} >
    <SafeAreaProvider>
        <Route />
    </SafeAreaProvider>
  </Provider>
)

export default codePush(codePushOptions)(App);