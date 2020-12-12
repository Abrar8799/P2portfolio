import React from 'react';
import Slider from '../Carousel/Carousel.js'
import Jumbo from '../jumbotron/Jumbotron.js';
import Footer from '../Footer/Footer.js';

const Home = (props) => {
  return (<>
    <div>
     <Slider/>
    <Jumbo/>
    <Footer/>
    
    </div>
    </>
  );
};

export default Home;