import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


import { addItem } from "../utils";

const MEMBER_URL = "http://localhost:3000/members";

const AddMemberInput = () => {

  const navigate = useNavigate();


  const [emailInput, setEmail] = useState("");
  const [cityInput, setCity] = useState("");
  const [nameMemberInput, setNameMember] = useState("");
  // const [watchMoviesInput, setWatchMovies] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const addMember = {
      email: emailInput,
      city: cityInput,
      nameMember: nameMemberInput
    };
    const { data } = await addItem(MEMBER_URL, addMember);
    console.log(data);
   navigate('/subscriptions/allmembers')
  };

  return (
    <div>
      <h3> Add Member </h3>

      <form onSubmit={handleSubmit}>

      Member Name:{" "}
        <input
          type="text"
          name="city"
          value={nameMemberInput}
          onChange={(e) => setNameMember(e.target.value)}
        />{" "}
        <br />


        email:{" "}
        <input
          type="text"
          name="email"
          value={emailInput}
          onChange={(e) => setEmail(e.target.value)}
        />{" "}
        <br />
        City:{" "}
        <input
          type="text"
          name="city"
          value={cityInput}
          onChange={(e) => setCity(e.target.value)}
        />{" "}
        <br />
        
        <button type="submit"  > Add </button>
        <button type="button" onClick={() => window.history.back()}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddMemberInput;
