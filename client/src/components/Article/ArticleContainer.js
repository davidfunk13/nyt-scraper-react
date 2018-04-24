import React from "react";
import "./Article.css";

export const ArticleContainer = ({ children }) => {
  return (
    <div className='article-container'>
      <div className='heres-results'>Here are your results:</div>
      <div className="list-overflow-container">
        <ul className="list-group">
          {children}
        </ul>
      </div>
    </div>
  );
};
