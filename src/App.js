import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from './pages/write/Write';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Login from "./pages/login/Login";
import { useContext } from 'react';
import { Context } from "./context/Context";
import About from './About/About';

function App() {

  const { user } = useContext(Context)

  return (
    < Router>
      <div className="app">
        <Topbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route exact path="/login">
            {user ? <Home /> : <Login />}
          </Route>
          <Route exact path="/write">
            {user ? <Write /> : <Register />}
          </Route>
          <Route exact path="/settings">
            {user ? <Settings /> : <Register />}
          </Route>
          <Route exact path="/post/:postid">
            <Single />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

export default App;
