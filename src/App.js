import React from "react";
import { useEffect, useState } from "react";
import Card from "./Components/card";
import "./Components/card.css";
import GenTickets from "./Components/genTickets";
import Dropdown from "./Components/dropdown";
import './Components/dropdown.css';

const App = () => {
  const [data, setData] = useState([]);
  const [grouping, setGrouping] = useState("Status");
  const [ordering, setOrdering] = useState("Priority");

  const fetchUserData = () => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  };

  const groupingOptions = ["Status", "User", "Priority"];
  const orderingOptions = ["Priority", "Title"];

  useEffect(() => {
    console.log("Called");
    fetchUserData();
  }, []);

  return (
    <>
      <div className="dropdown-container">
        Grouping:
        <Dropdown
          value={grouping}
          setValue={setGrouping}
          option={groupingOptions}
        ></Dropdown>
        Ordering: 
        <Dropdown
          value={ordering}
          setValue={setOrdering}
          option={orderingOptions}
        ></Dropdown>
      </div>
      <GenTickets ordering={ordering} grouping={grouping} data={data} />
    </>
  );
};

export default App;
