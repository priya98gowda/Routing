
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'

import routing from './routing/Routing';

function App() {
  return (
    <Router>
      <div className="App">
        {routing}
      </div>
    </Router>
  );
}

export default App;
