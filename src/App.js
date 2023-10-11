import React from "react";
import { useEffect, useState } from "react";
import "./Components/card.css";
import GenTickets from "./Components/genTickets";
import './Components/dropdown.css';
import Form from "./Components/form";
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState(false);
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
      <div className="page-body">
      <Form form = {form} setForm = {setForm} 
        grouping = {grouping} setGrouping = {setGrouping} 
        groupingOptions = {groupingOptions}
        ordering = {ordering} setOrdering = {setOrdering}
        orderingOptions = {orderingOptions}
      ></Form>
      <GenTickets ordering={ordering} grouping={grouping} data={data} />
      </div>
    </>
  );
};

export default App;
