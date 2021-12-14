import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout';
import withRouter from './hoc/WithRouter/WithRouter';
import { Navigate, Route, Routes } from 'react-router-dom'

import BooksList from './containers/BooksList/BooksList';
import Book from './containers/Book/Book';
import ElementWrapper from './hoc/Wrapper/Wrapper';


class App extends Component {
  
  render() {
  const routes = (
      <Routes>
          <Route path="/book/:id" element={<ElementWrapper {...{Component: Book}} />} />
          <Route path="/" exact element={<BooksList />} />
          <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    )
  return (
      <Layout>
          {routes}
      </Layout>
    )
  }
  
}

export default withRouter(App);
