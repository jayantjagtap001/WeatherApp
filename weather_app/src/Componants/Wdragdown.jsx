import React from "react";

const Wdragdown = ({ options, selected, onChange }) => (
  <select style={{borderRadius:"20px"}} value={selected} onChange={(e) => onChange(e.target.value)}>
    {options.map((option) => (
      <option style={{backgroundColor:"white"}} key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);

export default Wdragdown;


