import axios from "axios";
import { UserContextProvider } from "./components/UserContext";
import Routes from "./components/Routes";
import "./App.css";

function App() {
  axios.defaults.baseURL = "http://localhost:4040";
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
