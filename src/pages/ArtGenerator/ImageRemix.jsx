import React, { useState, useEffect } from "react";
import "./art-generator.scss";
import TopBar from "./TopBar";
import SideBar2 from "./Sidebar2";
import upload_img from "@images/icons/upload.svg";
import axiosWrapper from "../../utils/api";
import { useSelector } from 'react-redux';
import art_gen_card1 from "@images/model1.svg";
import art_gen_card2 from "@images/model2.svg";
import art_gen_card3 from "@images/model3.svg";
import art_gen_card4 from "@images/model4.svg";
import art_gen_card5 from "@images/model5.svg";
import art_gen_card6 from "@images/model6.svg";
import art_gen_card7 from "@images/model7.svg";
import art_gen_card8 from "@images/model8.svg";
import art_gen_card9 from "@images/model9.svg";
import Dreamshaper from "@images/icons/Dreamshaper.svg";
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

export default function ImageRemix() {
  const { userToken } = useSelector((state) => state?.auth);
  const [responseImg,setResponseImgUrl]=useState(null);
  const [loading, setLoading] = useState(false);

  const styles = [
    { value: 0, label: "Pictro Cartoon", icon: img8 },
    { value: 1, label: "Professional 3D Model", icon: img12 },
    { value: 2, label: "Anime Artwork", icon: img10 },
    { value: 3, label: "Breathtaking", icon: img9 },
    { value: 4, label: "Fantasy Art", icon: img5 },
    { value: 5, label: "Watercolor Anime (default)", icon: img1 },
  ]; 
  const [textData, setTextData] = useState({
  imageData: null ,
  styles: 1,
  });

  const updateValueForKey = (key, value) => {
  setTextData((prevState) => ({
    ...prevState,
    [key]: value,
  }));
  };

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
  const updatValueForKey = (key, value) => {
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
        // Update the textData state to include the image data
        setTextData((prevState) => ({
          ...prevState,
          imageData: file // Update imageData with the selected file
        }));
  
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
    setResponseImgUrl(null);
  };

  const generateImage = async () => {
    const formData = new FormData();
    setLoading(true);
    
    // Ensure that textData.imageData contains the file object for the image
    if (textData.imageData instanceof File) {

      console.log("Before setting in the form"+textData.imageData)
      // Append the image file to formData under the key "picture"
      formData.append("picture", textData.imageData);
    } else {
      // Log an error or handle the case where the image data is missing
      console.error("No image data available to upload.");
      return; // Exit the function if no image data is available
    }
  
    // Append other data to formData
    formData.append("style", parseInt(textData.styles)); // Ensure styles is a string if it's not already
    

    try {
      // Make the API call with formData. Adjust the axiosWrapper call as needed.
      const response = await axiosWrapper("post", `/avatar/`, formData,userToken,true);
      
  
      const newImageUrl = response.image_url;
      setResponseImgUrl(newImageUrl);
      setImagePreview(newImageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    }finally {
      setLoading(false); // Set loading state to false when request completes (success or failure)
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
                            updatValueForKey("picture", e.target.files);
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


                        {responseImg && (
                        <a
                          href={responseImg}
                          download="generated-image.jpg"
                          className="btn btn-primary download_btn"
                        >
                          Download
                        </a>)}
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
                  <div class="generate_form my-5 pt-5">
                    <div class="hero_form">
                        <input
                          type="text"
                          placeholder="A man on mars"
                          class="w-100 p-3"
                          onChange={(e) =>
                            updateValueForKey("prompt", e.target.value)
                          }
                        />
                    <button
                      className="btn btn-primary position-absolute"
                    onClick={generateImage}
                    disabled={!imageData.picture || loading} // Disable button when no image selected or loading is true
                    >
                  <i className="bi bi-star-fill"></i>
                  Generate
                </button>
                      {loading && <div className="loading-spinner"></div>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <SideBar2 updateValueForKey={updateValueForKey}
                inputData={textData}
                  styles={styles} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
