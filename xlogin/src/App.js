import { useState } from "react";

export default function App() {
  const [err, setErr] = useState("");
  const [issubmitted, setIssubmitted] = useState(false);
  const [obj, setObj] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setObj({ ...obj, [name]: value });
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.username === "user" && obj.password === "password") {
      setErr("");
      setIssubmitted(true);
    } else {
      setErr("Invalid username or password");
      setIssubmitted(false);
    }
  };
  return (
    <div>
      <h1>Login page</h1>
      {issubmitted ? (
        <div>
          <p>Welcome, {obj.username}!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {err && <p className="err">{err}</p>}
          <div>
            <label htmlFor="username"> Username: </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={obj.username}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password"> Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              value={obj.password}
              placeholder="password"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button type="submit">Submit:</button>
          </div>
        </form>
      )}
    </div>
  );
}

