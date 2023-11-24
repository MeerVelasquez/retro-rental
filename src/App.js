import React from 'react';
import ReactDOM from 'react-dom';
import Clients from './components/clients';

const App = () => {
  return (
    <div>
      <Clients/>
      
      
    </div>

    
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
