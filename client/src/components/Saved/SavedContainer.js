import React from "react";
import "./Saved.css";

export const SavedContainer = ({ children }) => {
  return (
    <div className='saved-container'>
      <div className='heres-saved'>Here are your Saved Posts:</div>
      <div className="list-overflow-container">
        <ul className="list-group">
          {children}
        </ul>
      </div>
    </div>
  );
};
