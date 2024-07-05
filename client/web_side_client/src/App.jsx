import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import LoginApp from "./components/login/LoginApp";

import HomePage from "./components/HomePage";

import Subscriptions from "./components/Subscriptions";

import UserManagement from "./components/UserManagement";
import AllMembers from "./components/AllMembers";
import AddMember from "./components/AddMember";

import Movies from "./components/Movies";
import AllMovies from "./components/AllMovies";
import AddMovie from "./components/AddMovie";
import EditMovie from "./components/EditMovie";
import EditMember from "./components/EditMember";

const App = () => {
  return (
    <div style={{ border: "2px solid Black" }}>
      <HomePage />

      <Routes>
        <Route path="/" element={<LoginApp />} />

        <Route path="/movies" element={<Movies />}>
          <Route path="allmovies" element={<AllMovies />} />
          <Route path="addmovie" element={<AddMovie />} />
        </Route>

        <Route path="/editmovie/:id" element={<EditMovie />} />
        <Route path="/editmember/:id" element={<EditMember />} />

        <Route path="/subscriptions" element={<Subscriptions />}>
          <Route path="allmembers" element={<AllMembers />} />
          <Route path="addmember" element={<AddMember />} />
        </Route>

        <Route path="/user-management" element={<UserManagement />}></Route>
      </Routes>
    </div>
  );
};

export default App;
