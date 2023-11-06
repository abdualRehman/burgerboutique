import React from "react";

const Soda = ({ name }) => {
  return (
    <div>
      <div class="form-group flex items-center">
        <input type="checkbox" id={name} />
        <label className="font-semibold text-gray-500 " for={name}>
          {name}
        </label>
      </div>
    </div>
  );
};

export default Soda;
