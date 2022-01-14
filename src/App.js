import React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import theme from './styles';

import Header from './components/Header';
import Home from './components/Home';
import Sim2Real from './components/Workshop';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router basename={process.env.PUBLIC_URL + '/'}>
          <div className="App">
            <header className="App-header">
              <Header/>
            </header>

            <div>
              <Route path="/" exact component={Home} />
              <Route path="/workshop" component={Sim2Real} />
            </div>

          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
