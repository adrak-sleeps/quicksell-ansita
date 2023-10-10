import React from "react";
import Card from "./card";
import GenColumn from "./genColumn";

const GenTickets = (props) => {
  console.log(props);
  if (props.data == undefined || props.data.length === 0) {
    return <div>Loading..</div>;
  }
  else{
    console.log(props.ordering)
    if(props.ordering === "Priority"){
      props.data.tickets = props.data.tickets.sort((a, b) => a.priority - b.priority)
    }
    else {
      props.data.tickets = props.data.tickets.sort((a, b) => (a.title).localeCompare(b.title) > 0 ? 1 : -1)

    }
  }
  if (props.grouping === "Status") {
    const categories = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridGap: 20,
        }}
      >
        <GenColumn property="status" category="Backlog" data={props.data} />
        <GenColumn property="status" category="Todo" data={props.data} />
        <GenColumn
          property="status"
          category="In progress"
          data={props.data}
        />
        <GenColumn property="status" category="Done" data={props.data} />
        <GenColumn property="status" category="Cancelled" data={props.data} />
      </div>
    );
  } else if (props.grouping === "Priority") {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridGap: 20,
        }}
      >
        <GenColumn
          property="priority"
          category="No priority"
          data={props.data}
        />
        <GenColumn property="priority" category="Urgent" data={props.data} />
        <GenColumn property="priority" category="High" data={props.data} />
        <GenColumn property="priority" category="Medium" data={props.data} />
        <GenColumn property="priority" category="Low" data={props.data} />
      </div>
    );
  } 
  else {
    var users = props.data.users;
    console.log(users);
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${users.length}, 1fr)`,
          gridGap: 20,
        }}
      >
        {users.map(function(user, index) {
          return <GenColumn property = "user" category = {user.name} data = {props.data} key = {index}/>
        }
          )}
      </div>
    );
  }
};

export default GenTickets;
