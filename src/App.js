import React, {useState} from 'react';
import './App.css';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import { InfoData } from './components/infoData';
import Infosection from './components/infosection';
import Navbar from './components/Navbar';
import GlobalStyle from './GlobalStyles';

function App() {
   const [isOpen, setIsOpen] = useState(false)

   const toggle = () => {
    setIsOpen(!isOpen)
   }

  return (
    <>
    <GlobalStyle />
   <Navbar toggle={toggle}/>
   <Dropdown isOpen={isOpen} toggle={toggle}/>
   <Hero />
   <Infosection {...InfoData} />
    </>
  );
}

export default App;
