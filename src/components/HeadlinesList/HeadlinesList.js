import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchLists } from "../../redux";
import JwPagination from "jw-react-pagination";

import "./HeadlinesList.css";

const HeadlinesList = ({ fetchLists, articles, loading, error, item }) => {
  const [pageOfItems, setItems] = useState([]);

  useEffect(() => {
    fetchLists();
  }, [fetchLists]);

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return <div className="loader"></div>;
  }

  const onChangePage = pageOfItems => {
    setItems(pageOfItems);
  };

  return (
    <div className="article-container">
      <div className="cards-container">
        <h2 className="lists-title">NEWS ARTICLES LIST</h2>
        <div className="cards-row">
          {pageOfItems.map(list => (
            <div key={list.title} className="cards-column">
              <div className="card">
                <img
                  src={
                    list.urlToImage === null
                      ? require("../../Images/default-png-5.png")
                      : list.urlToImage
                  }
                  alt="Avatar"
                  className="list-img"
                />
                <div className="container">
                  <h4>
                    <Link
                      className="content-link"
                      to={{
                        pathname: "/content",
                        state: {
                          item: list
                        }
                      }}
                    >
                      <b>{list.title}</b>
                    </Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <JwPagination items={articles} onChangePage={onChangePage} />
    </div>
  );
};

const mapStateToProps = state => ({
  articles: state.articles.articles,
  loading: state.articles.loading,
  error: state.articles.error,
  item: state.articles.item
});

const mapDispatchToProps = dispatch => {
  return {
    fetchLists: () => dispatch(fetchLists())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeadlinesList);
