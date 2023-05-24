import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Header from './Header';

function App() {
  return (
    
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='about' element={<About />}/>
          <Route path='projects' element={<Projects/>}/>
          <Route path='contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </div>
      
  );
}

export default App;
