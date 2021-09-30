import './App.css';

import {connect} from 'react-redux';
import * as actions from './store/authActions';
import { useEffect } from 'react'


import Header from './components/Header'

import Urls from './Urls';

function App(props) {
  useEffect(() => {
    props.setAuthenticatedIfRequired();
  }, []);

  return (
    <div className="App">      
      
        <Header />
          <Urls {...props} />         
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null && typeof state.auth.token !== 'undefined',
    token: state.auth.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthenticatedIfRequired: () => dispatch(actions.authCheckState()),
    logout: () => dispatch(actions.authLogout()) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
