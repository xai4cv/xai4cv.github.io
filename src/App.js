import React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";
import theme from './styles';

import Header from './components/Header';
import Home from './components/Home';
import Workshop from './components/Workshop';
import WorkshopSchedule from './components/WorkshopSchedule';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="App">
            <header className="App-header">
              <Header/>
            </header>

            <div>
              <Route path="/" exact component={Home} />
              <Route path="/workshop" exact component={Workshop} />
              <Route path="/workshop-schedule" exact component={WorkshopSchedule} />
              <Route path="/workshop/"><Redirect to="/workshop" /></Route>
              <Route path="/workshop-schedule/"><Redirect to="/workshop-schedule" /></Route>
            </div>

          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
