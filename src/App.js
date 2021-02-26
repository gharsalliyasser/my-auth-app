import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from './history'
import RegisterCard from './Components/RegisterCard'
import LoginCard from './Components/LoginCard'
import ProfileTable from './Components/ProfileTable'
import NavigationBar from './Components/NavigationBar'
import EditTable from './Components/EditTable'

function App() {
  return (
    <Router history={history}>
      <div style={styles.container}>
        <Switch>
          <Route exact path="/">
            <RegisterCard />
          </Route>
          <Route path="/login">
            <LoginCard />
          </Route>
          <Route exact path="/user">
            <NavigationBar />
            <ProfileTable />
          </Route>
          <Route path="/user/:id">
            <NavigationBar />
            <EditTable />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    margin: '0 auto',
    textAlign: 'center',
    maxWidth: '900px',
    //display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default App;
