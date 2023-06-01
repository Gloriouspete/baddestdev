
import { Header } from './header';
import { Main } from './Main';
import { About } from './About';
import { Project } from './Project';
import { Contact } from './Contact';

import './Media.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
  
    <Router>
    <Routes>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/project" element={<div className="body"><Header /><Project /></div>} />
      <Route path="/" element={
      <div className="body">
        <Header />
        <Main />
        </div>
        } />
    </Routes>
  </Router>
  
  );
};

export default App;

