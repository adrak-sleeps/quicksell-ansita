import React from "react";

const Dropdown = (props) => {

    const handleChange = (event) => {
        props.setValue(event.target.value);
      }

    return (
      <form>
        <select value = {props.value} onChange={handleChange}>
          {props.option.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </select>
      </form>
    );
  }

  export default Dropdown;