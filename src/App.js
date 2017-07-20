import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppContainer from './container/AppContainer';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
       <AppContainer/>
      </Provider>
    );
  }
}

export default App;
