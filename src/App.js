import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";  
import AuthContextProvider from "./contexts/AuthContext"; 

function App() {
  return (
    <div>
        <AuthContextProvider>
          <Switch>
            <Route path="/join" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Home} />
          </Switch>
        </AuthContextProvider>
    </div>
  );
}

export default App;
