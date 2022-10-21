import NavBar from './components/NavBar';

//Routers
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

import Page_marvel from './pages/Page_marvel';
import Page_rick_and_morty from './pages/Page_rick_and_morty';

import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (

    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          {/*Main Routers */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/*Sencondary Routers */}
          <Route path='/pages/page_marvel' element={<Page_marvel/>}/>
          <Route path='/pages/page_rick_and_morty' element={<Page_rick_and_morty/>}/>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

    </BrowserRouter>


  );
}

export default App;
