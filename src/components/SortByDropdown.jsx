import React, { useState } from 'react';

const SortByDropdown = ({
  allOptions,
  selectedOption,
  onSelectOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      onSelectOption("");
    } else {
      onSelectOption(option);
    }
  };

  const handleReset = () => {
    onSelectOption("");
  };

  return (
    <div className="filter-dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedOption ? `Sorted by: ${selectedOption}` : 'Select Sort by'}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          <ul className="dropdown-menu">
            {allOptions.map((option, index) => (
              <li key={index} className="dropdown-item" onClick={() => handleOptionClick(option)}>
                <input
                  type="radio"
                  id={`option-${index}`}
                  checked={option === selectedOption}
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

export default SortByDropdown;
