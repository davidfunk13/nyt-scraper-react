import React from "react";

export const Saved = props => (
  <li className="list-group-item">
  <h2 className='id'>Post Id: {props.id}</h2>
    <h1 className='post-title'>
      {props.title}
    </h1>
    <h2 className='post-url'>{props.url}</h2>
    <h2 className='post-snippet'>{props.snippet}</h2>
    <h2 className='post-source'>{props.source}</h2>

    <h2 className='post-pubdate'>{props.pubDate}</h2>
    <button type='submit' onClick={() => props.deleteArticle(props.id)} className={`delete-post ${props.id}`}>Delete Article</button>
  </li>
);
