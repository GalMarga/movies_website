import React, { useInsertionEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

const UserManagement = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3> UserManagement </h3>
    </div>
  );
};

export default UserManagement;
