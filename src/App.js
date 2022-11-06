import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Portefolio from './pages/Portefolio/Portefolio';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path='/'            element= {<Home />} />
        <Route path='/portefolio'  element= {<Portefolio />} />
        <Route path='/contact'     element= {<Contact />} />
        <Route path='*'            element= {<NotFound />} />
      </Routes>   
    </div>
  );
}

export default App;
