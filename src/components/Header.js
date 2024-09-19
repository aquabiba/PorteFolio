import React from "react";
import { ReactTyped } from "react-typed";

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>web dev applicatin with react</h1>
        <ReactTyped
          className="typed-text"
          strings={[
            "web Design",
            "web Development",
            "Facebook Ads SMM",
            "Google Ads",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
