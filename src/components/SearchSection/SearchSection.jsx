import React from "react";
import { Container, Form } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./SearchSection.scss";

const SearchSection = () => {
  return (
    <div>
      <div className="search-section">
        <h4>
          Text to Art Generation with <br />
          Pictro AI Art Generator
        </h4>
        <p>
        Unleash your creativity effortlessly and unlock the boundless potential of AI-generated art! <br />
        Simply input your inspiration, select a style, and witness Imagine AI Art Generator {" "}
          <br />breathe life into your visions turning them into awe-inspiring masterpieces!
        </p>
        <div className="gen-btn mt-3">
          <div className="w-100">
            <Form.Control type="text" placeholder="A man on mars" />
          </div>
            <Link to="from-text">
            <button> Generate</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
