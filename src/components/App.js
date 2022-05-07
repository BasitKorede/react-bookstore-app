import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header/Header';
import Books from './books/Books';
import Categories from './categories/Categories';

const App = () => (
  <Router >
    <Header />
    <Routes>
      <Route path="/" exact component={Books} />
      <Route path="/categories" exact component={Categories} />
    </Routes>
  </Router>
);

export default App;