import React from "react";
import "./NewsArticlesList.css";
import axios from "axios";

export class NewsArticlesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  componentDidMount() {
    let promises = [];
    for (let i = 1; i <= 15; i++) {
      promises.push(axios.get(`http://hn.algolia.com/api/v1/items/${i}`));
    }

    Promise.all(promises).then((responses) =>
      this.setState({ articles: this.parseData(responses) })
    );
  }

  getTime(input) {
    let inputTime = Math.floor(new Date(input).getTime() / 1000);
    let currentTime = Math.floor(new Date().getTime() / 1000);
    let temp = currentTime - inputTime;
    if (temp >= 1 && temp <= 59) return temp + " seconds ago";
    else {
      temp = Math.floor(temp / 60);
      if (temp >= 1 && temp <= 59) return temp + " minutes ago";
      else {
        temp = Math.floor(temp / 60);
        if (temp >= 1 && temp <= 23) return temp + " hours ago";
        else {
          temp = Math.floor(temp / 24);
          if (temp >= 1 && temp <= 29) return temp + " days ago";
          else {
            temp = Math.floor(temp / 30);
            if (temp >= 1 && temp <= 11) return temp + " months ago";
            else {
              temp = Math.floor(temp / 12);
              return temp + " years ago";
            }
          }
        }
      }
    }
  }

  parseData(responses) {
    console.log("Original responses: ", responses);
    return responses.map((response) => {
      let obj = {};
      obj.blogTitle = response.data.title
        ? response.data.title
        : response.data.text;
      obj.blogLink = response.data.url;
      obj.userPoints = response.data.points;
      obj.userName = response.data.author;
      obj.postedOn = this.getTime(response.data.created_at);
      obj.noOfComments = response.data.children.length;
      return obj;
    });
  }

  render() {
    let listItems = this.state.articles.map((each, index) =>
      index >= this.props.pNo * 5 - 5 && index <= this.props.pNo * 5 - 1 ? (
        <li key={index}>
          <article>
            <div>
              <span class="blogTitle">
                <a
                  href="#"
                  dangerouslySetInnerHTML={{ __html: each.blogTitle }}
                />
              </span>
              <span class="blogLink">
                <a href={each.blogLink}>
                  {" "}
                  {each.blogLink ? each.blogLink : ""}
                </a>
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
      ) : (
        ""
      )
    );
    return <ul style={{ listStyleType: "none" }}>{listItems}</ul>;
  }
}
