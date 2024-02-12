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
          Pictro AI Art Generatoe
        </h4>
        <p>
          Create awe-inspiring masterpieces effortlessly and explore the endless
          possibilities <br />
          of AI generated art. Enter a prompt, choose a style, and watch Imagine{" "}
          <br /> AI art generator bring your ideas to life!
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
