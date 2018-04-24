import React from "react";
import "./Saved.css";

export const SavedContainer = ({ children }) => {
  return (
    <div className='saved-container'>
      <div className="list-container">
        <ul className="list-group">
          {children}
        </ul>
      </div>
    </div>
  );
};
