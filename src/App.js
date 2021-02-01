import React, {Component} from 'react';
import './App.css';

import { Provider } from 'react-redux';
import store from './flux/store'

import Prediction from './components/Prediction';
import PredictForm from './components/PredictForm';
import Header from './components/layout/Header';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Header />
        <div className="container">
          <div className="content-column"><PredictForm /></div>
          <div className="content-column"><Prediction /></div>
        </div> 
      </Provider>
    );
  }
  
}

export default App;
