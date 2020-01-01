import React from "react";

import "./ListContent.css";
import Comments from "../Comments/Comments";

const convertDate = date => {
  const check = date.split("T");
  const ff = check[0].split("-");
  const year = ff[0];
  const month = ff[1];
  const day = ff[2];
  const newDate = day + "/" + month + "/" + year;
  return newDate;
};

const ListContent = props => {
  const { item } = props.location.state;

  return (
    <div className="listcontent-detail">
      <a href="/" className="previous round pull-left">
        &#8249;
      </a>
      <div className="article" key={item.title}>
        <div className="wrapper">
          <div className="wrapperText">
            <h1 className="content-titlename">
              <mark>{item.title}</mark>
            </h1>
            <p id="author">
              <mark>
                {" "}
                By - {item.author} On - {convertDate(item.publishedAt)}
              </mark>
            </p>
          </div>
        </div>
        <img
          src={
            item.urlToImage === null
              ? require("../../Images/default-png-5.png")
              : item.urlToImage
          }
          alt="Avatar"
          className="listdetail-img"
        />

        <div className="articleText">
          <a className="news-link" href={item.url}>
            {item.url}
          </a>
          <h3 className="introduction">{item.description}</h3>
          <p className="full-content">{item.content}</p>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default ListContent;
