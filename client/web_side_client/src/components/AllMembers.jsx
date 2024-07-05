import React from "react";
import Member from "./Member";
import { useState, useEffect } from "react";
import { getAll } from "../utils";

const MEMBER_URL = "http://localhost:3000/members";

const AllMembers = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    getAllMembers();
  }, []);

  const getAllMembers = async () => {
    const { data } = await getAll(MEMBER_URL);
    setMembers(data);
    console.log(data);
  };

  return (
    <div>
      <h3>All Members </h3>

      {members.map((dataMembers, index) => (
        <Member data={dataMembers} key={index} />
      ))}
    </div>
  );
};

export default AllMembers;
