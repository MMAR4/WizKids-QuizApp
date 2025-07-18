import React from 'react';

const SubjectSelector = ({ onSelect, firstName }) => (
  <div className="subject-selector">
    {firstName && <h2 style={{ color: '#4e73df' }}>Welcome, {firstName}!</h2>}
    <h2>Select a Subject</h2>
    <button onClick={() => onSelect('aptitude')}>Aptitude</button>
    <button onClick={() => onSelect('math')}>Math</button>
    <button onClick={() => onSelect('science')}>Science</button>
  </div>
);

export default SubjectSelector;
