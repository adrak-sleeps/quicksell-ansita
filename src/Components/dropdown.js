import React from "react";
import "./dropdown.css";

const Dropdown = (props) => {
  const handleChange = (event) => {
    props.setValue(event.target.value);
  };

  return (
    <div className="dropdown">
      {props.name}
      <form className="dropdown-name">
        <select value={props.value} onChange={handleChange}>
          {props.option.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </form>  
    </div>
  );
};

export default Dropdown;
