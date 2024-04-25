import React, { useState } from "react";
import "./art-generator.scss";

export default function ArtModal({models, updateValueForKey }) {
  

  const handleSelectModel = (value) => {
    updateValueForKey("model",value)
  };

  return (
    <>
      <div
        className="modal fade art_modal"
        id="modalsModel"
        tabindex="-1"
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
                        className="col-4 cursor-pointer"
                        data-bs-dismiss="modal" 
                      >
                        <img
                          src={model?.icon}
                          className="w-100 "
                          alt="search"
                        />
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
