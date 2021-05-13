import { Switch } from "react-router";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import UserTemplate from "./Templates/UserTemplate";
import './assets/css/style.css';
import DashboardTemplate from "./Templates/DashboardTemplate";
import UserList from "./Pages/UserList/UserList";

function App() {
  return (
    <>
      <Switch>
        <UserTemplate exact path="/login" Component={Login} />
        <UserTemplate exact path="/register" Component={Register} />
        <DashboardTemplate exact path="/" Component={UserList} />
      </Switch>
    </>
  );
}

export default App;
