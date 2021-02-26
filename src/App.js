import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import IssueList from './Components/issueList';
import IssueDetail from './Components/IssueDetail';
import Users from './Components/Users';

function App() {
  return (
    <Router>
      <div className="App">

        <Navbar variant="dark" bg="dark" sticky="top" className="mb-5">
          <Navbar.Brand>Issue Tracker</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to="/"> Home </Nav.Link>
          <Nav.Link as={Link} to="/issues"> Issues </Nav.Link>
          <Nav.Link as={Link} to="users"> Users </Nav.Link>
        </Nav>
        </Navbar>

        <Container>
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
        </Container>
      </div>
    </Router>
  );
}

export default App;
