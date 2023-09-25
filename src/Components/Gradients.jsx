import { useEffect, useState } from "react";
import "../Style/Gradients.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faSearch, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@mui/material";
import { toast, Toaster } from "react-hot-toast";
import React from "react";
import Choose from "./Choose";
import GradLoader from "./GradLoader";

import Pagination from "@mui/material/Pagination";

function Gradients() {
  const [gradientsData, setGradientsData] = useState([]);
  const [filterdGradientsData, setFilterdGradientsData] = useState([]);
  const [loader, setLoader] = useState(false);

  const copeid = (dataCard) => {
    let gradientCode = `background-image: linear-gradient(180deg,${dataCard.join(
      ","
    )});`;
    navigator.clipboard.writeText(gradientCode);
    toast("Copied!", {
      icon: "🎉",
    });
  };

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ghosh/uiGradients/master/gradients.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setGradientsData(data);
        setFilterdGradientsData(data);
        setLoader(true);
      })
      .catch((error) => {
        console.error("Error fetching gradients:", error);
      });
  }, []);

  // filter fun
  const filterFun = (el) => {
    setFilterdGradientsData(
      gradientsData.filter((f) =>
        f.name.toLowerCase().includes(el.target.value.toLowerCase())
      )
    );
  };
  // pagination Code
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(20);

  const lastPostsIndex = currentPage * postsPerPage; // 1 * 20 = 20
  const firstPostIndex = lastPostsIndex - postsPerPage; // 20 - 20 = 0
  const currentPosts = filterdGradientsData.slice(
    firstPostIndex,
    lastPostsIndex
  );
  const handelPages = (e, p) => {
    setCurrentPage(p);
  };

  // in mobile

  const [media, setMedia] = useState("medium");
  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) {
      setMedia("small");
    } else if (window.matchMedia("(min-width: 768px)").matches) {
      setMedia("medium");
    } else if (window.matchMedia("(min-width: 1000px)").matches) {
      setMedia("large");
    }
  }, []);

  return (
    <section className="gradients">
      <Choose />
      <Toaster />
      {(() => {
        if (!loader) {
          return <GradLoader />;
        } else {
          return (
            <div className="container">
              <div className="input-pa">
                <FontAwesomeIcon icon={faSearch} className="searchIcon" />
                <input
                  type="text"
                  placeholder="Search By Name"
                  id="input-val"
                  onChange={filterFun}
                />
              </div>
              {(() => {
                if (currentPosts.length === 0) {
                  return (
                    <div className="empty-list">
                      <h3> Can't Found This Gradient ❌</h3>
                    </div>
                  );
                } else {
                  return (
                    <div className="cards">
                      {currentPosts.map((card, index) => {
                        return (
                          <div
                            className={"card"}
                            id={card.name
                              .split(" ")
                              .filter((e) => {
                                return e !== "&" ? e : "";
                              })
                              .join("")}
                            key={index}
                          >
                            <dvi className="card-header">
                              <span className="card-name">{card.name}</span>
                              <div className="action-icon">
                                <Tooltip
                                  title="Copy Gradient ✨"
                                  className="copy-btn"
                                >
                                  <button
                                    onClick={() => {
                                      copeid(card.colors);
                                    }}
                                  >
                                    <FontAwesomeIcon icon={faCopy} />
                                  </button>
                                </Tooltip>
                              </div>
                            </dvi>
                            <div
                              className="main-gradient"
                              style={{
                                backgroundImage: `linear-gradient(${card.colors.join(
                                  ","
                                )})`,
                              }}
                            ></div>
                            <div className="colors-balls">
                              {card.colors.map((e, i) => {
                                return (
                                  <span
                                    className="colors-ball"
                                    style={{
                                      backgroundColor: e,
                                    }}
                                  ></span>
                                );
                              })}
                            </div>
                            <div className="colors-val">
                              {card.colors.join(", ")}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                }
              })()}
            </div>
          );
        }
      })()}
      <div className="pagi">
        <Pagination
          count={20}
          color="secondary"
          size={media}
          onChange={handelPages}
        />
      </div>
    </section>
  );
}

export default Gradients;
