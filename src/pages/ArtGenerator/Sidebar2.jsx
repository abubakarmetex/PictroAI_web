import React from "react";
import "./art-generator.scss";
import ArtModal from "./ArtModal";
import ArtStyles from "./ArtStyles";
import Tool_tip from "@images/icons/tool_tip.svg";
import Dreamshaper from "@images/icons/Dreamshaper.svg";
import Down_arrow from "@images/icons/down_arrow.svg";
import Img_3d from "@images/icons/3d.svg";

export default function Sidebar2({
  styles,
  inputData,
  setInputData,
  updateValueForKey,
}) {
  // const model=models.filter(m=>m.value===inputData.model)[0]; 
  const style=styles.filter(s=>s.value===inputData.styles)[0];
  return (
    <>
      <div className="sidebar_wrapper bg-black mt-2">
       
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
                <img src={style.icon} className="me-1" alt="icon" height={"30px"} />
                {style.label}
              </span>
              <img src={Down_arrow} alt="icon" />
            </button>
          </div>
          <ArtStyles styles={styles} updateValueForKey={updateValueForKey} />
        </div>
      </div>
    </>
  );
}
