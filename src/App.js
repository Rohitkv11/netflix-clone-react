import React from 'react'
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/navbar/Navbar';
import Rowpost from './components/Rowpost/Rowpost';
import {originals,action} from './url'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner />
      <Rowpost  url={originals}  title='Netflix Originals' />
      <Rowpost  url={action} title='Action' isSmall />
    </div>
  );
}

export default App;
