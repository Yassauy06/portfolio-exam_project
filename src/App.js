import './App.css';
import React from 'react';
import WelcomePage from './router/WelcomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Main from './router/Main';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<WelcomePage/>} />
      <Route path='/Main' element={<Main/>} />
      
     </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;
