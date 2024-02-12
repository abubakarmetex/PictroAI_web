import React from "react";
import "./art-generator.scss";
import img1 from "@images/style1.svg";
import img2 from "@images/style2.svg";
import img3 from "@images/style3.svg";
import img4 from "@images/style4.svg";
import img5 from "@images/style5.svg";
import img6 from "@images/style6.svg";
import img7 from "@images/style7.svg";
import img8 from "@images/style8.svg";
import img9 from "@images/style9.svg";
import img10 from "@images/style10.svg";
import img11 from "@images/style11.svg";
import img12 from "@images/style12.svg";
export default function ArtStyles({ updateValueForKey }) {
  const stylesList = [
    { value: 0, label: "Pictro Cartoon", icon: img8 },
    { value: 1, label: "Professional 3D Model", icon: img12 },
    { value: 2, label: "Anime Artwork", icon: img10 },
    { value: 3, label: "Breathtaking", icon: img9 },
    { value: 4, label: "Fantasy Art", icon: img5 },
    { value: 5, label: "Watercolor Anime (default)", icon: img1 },
  ];

  return (
    <>
      <div
        className="modal fade art_modal"
        id="stylesModel"
        tabindex="-1"
        aria-labelledby="stylesModelLabel"
        aria-hidden="true"
      >
        <div className=" modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="stylesModelLabel">
                Art Styles
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="model_search_form">
                <form action="">
                  <input type="text" placeholder="Search" />
                </form>
              </div>
              <div className="model_cards">
                <div className="model_cards_wrapper">
                  <div className="row g-1">
                    {stylesList?.map((style, index) => (
                      <div
                        onClick={() => updateValueForKey("styles", style.value)}
                        key={index + "--styles"}
                        className="col-4 cursor-pointer"
                      >
                        <img src={style?.icon} className="w-100" alt="search" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
