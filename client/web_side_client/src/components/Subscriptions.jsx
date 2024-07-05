import React, { useInsertionEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const Subscriptions = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("allmembers");
  }, []);

  return (
    <div>
      Subscriptions
      <button onClick={() => navigate("allmembers")}>All Members</button>
      <button onClick={() => navigate("addmember")}>Add Member</button>
      <Outlet />
    </div>
  );
};

export default Subscriptions;
