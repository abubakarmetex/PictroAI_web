import React, { useState } from "react";
import "./art-generator.scss";
import TopBar from "./TopBar";
import SideBar from "./Sidebar";
import img from "@images/generate_tool_img.png";
import axiosWrapper from "../../utils/api";
export default function FormText() {
  const [textData, setTextData] = useState({
    model: "",
    prompt: "",
    negative_prompt: "",
    seed: "",
    styles: "5",
    cfg_scale: "",
    steps: "",
    width: "512",
    height: "512",
  });

  const updateValueForKey = (key, value) => {
    setInputData((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSetFormData = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        formData.append(key, data[key]);
      }
    }

    return formData;
  };

  const generateImage = async () => {
    const data = handleSetFormData(textData);
    console.log(textData);
    try {
      const response = await axiosWrapper("post", `/artgen/`, data, true, true);
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
                    <img src={img} alt="img" />
                  </div>
                  <div class="generate_form my-5 pt-5">
                    <div class="hero_form">
                      <form action="" class="position-relative">
                        <input
                          type="text"
                          placeholder="A man on mars"
                          class="w-100 p-3"
                          onChange={(e) =>
                            updateValueForKey("prompt", e.target.value)
                          }
                        />
                        <button
                          class="btn btn-primary position-absolute"
                          onClick={generateImage}
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
                <SideBar
                  updateValueForKey={updateValueForKey}
                  inputData={textData}
                  setInputData={setTextData}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
