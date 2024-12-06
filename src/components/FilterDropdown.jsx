import React, { useState } from 'react';
// import "./FilterDropdown.css"

const FilterDropdown = ({
  allOptions,
  selectedOptions,
  onSelectOption,
  onDeselectOption,
  resetSelection,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      onDeselectOption(option);
    } else {
      onSelectOption(option);
    }
  };

  const handleReset = () => {
    resetSelection();
  };

  return (
    <div className="filter-dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedOptions !== null ? `Selected: ${selectedOptions.length}` : 'Select options'}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <ul className="dropdown-menu">
            {allOptions.map((option, index) => (
              <li key={index} className="dropdown-item" onClick={() => handleOptionClick(option)}>
                <input
                  type="checkbox"
                  id={`option-${index}`}
                  checked={selectedOptions?.includes(option)}
                  readOnly
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </li>
            ))}
          </ul>
          <button className="reset-button" onClick={handleReset}>
            Clear All
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
