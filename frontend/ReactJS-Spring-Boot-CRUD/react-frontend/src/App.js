import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListImoveisComponent from './components/ListImoveisComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateImovelComponent from './components/CreateImovelComponent';
import UpdateImovelComponent from './components/UpdateImovelComponent';
import ViewImovelComponent from './components/ViewImovelComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListImoveisComponent}></Route>
                          <Route path = "/imoveis" component = {ListImoveisComponent}></Route>
                          <Route path = "/add-imovel/:id" component = {CreateImovelComponent}></Route>
                          <Route path = "/view-imovel/:id" component = {ViewImovelComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
