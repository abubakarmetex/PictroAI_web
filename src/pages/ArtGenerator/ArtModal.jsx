import React, { useState } from "react";
import "./art-generator.scss";
import premium_icon from "/src/assets/icons/crown.png";

export default function ArtModal({ models, updateValueForKey }) {
  const [selectedModels, setSelectedModels] = useState([]);

  const handleSelectModel = (value, premium) => {
    // Only allow selection if the model is not premium or if it's already selected
    if (!premium || selectedModels.includes(value)) {
      updateValueForKey("model", value);
    }
  };
  
  return (
    <>
      <div
        className="modal fade art_modal"
        id="modalsModel"
        tabIndex="-1"
        aria-labelledby="modalsModelLabel"
        aria-hidden="true"
      >
        <div className=" modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalsModelLabel">
                Models
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
                  <input
                    type="text"
                    placeholder="Search"
                    className="text-white"
                  />
                </form>
              </div>
              <div className="model_cards">
                <div className="model_cards_wrapper">
                  <div className="row g-1">
                    {models?.map((model, index) => (
                      <div
                        onClick={() => {
                          handleSelectModel(model?.value);
                        }}
                        key={index + "--models"}
                        className="col-4 cursor-pointer position-relative"
                        data-bs-dismiss="modal"
                      >
                        <img
                          src={model?.icon}
                          className="w-100"
                          alt="search"
                        />
                        {/* Render premium icon if the model is premium and not selected */}
                        {model.premium && !selectedModels.includes(model.value) && (
                          <img
                            src={premium_icon}
                            className="icon-overlay"
                            alt="premium"
                          />
                        )}
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
