import React from "react";
import Dropdown from "./dropdown";
import "./dropdown.css";
import imageContent from "../Images/sortIcon.png";

const Form = (props) => {
  const toggleForm = () => {
    props.setForm(!props.form);
  };

  return (
    <>
      <div className="page-header">
        <button onClick={toggleForm}>
          <img className="form-image" src={imageContent} />
          Display
        </button>
      </div>
      <div className="form-dropdown-container">
        {props.form && (
          <div className="dropdown-container">
            <Dropdown
              name="Grouping"
              value={props.grouping}
              setValue={props.setGrouping}
              option={props.groupingOptions}
            ></Dropdown>
            <Dropdown
              name="Ordering"
              value={props.ordering}
              setValue={props.setOrdering}
              option={props.orderingOptions}
            ></Dropdown>
          </div>
        )}
      </div>
    </>
  );
};

export default Form;
