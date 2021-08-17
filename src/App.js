
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeCompenent from './components/UpdateEmployeeCompenent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import StartComponent from './components/StartComponent';



function App() {
  return (
    <div>
      <Router>  
           <HeaderComponent />
             <div className="container">
                 <Switch> 
                   <Route path = "/" exact component = {StartComponent}></Route>
                   <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                   <Route path = "/add-employee" component = {CreateEmployeeComponent}></Route> 
                   <Route path = "/update-employee/:id" component = {UpdateEmployeeCompenent}></Route>                   
                   <Route path = "/login" component = {LoginComponent}></Route>
                   <Route path = "/register" component = {RegisterComponent}></Route>                                                         
                   <ListEmployeeComponent />                         
                 </Switch>
             </div>          
      </Router>
    </div>       
  );
}

export default App;
