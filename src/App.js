import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Carousel from './components/Carousel';
import Card from './components/Card';
import Footer from './components/Footer';

import AboutUs from './pages/AboutUs/AboutUs';



function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        <Carousel/>
      </div>
      <div className='CardStyle'>
        <Card className='Card1'/>
        <Card className='Card1'/>
        <Card className='Card1'/>
      </div>

      

      <div>
        <Footer/>
      </div>

      <div>
        <AboutUs/>
      </div>

    

    </div>
  );
}

export default App;
