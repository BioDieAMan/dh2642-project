import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import firebase from "./config/firebaseConfig"

const rrfConfig = {
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch
}
firebase.database().ref("top").once("value").then(() => ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
));

