import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout';

import BooksList from './containers/BooksList/BooksList';


class App extends Component {
  
  render() {
  return (
      <Layout>
          <BooksList />
      </Layout>
    )
  }
  
}

export default App;
