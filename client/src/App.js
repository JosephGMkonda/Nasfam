import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import './app.css'
import Home from "./pages/Home";

import {BrowserRouter as Router, Switch, Route,Link} from 'react-router-dom'
import Farmers from "./pages/Farmers";
import Product from "./pages/Product";
import NewFarmer from './pages/NewFarmer'
import Login from "./pages/Login";


function App() {
  return (
    <Router>
        
       <Topbar/>
       
      <div className="container">

       <Sidebar/>
       <Switch>
        <Route exact path="/">
       <Home/> 
       </Route>

       <Route path="/farmers">
       <Farmers/>
       </Route>

       <Route path="/products">
       <Product/>
       </Route>

       <Route path="/newFarmer">
        <NewFarmer/>
       
       </Route>
       </Switch>
       </div>
   </Router>
  );
}

export default App;
