import React from 'react';
import SearchForm from './components/SearchForm';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { civilizationsReducer as reducer } from './reducers/civilizationsReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Age of Empires Civilizations</h1>
        <SearchForm />
      </div>
    </Provider>
  );
}

export default App;
 