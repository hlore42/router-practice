
import './App.css';
import IssueList from './Components/issueList';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import IssueDetail from './Components/IssueDetail';
import Users from './Components/Users';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/issues"> Issues </Link>
          <Link to="users"> Users </Link>
        </nav>
        <Switch>
          <Route path="/" exact>
            <h1>Home</h1>
            </Route>
            <Route path="/issues" exact>
        <IssueList />
        </Route>
        <Route path="/issues/:id">
          <IssueDetail />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
