import React, { useState } from "react";
import "./art-generator.scss";
import TopBar from "./TopBar";
import SideBar2 from "./Sidebar2";
import upload_img from "@images/icons/upload.svg";
import axiosWrapper from "../../utils/api";

export default function ImageRemix() {
  const [imageData, setImageData] = useState({
    picture: null,
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleSetFormData = async () => {
    const formData = new FormData();
    
    // Append only the image to the form data
    formData.append("picture", imageData.picture);

    return formData;
  };

  const updateValueForKey = (key, value) => {
    if (key === "picture") {
      const file = value[0];

      // Basic validation to ensure the selected file is an image
      if (file && file.type.startsWith("image/")) {
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
        // Handle non-image file selection (e.g., display an error message)
        console.log("Please select a valid image file.");
      }
    }
  };

  const cancelImage = () => {
    // Reset the state and clear the image preview
    setImageData({
      picture: null,
    });
    setImagePreview(null);
  };

  const generateImage = async () => {
    const data = handleSetFormData();
    try {
      // Include your API endpoint for image generation
      const response = await axiosWrapper("post", `/api/v1/avatar/`, data, true, true);
      console.log(response);

      // Assuming the response includes the generated image URL
      // Update the image preview with the generated image
      setResponseImgUrl(response.image_url);
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
                            style={{
                              maxWidth: "538.06px",
                              maxHeight: "284.69px",
                            }}
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
                {/* <SideBar2 updateValueForKey={updateValueForKey} /> */}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
