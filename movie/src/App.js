//import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Movie from './components/Movie'
import {Routes, BrowserRouter, Route} from 'react-router-dom'
import './MovieStyle.css'

function App() {
  return (
    <div className="section">
      <BrowserRouter>
        <Navbar />
        <Routes>
              <Route exact path="/" element={<Landing/>} />
              <Route path="/movie/:movieId" element={<Movie/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
library.add(fab, fas, far)