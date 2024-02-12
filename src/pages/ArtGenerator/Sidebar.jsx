import React from "react";
import "./art-generator.scss";
import ArtModal from "./ArtModal";
import ArtStyles from "./ArtStyles";
import Tool_tip from "@images/icons/tool_tip.svg";
import Dreamshaper from "@images/icons/Dreamshaper.svg";
import Down_arrow from "@images/icons/down_arrow.svg";
import Img_3d from "@images/icons/3d.svg";

export default function Sidebar({
  inputData,
  setInputData,
  updateValueForKey,
}) {
  return (
    <>
      <div className="sidebar_wrapper bg-black mt-2">
        <div className="num_imgs side_setting">
          <span className="tool_lable text-white ">
            Number of Images <img src={Tool_tip} alt="icon" className="ms-1" />
          </span>
          <div>
            <select
              class="form-select form-select-bg-dark"
              aria-label="Default select example"
              disabled
            >
              <option selected> 1</option>
              <option value="1">2</option>
              <option value="2">3</option>
            </select>
          </div>
        </div>
        <div className="models side_setting">
          <span className="tool_lable text-white">
            Models <img src={Tool_tip} alt="icon" className="ms-1" />
          </span>
          <div>
            <button
              type="button"
              className="btn btn-primary d-flex w-100 align-items-center justify-content-between"
              data-bs-toggle="modal"
              data-bs-target="#modalsModel"
            >
              <span className="d-flex align-items-center gap-1">
                <img
                  src={Dreamshaper}
                  className="me-1"
                  alt="icon"
                  height={"30px"}
                />
                Dreamshaper
              </span>
              <img src={Down_arrow} alt="icon" />
            </button>
          </div>
          <ArtModal updateValueForKey={updateValueForKey} />
        </div>
        <div className="art_styles side_setting">
          <span className="tool_lable text-white ">
            Art Styles
            <img src={Tool_tip} alt="icon" className="ms-1" />
          </span>
          <div>
            <button
              type="button"
              className="btn btn-primary d-flex w-100 align-items-center justify-content-between"
              data-bs-toggle="modal"
              data-bs-target="#stylesModel"
            >
              <span className="d-flex align-items-center gap-1">
                <img src={Img_3d} className="me-1" alt="icon" height={"30px"} />
                3D
              </span>
              <img src={Down_arrow} alt="icon" />
            </button>
          </div>
          <ArtStyles updateValueForKey={updateValueForKey} />
        </div>
        <div className="negative_prompt side_setting">
          <span className="tool_lable text-white">
            Negative Prompt <img src={Tool_tip} alt="icon" className="ms-1" />
          </span>
          <div>
            <form action="">
              <textarea
                onChange={(e) =>
                  updateValueForKey("negative_prompt", e.target.value)
                }
                className="text-white"
              ></textarea>
            </form>
          </div>
        </div>
        <div className="CFG_scale side_setting">
          <div className="d-flex align-items-center justify-content-between">
            <span className="tool_lable text-white">
              CFG Scale <img src={Tool_tip} alt="icon" className="ms-1" />
            </span>
            <span className="btn_shape header_icons text-white">7.5</span>
          </div>
          <div>
            <form action="">
              <input
                type="range"
                onChange={(e) => updateValueForKey("cfg_scale", e.target.value)}
                className="w-100"
              />
            </form>
          </div>
        </div>
        <div className="step side_setting">
          <div className="d-flex align-items-center justify-content-between">
            <span className="tool_lable text-white">
              Step
              <img src={Tool_tip} alt="icon" className="ms-1" />
            </span>
            <span className="btn_shape header_icons text-white">30</span>
          </div>
          <div>
            <form action="">
              <input
                type="range"
                onChange={(e) => updateValueForKey("steps", e.target.value)}
                className="w-100"
              />
            </form>
          </div>
        </div>
        <div className="seed side_setting">
          <div className="d-flex align-items-center justify-content-between">
            <span className="tool_lable text-white">
              Seed
              <img src={Tool_tip} alt="icon" className="ms-1" />
            </span>
            <span
              onChange={(e) => {
                if (e.target.value < -1) {
                  updateValueForKey("seed", -1);
                } else {
                  updateValueForKey("seed", e.target.value);
                }
              }}
              className="btn_shape header_icons text-white"
            >
              30
            </span>
          </div>
          <div>
            <form action="">
              <input
                type="text"
                placeholder="Enter a seed"
                className="text-white"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
