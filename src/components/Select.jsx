import React from "react";

const Select = (props) => {
  const { dropdownOptions, handleSelect } = props;
  return (
    <div class="select-container">
      <select onChange={handleSelect}>
        {dropdownOptions.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
