import './App.css';
import NavBar from '../src/Components/Navbar/navbar'
import Login from './Pages/LoginPage/login'
import SignUp from './Pages/SignUpPage/signup'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Pages/Home/home'
import AddItems from './Pages/users/AddItem';
import EditItem from './Pages/users/EditItem';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route exact path="/users/add" component={AddItems} />
          <Route exact path="/users/edit/:id" component={EditItem} />
        <Route path="/home" exact component={Home} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
