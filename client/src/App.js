import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import './app.css'
import Home from "./pages/Home";

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Farmers from "./pages/Farmers";
import Product from "./pages/Product";
import NewFarmer from "./pages/NewFarmer";

import NewProduct from "./pages/NewProduct";


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

       <Route path="/addFarmer">
        <NewFarmer/>

       </Route>

       <Route path="/addProduct">

        <NewProduct/>
       </Route>

       </Switch>
       </div>
   </Router>
  );
}

export default App;
