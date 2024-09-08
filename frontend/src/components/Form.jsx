import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";

import "../styles/Form.css";

function Form({ route, method }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  //   const handleSubmit = async (e) => {
  // setLoading(true);
  // e.preventDefault();

  // try {
  //   const response = await api.post(route, { username, password });

  //   if (method === "login") {
  // localStorage.setItem(ACCESS_TOKEN, response.data.access);
  // localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
  // navigate("/");
  //   } else {
  // navigate("/login");
  //   }
  // } catch (error) {
  //   setError(error.message);
  // } finally {
  //   setLoading(false);
  // }
  //   };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      console.log("Sending login/register request...");
      const response = await api.post(route, { username, password });
      console.log("Response received:", response);

      if (method === "login") {
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        localStorage.setItem(REFRESH_TOKEN, response.data.refresh);
        console.log("Tokens set, navigating to home page...");
        navigate("/");
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during submission:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} class="form-container">
      <h1>{name}</h1>
      <input
        type="text"
        class="form-input_username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        class="form-input_password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* {loading && <LoadingIndicator />} */}
      <button type="submit" class="form-button">
        {name}
      </button>
      {error && <p class="form-error">{error}</p>}
    </form>
  );
}

export default Form;
