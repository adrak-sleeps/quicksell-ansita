import React from 'react';
import Card from './card';

const GenColumn = (props) => {
    console.log("Hey")
    console.log(props.category)
    const priorityMap= ['No priority', 'Urgent', 'High', 'Medium', 'Low'];
    const userMap = Object.assign({}, ...props.data.users.map(user => ({[user.id] : user.name})))
    console.log(userMap)
    const check = (ticket, props) => {
        console.log(userMap[ticket.userId], props.category)
        if(props.property == "status") return(ticket.status == props.category)
        else if(props.property == "priority") return (priorityMap[ticket.priority] == props.category)
        else return (userMap[ticket.userId] == props.category)           
    }
    return (
        <div >
            <div > {props.category}</div>
            <div>
                {props.data.tickets.filter(
                    ticket =>check(ticket, props))
                    .map((ticket) => (
                    <Card
                    title={ticket.id}
                    icon={ticket.userId}
                    content={ticket.title}
                    tags={ticket.tag}
                    ></Card>
                ))}
            </div> 
        </div>
    );
}

export default GenColumn;
