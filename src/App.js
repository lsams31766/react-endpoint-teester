import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Segment, Grid} from 'semantic-ui-react'
import MyHeader from './components/my_header'
import RunScript from './components/run_script'
import ConfigResponse from './components/config_response'
import TestEndPoint from './components/test_endpoint'

function App() {
  return (
    <Segment>
      <MyHeader title={'Endpoint Tester'} author="Larry Samuels"/> 
      <Grid columns={2}>
          <Grid.Column>
            <RunScript />
              <ConfigResponse />     
          </Grid.Column>
          <Grid.Column>
            <TestEndPoint />
          </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default App;
