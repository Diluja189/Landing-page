import React, { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "1234") {
      setLoggedIn(true);
    } else {
      alert("Invalid login");
    }
  };

  if (loggedIn) {
    return (
      <div style={styles.page}>
        <h1 style={{ fontSize: "2rem", color: "#333" }}>🎉 Welcome, {username}!</h1>
        <p>You have successfully logged in.</p>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.icon}>👥</div>
        <form onSubmit={handleLogin}>
          <div style={styles.inputGroup}>
            <span style={styles.symbol}>👤</span>
            <input
              type="text"
              placeholder="Username"
              style={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <span style={styles.symbol}>🔒</span>
            <input
              type="password"
              placeholder="Password"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div style={styles.extraOptions}>
            <label style={styles.checkboxLabel}>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" style={styles.link}>Forgot password?</a>
          </div>

          <button type="submit" style={styles.loginButton}>LOGIN</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    background: "linear-gradient(to right, #f5f7fa, #c3cfe2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Segoe UI, sans-serif",
  },
  container: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
    maxWidth: "350px",
    width: "100%",
    textAlign: "center",
  },
  icon: {
    fontSize: "3rem",
    color: "#007bff",
    marginBottom: "1rem",
  },
  inputGroup: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "25px",
    padding: "0.5rem 1rem",
    margin: "1rem 0",
    backgroundColor: "#f9f9f9",
  },
  symbol: {
    marginRight: "10px",
    color: "#555",
  },
  input: {
    border: "none",
    outline: "none",
    width: "100%",
    background: "transparent",
    fontSize: "1rem",
  },
  extraOptions: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "0.85rem",
    margin: "0.5rem 0 1.2rem 0",
    color: "#555",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
  },
  loginButton: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "25px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "0.3s",
  },
};
