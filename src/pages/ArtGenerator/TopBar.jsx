import React from 'react'
import './art-generator.scss';
import arrow_left from "@images/icons/arrow_left.svg";
import text_edit_img from "@images/icons/text_edit.svg";
import img_remix from "@images/icons/img_remix.svg";
import Mode_img from "@images/icons/mode.svg";
import Star_img from "@images/icons/star.svg";
import {Link} from "react-router-dom";
export default function TopBar() {
  return (
    <>
     <nav class="container-fluid container_dashbord">
      <div class="d-flex justify-content-between align-items-center">
        <div class="back_arrow">
          <Link to="/dashboard"><img src={arrow_left} class="header_icons" alt="icon"/></Link>
        </div>
        <div class="tools_icon d-flex align-items-center gap-4">
          <Link to="/from-text"><img src={text_edit_img} class="header_icons" alt="icon"/></Link>
          <Link to="/image-remix"><img src={img_remix} class="header_icons" alt="icon"/></Link>
        </div>
        <div class="upgrade_token d-flex align-items-center gap-4">
          <Link to=""><img src={Mode_img} class="header_icons" alt="icon"/></Link>
          <Link to="" class="header_icons text-white">0 <img src={Star_img} alt="icon" class="ms-1"/></Link>
          <Link to="" class="btn btn-primary upgrade_btn_token d-flex align-items-center gap-2 justify-content-center">
            Upgrade</Link>
        </div>
      </div>
    </nav>
    </>
  )
}