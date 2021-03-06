import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './Components/layout/Navbar';
import Dashboard from './Components/dashboard/Dashboard';
import ProjectDetails from './Components/projects/ProjectDetails';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar/>
     <Switch>
       <Route exact path='/' component={Dashboard}/>
       <Route path='/project/:id' component={ProjectDetails}/>
       <Route path='/signin' component={SignIn}/>
       <Route path='/signup' component={SignUp}/>
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
