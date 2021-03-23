import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Portfolio from './containers/Portfolio/Portfolio';

class App extends Component {
  render() {
    return (
      <Layout>
        <Portfolio />
      </Layout>
    )
  }
}

export default App;
