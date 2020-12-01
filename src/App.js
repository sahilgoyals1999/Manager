import React,{ Component } from 'react'
import { Text,View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import firebase from 'firebase'
import reducers from './reducers'
import LoginForm from './components/LoginForm'
import Router from './Router'

class App extends Component {
  UNSAFE_componentWillMount() {
    const firebaseConfig = {
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: ''
  };
  firebase.initializeApp(firebaseConfig);
  }
	render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		return (
        <Provider store={store}>
          <Router />
        </Provider>
		)
	}
}

export default App;
