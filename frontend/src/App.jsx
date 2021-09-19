import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import NewTermForm from './components/NewTermForm'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      
        <Router>  
        <Header />
          <Route path='/' component={Home} />   
          <Route path='/search' component={Search} />
          <Route path='/new_term' component={NewTermForm} />          
        </Router>
    </div>
  );
}

export default App;
