import { useEffect } from "react";
import { useState } from "react";
import User from "./user.jsx";
import "./styles.css";

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("heleenatc");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    fetchGithubUserData();
  }

  async function fetchGithubUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);

    const data = await response.json();
    console.log(data);

    if (data) {
      setUserData(data);
      setLoading(false);
      setUsername("");
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <h1>Loading data! Please wait.</h1>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search github username..."
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        ></input>
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
}
