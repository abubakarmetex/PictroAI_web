import React, { useState } from "react";
import "./art-generator.scss";
import TopBar from "./TopBar";
import SideBar from "./Sidebar";
import upload_img from "@images/icons/upload.svg";
import axiosWrapper from "../../utils/api";
export default function ImageRemix() {
  const [imageData, setImageData] = useState({
    picture: "",
    styles: "5",
  });

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
    setImageData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const generateImage = async () => {
    const data = handleSetFormData(imageData);
    console.log(textData);
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
              <div class="col-9">
                <div class="main_art_wrapper position-relative">
                  <div class="main_img text-center">
                    <div className="img_upload">
                      <label
                        htmlFor=""
                        for="upload"
                        className="img_upload_lable"
                      >
                        <input
                          type="file"
                          onChange={(e) => {
                            updateValueForKey("picture", e.target.files[0]);
                          }}
                          id="upload"
                          className="d-none"
                        />
                        <img src={upload_img} alt="icon" />
                        <span>Upload Image</span>
                      </label>
                    </div>
                  </div>
                  <div class="generate_form my-5 pt-5">
                    <div class="hero_form">
                      <form action="" class="position-relative">
                        <input
                          type="text"
                          placeholder="A man on mars"
                          class="w-100 p-3"
                        />
                        <button
                          onClick={generateImage}
                          class="btn btn-primary position-absolute"
                        >
                          <i class="bi bi-star-fill"></i>
                          Generate
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <SideBar updateValueForKey={updateValueForKey} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
