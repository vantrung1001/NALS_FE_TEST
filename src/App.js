import { Switch } from "react-router";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import UserTemplate from "./Templates/UserTemplate";
import './assets/css/style.css';

function App() {
  return (
    <>
      <Switch>
        <UserTemplate exact path="/login" Component={Login} />
        <UserTemplate exact path="/register" Component={Register} />
      </Switch>
    </>
  );
}

export default App;
