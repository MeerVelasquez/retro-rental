import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './components/homepage';
import LoginPage from './components/login';

const App = () => {
  return (
    <div>
      <LoginPage />
      
      
    </div>

    
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
