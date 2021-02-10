import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './flux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Container} from 'react-bootstrap'


import Prediction from './components/Prediction';
import PredictForm from './components/PredictForm';
import Home from './components/Home';
import BootNavBar from './components/layout/BootNavBar';
import TwitterStream from './components/TwitterStream';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container fluid style={styles.containerStyle}>

            <BootNavBar />


            <div style={styles.contentStyle}>
              <Switch>
                <Route path="/predictions">
                  <Container fluid><Prediction /></Container>
                </Route>

                <Route path="/tweets">
                  <Container fluid><TwitterStream /></Container>
                </Route>

                <Route path="/newprediction">
                  <Container><PredictForm /></Container>
                </Route>

                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
            
          </Container> 
        </Router>
      </Provider>
    );
  }
  
}

//  #343a40

const styles = {
  containerStyle: {
      paddingLeft: 0,
      paddingRight: 0,
      backgroundColor: '#343a40',
      minHeight: '100vh',
  },

  contentStyle: {
    paddingTop: '3vh',
    paddingBottom: '1vh'
  }
}

export default App;
