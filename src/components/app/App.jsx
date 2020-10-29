import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    
} from 'react-router-dom';
import CharacterPage from '../../pages/CharacterPage';
import Header from '../header/Header';
import Detail from '../../pages/Detail';

export default function App() {

 return (
  <>
    <Header />
      <div className="app">

        <Router>
            <Switch>
                <Route exact path="/" component={CharacterPage} />
                <Route exact path="/detail/:id" component={Detail}/>
                
            
            </Switch>
        </Router>
      </div>
  </>
  );
}
