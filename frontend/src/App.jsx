import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import NewTermForm from './components/NewTermForm'


function App() {
  return (
    <div className="App">      
      <Router>  
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />            
          <Route path='/new_term' exact component={NewTermForm} /> 
        </Switch>         
      </Router>
    </div>
  );
}

export default App;
