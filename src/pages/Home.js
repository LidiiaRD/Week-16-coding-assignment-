import React from 'react';
import Intro from '../components/intro/Intro';
import About from '../components/about/About';
import ProductList from '../components/productList/ProductList';
import Contact from '../components/contact/Contact';

const Home = () => {
   return (
      <div className='home'>
         <div className="container">
            <Intro />
            <About />
            <ProductList />
            <Contact />
         </div>
      </div>
   );
};

export default Home;