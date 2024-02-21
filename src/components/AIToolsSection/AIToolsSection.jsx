import React from "react";
import img from "@images/art-gen-card1.png";
import img2 from "@images/art-gen-card2.png";
import img3 from "@images/art-gen-card3.png";
import img4 from "@images/art-gen-card4.png";
import img5 from "@images/art-gen-card5.png";
import img6 from "@images/art-gen-card6.png";

const AIToolsSection = () => {
  const toolsData = [
    {
      title: "Text to Image",
      description: "Transform your words into stunning AI arts.",
      imageSrc: img,
    },
    {
      title: "Image Anime",
      description: "Enhance your images using advanced AI algorithms.",
      imageSrc: img2,
    },
    {
      title: "Image to Cartoon",
      description: "Transform your words into stunning AI arts.",
      imageSrc: img3,
    },
    {
      title: "Image to Disney",
      description: "Transform your words into stunning AI arts.",
      imageSrc: img4,
    },
    {
      title: "Image to Avatar",
      description: "Transform your words into stunning AI arts.",
      imageSrc: img5,
    },
    {
      title: "Image Enhancer",
      description: "Transform your words into stunning AI arts.",
      imageSrc: img6,
    },
  ];

  return (
    <section className="AI_tools_cards container-fluid">
      <div className="container container_custom">
        <div className="row gy-4">
          <div className="col-12">
            <span className="short_heading text-white">Discover our new</span>
            <h2 className="text-white">AI Tools</h2>
            <p className="text-white mb-4">
              Explore Our AI Image Generator Tools for Creating Captivating AI
              Generated Art. Explore a world of infinite inspiration and take
              your artworks to new heights with our AI image generator tools.
            </p>
          </div>
          {toolsData.map((tool, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="al_card m-auto bg_primary">
                <div className="card_image">
                  <img
                    src={tool.imageSrc}
                    alt={`card img ${index + 1}`}
                    className="mb-2"
                    width="100%"
                  />
                </div>
                <div className="card_content">
                  <h3 className="text-white">{tool.title}</h3>
                  <p className="text-white">{tool.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
