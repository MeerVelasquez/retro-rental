import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from './components/homepage';
import Homeadmin from './components/hpadmin';
import LoginPage from './components/login';
import MyGames from './components/MyGames';
import Clients from './components/clients';
import Games from './components/stacks';


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Homeadmin" element={<Homeadmin />} />
        <Route path="/games" element={<MyGames />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/stacks" element={<Games />} />
      </Route>
    </Routes>
  </BrowserRouter>

    
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
