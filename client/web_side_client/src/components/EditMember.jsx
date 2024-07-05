import React from "react";
import { useParams } from "react-router-dom";
import { getById } from "../utils";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { updateItem } from "../utils";

const MEMBER_URL = "http://localhost:3000/members";

const EditMember = () => {
  const navigate = useNavigate();

  const { id, name } = useParams();

  const [memberName, setMemberName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const getMemberById = async () => {
      try {
        const { data } = await getById(MEMBER_URL, id);
        setMemberName(data.nameMember);
        setEmail(data.email);
        setCity(data.city);

        console.log(data);
      } catch {
        console.error("Error");
      }
    };

    getMemberById();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const objUpdate = {
      nameMember: memberName,
      email: email,
      city: city,
    };
    const { data } = await updateItem(MEMBER_URL, id, objUpdate);
    console.log(data);

    navigate("/subscriptions/allmembers");
  };

  return (
    <div>
      <h3>Edit Movie</h3> <br />
      <form onSubmit={handleSubmit}>
        Member name:{" "}
        <input
          type="text"
          name="memberName"
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
        />{" "}
        <br />
        Email:{" "}
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        City:{" "}
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />{" "}
        <br />
        <button type="submit"> Save </button>
        <button type="button" onClick={() => window.history.back()}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditMember;
