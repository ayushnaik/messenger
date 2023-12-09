import { useContext, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { UserContext } from "./UserContext.jsx";
import { IoMdSend } from "react-icons/io";

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginOrRegister, setIsLoginOrRegister] = useState("login");
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);
  async function handleSubmit(ev) {
    ev.preventDefault();
    const url = isLoginOrRegister === "register" ? "register" : "login";
    const { data } = await axios.post(url, { username, password });
    setLoggedInUsername(username);
    setId(data.id);
  }
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <Card className="flex items-center mx-auto p-7 rounded-lg">
        <CardContent>
          <form className="flex flex-col gap-4 mx-auto">
            <TextField
              required
              label="Username"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
              type="text"
              placeholder="username"
            />
            <TextField
              required
              label="Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              type="password"
              placeholder="password"
            />
            <CardActions className="mt-4">
              <Button
                onClick={handleSubmit}
                className="block w-full rounded-sm mt-4"
                variant="contained"
                endIcon={<IoMdSend />}
              >
                {isLoginOrRegister === "register" ? "Register" : "Login"}
              </Button>
            </CardActions>
            <div className="text-right mt-1">
              {isLoginOrRegister === "register" && (
                <div className="text-xs">
                  Already a member?
                  <button
                    className="ml-1 text-purple-900"
                    onClick={() => setIsLoginOrRegister("login")}
                  >
                    Login here
                  </button>
                </div>
              )}
              {isLoginOrRegister === "login" && (
                <div className="text-xs">
                  Dont have an account?
                  <button
                    className="ml-1 text-purple-900"
                    onClick={() => setIsLoginOrRegister("register")}
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
