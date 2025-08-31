import React from "react";
import PATTERN from "../../assets/img/about/about2/Pattern.gif";
import { Link } from "react-router-dom";

export const AboutTwo = () => {
  return (
    <div
      className="td-about-area bg-position p-relative pb-100 pt-140 fix"
      style={{ backgroundImage: `url(${PATTERN})` }}
    >

      <div className="container">
        <div className="row">
          <div className="col-lg-12 pb-40">
            <div
              className="td-about-content-wrap p-relative wow fadeInLeft"
              data-wow-delay=".4s"
              data-wow-duration="1s"
            >
              <span className="td-section-title-pre mb-10">
                Brand since 1972
              </span>
              <h2 className="td-section-title mb-30">
                Empowering Financial Growth Worldwide
              </h2>
              <p className="td-about-para pr-10 pb-45">
                LuLu Financial Group is a UAE-based company committed to delivering innovative financial services and investments that drive progress and opportunity. With a strong regional and global footprint, we focus on building trust and driving sustainable growth.
              </p>
              <div className="td-counter-count-wrap td-counter-count-wrap-2 mb-35 d-flex">
                <div className="td-counter-single mr-60">
                  <span className="td-counter-count-para mb-10">
                    Presence in
                  </span>
                  <h2 className="td-counter-count fs-36">
                    <span
                      data-purecounter-duration="1"
                      data-purecounter-end="11"
                      className="purecounter"
                    >
                      11
                    </span>
                    <span className="td-counter-count-para"> Countries</span>
                  </h2>
                </div>
                <div className="td-counter-single">
                  <span className="td-counter-count-para mb-10">
                    Managing Annual Transactions worth
                  </span>
                  <h2 className="td-counter-count fs-36">
                    <span className="td-counter-count-para">USD</span>
                    <span
                      data-purecounter-duration="1"
                      data-purecounter-end="10"
                      className="purecounter"
                    >
                       10
                    </span>
                    +
                    <span className="td-counter-count-para"> Billion</span>
                  </h2>
                </div>
              </div>
              <div className="td-about-btn">
                <Link className="td-btn td-btn-6 td-left-right" to="/about">
                  View More
                  <span className="td-arrow-angle ml-10">
                    <svg
                      className="td-arrow-svg-top-right"
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      viewBox="0 0 10.00 10.00"
                    >
                      <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                      <path d="M1.018 10.009 0 8.991l7.569-7.582H1.723L1.737 0h8.26v8.274H8.574l.013-5.847Z" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
