import React from 'react';
import './StatusDropdown.css';

const StatusDropdown = ({ options, showLabels, onSelect }) => {
  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li key={index} className="dropdown-item" onClick={() => onSelect(option.label)}>
              <div className="icon" style={{ backgroundColor: option.color }}>
                {option.icon}
              </div>
              {showLabels && <span className="label">{option.label}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StatusDropdown;
