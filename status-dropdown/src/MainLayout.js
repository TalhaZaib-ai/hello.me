import React, { useState } from 'react';
import StatusDropdown from './StatusDropdown';
import './MainLayout.css';

const MainLayout = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Status');
  
  const statusOptions = [
    { label: 'Todo', color: '#f3e5f5', icon: <TodoIcon /> },
    { label: 'In-Progress', color: '#e3f2fd', icon: <InProgressIcon /> },
    { label: 'Completed', color: '#e8f5e9', icon: <CompletedIcon /> },
    { label: 'Cancelled', color: '#ffebee', icon: <CancelledIcon /> },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleSelectStatus = (label) => {
    setSelectedStatus(label);
    setDropdownOpen(false);
  };

  return (
    <div className="main-layout">
      <div className="left-dialog">
        <div className="heading">
          <span className="status-heading">status</span>
          <span className="status-icon">&#x25A3;</span>
        </div>
        {statusOptions.map((option, index) => (
          <div key={index} className="status-icon-wrapper" style={{ backgroundColor: option.color }}>
            {option.icon}
          </div>
        ))}
      </div>
      <div className="right-dialog">
        <div className="heading blue-heading">dropdown - status</div>
        <div className="status-bar" onClick={toggleDropdown}>
          {selectedStatus}
        </div>
        {isDropdownOpen && (
          <StatusDropdown options={statusOptions} showLabels={true} onSelect={handleSelectStatus} />
        )}
      </div>
    </div>
  );
};

const TodoIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#9c27b0" strokeWidth="2" strokeDasharray="2,2" />
    <circle cx="12" cy="12" r="4" fill="#9c27b0" />
  </svg>
);

const InProgressIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#42a5f5" strokeWidth="2" strokeDasharray="2,2" />
    <path d="M12 2 a10 10 0 0 1 0 20 a10 10 0 0 1 0 -20" fill="#42a5f5" />
  </svg>
);

const CompletedIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#66bb6a" strokeWidth="2" strokeDasharray="2,2" />
    <path d="M9 12 l2 2 l4 -4" stroke="#66bb6a" strokeWidth="2" fill="none" />
  </svg>
);

const CancelledIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#ef5350" strokeWidth="2" strokeDasharray="2,2" />
    <line x1="8" y1="8" x2="16" y2="16" stroke="#ef5350" strokeWidth="2" />
    <line x1="16" y1="8" x2="8" y2="16" stroke="#ef5350" strokeWidth="2" />
  </svg>
);

export default MainLayout;
