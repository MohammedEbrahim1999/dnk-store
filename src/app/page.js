import React from 'react';
import Main from './Home Component/Main/Main.jsx';
import Sale from './Home Component/Sale/Sale.jsx';
import Best from './Home Component/Best/Best.jsx';
import Special from './Home Component/Special/Special';
import Latest from './Home Component/Latest/Latest';
import Products from './Home Component/Products/Products';
const Home = () => {
  return (
    <>
      
      <Main />
      <Latest />
      <Products />
      <Special />
      <Best />
      <Sale />
    </>
  )
}

export default Home
