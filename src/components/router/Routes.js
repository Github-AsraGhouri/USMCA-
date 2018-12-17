import React from "react";
import Landing from './../layouts/Landing'
import Newsroom from './../layouts/Newsroom';
import Account from './../layouts/Account'
import About from './../layouts/About';
import Community from './../layouts/Community'
import Contact from './../layouts/Contact';
import FindCoach from './../layouts/Find_a_Coach';
import Riding from './../layouts/Riding';
import Coaching from './../layouts/Coaching';
import Register from './../layouts/Register'
import Article from './../layouts/Article';
import SmartMatch from './../layouts/Smart_Match';
import { BrowserRouter as Router, Route} from "react-router-dom";

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route exact path="/Newsroom" component={Newsroom} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Account" component={Account} />
      <Route exact path="/Community" component={Community} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Coaching" component={Coaching} />
      <Route exact path="/Riding" component={Riding} />
      <Route exact path="/FindCoach" component={FindCoach}/>
      <Route exact path="/Register" component={Register} />
      <Route exact path="/Article" component={Article} />
      <Route exact path="/SmartMatch" component={SmartMatch} /> 
      {/* <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} /> */}
    </div>
  </Router>
);

  export default Routes;