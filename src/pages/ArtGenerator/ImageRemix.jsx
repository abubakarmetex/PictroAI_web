import React, { useState } from "react";
import "./art-generator.scss";
import TopBar from "./TopBar";
import SideBar from "./Sidebar";
import upload_img from "@images/icons/upload.svg";

import axiosWrapper from "../../utils/api";

export default function ImageRemix() {
  const [imageData, setImageData] = useState({
    picture: null,
    styles: "5",
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleSetFormData = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }
    return formData;
  };

  const updateValueForKey = (key, value) => {
    if (key === "picture") {
      const file = value[0];
      setImageData((prevState) => ({
        ...prevState,
        [key]: file,
      }));

      // Create a preview URL for the selected image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImageData((prevState) => ({
        ...prevState,
        [key]: value,
      }));
    }
  };

  const cancelImage = () => {
    // Reset the state and clear the image preview
    setImageData({
      picture: null,
      styles: "5",
    });
    setImagePreview(null);
  };

  const generateImage = async () => {
    const data = handleSetFormData(imageData);
    try {
      const response = await axiosWrapper("post", `/avatar`, data, true, true);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main_wrapper">
        <header className="art_header bg-black">
          <TopBar />
        </header>
        <main>
          <section className="container-fluid token py-0">
            <div className="row h-100">
              <div className="col-9">
                <div className="main_art_wrapper position-relative">
                  <div className="main_img text-center">
                    <div className="img_upload">
                      <label htmlFor="upload" className="img_upload_label">
                        <input
                          type="file"
                          onChange={(e) => {
                            updateValueForKey("picture", e.target.files);
                          }}
                          id="upload"
                          className="d-none"
                        />
                        <img src={upload_img} alt="icon" />
                        <span>Upload Image</span>
                      </label>
                      {imagePreview && (
                        <div className="image-preview-container">
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="uploaded-image-preview"
                          />
                          <button
                            type="button"
                            className="btn-close close-icon"
                            aria-label="Close"
                            onClick={cancelImage}
                          ></button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="generate_form my-5 pt-5">
                    <div className="hero_form">
                      <form
                        action=""
                        className="position-relative"
                        onSubmit={(e) => {
                          e.preventDefault();
                          generateImage();
                        }}
                      >
                        <input
                          type="text"
                          placeholder="A man on mars"
                          className="w-100 p-3"
                        />
                        <button
                          type="submit"
                          className="btn btn-primary position-absolute"
                        >
                          <i className="bi bi-star-fill"></i>
                          Generate
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                {/* <SideBar updateValueForKey={updateValueForKey} /> */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};