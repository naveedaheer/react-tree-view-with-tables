import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomTreeView from './components/customTreeView/customTreeView';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function App() {
  return (

    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <Container maxWidth="md">
          <CustomTreeView />
        </Container>
      </div>
    </React.Fragment>

  );
}

export default App;
