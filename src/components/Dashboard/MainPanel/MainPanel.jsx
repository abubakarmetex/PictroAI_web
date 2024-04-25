import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import img from "@images/art-gen-card1.png";
import img2 from "@images/art-gen-card2.png";
import img3 from "@images/art-gen-card3.png";
import img4 from "@images/art-gen-card4.png";
import img5 from "@images/art-gen-card5.png";
import img6 from "@images/art-gen-card6.png";
import text_to_img from "@images/text_to_image.mp4";
import "./mainpanel.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  collapseSidebar,
  toggleAutoCollapse,
} from "@redux/theme/theme_slice.js";
import {Link} from "react-router-dom";
const MainPanel = (props) => {
  const toolsData = [
    {
      title: "Text to Image",
      description: "Transform your words into stunning AI arts.",
      imageSrc: img,
      linkTo:"/from-text"
    },
    {
      title: "Image Enhancer",
      description: "Enhance your images using advanced AI algorithms.",
      imageSrc: img2,
      linkTo:"/image-remix"
    },
    {
      title: "Image to Cartoon",
      description: "Transform your words into stunning AI arts.",
      imageSrc: img3,
      linkTo:"/image-remix"
    },
    {
      title: "Image to Disney",
      description: "Transform your words into stunning AI arts.",
      imageSrc: img4,
      linkTo:"/image-remix"
    },
    {
      title: "Image to Avatar",
      description: "Transform your words into stunning AI arts.",
      imageSrc: img5,
      linkTo:"/image-remix"
    },
    {
      title: "Image Enhancer",
      description: "Transform your words into stunning AI arts.",
      imageSrc: img6,
      linkTo:"/image-remix"
    },
  ];
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.theme.collapsed);
  const autoCollapsed = useSelector((state) => state.theme.autoCollapsed);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        dispatch(collapseSidebar(true));
        dispatch(toggleAutoCollapse(true));
        return;
      }
      dispatch(collapseSidebar(false));
      dispatch(toggleAutoCollapse(false));
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial setup

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);
  return (
    <>
      <section className="container-fluid container_dashbord pb-0 pt-5 d-md-block d-none">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-4">
            {/* Content views will be rendered here */}
            {props.children}
            <Sidebar />
          </div>
          <div className="col-lg-9 col-md-8 col-8">
            <div className="main_body_content">
              <Link to="/from-text" className="generate_img_sec d-block">
              <video src={text_to_img} muted={true} loop={true} autoPlay={true} width="100%" className="rounded-2"></video>
                <div className="card_content mt-3">
                  <h3 className="text-white">Text to image</h3>
                  <p className="text-white">
                    Transform your words into stunning AI Arts
                  </p>
                </div>
              </Link>
              <div className="dashbord_card_sec mt-5 row">
                <div className="col-12">
                  <h2 className="text-white">AI Tools</h2>
                </div>
                <div className="row gy-4 mt-0">
                  {toolsData.map((tool, index) => (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div className="al_card m-auto bg_primary">
                        <Link to={tool.linkTo}>
                        <div className="card_image">
                          <img
                            src={tool.imageSrc}
                            alt={`card img ${index + 1}`}
                            className="mb-2"
                            width="100%"
                          />
                        </div>
                        </Link>
                        <div className="card_content">
                          <h3 className="text-white">{tool.title}</h3>
                          <p className="text-white">{tool.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Add more cards as needed */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="d-md-none d-flex mobile_msg">
        <p className="text-white text-center">
          Pictro AI web is only available on desktop.
        </p>
      </div>
    </>
  );
};
export default MainPanel;
