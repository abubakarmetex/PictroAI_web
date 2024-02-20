import React, { useState } from "react";
import "./art-generator.scss";
import TopBar from "./TopBar";
import SideBar from "./Sidebar";
import img from "@images/generate_tool_img.png";
import { useSelector } from 'react-redux';
import axiosWrapper from "../../utils/api";
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

export default function FormText() {
    const { userToken } = useSelector((state) => state?.auth);
    const [responseImg,setResponseImgUrl]=useState(img);
    const styles = [
        { value: "3D Model", label: "Pictro Cartoon", icon: img8 },
        { value: "Analog Film", label: "Professional 3D Model", icon: img12 },
        { value: "Anime", label: "Anime Artwork", icon: img10 },
        { value: "Cinematic", label: "Breathtaking", icon: img9 },
        { value: "Comic Book", label: "Fantasy Art", icon: img5 },
        { value: "Craft Clay", label: "Watercolor Anime (default)", icon: img1 },
      ];
    const models = [
        // { name: "Dream", value: "dreamshaper8", icon: Dreamshaper },
        // { name: "", value: "epicDiffusion_epicDiffusion11" },
        {
          name: "Epic Realism",
          value: "epicrealism_pureEvolutionV4",
          icon: art_gen_card3,
        },
        {
          name: "Majic",
          value: "majicmixRealistic_betterV2V25",
          icon: art_gen_card1,
        },
        // { name: "", value: "meinamix_meinaV11" },
        {
          name: "Realistic vision",
          value: "realisticVisionV51_v51VAE",
          icon: art_gen_card7,
        },
      ];  
  const [textData, setTextData] = useState({
    model: "epicrealism_pureEvolutionV4",
    prompt: "man on mars",
    negative_prompt: "none",
    seed: -1,
    styles: "Craft Clay",
    cfg_scale: 1,
    steps: 20,
    width: "512",
    height: "512",
  });

  const updateValueForKey = (key, value) => {
    setTextData((prevState) => ({
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
    try {
      const response = await axiosWrapper("post", `/artgen/`, textData,userToken);
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
              <div class="col-9">
                <div class="main_art_wrapper position-relative">
                  <div class="main_img text-center">
                    <img src={responseImg} alt="img" />
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
                          class="btn btn-primary position-absolute"
                          onClick={generateImage}
                        >
                          <i class="bi bi-star-fill"></i>
                          Generate
                        </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <SideBar
                  updateValueForKey={updateValueForKey}
                  inputData={textData}
                  models={models}
                  styles={styles}
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
