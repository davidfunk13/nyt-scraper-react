import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav/Nav'
import Home from './pages/Home';
const App = () => (
  <Router>
    <div>
<Nav/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Home} />
        {/* <Route exact path="/posts/:id" component={Detail} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </div>
  </Router>
);

export default App;
