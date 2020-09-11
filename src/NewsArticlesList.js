import React from "react";
import "./NewsArticlesList.css";

export function NewsArticlesList(props) {
  const listItems = props.articles.map((each, index) => (
    <li key={index}>
      <article>
        <div>
          <span class="blogTitle">
            <a href="#">{each.blogTitle}</a>
          </span>
          <span class="blogLink">
            <a href={each.blogLink}>({each.blogLink})</a>
          </span>
        </div>
        <div class="userDetails">
          <span>
            <a href="#">{each.userPoints}</a>
          </span>
          <span>|</span>
          <span>
            <a href="#">{each.userName}</a>
          </span>
          <span>|</span>
          <span>
            <a href="#">{each.postedOn}</a>
          </span>
          <span>|</span>
          <span>
            <a href="#">{each.noOfComments} comments</a>
          </span>
        </div>
      </article>
    </li>
  ));
  return <ul style={{ listStyleType: "none" }}>{listItems}</ul>;
}
