import React from "react";

export const Article = props => (
  <li className="list-group-item">
    <h1 className='post-title'>
      {props.title}
    </h1>
    <h2 className='post-url'>{props.url}</h2>
    <h2 className='post-snippet'>{props.snippet}</h2>
    <h2 className='post-source'>{props.source}</h2>

    <h2 className='post-pubdate'>{props.pubDate}</h2>
    <button type='submit' onClick={() => props.saveArticle(props)} className={`save-post ${props.title}`}>Save Article</button>
  </li>
);
