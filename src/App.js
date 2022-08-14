import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Component } from 'react';
import { render } from '@testing-library/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';



class App extends Component {
  render(){
    return (
      <div className="wrapper">
        <Switch>

        </Switch>
      </div>
    );
  }
}

export default App;
