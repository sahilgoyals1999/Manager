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
    apiKey: 'AIzaSyDe237AQnF8XRWXjs73mKlMYmJ2uW-FIms',
    authDomain: 'managers-118c8.firebaseapp.com',
    databaseURL: 'https://managers-118c8.firebaseio.com',
    projectId: 'managers-118c8',
    storageBucket: 'managers-118c8.appspot.com',
    messagingSenderId: '851048345290',
    appId: '1:851048345290:web:b2b7957f090004167b0e33'
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