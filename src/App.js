import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './Main';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router } from 'react-router-dom';



const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Main/>
        </Provider>
      </Router>
    );
  }
}

export default App;
