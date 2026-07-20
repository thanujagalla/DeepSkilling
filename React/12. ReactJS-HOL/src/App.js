import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">
      <h1>✈️ Ticket Booking App</h1>

      {isLoggedIn ? (
        <button
          className="btn logout"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          className="btn login"
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}

      <hr />

      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;