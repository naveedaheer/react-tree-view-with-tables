import React from 'react';
import './App.css';
import CustomTreeView from './components/customTreeView/customTreeView';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function App() {
  return (

    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <Container maxWidth="xl">
          <CustomTreeView />
        </Container>
      </div>
    </React.Fragment>

  );
}

export default App;
